import { Model, Observable, Unsubscribe } from 'react-obsidian';
import { Tagline } from '../../../config';
import { MatrixIndex } from '../../../utils/MatrixIndex';

const DURATION = 2000;

export class TextModel extends Model {
  public readonly tagline: Observable<Tagline>;

  private index: MatrixIndex;

  constructor(private taglines: Tagline[][]) {
    super();
    this.index = new MatrixIndex(taglines);
    this.tagline = new Observable(taglines[0][0]);
  }

  public start(): Unsubscribe {
    const intervalId = setInterval(() => {
      const [row, col] = this.index.next();
      this.tagline.value = this.taglines[row][col];
    }, DURATION);
    return () => clearInterval(intervalId);
  }
}
