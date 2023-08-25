export class ArrayIndex {
  private current = 0;
  private previous = -1;

  constructor(private length: number) {}

  public next(): number {
    this.previous = this.current;
    return (this.current = ++this.current % this.length);
  }

  public get prev() {
    return this.previous;
  }
}
