import { ColorTokens, FontSizeTokens, FontWeightTokens, tokens } from '../../../styles/tokens';
import { ElementLayout } from '../../types/element';

import styles from './Text.module.css';

export type TextProps = {
  text: string;
  size?: FontSizeTokens;
  fontWeight?: FontWeightTokens;
  color?: ColorTokens;
  layout?: ElementLayout;
};

const Text = (props: TextProps) => {
  const { text, size, fontWeight, color, layout } = props;

  return (
    <div
      className={styles.text}
      style={{
        ...layout,
        ...(size && { fontSize: tokens.fontSize[size] }),
        ...(fontWeight && { fontWeight: tokens.fontWeight[fontWeight] }),
        ...(color && { color: tokens.color[color] }),
      }}
    >
      {text}
    </div>
  );
};

export default Text;
