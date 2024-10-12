import { SceneType } from './types/scene';

import { ElementComponentProps } from './types/element';
import { elementMap } from './elements/elementMap';

import styles from './Scenes.module.css';

export type SceneProps = {
  scene?: SceneType;
} & ElementComponentProps;

const Scenes = (props: SceneProps) => {
  const { scene, signals = {}, channels = [] } = props;

  const { layout } = scene ?? {};

  return (
    <div className={styles.wrapper} style={layout}>
      {scene?.elements?.map(({ type, ...rest }, i: number) => {
        const key = `${scene.id}_${type}_${i}`;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const Component = (elementMap as Record<string, any>)[type];

        if (!Component) {
          console.error(`Element의 Type이 [${type}]인 Element를 찾을 수 없습니다.`);

          return;
        }

        return <Component key={key} signals={signals} channels={channels} {...rest} />;
      })}
    </div>
  );
};

export default Scenes;
