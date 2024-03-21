"use client"
import {useRef, useState} from 'react';
import {useRouter} from 'next/navigation'
import {useUser} from '@auth0/nextjs-auth0/client';
import dayjs from 'dayjs';
import Dialog from '@mui/material/Dialog';
import Container from '@mui/material/Container';
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
import {useSnackbar} from '@/app/_components/snackbar'
import { cookies } from 'next/headers'

interface Props {
    open: boolean;
    handleClose: () => void;
    user: object;
}

export const ProfileChangeDialog = (props: Props) => {
    const user = props.user
    const router = useRouter()
    const {showSnackbar} = useSnackbar()
    const cookieStore = cookies()

    const [avatar, setAvatar] = useState(user?.avatar)
    const [loading, setLoading] = useState(false)
    const nicknameRef = useRef<HTMLInputElement>()
    const nameRef = useRef<HTMLInputElement>()
    const [gender, setGender] = useState(user?.sex)
    const birthdayRef = useRef<HTMLInputElement>()
    const emailRef = useRef<HTMLInputElement>()
    const addressRef = useRef<HTMLInputElement>()

    const changeProfile = async (): Promise<void> => {
        setLoading(true)
        const nickname = nicknameRef.current?.value
        const birthday = birthdayRef.current?.value
        const name = nameRef.current?.value
        const email = emailRef.current?.value
        const address = addressRef.current?.value
        console.log(nickname, birthday, gender, name, email, address)
        if(!nickname){
            showSnackbar('ニックネームを入力してください', 'error')
            return
        }
        if(!name){
            showSnackbar('名前を入力してください', 'error')
            return
        }
        if(!email){
            showSnackbar('メールアドレスを入力してください', 'error')
            return
        }
        if(!address){
            showSnackbar('住所を入力してください', 'error')
            return
        }
        try {
            const res = await fetch(`${window.location.origin}/api/profile`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': cookieStore.toString(),
                },
                body: JSON.stringify({
                    email,
                    address,
                    birthday,
                    name,
                    nickname,
                    gender,
                    avatar,
                }),
            })
            console.log(await res.json())
            if (res.status === 200){
                showSnackbar('アカウント情報を更新しました！', 'success')
                props.handleClose()
            }
        }catch (e){
            console.error(e)
            showSnackbar('アカウント情報の更新に失敗しました', 'error')
        }
        finally {
            setLoading(false)
            router.refresh()
        }
    }

    const handleSelectChange = (event: SelectChangeEvent): void => {
        setGender(event.target.value as unknown as number);
    };

    return (
        <>
            <Dialog
                fullScreen
                open={props.open}
                onClose={props.handleClose}
            >
                <Container maxWidth={'sm'}>
                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        marginTop={'1rem'}
                    >
                        <Button
                            color="secondary"
                            onClick={() => props.handleClose()}
                            sx={{
                                border: "1px solid #00BCD7",
                                borderRadius: '9999px'
                            }}
                        >
                            キャンセル
                        </Button>
                        <Typography>
                            設定
                        </Typography>
                        <Button
                            color="white"
                            disable={loading}
                            onClick={changeProfile}
                            sx={{
                                border: "1px solid #00BCD7",
                                backgroundColor: "#00BCD7",
                                borderRadius: '9999px'
                            }}
                        >
                            変更
                        </Button>
                    </Box>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        marginTop={'2rem'}
                    >
                        {user && <Avatar
                            alt=""
                            src={avatar}
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
                                    defaultValue={user.nickname}
                                    required
                                />
                            </Grid>

                            <Grid xs={6} alignItems="center">
                                <Typography
                                    sx={{
                                        marginRight: '3rem'
                                    }}
                                >
                                    名前
                                </Typography>
                            </Grid>
                            <Grid xs={6} alignItems="center">
                                <TextField
                                    label=""
                                    variant="standard"
                                    inputRef={nameRef}
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
                                        value={String(gender)}
                                        onChange={handleSelectChange}
                                    >
                                        <MenuItem value={"0"}>無回答</MenuItem>
                                        <MenuItem value={"1"}>男性</MenuItem>
                                        <MenuItem value={"2"}>女性</MenuItem>
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
                                        defaultValue={dayjs(user.birthday)}
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
                                    defaultValue={user.email}
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
                                    defaultValue={user.address}
                                    inputRef={addressRef}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Dialog>
        </>
    )
}