import * as React from 'react';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ClearIcon from '@mui/icons-material/Clear';

const FilterMenu = ({ onFilterChange }) => {
  const [filterOption, setFilterOption] = React.useState('');

  const handleFilterChange = (event, newFilterOption) => {
    if (newFilterOption !== null) {
      console.log(newFilterOption);
      setFilterOption(newFilterOption);
      onFilterChange(newFilterOption);
    }
  };

  return (
    <ToggleButtonGroup
      value={filterOption}
      exclusive
      onChange={handleFilterChange}
      aria-label="text alignment"
      size='small'
    >
      <ToggleButton value="alphabetical" aria-label="sort by alphabetical order">
        <SortByAlphaIcon />
      </ToggleButton>
      <ToggleButton value="price" aria-label="sort by price">
        <AttachMoneyIcon />
      </ToggleButton>
      <ToggleButton value="rating" aria-label="sort by rating">
        <StarHalfIcon />
      </ToggleButton>
      <ToggleButton value="" aria-label="clear sorting method">
        <ClearIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default FilterMenu;