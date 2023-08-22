import React from 'react'

const TokenManagementOptions = ({ title, text, buttonText }) => {
  return (
    <div className='token-management-options__flex'>
      <div className="token-management-options__title">
        {title}
      </div>
      <p className="token-management-options__text">
        {text}
      </p>
      <button className='token-management-options__button'>
        {buttonText}
      </button>
    </div>
  )
}

export default TokenManagementOptions
