'use client'
import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SvgIcon from "@mui/material/SvgIcon";
import {useUser} from '@auth0/nextjs-auth0/client';

import NotificationIcon from '../_icons/notification.svg';
import TodoCheckIcon from '../_icons/todoCheck.svg';


export default () => {
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
            width: '20ch',
            '&:focus': {
                width: '30ch',
            },
            // },
        },
    }));

    const {user, error, isLoading} = useUser();

    return (
        // <Box sx={{ flexGrow: 1 }}>
        <AppBar
            position="sticky"
            color="yellow"
            elevation={0}
        >
            <Toolbar>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        // placeholder="Search…"
                        inputProps={{'aria-label': 'search'}}
                    />
                </Search>
                <Box sx={{flexGrow: 1}}/>
                {
                    user ?
                        <>
                            <IconButton
                                href={"/notifications"}
                                sx={{
                                    marginX: "0.5rem",
                                }}
                            >
                                <SvgIcon>
                                    <NotificationIcon/>
                                </SvgIcon>
                            </IconButton>
                            <IconButton
                                href={"todo"}
                                sx={{
                                    marginX: "0.5rem"
                                }}
                            >
                                <SvgIcon>
                                    <TodoCheckIcon/>
                                </SvgIcon>
                            </IconButton>
                        </>
                        :
                        <>
                            <Button
                                color="primary"
                                variant="outlined"
                                disableElevation={true}
                                size="small"
                                href={'/api/auth/login'}
                                sx={{
                                    backgroundColor: "#FFFFFF",
                                    marginX: "0.5rem",
                                }}
                            >
                                会員登録
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                disableElevation={true}
                                size="small"
                                href={'/api/auth/login'}
                                sx={{
                                    marginX: "0.5rem"
                                }}
                            >
                                ログイン
                            </Button>
                        </>
                }
            </Toolbar>
        </AppBar>
        // </Box>
    )
        ;
}