import { useEffect } from 'react';
import ReactDOM from 'react-dom';

// ! Possible to create link to console so it opens to show error info?

const CombinedModal = ({ topText, bottomText }) => {
    const topTextClass = bottomText ? "slide-out-modal__top-text" : "slide-out-modal__top-text one-line-modal";

    return (
        <>
            <div className='slide-out-modal__flex'>
                <div className={topTextClass}>
                    {topText}
                </div>
                {bottomText && (
                    <div className="slide-out-modal__bottom-text">
                        {bottomText}
                    </div>
                )}
            </div>
        </>
    );
};

const SlideOutNotifModal = ({ topText, bottomText, isOpen, setIsOpen }) => {

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setIsOpen(false)
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, setIsOpen]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <>
            <div className="slide-out-modal__overlay" />
            <CombinedModal
                topText={topText}
                bottomText={bottomText}
            />
        </>, document.getElementById('portal')
    );
};

export default SlideOutNotifModal;
