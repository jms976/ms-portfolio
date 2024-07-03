import { useLayoutEffect, useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Button, Paper } from '@mui/material';

import { ResumeData } from '../../mockData/resume/data';
import { PdfViewer } from '../../components/PdfViewer';
import { tokens } from '../../styles/tokens';
import styles from './Resume.module.css';

const Resume = () => {
  const portfolioId = useOutletContext();
  const data = ResumeData.find((item) => item.id === portfolioId);

  const pdfRef = useRef<HTMLDivElement>(null);

  const [displayButton, setDisplayButton] = useState('none');
  const [scrollTop, setScrollTop] = useState(0);
  const [buttonRight, setButtonRight] = useState(0);

  const setDesktopButtonRight = () => {
    if (!pdfRef.current) return;
    const pdfRect = pdfRef.current.getBoundingClientRect();
    setButtonRight(window.innerWidth - (pdfRect.left + pdfRect.width - 30));
  };

  const handleScroll = () => {
    setDisplayButton('none');
    setScrollTop(window.scrollY);
  };
  const handleScrollend = () => setDisplayButton('display');

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scrollend', handleScrollend);
    return () => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('scrollend', handleScrollend);
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('resize', setDesktopButtonRight);
    return () => {
      window.addEventListener('resize', setDesktopButtonRight);
    };
  }, []);

  return (
    <Paper
      variant="outlined"
      className={styles.root}
      onMouseEnter={() => {
        setDesktopButtonRight();
        setDisplayButton('display');
      }}
      onMouseLeave={() => setDisplayButton('none')}
      onTouchStart={() => {
        setDesktopButtonRight();
        setDisplayButton('display');
      }}
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
            top: {
              md: `${scrollTop < 120 ? 120 - scrollTop : 80}px`,
              sm: `${scrollTop < 275 ? 275 - scrollTop : 80}px`,
              xs: `${scrollTop < 268 ? 268 - scrollTop : 70}px`,
            },
            right: { md: buttonRight, sm: '55px', xs: '30px' },
            color: tokens.color.blue9,
            borderColor: tokens.color.blue9,
          }}
        >
          이력서 다운로드
        </Button>
      )}
      {data?.fileUrl && <PdfViewer ref={pdfRef} url={data.fileUrl} />}
    </Paper>
  );
};

export default Resume;
