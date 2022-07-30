import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ComponentTheme, FeComponent, PartialButtonTheme} from "@pexlab/ngx-front-engine";
import {SVGPath} from "../../util/svg.util";

@Component({
  selector: 'fe-part-of-a-whole',
  templateUrl: './part-of-a-whole.component.html',
  styleUrls: ['./part-of-a-whole.component.scss']
})
export class PartOfAWholeComponent implements OnInit {

  constructor(public hostElement: ElementRef<HTMLElement>) {
  }

  public path!: String;

  ngOnInit(): void {

    const svgPath = new SVGPath();

    const keys = 10;
    for (let i = 0; i < keys; i++) {
      const degree = 360 / keys * i;
      console.log(degree);
      const radian = this.degToRad(degree);

      const x = 100 * Math.cos(radian) + 100;
      const y = 100 * Math.sin(radian) + 100;

      if (i === 0) {
        svgPath.moveTo(x, y);
      } else {
        svgPath.lineTo(x, y);
      }
    }

    svgPath.close();

    this.path = svgPath.end();
  }

  public degToRad(deg: number): number {
    return deg * Math.PI / 180.0;
  }

}
