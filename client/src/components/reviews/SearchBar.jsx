/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const SearchBar = ({ handleSearchInput }) => {
  const [input, setInput] = useState(null);

  const handleInput = (event) => {
    const inputText = event.target.value.toLowerCase();
    if (inputText.length >= 3) {
      setInput(inputText);
      handleSearchInput(inputText);
    } else {
      setInput(null);
      handleSearchInput(null);
    }
  };

  return (
    <div>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Search</InputLabel>
        <OutlinedInput
          onChange={handleInput}
          labelWidth={60}
          multiline
          rows={2}
        />
      </FormControl>
    </div>
  );
};

export default SearchBar;
