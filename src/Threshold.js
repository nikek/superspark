import React from 'react';

export default function Threshold(props) {
  const y = props.yScale(props.threshold.value);
  let area = null;

  const x1 = props.xScale.range()[0];
  const x2 = props.xScale.range()[1];

  if (props.threshold.type) {
    const areaProps = {
      x: x1,
      width: x2,
      opacity: '0.3',
      fill: props.threshold.color || 'lightgray'
    };

    if (props.threshold.type === 'above') {
      areaProps.y = props.yScale.range()[1];
      areaProps.height = y;
    } else if (props.threshold.type === 'below') {
      areaProps.y = y;
      areaProps.height = props.yScale.range()[0] - y;
    }

    area = <rect {...areaProps} />;
  }

  return (
    <g>
      <line
        y1={y}
        y2={y}
        x1={x1}
        x2={x2}
        strokeWidth="1.3"
        stroke={props.threshold.color || 'lightgray'}
        strokeDasharray="7 5"
        fill="none"
      />
      {area}
    </g>
  );
}
