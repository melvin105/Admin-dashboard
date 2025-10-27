import React from 'react';
import {ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,Legend,Category,Tooltip,DataLabel,ColumnSeries,RangeColorSettingsDirective,RangeColorSettingDirective,} from '@syncfusion/ej2-react-charts';

import {colorMappingData,ColorMappingPrimaryXAxis,ColorMappingPrimaryYAxis,rangeColorMapping,} from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const ColorMapping = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-gray-800 rounded-3xl'>
      <Header category="Charts" title="Color Mapping" />

      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ mode: 'Range', background: 'white' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />

          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="Temperature"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
              marker={{ dataLabel: { visible: true, position: 'Top' } }}
            />
          </SeriesCollectionDirective>

          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective
                key={index}
                label={item.label}
                start={item.start}
                end={item.end}
                colors={item.colors}
              />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;
