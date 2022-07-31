export class LollipopEntry{
  private key: String;

  private color: String;
  private yArray: LollipopY[] = [];
  public yAverage!: number;

  constructor(key: String, color: String, yArray: LollipopY[]) {
    this.key = key;
    this.color = color;

    this.yArray = yArray;
    
    this.calculateAverage();
  }
  
  private calculateAverage() {
    let sum = 0;
    for ( const yArray of this.yArray ) {
      sum += yArray.amount;
    }
    
    this.yAverage = sum / this.yArray.length;
  }
}

export class LollipopY{
  public yValue: number;
  public amount: number;
  
  constructor(amount: number, yValue: number) {
    this.amount = amount;
    this.yValue = yValue;
  }
}
