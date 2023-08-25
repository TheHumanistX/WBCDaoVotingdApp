import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const TwoLineModal = ({ topText, bottomText }) => {



    //  TODO: See if we can create one Modal component here instead of TwoLineModal and OneLineModal
    //  TODO: Just need to pass `args` maybe? And then if `args` is null, then don't render the bottomText... Maybe. Will see... 

    return (
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

const OneLineModal = ({ topText }) => {

    //  TODO: See if we can create one Modal component here instead of TwoLineModal and OneLineModal
    //  TODO: Just need to pass `args` maybe? And then if `args` is null, then don't render the bottomText... Maybe. Will see... 

    return (
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

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setIsOpen(false)
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [setIsOpen]);

    if (!isOpen) return null

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
