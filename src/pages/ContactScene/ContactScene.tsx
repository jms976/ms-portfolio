import { Paper } from '@mui/material';
import { MailOutline, LocationOn, PhoneIphone, ContactPage } from '@mui/icons-material';

import { Scenes } from '../../scenes';
import { SceneType } from '../../scenes/types/scene';
import { Signals } from '../../scenes/types/signals';

import styles from './ContactScene.module.css';

const ContactScene = () => {
  // "/scene/1"
  const scene: SceneType = {
    id: 1,
    layout: {
      top: '0px',
      left: '0px',
    },
    elements: [
      {
        type: 'Title',
        title: 'Contact Me',
        layout: {
          // top: '10px',
          // left: '100px',
        },
      },
      {
        type: 'Contact',
        layout: {
          width: '100%',
          height: '100%',
        },
        content: [
          {
            value: { channelId: 101 },
            icon: <MailOutline fontSize="large" />,
            component: 'a',
            hrefPrefix: `mailto:`,
          },
          {
            value: { channelId: 102 },
            icon: <LocationOn fontSize="large" />,
            component: 'a',
            hrefPrefix: 'https://map.naver.com/p/search/',
          },
          {
            value: { channelId: 103 },
            icon: <PhoneIphone fontSize="large" />,
            component: 'a',
            hrefPrefix: 'sms:',
          },
          {
            value: { channelId: 104 },
            download: { channelId: 105 },
            icon: <ContactPage fontSize="large" />,
            component: 'a',
          },
        ],
      },
    ],
  };

  // "/channels?ids=101,102,103,104,105"
  const channels = [
    { id: 101, name: 'E-mail' },
    { id: 102, name: 'Adress' },
    { id: 103, name: 'Cell' },
    { id: 104, name: 'Resume' },
    { id: 105, name: 'resumePath' },
  ];

  // "/signals?ids="101,102,103,104,105"
  // "/signals?ids="101,102,103,104,105&start=2024-06...&end=2024-07..."
  const signals: Signals<string> = {
    101: [{ value: 'myungsujang89@gmail.com', timestamp: '2024-07-29 10:00:00' }],
    102: [{ value: '서울시 마포구 도화동', timestamp: '2024-07-29 10:00:00' }],
    103: [{ value: '01033719178', timestamp: '2024-07-29 10:00:00' }],
    104: [{ value: '이력서_장명수(FE developer).pdf', timestamp: '2024-07-29 10:00:00' }],
    105: [{ value: '/assets/pdf/resume.pdf', timestamp: '2024-07-29 10:00:00' }],
  };

  return (
    <Paper
      variant="outlined"
      className={styles.root}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: { xs: 'calc(100vh - 236px)', sm: 'calc(100vh - 268px)', md: 'auto' },
      }}
    >
      <Scenes scene={scene} channels={channels} signals={signals} />
    </Paper>
  );
};

export default ContactScene;
