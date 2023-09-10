import { DependenciesOf, injectComponent, useObserver } from 'react-obsidian';
import arrow from '../assets/arrow.svg';
import { AppGraph } from '../di/AppGraph';

const _LearnMore = ({
  projectModel,
}: DependenciesOf<AppGraph, 'projectModel'>) => {
  const [qr] = useObserver(projectModel.qr);

  return (
    <div className="learnMoreContainer">
      <img src={qr} />
      <div className="arrowAndText">
        <>Learn More!</>
        <img src={arrow}></img>
      </div>
    </div>
  );
};

export const LearnMore = injectComponent(_LearnMore, AppGraph);
