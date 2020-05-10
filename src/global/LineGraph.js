import React from 'react';
import chroma from 'chroma-js';
import Sketch from './Sketch';

const LineGraph = ({
  xs = [0, 100],
  ys = [0, 100],
  points = [
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 0 },
  ],
}) => {
  // const scale = chroma.scale('orrd').domain([0, 100]);

  const padding = 10;
  const setup = p5 => {
    p5.createCanvas(xs[1] - xs[0] + 20, ys[1] - ys[0] + 20);
    p5.angleMode(p5.DEGREES);

    console.log(p5.width)
    p5.translate(p5.width / 2, p5.height / 2);
    p5.strokeWeight(3);
    p5.line(0, 0, 10, 10);

    // p5.translate(0, p5.height);
    // p5.strokeWeight(3);
    // for (let i = 0; i < points.length; i++) {
    //   // const color = scale(p5.map(-points[i].y, 0, -p5.height + padding, 0, 100)).hex();
    //   // p5.stroke(color);
    //   p5.stroke('black');
    //   p5.point(padding + points[i].x, -padding - points[i].y);
    // }
  };

  return (
    <Sketch
      setup={setup}
      draw={() => {}}
    />
  );
};

export default LineGraph;
