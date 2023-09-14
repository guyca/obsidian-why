import { MediatorObservable, Observable } from 'react-obsidian';
import { Project, projects } from '../config/data';
import { ArrayIndex } from '../utils/ArrayIndex';
import { DURATION } from '../config/constants';

export class ProjectModel {
  public readonly project: Observable<Project> = new Observable(projects[0]);
  public readonly logo = new MediatorObservable<string>().mapSource(
    this.project,
    (project) => project.logo,
  );
  public readonly qr = new MediatorObservable<string>().mapSource(
    this.project,
    (project) => project.qr,
  );
  public readonly name = new MediatorObservable<string>().mapSource(
    this.project,
    (project) => project.name,
  );

  private index: ArrayIndex = new ArrayIndex(projects.length);
  private intervalId: number = -1;

  public start() {
    return this.setInterval();
  }

  private setInterval() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(
      () => {
        this.project.value = projects[this.index.next()];
        this.setInterval();
      },
      Math.max(this.project.value.taglines.length * DURATION, 4000),
    );
    return () => clearInterval(this.intervalId);
  }
}
