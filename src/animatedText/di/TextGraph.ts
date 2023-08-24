import { Graph, LifecycleBound, ObjectGraph, Provides } from 'react-obsidian';
import { messages } from '../../messages';
import { useAnimatedTextViewModel } from '../animatedTextViewModel';
import { AppModel as TextModel } from '../model/model';

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
