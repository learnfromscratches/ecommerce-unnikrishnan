import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSmall(props) {
    const [age, setAge] = React.useState('');
  
    const handleChange = event => {
      setAge(event.target.value);
    };
  
    return (
      <FormControl sx={{ m: 1.8, minWidth: 250 }} size="small">
        <InputLabel ></InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={age}
          label="sort"
          onChange={handleChange}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}>Newest first</MenuItem>
          <MenuItem value={20}>Price low to high</MenuItem>
          <MenuItem value={30}>Price high to low</MenuItem>
        </Select>
      </FormControl>
    );
  }