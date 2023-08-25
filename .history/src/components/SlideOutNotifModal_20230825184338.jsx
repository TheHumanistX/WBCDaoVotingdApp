import ReactDOM from 'react-dom';

const TwoLineModal = ({ topText, bottomText, isOpen, onClose }) => {
    if (!isOpen) return null

    return ReactDOM.createPortal(
        <>
        </>
    )
}

const OneLineModal = ({ topText, isOpen, onClose }) => {
    if (!isOpen) return null

    return ReactDOM.createPortal(
        <>
        </>
    )
}

const SlideOutNotifModal = () => {
  return ReactDOM.createPortal(
    <>
      <div className="slide-out-modal__overlay" />
        <div className='slide-out-modal__flex'>
            <div className="slide-out-modal__top-text">

            </div>
            <div className="slide-out-modal__bottom-text">

            </div>
        </div>
            
    </>, document.getElementById('portal')
  )
}

export default SlideOutNotifModal
