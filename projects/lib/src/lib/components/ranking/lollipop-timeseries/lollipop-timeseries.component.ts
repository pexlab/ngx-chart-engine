import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { SVGPath } from '../../../util/svg.util';
import { LollipopSeason } from './lollipopobjects';

@Component( {
  selector   : 'fe-lollipop-timeseries',
  templateUrl: './lollipop-timeseries.component.html',
  styleUrls  : [ './lollipop-timeseries.component.scss' ]
} )
export class LollipopTimeseriesComponent implements OnInit {

  public horizontalLines: String[]         = [];
  public seasonBars: Map<String, String>   = new Map<String, String>();
  public episodeLines: Map<String, String> = new Map<String, String>();
  public seasonBarConnectors: String[]     = [];
  public episodeCircles: Map<String, String> = new Map<String, String>();

  public svgWidth  = 1500;
  public svgHeight = 900;

  public chartWidth  = 1323.3;
  public chartHeight = 724.6;

  public chartPaddingLR     = 19;
  public seasonBarMarginLR  = 1;
  public seasonBarPaddingLR = 10.6;

  public voteCircleMinDiameter = 4.6;
  public voteCircleMaxDiameter = 10.6;

  public episodeLineWidth = 1.6;

  public seasonBarHeight = 7.3;

  public range       = [ 0, 10 ];
  public ratingSteps = 10;

  @Input()
  public seasons!: LollipopSeason[];

  constructor( public hostElement: ElementRef<HTMLElement> ) {
  }

  public ngOnInit(): void {
    const rangeMin = Math.min( this.range[ 0 ], this.range[ 1 ] );
    const rangeMax = Math.max( this.range[ 0 ], this.range[ 1 ] );

    const stepSize = this.chartHeight / (this.ratingSteps - 1);

    const ratingLineYStart = ( this.svgHeight / 2 ) - ( this.chartHeight / 2 );
    const ratingLineYEnd   = ( this.svgHeight / 2 ) + ( this.chartHeight / 2 );

    const ratingLineXStart = ( this.svgWidth / 2 ) - ( this.chartWidth / 2 );
    const ratingLineXEnd   = ( this.svgWidth / 2 ) + ( this.chartWidth / 2 );

    //horizontal rating lines
    for ( let i = 0; i < this.ratingSteps; i++ ) {

      const y = ratingLineYStart + ( this.chartHeight / ( this.ratingSteps - 1 ) * i );

      const path = new SVGPath();
      path.moveTo( ratingLineXStart, y );
      path.horizontalLineTo( ratingLineXEnd );

      this.horizontalLines.push( path.end() );
    }

    const seasonBarXStart = ratingLineXStart + this.chartPaddingLR;
    const seasonBarWidth  = ( ( ( ratingLineXEnd - ratingLineXStart ) - ( 2 * this.chartPaddingLR ) ) / this.seasons.length );

    let previousCy: number;
    let previousXEnd: number;

    //season bars
    for ( let i = 0; i < this.seasons.length; i++ ) {
      const season = this.seasons[ i ];

      const x  = seasonBarXStart + ( seasonBarWidth * i ) + ( this.seasonBarMarginLR * i );
      const cy = ratingLineYEnd - ( stepSize * season.seasonAverage );

      const path = new SVGPath();
      path.moveTo( x, cy - ( this.seasonBarHeight / 2 ) );
      path.relative();
      path.verticalLineTo( this.seasonBarHeight );
      path.horizontalLineTo( seasonBarWidth );
      path.verticalLineTo( -this.seasonBarHeight );
      path.close();

      this.seasonBars.set( path.end(), season.seasonColor );

      //season bar connector
      if ( i != 0 ) {
        const connectorPath = new SVGPath();
        connectorPath.moveTo( previousXEnd! + ( ( this.seasonBarMarginLR / 2 ) ), previousCy! );
        connectorPath.verticalLineTo( cy );

        this.seasonBarConnectors.push( connectorPath.end() );
      }

      previousCy   = cy;
      previousXEnd = x + seasonBarWidth;

      const episodeXStart   = x + this.seasonBarPaddingLR;
      const episodeStepSize = ( seasonBarWidth - ( this.seasonBarPaddingLR * 2 ) ) / ( season.episodes.length - 1 );

      const episodeCircleDiameterRange = (this.voteCircleMaxDiameter - this.voteCircleMinDiameter);

      //episode lines
      for ( let j = 0; j < season.episodes.length; j++ ) {
        const episode = season.episodes[ j ];

        const episodeX    = episodeXStart + ( episodeStepSize * j );
        const episodeYEnd = ratingLineYEnd - ( stepSize * episode.rating );

        const episodePath = new SVGPath();
        episodePath.moveTo( episodeX, cy );
        episodePath.verticalLineTo( episodeYEnd );

        this.episodeLines.set( episodePath.end(), season.episodeColor );

        const voteCircleDiameter = this.voteCircleMinDiameter + (episodeCircleDiameterRange * 1);

        const episodeCirclePath = new SVGPath();
        episodeCirclePath.moveTo(episodeX, episodeYEnd);
        episodeCirclePath.circle(voteCircleDiameter);

        this.episodeCircles.set(episodeCirclePath.end(), season.episodeColor);
      }
    }
  }

}
