import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck, BsX } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { BiX, BiXCircle } from 'react-icons/bi';
import { HiX } from 'react-icons/hi';

const ThemeSettings = () => {
  const { setColor, setMode, setCurrentColor,currentMode, currentColor, setThemeSettings } = useStateContext();
  return (
    <div className="bg-black transition duration-300 ease-in-out bg-opacity-70 w-screen fixed nav-item top-0 right-0">
    <div className="float-right h-screen   bg-white  w-400">
      <div className="flex justify-between items-center p-4 ml-4  ">
        <p className='font-semibold text-xl'>Theme Colors</p>
        <button
        type='button'
        onClick={()=>{setThemeSettings(false);
        
        }}
        
        className='rounded-md  text-2xl p-1
        hover:drop-shadow-xl
        hover:bg-light-gray
        transition duration-300 ease-in-out'  
        >
          <BiXCircle size={32}/>
          
        </button>  
      </div>
      
      
        
      <div className="flex-col border-t-2 border-color p-4 mt-1 ml-4">
        
        <div className="flex gap-3 ">
          {themeColors.map((item,index)=>(
            <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
              <button 
              type='button'
              onClick={()=>setCurrentColor(item.color)}
              className={`rounded-full w-8 h-8 ${item.color} hover:drop-shadow-xl`}
              style={{backgroundColor:item.color}}
              >
                <BsCheck className={`ml-1 text-2xl text-white ${item.color === currentColor ? 'block' :'hidden'}`}/>
                
              </button>
            </div>
          ))}
          </div>
      </div>

      </div>
    </div>
  )
}

export default ThemeSettings
