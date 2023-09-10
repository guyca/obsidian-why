export class ArrayIndex {
  private curr = 0;
  private previous = -1;

  constructor(private length: number) {}

  public next(): number {
    this.previous = this.curr;
    return (this.curr = ++this.curr % this.length);
  }

  public get prev() {
    return this.previous;
  }

  public get current() {
    return this.curr;
  }
}
