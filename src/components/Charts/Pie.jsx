import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationDataLabel,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  Inject,
} from '@syncfusion/ej2-react-charts';

const Pie = ({ id, data, legendVisiblity, height }) => {
  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisiblity }}
      height={height}
      background="transparent"
      tooltip={{ enable: true }}
    >
      <Inject
        services={[
          AccumulationLegend,
          PieSeries,
          AccumulationDataLabel,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={data}
          xName="x"
          yName="y"
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: { fontWeight: '600', color: '#fff' },
          }}
          radius="70%"
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Pie;
