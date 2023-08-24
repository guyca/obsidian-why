import { AppModel } from './model/model';
import { useComponentDidMount } from '../utils/useComponentDidMount';

export const useAnimatedTextViewModel = (model: AppModel) => {
  const { text } = model.use();

  useComponentDidMount(() => model.start());

  return { text };
};
