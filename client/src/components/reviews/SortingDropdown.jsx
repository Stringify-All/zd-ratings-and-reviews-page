/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const SortingDropdown = ({ setDropdownValue }) => {
  const [selected, setSelected] = useState('relevance');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setSelector = (event) => {
    setSelected(event.target.innerText);
    setDropdownValue(event.target.innerText);
    handleClose();
  };

  return (
    <>
      <button className="zd-helper-button-large" type="button" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {selected}
      </button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="px-2">
          <MenuItem onClick={setSelector} value="relevance">relevance</MenuItem>
        </div>
        <div className="px-2">
          <MenuItem onClick={setSelector} value="helpfulness">helpfulness</MenuItem>
        </div>
        <div className="px-2">
          <MenuItem onClick={setSelector} value="newest">newest</MenuItem>
        </div>
      </Menu>
    </>
  );
};

export default SortingDropdown;
