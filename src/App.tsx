import { DependenciesOf, injectComponent } from 'react-obsidian';
import './App.css';
import { AnimatedText } from './components/animatedText/AnimatedText';
import { LearnMore } from './components/LearnMore';
import { WixEng } from './components/WixEng';
import { useComponentDidMount } from './utils/useComponentDidMount';
import { AppGraph } from './di/AppGraph';
import { Logo } from './components/logo/Logo';

const _App = ({ projectModel }: DependenciesOf<AppGraph, 'projectModel'>) => {
  useComponentDidMount(() => {
    projectModel.start();
  });

  return (
    <div className="app">
      <Logo />
      <LearnMore />
      <AnimatedText />
      <WixEng />
    </div>
  );
};

export const App = injectComponent(_App, AppGraph);
