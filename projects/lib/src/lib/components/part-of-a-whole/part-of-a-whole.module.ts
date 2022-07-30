import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PartOfAWholeComponent} from "./part-of-a-whole.component";
import { RadarChartComponent } from './radar-chart/radar-chart.component';



@NgModule({
  declarations: [PartOfAWholeComponent, RadarChartComponent],
  imports: [
    CommonModule
  ],
  exports: [PartOfAWholeComponent]
})
export class PartOfAWholeModule { }
