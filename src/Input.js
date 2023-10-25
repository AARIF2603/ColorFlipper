import React from 'react'
import colorNames from 'colornames'

const Input = ({colorValue,colorHex,isDark,setColorValue,setColorHex,setIsDark}) => {
  return (
    <div>
        <form action="" onSubmit={(e)=>e.preventDefault()}>
            <input 
              id='colorsearch' 
              type="text"
              placeholder='Search color...'
              value={colorValue}
              onChange={(e)=>{
                setColorValue(e.target.value);
                setColorHex(colorNames(e.target.value));
              }}
            />
            <div>
              <button 
                type='button'
                onClick={(e)=>{setIsDark(!isDark)}}
              >Toggle Text color</button>
            </div>
            
        </form>
        
    </div>
  )
}

export default Input