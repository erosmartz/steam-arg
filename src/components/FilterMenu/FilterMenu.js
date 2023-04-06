import * as React from 'react';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const FilterMenu = ({ handleSortMethodChange }) => {

  const [alignment, setAlignment] = React.useState('alphabetical');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    handleSortMethodChange(newAlignment);
  };
    

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange} 
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
    </ToggleButtonGroup>
  );
}

export default FilterMenu;