import { MediatorObservable, Model, Observable } from 'react-obsidian';
import { Project, Tagline } from '../../../config/data';
import { DURATION } from '../../../config/constants';

export class TextModel extends Model {
  public readonly tagline = new MediatorObservable<Tagline>();
  private index: number = 0;
  private intervalId: number = -1;

  constructor(private project: Observable<Project>) {
    super();
    this.tagline.mapSource(project, (project) => {
      this.index = 0;
      this.intervalId = this.setInterval();
      return project.taglines[this.index];
    });
  }

  public setInterval() {
    clearInterval(this.intervalId);
    return setInterval(() => {
      this.index += 1;
      if (this.index < this.project.value.taglines.length) {
        this.tagline.value = this.project.value.taglines[this.index];
      }
    }, DURATION);
  }
}
