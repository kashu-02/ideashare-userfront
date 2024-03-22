'use client'
import { useRouter } from 'next/navigation'
import {useUser} from '@auth0/nextjs-auth0/client';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button, { ButtonProps } from "@mui/material/Button";
import {useState} from "react";
import {useSnackbar} from '@/app/_components/snackbar';


const AddToCartButton = styled(Button)<ButtonProps>(({theme}) =>({
    width: 'auto',
    maxWidth: 250,
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

const BuyNowButton = styled(Button)<ButtonProps>(({theme}) =>({
    width: 'auto',
    maxWidth: 250,
    height: 'auto',
    color: '#00BCD7',
    backgroundColor: '#FFFFFF',
    border: '2px solid',
    lineHeight: 1.5,
    borderColor: '#00BCD7',
    borderRadius: 9999,
    fontSize: '1.3rem',
    '&:hover': {
        backgroundColor: '#00A9C1',
        borderColor: '#0096AC',
        boxShadow: 'none',
    },
}));

interface Props{
    productId: string;
}
export default (props: Props) => {
    const router = useRouter();
    const {user, error } = useUser();
    const [loading, setLoading] = useState(false);
    const { showSnackbar } = useSnackbar()

    const addToCart = async() =>{
        setLoading(true)
        if(!user) {
            router.push('/api/auth/login')
            return
        }

        try {
            const res = await fetch(`${window.location.origin}/api/cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: props.productId,
                }),
            })
            console.log(await res.json())
            showSnackbar('カートに追加しました！', 'success')
        } catch (e){
            console.error(e)
            showSnackbar('カートに追加できませんでした', 'error')
        } finally {
            setLoading(false)
        }
    }
    const buyNow = async() =>{
        setLoading(true)
        if(!user) {
            router.push('/api/auth/login')
            return
        }

        try {
            const res = await fetch(`${window.location.origin}/api/cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: props.productId,
                }),
            })
            console.log(await res.json())
            router.push('/cart/checkout/confirm')
        } finally {
            setLoading(false)
        }
    }
    return (
        <Box
            display={'flex'}
            position={'fixed'}
            zIndex={50}
            left={'50%'}
            bottom={'10%'}
            sx={{
                transform: 'translateX(-50%)',
            }}
        >
            <AddToCartButton
                disabled={loading}
                onClick={addToCart}
                sx={{
                    marginX: '0.7rem',
                }}
            >
                {user ? "かごに追加" : "ログインが必要です"}
            </AddToCartButton>
            {user && <BuyNowButton
                disabled={loading}
                onClick={buyNow}
                sx={{
                    marginX: '0.7rem',
                }}
            >
                今すぐ買う
            </BuyNowButton>}
        </Box>
    )
}