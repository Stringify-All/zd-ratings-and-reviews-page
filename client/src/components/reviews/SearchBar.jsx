import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const SearchBar = () => (
  <div>
    <FormControl fullWidth variant="outlined">
      <InputLabel>Search</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        /* value={values.amount}
        onChange={handleChange('amount')} */
        /* startAdornment={<InputAdornment position="start"></InputAdornment>} */
        labelWidth={60}
      />
    </FormControl>
  </div>
);

export default SearchBar;
