import React from 'react'

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button 
      className={`flex justify-center items-center
      gap-2 px-7 py-4 border font-montserrat text-lg
      leading-none hover:scale-110 duration-500
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : 'bg-coral-red text-white border-coral-red'
        } rounded-full ${fullWidth && 'w-full'}'}`}>
        {label} 
        {iconURL && <img src={iconURL} alt="arrow-icon"
        className='ml-2 rounded-full 
        w-5 h-5' />}
    </button>
  )
}

export default Button
