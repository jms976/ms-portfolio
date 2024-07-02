import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Skeleton, useMediaQuery, useTheme } from '@mui/material';

import useWindowSize from './hooks/useWindowSize';
import styles from './Pdfviewer.module.css';

type PdfViewerProps = {
  url: string;
};

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfViewer = (props: PdfViewerProps) => {
  const { url } = props;

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

  const windowSize = useWindowSize();

  const [numPages, setNumPages] = useState(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <Document
      file={url}
      className={`${styles.documentWrapper} ${theme.palette.mode === 'dark' && styles.darkDocument}`}
      onLoadSuccess={onDocumentLoadSuccess}
      renderMode="canvas"
      loading={<Skeleton variant="rounded" width="100%" height="100%" />}
    >
      {Array.from(new Array(numPages), (_, index) => (
        <div key={index} className={styles.pdfWrapper}>
          <Page
            width={windowSize.width * (isDesktop ? 0.7 : 1) - (isTablet ? 88 : 0) - (isMobile ? 40 : 0)}
            pageNumber={index + 1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </div>
      ))}
    </Document>
  );
};

export default PdfViewer;
