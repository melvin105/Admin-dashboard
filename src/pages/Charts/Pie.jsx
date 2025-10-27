import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  AccumulationTooltip,
  AccumulationDataLabel,
  Inject,
  PieSeries,
} from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Pie = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-gray-800 rounded-3xl'>
      <Header category="Charts" title="Project Cost Breakdown" />

      <div className="w-full flex justify-center">
        <AccumulationChartComponent
          id="pie-chart"
          legendSettings={{ visible: true, background: 'white' }}
          toolti={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          height="420px"
        >
          <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={pieChartData}
              xName="x"
              yName="y"
              type="Pie"
              dataLabel={{
                visible: true,
                name: 'text',
                position: 'Outside',
                font: {
                  fontWeight: '600',
                  color: currentMode === 'Dark' ? '#fff' : '#000',
                },
              }}
              explode
              explodeOffset="10%"
              explodeIndex={2}
              innerRadius="0%"
              radius="70%"
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pie;
