import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RankingComponent} from "./ranking.component";
import { LollipopTimeseriesComponent } from './lollipop-timeseries/lollipop-timeseries.component';



@NgModule({
  declarations: [RankingComponent, LollipopTimeseriesComponent],
  imports: [
    CommonModule
  ],
  exports: [RankingComponent]
})
export class RankingModule { }
