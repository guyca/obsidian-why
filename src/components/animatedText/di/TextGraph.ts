import { Graph, LifecycleBound, ObjectGraph, Provides } from 'react-obsidian';
import { useAnimatedTextViewModel } from '../animatedTextViewModel';
import { TextModel as TextModel } from '../model/textModel';
import { SegmentedTextFactory } from '../../TextFactory';
import { AppGraph } from '../../../di/AppGraph';
import { ProjectModel } from '../../../model/ProjectModel';

@LifecycleBound()
@Graph({ subgraphs: [AppGraph] })
export class TextGraph extends ObjectGraph {
  @Provides()
  useViewModel(model: TextModel) {
    return () => useAnimatedTextViewModel(model);
  }

  @Provides()
  model(projectModel: ProjectModel) {
    return new TextModel(projectModel.project);
  }

  @Provides()
  segmentedTextFactory() {
    return new SegmentedTextFactory();
  }
}
