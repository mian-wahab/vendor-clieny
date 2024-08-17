import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  borderRadius: '24px',
  boxShadow: 24,
  p: 4,
};
interface KeepMountedModal {
    open:boolean;
    setOpen: (open: boolean) => void;
    content: React.ReactElement;
}
export default function KeepMountedModal({open, setOpen, content}: KeepMountedModal) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
         {content}
        </Box>
      </Modal>
    </div>
  );
}
