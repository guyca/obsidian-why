import { TextModel } from './model/textModel';

export const useAnimatedTextViewModel = (model: TextModel) => {
  const { tagline } = model.use();

  return { tagline };
};
