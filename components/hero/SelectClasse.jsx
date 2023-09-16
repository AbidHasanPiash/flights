'use client'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SelectClasse({classeOptions}) {
    const [value, setValue] = useState(classeOptions[0]);
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
        options={classeOptions}
        sx={{ ...customStyles }}
        className='w-full'
        renderInput={(params) => <TextField {...params} />}
    />
  )
}
