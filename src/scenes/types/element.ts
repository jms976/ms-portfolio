import { ReactElement } from 'react';
import { ChannelMetaType, Channels } from './channel';
import { Signals, SignalValueType } from './signals';

export interface ElementLayout {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: string;
  height?: string;
  aspectRatio?: string;
}

interface Element {
  type: string;
  layout?: ElementLayout;
}

export interface TitleElement extends Element {
  type: 'Title';
  title: string;
  subtitle?: string;
  lineGap?: string;
}

export interface TextElement extends Element {
  type: 'Text';
  text: string;
}

export interface ContactElement extends Element {
  type: 'Contact';
  content?: {
    value: ChannelMetaType;
    download?: ChannelMetaType;
    icon?: ReactElement;
    component?: keyof JSX.IntrinsicElements;
    hrefPrefix?: string;
  }[];
}

export type ElementComponentType = TitleElement | TextElement | ContactElement;

type ExtractByType<T, U> = T extends { type: U } ? T : never;

export type ElementType<
  T extends ElementComponentType['type'],
  U extends ElementComponentType[] = ElementComponentType[],
> = ExtractByType<U[number], T>;

export type ElementComponentProps<T = SignalValueType> = {
  signals?: Signals<T>;
  channels?: Channels;
};
