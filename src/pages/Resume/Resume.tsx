import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Paper } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';

import useWindowSize from './hooks/useWindowSize';
import { ResumeData } from '../../mockData/resume/data';
import styles from './Resume.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = useState(0);

  const windowSize = useWindowSize();

  const portfolioId = useOutletContext();
  const data = ResumeData.find((item) => item.id === portfolioId);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <Paper variant="outlined" className={styles.root}>
      <Document file={data?.fileUrl} className={styles.documentWrapper} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (_, index) => (
          <div key={index} className={styles.pdfWrapper}>
            <Page
              width={windowSize.width * 0.7}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </div>
        ))}
      </Document>
    </Paper>
  );
};

export default Resume;
