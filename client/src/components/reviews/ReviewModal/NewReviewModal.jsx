import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

import styled from 'styled-components';
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

const FormDiv = styled.div`
  height: 600px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
`;

const ModalTitle = styled.h2`
  font-family: 'Robertson Alternate';
  src: url('../../resources/Robertson-Alternate.ttf') format('truetype');
  font-weight: normal;
  color: red;
  font-size: 60px;
  margin-left: 0px;
  padding-left: 0px;
`;

const NewReviewModal = (props) => {
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
            <FormDiv>
              <div className={classes.paper}>
                <ModalTitle>Submit a Review</ModalTitle>
                <p id="review-modal-description">Let us know what you thought about the product</p>
                <ModalForm product={props.product} />
              </div>
            </FormDiv>
          </Fade>
        </Modal>
      </ThemeProvider>
    </div>
  );
};

export default NewReviewModal;
