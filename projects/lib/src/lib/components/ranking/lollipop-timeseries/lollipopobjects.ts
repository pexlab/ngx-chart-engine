export class LollipopSeason {
  private season: number;

  public seasonColor: String;
  public episodeColor: String;
  public episodes: LollipopEpisode[] = [];
  public seasonAverage!: number;

  constructor( season: number, seasonColor: String, episodeColor: String, episodes: LollipopEpisode[] ) {
    this.season       = season;
    this.seasonColor  = seasonColor;
    this.episodeColor = episodeColor;

    this.episodes = episodes;

    this.calculateEpisodeAverage();
  }

  private calculateEpisodeAverage() {
    let sum = 0;
    for ( const episode of this.episodes ) {
      sum += episode.rating;
    }

    this.seasonAverage = sum / this.episodes.length;
  }
}

export class LollipopEpisode {
  public votes: number;
  public rating: number;

  constructor( votes: number, rating: number ) {
    this.votes  = votes;
    this.rating = rating;

  }
}
