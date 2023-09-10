import { DependenciesOf, injectComponent, useObserver } from 'react-obsidian';
import { AppGraph } from '../../di/AppGraph';

const _Logo = ({ projectModel }: DependenciesOf<AppGraph, 'projectModel'>) => {
  const [logo] = useObserver(projectModel.logo);
  return <img src={logo} className="logo" alt="logo" />;
};

export const Logo = injectComponent(_Logo, AppGraph);
