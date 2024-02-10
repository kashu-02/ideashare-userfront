'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import {CardActionArea} from '@mui/material';
import SvgIcon from "@mui/material/SvgIcon";

import CartItem from './cartItem';

import DetailIcon from '../_icons/detail.svg'
import CatalogIcon from '../../../../_icons/bottom/searchIcon.svg'
import TicketIcon from '@/app/_icons/ticket.jpg'

const CheckoutButton = styled(Button)<ButtonProps>(({theme}) =>({
    width: '25vw',
    maxWidth: 200,
    height: 'auto',
    color: '#FFFFFF',
    backgroundColor: '#00BCD7',
    border: '1px',
    borderColor: '#00BCD7',
    borderRadius: 9999,
    fontSize: '1.3rem',
    '&:hover': {
        backgroundColor: '#00A9C1',
        borderColor: '#0096AC',
        boxShadow: 'none',
    },
}));

export default () => {
    const router = useRouter()
    return (
        <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        width={'80vw'}
        maxWidth={600}
        // border={'1px solid #707070'}
        // borderRadius={4}
        padding={'2rem'}
        >
            <Typography
                variant={'h5'}
                justifySelf={'center'}
            >
                注文内容の確認
            </Typography>
            <Typography
                justifySelf={'center'}
                color={'primary.main'}
                marginBottom={'2rem'}
            >
                注文はまだ確定していません
            </Typography>
            <Box
                width={'100%'}
            >
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                        >
                    <Typography>
                        お届け先
                    </Typography>
                    <Typography
                        // variant={"h6"}
                        justifySelf={'end'}
                    >
                        山田花子　福島県会津若松市一箕町…
                    </Typography>
                    <Typography
                        justifySelf={'end'}
                        color={'secondary.main'}
                    >
                        変更
                    </Typography>
                </Box>
                <CartItem />
                <Divider/>
                <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                >
                    <Typography>
                        消費チケット
                    </Typography>
                    <Typography
                    variant={"h6"}
                    color={'primary.main'}
                    >
                        4000円
                    </Typography>
                </Box>
            </Box>
            <CheckoutButton
                sx={{
                    marginTop: '2rem'
                }}
            >
                注文を確定
            </CheckoutButton>
        </Box>
    )
}