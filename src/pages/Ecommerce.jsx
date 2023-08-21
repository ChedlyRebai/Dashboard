 import React ,{useState} from 'react';
// import { BsCurrencyDollar } from 'react-icons/bs';

// import { IoIosMore } from 'react-icons/io';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { BsCurrencyDollar, BsDot } from "react-icons/bs"
import  Button  from '../components/Button';
import { SparklineComponent } from '@syncfusion/ej2-react-charts';

import Stat from "../components/Stat";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import  SparkLine  from "../components/Charts/SparkLine";
import { SparklineAreaData } from "../data/dummy";
import LineChart from '../components/Charts/LineChart';
import { useStateContext } from '../contexts/ContextProvider';
// import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
// import { useStateContext } from '../contexts/ContextProvider';
// import product9 from '../data/product9.jpg';

const Ecommerce = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const dataSource = [
    { x: 0, xval: '2005', yval: 20090440 },
    { x: 1, xval: '2006', yval: 20264080 },
    { x: 2, xval: '2007', yval: 20434180 },
    { x: 3, xval: '2008', yval: 21007310 },
    { x: 4, xval: '2009', yval: 21262640 },
    { x: 5, xval: '2010', yval: 21515750 },
    { x: 6, xval: '2011', yval: 21766710 },
    { x: 7, xval: '2012', yval: 22015580 },
    { x: 8, xval: '2013', yval: 22262500 },
    { x: 9, xval: '2014', yval: 22507620 },
  ];

  
  return (
     <div className="w-full  h-screen bg-gray-50">
      <div className="flex flex-wrap lg:flex-nowrap justify-center w-full">
        <div className="bg-gray dark:text-gray-200 dark:bg-secondary-dark-bg  rounded-xl w-full  p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
           <Stat/>
        </div>
      </div>

      <div className="flex gap-10 flex-wrap    mt-1 w-full  ">
          <div className="bg-white sm:mx-3 dark:text-gray-200 dark:bg-secondary-dark-bg sm:m-3 sm:p-4 rounded-2xl  w-full">
            <div className="flex justify-between items-center"> 
              <p className="font-semibold text-xl">Revenus</p>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                  <span className="w-10 text-gray-600"><BsDot size={50} /> </span>
                  <span>Expense</span>
                </p>

                <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl ">
                  <span className="w-10 text-green-400"><BsDot size={50}/> </span>
                  <span>Expense</span>
                </p>
              </div>

            </div>

            <div className="mt-10 flex gap-10 flex-wrap justify-center">
              <div className="border-r-1 border-color m-4 pr-10 flex-wrap justify-center">
                <div className="">
                  <p>
                    <span className="text-3xl font-semibold">$7954</span>
                    <span className="p-1 ml-1 hover:drop-shadow-xl cursor-pointer
                    rounded-full bg-green-400 text-white dark:bg-secondary-dark-bg dark:text-gray-200">
                    77%</span>
                  </p>
                  <p className="text-gray-600 mt-1 ">Total Income</p>
                </div>

                <div className="mt-8">
                  <p>
                    <span className="text-3xl font-semibold">$7954</span>
                    <span className="p-1 hover:drop-shadow-xl ml-1 cursor-pointer
                    rounded-full bg-green-400 text-white dark:bg-secondary-dark-bg dark:text-gray-200">
                    77%</span>
                  </p>
                  <p className="text-gray-600 mt-1">Total Income</p>
                </div>

                {/* <div className="mt-5 w-full">

               
                </div> */}
              </div>
              <div className=" ">
                <LineChart  width={screenSize < 500 ? screenSize : 700} height={300}/>
              </div>
            </div>
          </div> 
      </div>

      <div className="flex">

      </div>



    </div>
    
  )
}

export default Ecommerce






