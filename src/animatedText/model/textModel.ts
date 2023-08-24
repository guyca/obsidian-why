import { Model, Observable, Unsubscribe } from 'react-obsidian';
import { Message } from '../../entities/Message';

const DURATION = 3000;

export class TextModel extends Model {
  public readonly staticText: Observable<string>;
  public readonly animatedText: Observable<string>;

  private messages: Message[];
  private currentIndex = 0;

  constructor(messages: string[]) {
    super();
    this.messages = messages.map((m) => new Message(m));

    const initialMessage = this.messages[0].getSegmentedMessage();
    this.staticText = this.animatedText = new Observable(initialMessage.static);
    this.animatedText = new Observable(initialMessage.animated);
  }

  public start(): Unsubscribe {
    const intervalId = setInterval(() => {
      const prevIndex = this.currentIndex;
      this.currentIndex = (this.currentIndex + 1) % this.messages.length;
      const segmented = this.messages[this.currentIndex].getSegmentedMessage(
        this.messages[prevIndex].message,
      );
      this.staticText.value = segmented.static;
      this.animatedText.value = segmented.animated;
    }, DURATION);
    return () => clearInterval(intervalId);
  }
}
