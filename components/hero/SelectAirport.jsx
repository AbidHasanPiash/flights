'use client'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SelectAirport({flightOptions}) {
    const [value, setValue] = useState(flightOptions[0]);
    const [inputValue, setInputValue] = useState('');
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
        className='w-full ring-0 border-0 outline-none'
        renderInput={(params) => <TextField {...params} />}
    />
  )
}
