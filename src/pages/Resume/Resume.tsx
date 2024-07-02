import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Button, Paper } from '@mui/material';

import { ResumeData } from '../../mockData/resume/data';
import styles from './Resume.module.css';
import { PdfViewer } from '../../components/PdfViewer';
import { tokens } from '../../styles/tokens';

const Resume = () => {
  const portfolioId = useOutletContext();
  const data = ResumeData.find((item) => item.id === portfolioId);

  const [displayButton, setDisplayButton] = useState('none');

  return (
    <Paper
      variant="outlined"
      className={styles.root}
      onMouseEnter={() => setDisplayButton('display')}
      onMouseLeave={() => setDisplayButton('none')}
    >
      {data?.fileUrl && (
        <Button
          LinkComponent="a"
          href={data.fileUrl}
          target="_blank"
          download={`${data?.fileName ?? 'Resume'}.pdf`}
          variant="outlined"
          size="small"
          className={styles.downButton}
          sx={{
            display: displayButton,
            top: { md: '120px', sm: '275px', xs: '268px' },
            right: { md: '6%', sm: '55px', xs: '30px' },
            color: tokens.color.blue9,
            borderColor: tokens.color.blue9,
          }}
        >
          이력서 다운로드
        </Button>
      )}
      {data?.fileUrl && <PdfViewer url={data.fileUrl} />}
    </Paper>
  );
};

export default Resume;
