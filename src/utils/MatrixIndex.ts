export class MatrixIndex {
  constructor(private matrix: object[][][]) {}

  private currRow = 0;
  private currCol = 0;

  public next(): [number, number] {
    const row = this.currRow;
    const col = this.currCol;

    this.currCol = ++this.currCol % this.matrix[row].length;
    if (this.currCol === 0) {
      this.currRow = ++this.currRow % this.matrix.length;
    }

    return [row, col];
  }
}
