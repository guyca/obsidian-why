import { TextModel } from './model/textModel';
import { useComponentDidMount } from '../../utils/useComponentDidMount';

export const useAnimatedTextViewModel = (model: TextModel) => {
  const { tagline } = model.use();

  useComponentDidMount(() => model.start());

  return { tagline };
};
