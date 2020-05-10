import React from 'react';
import chroma from 'chroma-js';
import Sketch from './Sketch';

const LineGraph = ({
  xs = [0, 100],
  ys = [0, 100],
  // points = [
  //   { x: 1, y: 1 },
  //   { x: 2, y: 3 },
  //   { x: 3, y: 0 },
  // ],
}) => {
  const scale = chroma.scale('orrd').padding([0.4, 0.1]).domain([0, 100]);

  const padding = 10;
  const setup = p5 => {
    p5.createCanvas(xs[1] - xs[0] + 20, ys[1] - ys[0] + 20);
    p5.angleMode(p5.DEGREES);

    p5.translate(0, p5.height - padding);
    // Draw axes
    p5.stroke('black')
    p5.line(padding / 2, padding / 2, p5.width - padding / 2, padding / 2)
    p5.line(padding / 2, padding / 2, padding / 2, -p5.height + padding / 2)

    p5.translate(padding / 2, padding / 2);
    const points = [];
    for (let i = 0; i < 100; i++) {
      const x = p5.map(i, 0, 100, 0, p5.width);
      const y = p5.map(i, 0, 100, 0, p5.height);
      points.push({ x, y });
    }

    p5.strokeWeight(1);
    for (let i = 0; i < points.length - 1; i++) {
      const color = scale(p5.map(-points[i].y, 0, -p5.height, 0, 100)).hex();
      p5.stroke(color);
      p5.line(points[i].x, -points[i].y, points[i + 1].x, -points[i + 1].y);
    }
  };

  return <Sketch setup={setup} draw={() => {}} />;
};

export default LineGraph;
