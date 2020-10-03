import React, { useState } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const SearchBar = () => {
  const [input, setInput] = useState(null);

  const handleInput = (event) => {
    const inputText = event.target.value;
    if (inputText.length >= 3) {
      setInput(inputText);
    } else {
      setInput(null);
    }
  };

  return (
    <div>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Search</InputLabel>
        <OutlinedInput
          onChange={handleInput}
          labelWidth={60}
        />
      </FormControl>
    </div>
  );
};

export default SearchBar;
