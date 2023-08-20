import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Cart from './Cart';
import Chat from './Chat';

import avatar from '../data/avatar.jpg';
import NavButton from './NavButton';
import { useStateContext } from '../contexts/ContextProvider';
import UserProfile from './UserProfile';
import Notification from './Notification';


const Navbar = () => {
  const {activeMenu,screenSize, setScreenSize ,setActiveMenu ,isClicked, setIsClicked,handleClick,  currentColor  } = useStateContext()
  
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton customFunc={() =>setActiveMenu((prev)=> !prev)} icon={<AiOutlineMenu/>}  title={'menu'} color={'blue'}/>

      <div className="flex">
      <NavButton customFunc={() =>{handleClick('cart')}} icon={<FiShoppingCart/>} dotColor={'red'} title={'Cart'} color={currentColor}/>
      <NavButton title="Chat" color={currentColor} dotColor={'red'} customFunc={() => {handleClick('chat')}}  icon={<BsChatLeft />} />
      <NavButton title="Notification" color={currentColor} dotColor="red"  customFunc={() => {handleClick('notification')}}  icon={<RiNotification3Line />} />
      <TooltipComponent
      content={"profile"}
      position="BottomCenter"
      >
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-full"
        onClick={() => {handleClick('userProfile')}}
        >
          <img className='rounded-full w-8 h-8' src={avatar} />
          <p>
            <span className='text-gray-400 font-bold ml-1 text-14'>
                  chedly
            </span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 font-bold ml-1 text-14' />
        </div>

      </TooltipComponent>
      {
        isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/> }
        {isClicked.userProfile && <UserProfile/> }
        {isClicked.notification && <Notification/> }
    </div>
    </div>
  )
}

export default Navbar
