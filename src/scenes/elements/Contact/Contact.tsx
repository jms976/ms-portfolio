import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { ContactElement, ElementComponentProps } from '../../types/element';

import styles from './Contact.module.css';

export type ContactProps = Omit<ContactElement, 'type'> & ElementComponentProps<string>;

const Contact = (props: ContactProps) => {
  const { layout, content, signals = {}, channels = [] } = props;

  return (
    <div className={styles.wrapper} style={{ ...layout }}>
      <Box className={styles.contact} sx={{ margin: 'auto' }}>
        <List>
          {content?.map(({ value, icon, component, hrefPrefix, download = {} }) => {
            const { channelId } = value;
            const { channelId: downloadChannelId } = download;

            const name = channels.find(({ id }) => id === channelId)?.name;

            const data = signals?.[channelId]?.at(0);
            const downlaodUrl = downloadChannelId && signals?.[downloadChannelId]?.at(0);

            const Icon = () => icon;

            return (
              <ListItem
                key={channelId}
                className={styles.contactItem}
                component={component ?? 'a'}
                href={downlaodUrl ? downlaodUrl.value : `${hrefPrefix}${data?.value}`}
                {...(component === 'a' && { target: '_blank' })}
                {...(downlaodUrl && { download: data?.value })}
              >
                <ListItemIcon sx={{ marginBottom: '18px', marginRight: '-10px', color: 'color.icon' }}>
                  {icon && <Icon />}
                </ListItemIcon>
                <ListItemText
                  primary={name}
                  secondary={data?.value ?? '-'}
                  primaryTypographyProps={{ color: 'color.iconText', fontSize: '20px' }}
                  secondaryTypographyProps={{ color: 'color.icon', fontSize: '16px' }}
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </div>
  );
};

export default Contact;
