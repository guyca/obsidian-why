import { Graph, LifecycleBound, ObjectGraph, Provides } from 'react-obsidian';
import { useAnimatedTextViewModel } from '../animatedTextViewModel';
import { TextModel as TextModel } from '../model/textModel';
import { messages } from '../../../resources/strings';

@LifecycleBound()
@Graph()
export class TextGraph extends ObjectGraph {
  @Provides()
  useViewModel(model: TextModel) {
    return () => useAnimatedTextViewModel(model);
  }

  @Provides()
  model() {
    return new TextModel(messages);
  }
}
