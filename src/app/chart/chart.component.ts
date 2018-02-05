import { Component, OnInit } from '@angular/core';

import * as Plotly from 'plotly.js';
import {Config, Data, Layout} from 'plotly.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // -------------------
    // regular line chart
    // -------------------
    // const trace1 = {
    //   x: [1, 2, 3, 4],
    //   y: [10, 15, 13, 17],
    //   type: 'scatter'
    // };

    // const trace2 = {
    //   x: [1, 2, 3, 4],
    //   y: [16, 5, 11, 9],
    //   type: 'scatter'
    // };

    // -------------------
    // histogram chart
    // -------------------
    // const data = [trace1, trace2];
  //   let x = [];
  //   for (let i = 0; i < 500; i ++) {
  //     x[i] = Math.random();
  //   }
  //
  //   const trace = {
  //     x: x,
  //     type: 'histogram',
  //   };
  //   const data = [trace];
  //   console.log('data ', data);
  //   PlotlyHist.newPlot('myPlotlyDiv', data);
  // }

  // -------------------
  // line and bar chart
  // -------------------
  var trace1 = {
  x: [0, 1, 2, 3, 4, 5],
  y: [1.5, 1, 1.3, 0.7, 0.8, 0.9],
  type: 'scatter'
};

var trace2 = {
  x: [0, 1, 2, 3, 4, 5],
  y: [1, 0.5, 0.7, -1.2, 0.3, 0.4],
  type: 'bar'
};

var data = [trace1, trace2];

Plotly.newPlot('myPlotlyDiv', data);
}
}
