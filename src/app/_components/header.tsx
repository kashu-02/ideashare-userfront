'use client'
import {useState, useCallback} from "react";
import type * as React from 'react';
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SvgIcon from "@mui/material/SvgIcon";
import {useUser} from '@auth0/nextjs-auth0/client';

import NotificationIcon from '../_icons/notification.svg';
import TodoCheckIcon from '../_icons/todoCheck.svg';

import SearchField from './searchField';

interface Props {
    doSearch: (arg1: string) => void;
}
export default function HomeHeader(props : Props) {
    const [searchKeyword, setSearchKeyword] = useState("")
    const searchKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(event.target.value)
        props.doSearch(event.target.value)
    }


    const {user, error, isLoading} = useUser();

    return (
        // <Box sx={{ flexGrow: 1 }}>
        <AppBar
            position="sticky"
            color="yellow"
            elevation={0}
        >
            <Toolbar>
                <SearchField value={searchKeyword} onChange={searchKeywordChange} />
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