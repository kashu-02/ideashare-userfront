'use client'
import {useState} from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import SvgIcon from "@mui/material/SvgIcon";

import Pencil from '../_icons/pencil.svg'

import {ProfileChangeDialog} from './ProfileChange'

interface Props {
    data: {
        avatar: string;
        nickname: string;
    }
}

export default (props: Props) => {
    const [profileDialogOpen, setProfileDialogOpen] = useState(false)

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
                alt="avatar icon"
                src={props.data?.avatar}
                sx={{width: '5rem', height: '5rem'}}
            >
                {props.data?.nickname || ""}
            </Avatar>
            <Typography
                color={"#FFFFFF"}
                sx={{
                    marginTop: '1rem'
                }}
            >
                {props.data?.nickname || ""}
            </Typography>
            <Button
                onClick={() => setProfileDialogOpen(true)}
            >
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    border={'1px solid #FFFFFF'}
                    borderRadius={9999}
                    padding={'0.2rem 0.5rem'}
                    marginTop={'1rem'}
                >
                    <SvgIcon
                        sx={{
                            fontSize: '0.8rem'
                        }}
                    >
                        <Pencil/>
                    </SvgIcon>
                    <Typography
                        color={"#FFFFFF"}
                        variant={'caption'}
                        align={'center'}
                    >
                        設定
                    </Typography>
                </Box>
            </Button>
            <ProfileChangeDialog
                open={profileDialogOpen}
                user={props.data}
                handleClose={() => setProfileDialogOpen(false)}
            />
        </Box>
    )
}