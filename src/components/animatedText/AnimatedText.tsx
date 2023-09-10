import { DependenciesOf, injectComponent } from 'react-obsidian';
import { TextGraph } from './di/TextGraph';

type Injected = DependenciesOf<
  TextGraph,
  'useViewModel' | 'segmentedTextFactory'
>;

const _AnimatedText = ({ useViewModel, segmentedTextFactory }: Injected) => {
  const { tagline } = useViewModel();

  return (
    <div className="textContainer">
      {tagline.map((segment) => segmentedTextFactory.create(segment))}
    </div>
  );
};

export const AnimatedText = injectComponent(_AnimatedText, TextGraph);
