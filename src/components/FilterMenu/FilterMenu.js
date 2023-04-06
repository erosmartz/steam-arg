import * as React from 'react';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const FilterMenu = () => {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      size='small'
    >
      <ToggleButton value="left" aria-label="left aligned">
        <SortByAlphaIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <AttachMoneyIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <StarHalfIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default FilterMenu;