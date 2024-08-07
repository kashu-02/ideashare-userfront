'use client'
import * as React from 'react';
import { usePathname } from "next/navigation";
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import SvgIcon from "@mui/material/SvgIcon";
import NextLink from "next/link";
import {useRouter} from 'next/navigation';

import HomeIcon from '../_icons/bottom/homeIcon.svg'
import SearchIcon from '../_icons/bottom/searchIcon.svg'
import CartIcon from '../_icons/bottom/cartIcon.svg'
import AccountIcon from '../_icons/bottom/accountIcon.svg'


export default () => {
    const pathName = usePathname();
    const router = useRouter();
    const path = `/${pathName.split("/")[1]}`
    const [value, setValue] = React.useState(path);

    const cartClick = () =>{
        router.push('/cart')
        router.refresh();
    }
    return (
        <Box sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 998,
            borderTop: '1px solid #707070'
        }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    value="/"
                    LinkComponent={NextLink}
                    href="/"
                    label="ホーム"
                    icon={
                    <SvgIcon>
                        <HomeIcon />
                    </SvgIcon>
                    }
                    sx={path === "/" ? {borderTop: '1.5px solid #FF905D'} : {}}
                />
                <BottomNavigationAction
                    value="/catalogs"
                    LinkComponent={NextLink}
                    href="/catalogs"
                    label="さがす"
                    icon={
                    <SvgIcon>
                        <SearchIcon />
                    </SvgIcon>
                    }
                    sx={path === "/catalogs" ? {borderTop: '1.5px solid #FF905D'} : {}}
                />
                <BottomNavigationAction
                    value="/cart"
                    LinkComponent={NextLink}
                    label="カート"
                    onClick={cartClick}
                    icon={
                    <SvgIcon>
                        <CartIcon />
                    </SvgIcon>
                    }
                    sx={path === "/cart" ? {borderTop: '1.5px solid #FF905D'} : {}}
                />
                <BottomNavigationAction
                    value="/account"
                    LinkComponent={NextLink}
                    href={"/account"}
                    label="アカウント"
                    icon={
                    <SvgIcon>
                        <AccountIcon />
                    </SvgIcon>
                    }
                    sx={path === "/account" ? {borderTop: '1.5px solid #FF905D'} : {}}
                />
            </BottomNavigation>
        </Box>
    );
}