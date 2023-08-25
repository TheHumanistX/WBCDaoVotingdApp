import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const TwoLineModal = ({ topText, bottomText, isOpen, setIsOpen }) => {
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(false)
        }, 3000);
        return () => clearTimeout(timer);
    }, [setIsOpen]);
    
    if (!isOpen) return null

    //  TODO: Add a useEffect() to close the modal after 3 seconds, `setIsOpen` was `onClose` before. 
    //  TODO: Not sure that matters but just reminding you that it was set to that originally.

    return(
        <>
            <div className='slide-out-modal__flex'>
                <div className="slide-out-modal__top-text">
                    {topText}
                </div>
                <div className="slide-out-modal__bottom-text">
                    {bottomText}
                </div>
            </div>
        </>
    )
}

const OneLineModal = ({ topText, isOpen, setIsOpen }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(false)
        }, 3000);
        return () => clearTimeout(timer);
    }, [setIsOpen]);

    if (!isOpen) return null

    //  TODO: Add a useEffect() to close the modal after 3 seconds, `setIsOpen` was `onClose` before. 
    //  TODO: Not sure that matters but just reminding you that it was set to that originally.

    return(
        <>
            <div className='slide-out-modal__flex'>
                <div className="slide-out-modal__top-text">
                    {topText}
                </div>
            </div>
        </>
    )
}

const SlideOutNotifModal = ({ topText, bottomText, isOpen, setIsOpen }) => {
    return ReactDOM.createPortal(
        <>
            <div className="slide-out-modal__overlay" />
            {!bottomText ? (
                <OneLineModal
                    topText={topText}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            )
                :
                (
                    <TwoLineModal
                        topText={topText}
                        bottomText={bottomText}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                )

            }

        </>, document.getElementById('portal')
    )
}

export default SlideOutNotifModal
