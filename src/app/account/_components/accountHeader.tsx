'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";

import Pencil from '../_icons/pencil.svg'


export default () => {
    const router = useRouter()
    return (
        <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        width={'100vw'}
        padding={'2rem'}
        sx={{
            backgroundColor: 'secondary.main'
        }}
        >
            <Avatar
                alt="Remy Sharp"
                src=""
                sx={{ width: '5rem', height: '5rem' }}
            >
                Test
            </Avatar>
            <Typography
                color={"white"}
            sx={{
                marginTop: '1rem'
            }}
            >
                ニックネーム
            </Typography>
            <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            border={'1px solid #FFFFFF'}
            borderRadius={9999}
            padding={'0.2rem 0.5rem'}
            >
                <SvgIcon
                    sx={{
                        fontSize: '0.8rem'
                    }}
                >
                    <Pencil />
                </SvgIcon>

                <Typography
                    color={"white"}
                    variant={'caption'}
                    align={'center'}
                    sx={{
                        marginLeft: 1
                    }}
                >
                    設定
                </Typography>
            </Box>
        </Box>
    )
}