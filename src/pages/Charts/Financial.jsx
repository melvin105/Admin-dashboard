import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  CandleSeries,
  Category,
  Tooltip,
  DateTime,
  Zoom,
  Crosshair,
} from '@syncfusion/ej2-react-charts';

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-gray-800 rounded-3xl'>
      <Header category="Chart" title="Financial Chart" />
      <div className="w-full">
        <ChartComponent
          id="financial-chart"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          crosshair={{ enable: true, lineType: 'Vertical' }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          zoomSettings={{ enableSelectionZooming: true, mode: 'X' }}
        >
          <Inject services={[CandleSeries, Category, Tooltip, DateTime, Zoom, Crosshair]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={financialChartData}
              xName="x"
              low="low"
              high="high"
              open="open"
              close="close"
              name="Apple Inc"
              type="Candle"
              bearFillColor="#e56590"
              bullFillColor="#4caf50"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
