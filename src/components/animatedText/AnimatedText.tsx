import { DependenciesOf, injectComponent } from 'react-obsidian';
import { TextGraph } from './di/TextGraph';
import TextTransition, { presets } from 'react-text-transition';

type Injected = DependenciesOf<TextGraph, 'useViewModel'>;

const _AnimatedText = ({ useViewModel }: Injected) => {
  const { staticText, animatedText } = useViewModel();

  return (
    <div className="textContainer">
      {`${staticText} `}
      <TextTransition inline className="animatedText">
        {animatedText}
      </TextTransition>
    </div>
  );
};

export const AnimatedText = injectComponent(_AnimatedText, TextGraph);
