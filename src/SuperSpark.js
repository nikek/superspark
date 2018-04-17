import React from 'react';
import Area from './types/Area.js';
import Bars from './types/Bars.js';
import Line from './types/Line.js';
import Dots from './types/Dots.js';
import Threshold from './Threshold.js';
import { scaleLinear } from 'd3-scale';

const defaults = {
  data: [],
  width: 160,
  height: 90,
  color: '#2ebd59',
  plot: 'bars',
  paddingX: 5,
  paddingY: 5,
  zeroBased: true
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

    const dataValues = p.data.map(p => p.y);
    p.yScale = scaleLinear()
      .domain([
        p.zeroBased ? 0 : Math.min(...dataValues),
        Math.max(...dataValues)
      ])
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
