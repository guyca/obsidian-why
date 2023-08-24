import './App.css';
import { AnimatedText } from './components/animatedText/AnimatedText';
import { LearnMore } from './components/LearnMore';
import { WixEng } from './components/WixEng';

export function App() {
  return (
    <div className="app">
      <LearnMore />
      <AnimatedText />
      <WixEng />
    </div>
  );
}
