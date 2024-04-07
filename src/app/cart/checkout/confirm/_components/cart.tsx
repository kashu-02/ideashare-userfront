'use client'
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {styled} from '@mui/material/styles';
import {CardActionArea} from '@mui/material';
import SvgIcon from "@mui/material/SvgIcon";

import CartItem from './cartItem';
import ChangeAddressDialog from "./ChangeAddressDialog";

import DetailIcon from '../_icons/detail.svg'
import CatalogIcon from '../../../../_icons/bottom/searchIcon.svg'
import TicketIcon from '@/app/_icons/ticket.jpg'
import {useState} from "react";
import {useSnackbar} from "@/app/_components/snackbar";

const CheckoutButton = styled(Button)<ButtonProps>(({theme}) => ({
    width: 'auto',
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

interface Props {
    data: {
        totalPrice: number;
        cartItems: CartItem[]
    },
    profile: {
        ticket: number;
        address: string;
        name: string;
    }
}

export default (props: Props) => {
    const router = useRouter()
    const {showSnackbar} = useSnackbar()
    const [name, setName] = useState(props.profile.name)
    const [address, setAddress] = useState(props.profile.address)
    const [loading, setLoading] = useState(false)
    const [addressDialogOpen, setAddressDialogOpen] = useState(false)
    const placeOrder = async () => {
        setLoading(true)
        const bodyItems = props.data.cartItems.map((item, index) => {
            return {
                catalogProductId: item.catalogProductId,
                quantity: item.quantity
            }
        })
        try {
            const res = await fetch(`${window.location.origin}/api/placeOrder`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    address,
                    items: bodyItems,
                }),
            })
            console.log(await res.json())
            showSnackbar('注文を送信しました！', 'success')
            router.push('/')
        } catch (e) {
            console.error(e)
            showSnackbar('注文を送信できませんでした', 'error')
        } finally {
            setLoading(false)
        }
    }


    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            width={'95vw'}
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
                    <Typography
                        sx={{
                            whiteSpace: 'nowrap',
                            marginRight: '1rem',
                        }}
                    >
                        お届け先
                    </Typography>
                    <Typography
                        // variant={"h6"}
                        justifySelf={'end'}
                        sx={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}
                    >
                        {`${name}　${address}`}
                    </Typography>
                    <Button
                        onClick={() => setAddressDialogOpen(true)}
                    >
                        <Typography
                            justifySelf={'end'}
                            color={'secondary.main'}
                            sx={{
                                whiteSpace: 'nowrap',
                                marginLeft: '0.5rem',
                            }}

                        >
                            変更
                        </Typography>
                    </Button>

                    <ChangeAddressDialog
                        data={{
                            name: name,
                            address: address
                        }}
                        setData={{
                            setName: setName,
                            setAddress: setAddress
                        }}
                        open={addressDialogOpen}
                        handleClose={() => setAddressDialogOpen(false)}
                    />
                </Box>
                {props.data.cartItems.map((item, index) =>
                    (
                        <CartItem data={item} key={index}/>
                    )
                )}
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
                        {`${props.data.totalPrice}円`}
                    </Typography>
                </Box>
            </Box>
            <CheckoutButton
                disabled={loading}
                onClick={placeOrder}
                sx={{
                    marginTop: '2rem'
                }}
            >
                注文を確定
            </CheckoutButton>
        </Box>
    )
}