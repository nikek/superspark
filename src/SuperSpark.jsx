import React from 'react';
import Area from './types/Area.jsx';
import Bars from './types/Bars.jsx';
import Line from './types/Line.jsx';
import Dots from './types/Dots.jsx';
import Threshold from './Threshold.jsx';
import { scaleLinear } from 'd3-scale';

const defaults = {
  data: [],
  width: 160,
  height: 90,
  color: '#2ebd59',
  plot: 'bars',
  paddingX: 5,
  paddingY: 5
};

const types = {
  bars: Bars,
  area: Area,
  line: Line,
  dots: Dots
};

export default class SuperSpark extends React.Component {
  render() {
    const p = Object.assign({}, defaults, this.props);

    if (!p.data.length) {
      return <svg />;
    }

    p.yScale = scaleLinear()
      .domain([0, Math.max(...p.data.map(p => p.y))])
      .range([p.height - p.paddingY * 2, 0]);

    p.xScale = scaleLinear()
      .domain([
        p.data[0].x || 0,
        p.data[p.data.length - 1].x || p.data.length - 1
      ])
      .range([0, p.width - p.paddingX * 2]);

    return (
      <svg width={p.width} height={p.height}>
        <g style={{ transform: `translate(${p.paddingX}px,${p.paddingY}px)` }}>
          {types[p.plot](p)}
          {p.threshold && <Threshold {...p} />}
        </g>
      </svg>
    );
  }
}
