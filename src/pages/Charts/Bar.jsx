import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from '@syncfusion/ej2-react-charts';

import { barCustomSeries } from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  const { currentMode } = useStateContext();

  const primaryXAxis = {
    valueType: 'Category',
    majorGridLines: { width: 0 },
    title: 'Countries',
  };

  const primaryYAxis = {
    labelFormat: '{value}',
    edgeLabelPlacement: 'Shift',
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    title: 'Medals',
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="Olympic Medal Counts - RIO" />

      <div className="w-full">
        <ChartComponent
          id="bar-chart"
          primaryXAxis={primaryXAxis}
          primaryYAxis={primaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
