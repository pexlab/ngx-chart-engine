import { Component, ElementRef, Input, OnInit } from '@angular/core';
import {SVGPath} from "../../../util/svg.util";
import { LollipopEntry } from './lollipopentry';

@Component({
  selector: 'fe-lollipop-timeseries',
  templateUrl: './lollipop-timeseries.component.html',
  styleUrls: ['./lollipop-timeseries.component.scss']
})
export class LollipopTimeseriesComponent implements OnInit {

  public horizontalLines: String[] = [];

  public svgWidth = 1500;
  public svgHeight = 900;
  
  @Input()
  public entries!: LollipopEntry[];
  
  @Input()
  public yRange!: number[];

  constructor(public hostElement: ElementRef<HTMLElement>) {
    
    const rangeMin = Math.min(this.yRange[0], this.yRange[1]);
    const rangeMax = Math.max(this.yRange[0], this.yRange[1]);

    const stepSize = Math.round((rangeMax - rangeMin) / 8);
    
    const keys = 8
    for (let i = 0; i < keys; i++) {
      const y = 84.3 + (724.3 / (keys - 1) * i)

      const path = new SVGPath();
      path.moveTo(101.6, y)
      path.horizontalLineTo(1425.3)

      this.horizontalLines.push(path.end())
    }
    
    const entryWidth = 1323.7 / this.entries.length;
  
    for ( let i = 0; i < this.entries.length; i++ ) {
        const entry = this.entries[i];
      
        const path = new SVGPath();
        const x = 101.6 + (entryWidth * i);
        path.moveTo(101.6, 84.3)
        path.horizontalLineTo(entryWidth)
        path.verticalLineTo(entry.yAverage)
        path.horizontalLineTo(entryWidth)
        path.verticalLineTo(84.3)
        path.end()
    }

  }

  ngOnInit(): void {
  }

}
