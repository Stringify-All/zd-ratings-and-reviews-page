import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((modalTheme) => ({
  root: {
    '& > *': {
      margin: modalTheme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const ImageUploader = (props) => {
  const [images, setImages] = useState('https://rb.gy/2ek2it');
  const classes = useStyles();

  const handleImageUpload = (event) => {
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    console.log(imageUrl);
    setImages(imageUrl);
    props.setImages(imageUrl);
  };

  return (
    <div className="m-5">
      <FormLabel component="legend">Upload photos</FormLabel>
      <input accept="image/*" className={classes.input} id="icon-button-file" multiple type="file" onChange={handleImageUpload} />
      <FormLabel htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </FormLabel>
      <img alt="silly sea lion" src={images} width="100" height="100" />
    </div>
  );
};

export default ImageUploader;
