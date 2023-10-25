
import React from "react";
import Input from "./Input";
import Colorblock from "./Colorblock";
import { useState } from "react";


function App() {

  const [colorValue, setColorValue] = useState('')

  const [colorHex, setColorHex] = useState('')

  const [isDark, setIsDark] = useState('true')
  return (
    <div className="App">
     <div className='content'>
        <Colorblock
           colorValue={colorValue}
           colorHex={colorHex}
           isDark={isDark}
        />
        <Input 
          colorValue={colorValue}
          isDark={isDark}
          setColorValue={setColorValue}
          setColorHex={setColorHex}
          setIsDark={setIsDark}
        />
        
      </div>
    </div>
  );
}

export default App;
