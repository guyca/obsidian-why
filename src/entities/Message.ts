import { findFirstUncommonWord } from '../utils/findFirstUncommonWord';

export class Message {
  constructor(public readonly message: string) {}

  public getSegmentedMessage(currentMessage?: string) {
    if (!currentMessage) {
      return {
        static: '',
        animated: this.message,
      };
    }

    const idx = findFirstUncommonWord(this.message, currentMessage);

    return {
      static: this.message.substring(0, idx),
      animated: this.message.substring(idx),
    };
  }
}

export type SegmentedText = {
  static: string;
  animated: string;
};
