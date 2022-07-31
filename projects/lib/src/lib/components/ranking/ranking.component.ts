import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'fe-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  constructor(public hostElement: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
  
  }

}
