import ReactDOM from 'react-dom';

const TwoLineModal = ({ topText, bottomText, isOpen, setIsOpen }) => {
    if (!isOpen) return null

    useEffect(() => {
        const timer = setTimeout(() => {

        }, 3000)
    }, [])

    return ReactDOM.createPortal(
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
    if (!isOpen) return null

    return ReactDOM.createPortal(
        <>
            <div className='slide-out-modal__flex'>
                <div className="slide-out-modal__top-text">

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
