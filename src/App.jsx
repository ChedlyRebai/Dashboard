
import React, { useEffect ,useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { useStateContext } from './contexts/ContextProvider';
import Ecommerce from './pages/Ecommerce';
import Orders from './pages/Orders';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import './App.css'
import './index.css'
import Calendar from './pages/Calendar';
import ThemeSettings from './components/ThemeSettings';
function App() {
 // const [activeMenu,setActiveMenu] = useState(false)
 const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
   return (
    <div className={currentMode === 'Dark' ? 'dark' : '' }>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg ">
          <div className="fixed right-4 bottom-4 " >
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() =>{setThemeSettings(true)}}
                style={{ backgroundColor: currentColor }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray  rounded-full"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar/>
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar/>
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
          
            {themeSettings && (<ThemeSettings />)}

            
            <div >
              
              <Routes>
                <Route path="/" element={<Ecommerce/>} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/calendar" element={<Calendar/>} />
                <Route path="/editor" element={<Editor/>} />
                <Route path="*" element={<h1>Not Found</h1>} />
              </Routes>
            </div>
            
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;