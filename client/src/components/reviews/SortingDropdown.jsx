import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const SortingDropdown = (props) => {
  const [selected, setSelected] = useState('relevance');

  const setSelector = (event) => {
    setSelected(event.target.innerText);
    props.setDropdownValue(event.target.innerText);
  };

  return (

    <Dropdown>
      <Dropdown.Toggle size="sm" variant="neutral" id="dropdown-basic">
        {selected}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={setSelector} value="relevance">relevance</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={setSelector} value="helpfulness">helpfulness</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={setSelector} value="newest">newest</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortingDropdown;
