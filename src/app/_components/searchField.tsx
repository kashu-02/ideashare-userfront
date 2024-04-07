'use client'
import type * as React from 'react';
import {styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

interface Props{
    value: string;
    onChange: (arg1: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    borderWidth: 10,
    borderColor: "#707070",
    backgroundColor: "#E2E2E2",
    // '&:hover': {
    //     backgroundColor: alpha(theme.palette.common.white, 0.25),
    // },
    marginLeft: 0,
    // marginRight: theme.spacing(2),
    // width: '100%',
    width: '50%',
    [theme.breakpoints.up('sm')]: {
        // marginLeft: theme.spacing(3),
        width: '400px',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        // [theme.breakpoints.up('sm')]: {
        width: '15ch',
        '&:focus': {
            width: '30ch',
        },
        // },
    },
}));

export default function SearchField(props : Props){
    return (
        <Search>
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
        <StyledInputBase
            inputProps={{'aria-label': 'search'}}
            value={props.value}
            onChange={props.onChange}
        />

    </Search>
    )
}