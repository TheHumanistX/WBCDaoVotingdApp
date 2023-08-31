import { useEffect } from 'react';
import ReactDOM from 'react-dom';

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
            <CombinedModal
                topText={topText}
                bottomText={bottomText}
                isOpen={isOpen}
            />
        </>, document.getElementById('portal')
    );
};

export default SlideOutNotifModal;
