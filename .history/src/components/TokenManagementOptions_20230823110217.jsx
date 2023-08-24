import React from 'react'

const TokenManagementOptions = ({ title, text, buttonText, handleClick }) => {
  return (
    <>
      <div className="token-management-options__title">
        {title}
      </div>
      <p className="token-management-options__text">
        {text}
      </p>
      <button className='token-management-options__button' onClick={handleClick}>
        {buttonText}
      </button>
    </>
  )
}

export default TokenManagementOptions
