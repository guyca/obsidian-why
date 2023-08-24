import { TextModel } from './model/textModel';
import { useComponentDidMount } from '../../utils/useComponentDidMount';

export const useAnimatedTextViewModel = (model: TextModel) => {
  const { staticText, animatedText } = model.use();

  useComponentDidMount(() => model.start());

  return { staticText, animatedText };
};
