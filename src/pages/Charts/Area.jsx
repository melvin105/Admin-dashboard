import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, DateTime, Legend} from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';


const AreaChart = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-6 md:p-10 bg-white dark:bg-gray-800 rounded-3xl'>
      <Header category="Chart" title="Inflation Rate in Percentage" />
     <div className="w-full overflow-x-auto">
     <ChartComponent
        id="area-chart"
        width="100%"
        height="360px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: 'white' }}
     
     >
      <Inject services={[SplineAreaSeries, DateTime, Legend]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
     </ChartComponent>
     </div>
     </div>
  )
}

export default AreaChart