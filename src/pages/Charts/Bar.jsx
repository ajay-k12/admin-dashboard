import React from 'react'
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';

function Bar() {
  const { currentMode } = useStateContext()
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Bar" title="Olympic Medal Counts - RIO" />
      <ChartComponent
        id='bar-chart'
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode==='Dark' ? '#33373E' : '#fff'} 
        legendSettings={{ background: 'white' }}
        >
        <Inject services={[Legend, Tooltip, ColumnSeries, DataLabel, Category]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => 
          <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar