import { Model, Observable, Unsubscribe } from 'react-obsidian';

const DURATION = 3000;

export class AppModel extends Model {
  public readonly text: Observable<string>;
  private currentIndex = 0;

  constructor(private messages: string[]) {
    super();
    this.text = new Observable(messages[0]);
  }

  public start(): Unsubscribe {
    const intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.messages.length;
      this.text.value = this.messages[this.currentIndex];
    }, DURATION);
    return () => clearInterval(intervalId);
  }
}
