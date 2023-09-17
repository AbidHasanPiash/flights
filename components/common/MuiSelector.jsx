// Import necessary modules and components
'use client'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// A custom component for selecting options using Material-UI Autocomplete
export default function MuiSelector({ Options }) {
    // State variables for tracking the selected value and user input
    const [value, setValue] = useState(Options[0]);
    const [inputValue, setInputValue] = useState('');

    // Custom styles to modify the appearance of the Autocomplete component
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
        // Material-UI Autocomplete component
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
            options={Options}
            sx={{ ...customStyles }}
            className='w-full'
            renderInput={(params) => <TextField {...params} />}
        />
    )
}
