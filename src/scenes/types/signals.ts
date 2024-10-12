import { ChannelId } from './channel';

export type SignalValueType = string | number | number[] | number[][];

export type SignalDataType<T = SignalValueType> = {
  value: T;
  timestamp: string;
};

export type Signals<T = SignalValueType> = Record<ChannelId, SignalDataType<T>[]>;
