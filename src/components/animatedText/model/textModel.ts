import { Model, Observable, Unsubscribe } from 'react-obsidian';
import { Message, SegmentedText } from '../../../entities/Message';
import { ArrayIndex } from '../../../utils/ArrayIndex';

const DURATION = 2000;

export class TextModel extends Model {
  public readonly text: Observable<SegmentedText>;

  private messages: Message[];
  private index: ArrayIndex;

  constructor(messages: string[]) {
    super();
    this.messages = messages.map((m) => new Message(m));
    this.index = new ArrayIndex(messages.length);
    this.text = new Observable(this.messages[0].getSegmentedMessage());
  }

  public start(): Unsubscribe {
    const intervalId = setInterval(() => {
      this.text.value = this.messages[this.index.next()].getSegmentedMessage(
        this.messages[this.index.prev].message,
      );
    }, DURATION);
    return () => clearInterval(intervalId);
  }
}
