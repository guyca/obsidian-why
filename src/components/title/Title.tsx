import { DependenciesOf, injectComponent, useObserver } from 'react-obsidian';
import { AppGraph } from '../../di/AppGraph';

const _Title = ({ projectModel }: DependenciesOf<AppGraph, 'projectModel'>) => {
  const [name] = useObserver(projectModel.name);
  return <h1 className="title">{name}</h1>;
};

export const Title = injectComponent(_Title, AppGraph);
