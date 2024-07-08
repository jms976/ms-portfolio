import { PropsWithChildren } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { DialogProps } from '@mui/material/Dialog';

import styles from './DialogBase.module.css';
import { Close } from '@mui/icons-material';

type ButtonType = {
  text: string;
  onClick: () => void;
};

type DialogBaseProps = {
  title?: string;
  className?: string;
  visable?: boolean;
  primaryButton?: ButtonType;
  secondaryButton?: ButtonType;
  isCloseButton?: boolean;
} & Omit<DialogProps, 'open'>;

const DialogBase = (props: PropsWithChildren<DialogBaseProps>) => {
  const {
    title,
    scroll,
    className,
    primaryButton,
    secondaryButton,
    children,
    onClose,
    visable = false,
    isCloseButton = true,
    ...rest
  } = props;

  return (
    <Dialog open={visable} scroll={scroll} PaperProps={{ className: `${className} ${styles.root}` }} {...rest}>
      {title && (
        <DialogTitle id="dialog-title" className={styles.dialogTitle} sx={{ fontSize: { xs: '1em', md: '1.3em' } }}>
          {title}
          {isCloseButton && (
            <IconButton onClick={(event) => onClose?.(event, 'backdropClick')}>
              <Close />
            </IconButton>
          )}
        </DialogTitle>
      )}
      <DialogContent>{children}</DialogContent>
      {(primaryButton || secondaryButton) && (
        <DialogActions>
          {primaryButton && <Button onClick={primaryButton.onClick}>{primaryButton.text}</Button>}
          {secondaryButton && <Button onClick={secondaryButton.onClick}>{secondaryButton.text}</Button>}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default DialogBase;
