import { TextModel } from './model/textModel';
import { useComponentDidMount } from '../../utils/useComponentDidMount';

export const useAnimatedTextViewModel = (model: TextModel) => {
  const { text } = model.use();

  useComponentDidMount(() => model.start());

  return { staticText: text.static, animatedText: text.animated };
};
