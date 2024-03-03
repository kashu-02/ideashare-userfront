"use client"
import {useRef, useState} from 'react';
import { useRouter } from 'next/navigation'
import {useUser} from '@auth0/nextjs-auth0/client';
import dayjs from 'dayjs';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import {styled} from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {DateField} from '@mui/x-date-pickers/DateField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';

export default () => {
    const router = useRouter();
    const {user, error, isLoading} = useUser();
    const [loading, setLoading] = useState(false)
    const nicknameRef = useRef<HTMLInputElement>()
    const [gender, setGender] = useState(0)
    const birthdayRef = useRef<HTMLInputElement>()
    const emailRef = useRef<HTMLInputElement>()
    const addressRef = useRef<HTMLInputElement>()

    const buttonOnClick = async (): Promise<void> => {
        setLoading(true)
        const nickname = nicknameRef.current?.value
        const birthday = birthdayRef.current?.value
        const email = emailRef.current?.value
        const address = addressRef.current?.value
        console.log(nickname, birthday, gender, email, address)

        try {
            const res = await fetch(`${window.location.origin}/api/profile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    address,
                    birthday,
                    nickname,
                    gender,
                    avatar: user?.picture,
                }),
            })
            console.log(await res.json())
            if (res.status === 200) router.replace('/')
        } finally {
          setLoading(false)
        }
    }

    const RegisterButton = styled(Button)<ButtonProps>(({theme}) => ({
        width: '35vw',
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

    const handleSelectChange = (event: SelectChangeEvent): void => {
        setGender(event.target.value as unknown as number);
    };

    return (
        <>
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'80vw'}
                maxWidth={'500px'}
            >
                {user && <Avatar
                    alt=""
                    src={user.picture}
                    sx={{
                        width: '5rem',
                        height: '5rem',
                        marginBottom: '2rem',
                    }}
                />}

                <Grid container rowSpacing={5}>
                    <Grid xs={6} alignItems="center">
                        <Typography
                            sx={{
                                marginRight: '3rem'
                            }}
                        >
                            ニックネーム
                        </Typography>
                    </Grid>
                    <Grid xs={6} alignItems="center">
                        <TextField
                            label=""
                            variant="standard"
                            inputRef={nicknameRef}
                            required
                        />
                    </Grid>

                    <Grid xs={6} alignItems="center">
                        <Typography
                            sx={{
                                marginRight: '3rem'
                            }}
                        >
                            性別
                        </Typography>
                    </Grid>
                    <Grid xs={6} alignItems="center">
                        <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                            <Select
                                value={gender}
                                onChange={handleSelectChange}
                            >
                                <MenuItem value={0}>無回答</MenuItem>
                                <MenuItem value={1}>男性</MenuItem>
                                <MenuItem value={2}>女性</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid xs={6} alignItems="center">
                        <Typography
                            sx={{
                                marginRight: '3rem'
                            }}
                        >
                            生年月日
                        </Typography>
                    </Grid>
                    <Grid xs={6} alignItems="center">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateField
                                defaultValue={dayjs('2000-01-01')}
                                format="YYYY-MM-DD"
                                variant={'standard'}
                                inputRef={birthdayRef}
                            />
                        </LocalizationProvider>
                    </Grid>

                    <Grid xs={6} alignItems="center">
                        <Typography
                            sx={{
                                marginRight: '3rem'
                            }}
                        >
                            メールアドレス
                        </Typography>
                    </Grid>
                    <Grid xs={6} alignItems="center">
                        <TextField
                            label=""
                            variant="standard"
                            inputRef={emailRef}
                        />
                    </Grid>

                    <Grid xs={6} alignItems="center">
                        <Typography
                            sx={{
                                marginRight: '3rem'
                            }}
                        >
                            住所
                        </Typography>
                    </Grid>
                    <Grid xs={6} alignItems="center">
                        <TextField
                            label=""
                            multiline
                            variant="standard"
                            inputRef={addressRef}
                        />
                    </Grid>
                </Grid>
                <RegisterButton
                    onClick={buttonOnClick}
                    disabled={loading}
                    sx={{
                        marginTop: '2rem'
                    }}
                >
                    {loading ? "Loading..." : "登録"}
                </RegisterButton>
            </Box>
        </>
    )
}