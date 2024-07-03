import { forwardRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Skeleton, useMediaQuery, useTheme } from '@mui/material';

import { DeferredComponent } from '../DefferredComponent';
import useWindowSize from './hooks/useWindowSize';
import styles from './Pdfviewer.module.css';

type PdfViewerProps = {
  url: string;
};

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfViewer = forwardRef<HTMLDivElement, PdfViewerProps>((props, forwardRef) => {
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

  const ResumeSkeleton = () => (
    <DeferredComponent delay={500}>
      <Skeleton variant="rounded" width="calc(100% - 40px)" height="200px" sx={{ margin: '20px' }} />
      <Skeleton variant="rounded" width="calc(100% - 40px)" height="200px" sx={{ margin: '20px' }} />
      <Skeleton variant="rounded" width="calc(100% - 40px)" height="200px" sx={{ margin: '20px' }} />
      <Skeleton variant="rounded" width="calc(100% - 40px)" height="200px" sx={{ margin: '20px' }} />
    </DeferredComponent>
  );

  return (
    <div ref={forwardRef}>
      <Document
        file={url}
        className={`${styles.documentWrapper} ${theme.palette.mode === 'dark' && styles.darkDocument}`}
        onLoadSuccess={onDocumentLoadSuccess}
        renderMode="canvas"
        loading={<ResumeSkeleton />}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <div key={index} className={styles.pdfWrapper}>
            <Page
              width={windowSize.width * (isDesktop ? 0.6 : 1) - (isTablet ? 120 : 0) - (isMobile ? 80 : 0)}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </div>
        ))}
      </Document>
    </div>
  );
});

export default PdfViewer;
