import React from 'react'
import { Header } from '../../components'
import { pieChartData } from '../../data/dummy';
import Doughnut from '../../components/Charts/Pie';

function Pie() {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Pie" title="Pie Chart" />
      <div className='w-full'>
        <Doughnut id='chart-pie' data={pieChartData} legendVisiblity height='full'/>
      </div>
    </div>
  )
}

export default Pie