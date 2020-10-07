/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
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
    border: '2px solid #a29b93',
    boxShadow: modalTheme.shadows[5],
    padding: modalTheme.spacing(2, 4, 3),
    width: '650px',
    height: '800px',
  },
}));

const NewReviewModal = ({ product }) => {
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
            <div className="zd-review-list">
              <div className={classes.paper}>
                <h2>Submit a Review</h2>
                <p id="review-modal-description">Let us know what you thought about the product</p>
                <ModalForm product={product} />
              </div>
            </div>
          </Fade>
        </Modal>
      </ThemeProvider>
    </div>
  );
};

export default NewReviewModal;
