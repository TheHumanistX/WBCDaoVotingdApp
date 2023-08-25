import ReactDOM from 'react-dom';

const TwoLineModal = ({ topText, bottomText, isOpen, onClose }) => {
    if (!isOpen) return null

    return ReactDOM.createPortal(
        <>
        <div className='slide-out-modal__flex'>
            <div className="slide-out-modal__top-text">

            </div>
            <div className="slide-out-modal__bottom-text">

            </div>
        </div>
        </>
    )
}

const OneLineModal = ({ topText, isOpen, onClose }) => {
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

const SlideOutNotifModal = () => {
  return ReactDOM.createPortal(
    <>
      <div className="slide-out-modal__overlay" />
        
            
    </>, document.getElementById('portal')
  )
}

export default SlideOutNotifModal
