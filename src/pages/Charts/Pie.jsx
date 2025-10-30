import React, { useEffect, useRef, useState } from 'react';
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
  const containerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      setChartWidth(w);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const chartHeight = Math.max(260, Math.min(420, Math.round(chartWidth)));
  const isVerySmall = chartWidth > 0 && chartWidth < 340;
  const isMobile = chartWidth > 0 && chartWidth < 480;

  return (
    <div className='m-3 md:m-10 mt-24 p-4 md:p-10 bg-white dark:bg-gray-800 rounded-3xl'>
      <Header category="Charts" title="Project Cost Breakdown" />

      <div ref={containerRef} className="w-full flex justify-center overflow-x-auto">
        <AccumulationChartComponent
          id="pie-chart"
          width="100%"
          height={`${chartHeight}px`}
          legendSettings={{
            visible: true,
            position: isMobile ? 'Bottom' : 'Bottom',
            orientation: isMobile ? 'Vertical' : 'Horizontal',
            background: 'white',
          }}
          tooltip={{ enable: true }}
          enableSmartLabels
          margin={{ left: 0, right: 0, top: 8, bottom: 8 }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
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
                visible: !isVerySmall,
                name: 'text',
                position: 'Inside',
                font: {
                  fontWeight: '600',
                  color: currentMode === 'Dark' ? '#fff' : '#000',
                },
              }}
              innerRadius="0%"
              radius={isVerySmall ? '80%' : '90%'}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pie;
