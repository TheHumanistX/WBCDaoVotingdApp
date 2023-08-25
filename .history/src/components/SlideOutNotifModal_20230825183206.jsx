import ReactDOM from 'react-dom';

const SlideOutNotifModal = () => {
  return ReactDOM.createPortal(
    <>
      <div className="slide-out-modal__overlay" />
        <div className='slide-out-modal__flex'>
            
        </div>
            
    </>, document.getElementById('portal')
  )
}

export default SlideOutNotifModal
