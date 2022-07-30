import {Component, ElementRef, OnInit} from '@angular/core';
import {SVGPath} from "../../../util/svg.util";

@Component({
  selector: 'fe-lollipop-timeseries',
  templateUrl: './lollipop-timeseries.component.html',
  styleUrls: ['./lollipop-timeseries.component.scss']
})
export class LollipopTimeseriesComponent implements OnInit {

  public horizontalLines: String[] = [];

  public svgWidth = 1500;
  public svgHeight = 900;


  constructor(public hostElement: ElementRef<HTMLElement>) {

    const keys = 8
    for (let i = 0; i < keys; i++) {
      const y = 84.3 + (724.3 / (keys - 1) * i)

      const path = new SVGPath();
      path.moveTo(101.6, y)
      path.horizontalLineTo(1425.3)

      this.horizontalLines.push(path.end())
    }

  }

  ngOnInit(): void {
  }

}
