import {Component, ElementRef, OnInit} from '@angular/core';
import {PartOfAWholeInterface} from "../interface/part-of-a-whole.interface";

@Component({
  selector: 'fe-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  constructor(public hostElement: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
  }

}
