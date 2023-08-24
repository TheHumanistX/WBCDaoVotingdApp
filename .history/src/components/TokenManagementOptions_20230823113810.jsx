import React from 'react'

const TokenManagementOptions = ({ title, text, buttonText, enableButtonCheck, handleClick }) => {
  return (
    <>
      <div className="token-management-options__title">
        {title}
      </div>
      <p className="token-management-options__text">
        {text}
      </p>
      {enableButtonCheck ? (
        <button className='token-management-options__button' onClick={handleClick}>
          {buttonText}
        </button>
      )
        :
        (
          <button className='token-management-options__button' onClick={handleClick} disabled>
            {buttonText}
          </button>
        )
      }
    </>
  )
}

export default TokenManagementOptions
