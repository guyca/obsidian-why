import { DependenciesOf, injectComponent } from 'react-obsidian';
import './App.css';
import { AnimatedText } from './components/animatedText/AnimatedText';
import { WixEng } from './components/WixEng';
import { useComponentDidMount } from './utils/useComponentDidMount';
import { AppGraph } from './di/AppGraph';
import { Header } from './components/header/Header';

const _App = ({ projectModel }: DependenciesOf<AppGraph, 'projectModel'>) => {
  useComponentDidMount(() => {
    projectModel.start();
  });

  return (
    <div className="app">
      <Header />
      <AnimatedText />
      <WixEng />
    </div>
  );
};

export const App = injectComponent(_App, AppGraph);
