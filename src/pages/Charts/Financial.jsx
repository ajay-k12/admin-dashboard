import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Category, Tooltip, Crosshair, Logarithmic, DateTime } from '@syncfusion/ej2-react-charts';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const date = new Date('2017, 1, 1');

function filterValue(value){
  if(value.x >= date){
    return (value.x, value.high, value.low)
  }
}

const returnValue = financialChartData.filter(filterValue);

function Financial() {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title="Financial Data" />
      <ChartComponent
        id='Charts'
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true, shared: true }}
        crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
        background={currentMode==='Dark' ? '#33373E' : '#fff'} 
        >
        <Inject services={[HiloSeries, Tooltip, Logarithmic, DateTime, Crosshair, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective 
            dataSource={returnValue}
            xName='x'
            yName='low'
            name='Apple INC'
            type='Hilo'
            low='low'
            high='high'
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Financial