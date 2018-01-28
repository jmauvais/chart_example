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
    const trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter'
    };

    const trace2 = {
      x: [1, 2, 3, 4],
      y: [16, 5, 11, 9],
      type: 'scatter'
    };

    const data = [trace1, trace2];
    Plotly.newPlot('myPlotlyDiv', data);
  }
}
