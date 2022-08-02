export class SVGPath {

  private isRelative: boolean = false;
  private path: String        = '';

  public circle( diameter: number ) {
    const radius = diameter / 2;

    this.relative();
    this.moveTo( -radius, 0 );
    this.arc( radius, radius, 0, 1, 0, diameter, 0 );
    this.arc( radius, radius, 0, 1, 0, -diameter, 0 );
    this.absolute();
  }

  public arc( radiusX: number, radiusY: number, rotation: number, shortLongWay: number, clockwise: number, endX: number, endY: number ) {
    if ( this.isRelative ) {
      this.path += `a ${ radiusX } ${ radiusY } ${ rotation } ${ shortLongWay } ${ clockwise } ${ endX } ${ endY }`;
    } else {
      this.path += `A ${ radiusX } ${ radiusY } ${ rotation } ${ shortLongWay } ${ clockwise } ${ endX } ${ endY }`;
    }
  }

  public moveTo( x: number, y: number ): void {
    if ( this.isRelative ) {
      this.path += `m ${ x } ${ y }`;
    } else {
      this.path += `M ${ x } ${ y }`;
    }
  }

  public lineTo( x: number, y: number ): void {
    if ( this.isRelative ) {
      this.path += `l ${ x } ${ y }`;
    } else {
      this.path += `L ${ x } ${ y }`;
    }
  }

  public horizontalLineTo( x: number ): void {
    if ( this.isRelative ) {
      this.path += `h ${ x }`;
    } else {
      this.path += `H ${ x }`;
    }
  }

  public verticalLineTo( y: number ): void {
    if ( this.isRelative ) {
      this.path += `v ${ y }`;
    } else {
      this.path += `V ${ y }`;
    }
  }

  public relative(): void {
    this.isRelative = true;
  }

  public absolute(): void {
    this.isRelative = false;
  }

  public close(): void {
    this.path += 'Z';
  }

  public end(): String {
    return this.path;
  }
}
