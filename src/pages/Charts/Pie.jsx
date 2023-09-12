import React from 'react'
import { Header } from '../../components'
import PieChart from '../../components/Charts/PieChart'

const Pie = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Pie" />
    <div className="w-full h-full flex justify-center items-center lg:w-2/3">
    <PieChart  />
    </div>
    </div>
  )
}

export default Pie
