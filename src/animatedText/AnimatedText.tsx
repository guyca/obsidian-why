import { DependenciesOf, injectComponent } from 'react-obsidian';
import { TextGraph } from './di/TextGraph';

const _AnimatedText = ({
  useViewModel,
}: DependenciesOf<TextGraph, 'useViewModel'>) => {
  const { text } = useViewModel();
  return <>{text}</>;
};

export const AnimatedText = injectComponent(_AnimatedText, TextGraph);
