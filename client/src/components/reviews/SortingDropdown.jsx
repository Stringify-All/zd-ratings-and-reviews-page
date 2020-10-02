import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
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

  const setSelector = (event) => {
    setSelected(event.target.innerText);
    props.setDropdownValue(event.target.innerText);
  };

  return (

    <Dropdown>
      <Dropdown.Toggle size="sm" className="nav-link" variant="light" id="dropdown-basic">
        {selected}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/relevance" onClick={setSelector} value="relevance">relevance</Dropdown.Item>
        <Dropdown.Item href="#/helpfulness" onClick={setSelector} value="helpfulness">helpfulness</Dropdown.Item>
        <Dropdown.Item href="#/newest" onClick={setSelector} value="newest">newest</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortingDropdown;
