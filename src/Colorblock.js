import React from 'react'

const Colorblock = ({colorValue,colorHex,isDark}) => {
  return (
    <div className='colorblock'
      style={{backgroundColor:colorValue, color: isDark? "#000" : "#fff"}} >
        <p>{colorValue ? colorValue : "Empty"}</p>
        <p>{colorHex ? colorHex : null}</p>  
    </div>
  )
}
Colorblock.defaultProps={
  colorValue :"Empty color value"
}
export default Colorblock