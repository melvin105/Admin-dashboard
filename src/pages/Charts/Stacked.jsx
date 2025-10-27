import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, StackingColumnSeries, Category, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { Header } from '../../components';

const Stacked = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-gray-800 rounded-3xl'>
      <Header category="Chart" title="Revenue Breakdown" />
      <div className="w-full">
        <ChartComponent
          id="stacked-chart"
          height="420px"
          primaryXAxis={stackedPrimaryXAxis}
          primaryYAxis={stackedPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            {stackedCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Stacked