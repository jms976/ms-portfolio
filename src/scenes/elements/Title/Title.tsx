import { ElementLayout } from '../../types/element';

import styles from './Title.module.css';

export type TitleProps = {
  title: string;
  subtitle?: string;
  lineGap?: string;
  layout?: ElementLayout;
};

const Title = (props: TitleProps) => {
  const { title, subtitle, lineGap = '8px', layout } = props;

  return (
    <div
      className={styles.wrapper}
      style={{
        ...layout,
        gap: lineGap,
      }}
    >
      <div className={styles.title}>{title}</div>
      {subtitle && <div className={styles.subTitle}>{subtitle}</div>}
    </div>
  );
};

export default Title;
