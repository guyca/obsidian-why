import { Segment } from '../config';
import { AnimatedSegment } from './animatedText/AnimatedSegment';

export class SegmentedTextFactory {
  public create(segment: Segment) {
    if (segment.animate) {
      return <AnimatedSegment text={segment.text} key={segment.text} />;
    }
    return <span>{segment.text}</span>;
  }
}
