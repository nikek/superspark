import React from 'react';

export default function Dots(props) {
  return (
    <g>
      {props.data.map((d, i) => (
        <circle
          key={i}
          r="3"
          cx={props.xScale(d.x || i)}
          cy={props.yScale(d.y)}
          fill={props.color}
        />
      ))}
    </g>
  );
}
