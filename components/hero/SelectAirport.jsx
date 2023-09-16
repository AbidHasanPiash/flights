'use client'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SelectAirport({flightOptions}) {
    const [value, setValue] = useState(flightOptions[0]);
    const [inputValue, setInputValue] = useState('');

    const customStyles = {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
        "&:focus .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
      };
  return (
    <Autocomplete
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={flightOptions}
        sx={{ ...customStyles }}
        className='w-full'
        renderInput={(params) => <TextField {...params} />}
    />
  )
}
