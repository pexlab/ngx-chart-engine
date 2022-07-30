export class SVGPath{

  private isRelative: boolean = false;
  private path: String = "";

  public moveTo(x: number, y: number): void{
    if(this.isRelative){
      this.path += `m ${x} ${y}`
    }else{
      this.path += `M ${x} ${y}`
    }
  }

  public lineTo(x: number, y: number): void{
    if(this.isRelative){
      this.path += `l ${x} ${y}`
    }else{
      this.path += `L ${x} ${y}`
    }
  }

  public horizontalLineTo(x: number): void{
    if(this.isRelative){
      this.path += `h ${x}`
    }else{
      this.path += `H ${x}`
    }
  }

  public verticalLineTo(y: number): void{
    if(this.isRelative){
      this.path += `v ${y}`
    }else{
      this.path += `V ${y}`
    }
  }

  public relative(): void{
    this.isRelative = true;
  }

  public absolute():void{
    this.isRelative = false;
  }

  public close(): void{
    this.path += "Z";
  }

  public end(): String{
    return this.path;
  }
}
