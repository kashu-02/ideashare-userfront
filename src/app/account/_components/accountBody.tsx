'use client'
import * as React from 'react';
import Image from 'next/image'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {styled} from '@mui/material/styles';
import Button, {ButtonProps} from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import {useRouter} from 'next/navigation'

import {CardActionArea} from "@mui/material";
import TicketIcon from "@/app/_icons/ticket.jpg";
import PointIcon from "../_icons/point.webp";
import PointGrayIcon from "../_icons/point_gray.webp";
import Divider from "@mui/material/Divider";

import TicketGetDialog from "./ticketGetDialog";
import {useState} from "react";

const GetTicketButton = styled(Button)<ButtonProps>(({theme}) => ({
    minWidth: 0,
    color: 'primary.main',
    boxShadow: 'none',
    border: '2px solid',
    borderColor: 'primary.main',
    borderRadius: 9999,
    padding: 5,
    marginTop: '1rem',
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: '#FFC8AC',
    },
}));


export default (props: { catalogName: string }) => {
    const router = useRouter()
    const [ticketDialogState, setTicketDialogState] = React.useState(false)


    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            width={'80vw'}
            maxWidth={600}
            marginY={'2rem'}
            marginX={'auto'}
        >
            <Box
                display="flex"
                justifyContent={'space-between'}
                alignItems={'center'}
                width='100%'
            >
                <Typography>
                    1000円チケット
                </Typography>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                >
                    <Image
                        src={TicketIcon}
                        alt={'ticket'}
                        width={151}
                        height={73}
                        sizes="4rem"
                        style={{
                            width: '100%',
                            height: 'auto',
                            border: '1px solid #707070'
                        }}
                    />
                    <Box
                        border={1}
                        borderColor={'secondary.main'}
                        borderRadius={9999}
                        marginLeft={1}
                        padding={'0.1rem 1rem 0.1rem 1rem'}
                    >
                        <Typography
                            color={'secondary.main'}
                        >
                            ×6
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Divider
                flexItem
                sx={{
                    marginTop: '1rem',
                    marginBottom: '2rem',
                }}
            />
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Typography
                sx={{
                    marginRight: 'auto'
                }}
                >
                    ポイント
                </Typography>
                <Box
                    border={'2px solid #707070'}
                    borderRadius={14}
                    padding={'1rem'}
                >
                    <Grid container rowSpacing={2} columnSpacing={4} columns={10}>
                        {Array.from(Array(7)).map((_, index) =>
                            <Grid xs={2} key={index}>
                                <Image
                                    src={PointIcon}
                                    alt={'point'}
                                    width={1032}
                                    height={1025}
                                    sizes='3rem'
                                    style={{
                                        width: '100%',
                                        height: 'auto'
                                    }}
                                />
                            </Grid>
                        )}
                        {Array.from(Array(3)).map((_, index) =>
                            <Grid xs={2} key={index}>
                                <Image
                                    src={PointGrayIcon}
                                    alt={'point gray'}
                                    width={1032}
                                    height={1025}
                                    sizes='3rem'
                                    style={{
                                        width: '100%',
                                        height: 'auto'
                                    }}
                                />
                            </Grid>
                        )}
                    </Grid>
                </Box>
                <GetTicketButton
                    onClick={() => setTicketDialogState(true)}
                >
                    1000円チケットをGETしよう！
                    <TicketGetDialog open={ticketDialogState} onClose={() => setTicketDialogState(false)}/>
                </GetTicketButton>
                <Typography
                    variant={'caption'}
                    align={'center'}
                    color={'#707070'}
                    sx={{
                        marginTop: 1,
                        marginBottom: '3rem'
                    }}
                >
                    チケットゲットまであと3000円分のレビュー！
                </Typography>
            </Box>
            <Divider
                flexItem
                sx={{
                    marginBottom: '2rem',
                }}
            />
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                width='100%'
            >
                <Typography>
                    詳細情報
                </Typography>
                <Typography>
                    非公開
                </Typography>
            </Box>
        </Box>
    )
}