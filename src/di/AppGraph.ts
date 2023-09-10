import { Graph, ObjectGraph, Provides, Singleton } from 'react-obsidian';
import { ProjectModel } from '../model/ProjectModel';

@Singleton()
@Graph()
export class AppGraph extends ObjectGraph {
  @Provides()
  projectModel() {
    return new ProjectModel();
  }
}
