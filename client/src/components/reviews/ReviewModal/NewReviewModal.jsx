import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

import theme from '../../theme';
import ModalForm from './ModalForm.jsx';

const useStyles = makeStyles((modalTheme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: modalTheme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: modalTheme.shadows[5],
    padding: modalTheme.spacing(2, 4, 3),
    width: '600px',
    height: '600px',
  },
}));

const NewReviewModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>

        <Button variant="outlined" color="primary" onClick={handleOpen}>
          Add Review +
        </Button>
        <Modal
          aria-labelledby="review-modal-title"
          aria-describedby="review-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="review-modal-title">Submit a review</h2>
              <p id="review-modal-description">react-transition-group animates me.</p>
              <ModalForm />
            </div>
          </Fade>
        </Modal>
      </ThemeProvider>
    </div>
  );
};

export default NewReviewModal;
