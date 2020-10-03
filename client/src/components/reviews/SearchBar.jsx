import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const SearchBar = () => (
  <div>
    <FormControl fullWidth variant="outlined">
      <InputLabel>Search</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        labelWidth={60}
      />
    </FormControl>
  </div>
);

export default SearchBar;
