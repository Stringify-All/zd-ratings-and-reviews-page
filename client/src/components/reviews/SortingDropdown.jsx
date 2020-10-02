import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';

const DropButton = styled.button`
cursor: pointer;
padding: 0px 0px;
color: #5eaaa8;
background: transparent;
border: 0px;
font-size: 16px;
border-radius: 0px;
outline: none !important;

&:hover {
  background-color: transparent;
  border: 0px;
  textDecoration: none;
  color: black;
  box-shadow: 0 0px;
`;

const SortingDropdown = (props) => {
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
    props.setDropdownValue(event.target.innerText);
    handleClose();
  };

  return (
    <>
      <DropButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {selected}
      </DropButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={setSelector} value="relevance">relevance</MenuItem>
        <MenuItem onClick={setSelector} value="helpfulness">helpfulness</MenuItem>
        <MenuItem onClick={setSelector} value="newest">newest</MenuItem>
      </Menu>
    </>
  );
};

export default SortingDropdown;
