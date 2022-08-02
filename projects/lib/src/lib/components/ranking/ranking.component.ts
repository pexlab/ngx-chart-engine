import {Component, ElementRef, OnInit} from '@angular/core';
import {LollipopEpisode, LollipopSeason} from "./lollipop-timeseries/lollipopobjects";

@Component({
  selector: 'fe-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public seasons: LollipopSeason[] = [];
  private readonly seasonColors = ['#3E4D6D', '#AB957C', '#515F7E', '#73A1A1', '#607183', '#9E8999', '#8B9E9E', '#6F8499', '#84846F'];
  private readonly episodeColors = ['#486090', '#D7BFA6', '#6079A8', '#9CCCCC', '#7890A8', '#C7B0C1', '#B5C9C9', '#90A8C0', '#A8A890'];

  constructor(public hostElement: ElementRef<HTMLElement>) {

    for (let s = 0; s < 9; s++) {
      const episodes: LollipopEpisode[] = [];

      const episodesAmount = this.getRandomInt(12, 20);

      for (let e = 0; e < episodesAmount; e++) {
        const votes = this.getRandomInt(0, 8000);
        const rating = this.getRandomInt(2, 8);

        episodes.push(new LollipopEpisode(votes, rating));
      }

      this.seasons.push(new LollipopSeason(s + 1, this.seasonColors[s], this.episodeColors[s], episodes))
    }
  }

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit(): void {

  }

}
