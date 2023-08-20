import React from 'react'

const Button = ({bgColor,color,size,text,borderRaduis}) => {
  return (
    <button 
    type='button'
    style={{backgroundColor : bgColor , color : color , fontSize : size , borderRadius : borderRaduis}}
    className={`text-${size}`}
   >
    {text}
      
    </button>
  )
}

export default Button
