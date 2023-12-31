import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { SiShopware } from 'react-icons/si';
import { Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import { links } from '../data/dummy';
const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700  hover:bg-light-gray m-2';
  
  const handleCloseSideBar = () => {
    if(activeMenu && screenSize<= 900){
      setActiveMenu(false)
    }
  }
  return (
    <div 
    className='ml-3 
    h-screen 
    md:overflow-hidden 
    overflow-auto md:hover:overflow-auto pb-10
    '> 
      {
        activeMenu && (
          <>
          <div className="flex justify-between items-center">
            {/* add dark:text-white to classes  */}
            <Link to="/" onClick={()=>{
              handleCloseSideBar()
            }}
            className='items-center flex justify-center gap-2 mt-4 text-xl font-extrabold
            tracking-tight text-slate-900'
            >            
              <SiShopware/>
              <span>DEPANINI</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className="mt-10">
            {links.map((item,i)=>(
              <div key={i} className="text-gray-600 m-3 mt-4 uppercase ">
                <p className='text-gray-600 m-3 mt-4 uppercase cursor-pointer'>
                {item.title}
                </p>
                {item.links.map((link,j)=>(
                 <NavLink
                 to={`/${link.name}`}
                 key={j}
                 onClick={handleCloseSideBar}
                 style={({ isActive }) => ({
                   backgroundColor: isActive ? currentColor : '',
                 })}
                 className={({ isActive }) => (isActive ? activeLink : normalLink)}
               >
                 {link.icon}
                 <span className="capitalize ">{link.name}</span>
               </NavLink>
                ))}          
              </div>
            ))}
          </div>
          </>
        )
      }
    </div>
  )
}

export default Sidebar


