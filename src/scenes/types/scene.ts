import { ElementComponentType, ElementLayout } from './element';

export type SceneId = number;

export interface SceneType {
  id: SceneId;
  layout?: ElementLayout;
  elements?: ElementComponentType[];
}
