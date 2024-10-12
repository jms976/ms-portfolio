export type ChannelId = number;

export type ChannelMetaType = {
  channelId: ChannelId;
};

export type ChannelDataType = {
  id: ChannelId;
  name: string;
};

export type Channels = ChannelDataType[];
