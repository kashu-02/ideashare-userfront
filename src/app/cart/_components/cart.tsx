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

import TicketIcon from '@/app/_icons/ticket.jpg'

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

interface CartItem {
    id: string;
    catalogProductId: string;
    price: number;
    quantity: number;
    CatalogProduct: {
        name: string;
        images: {
            imageUrl: string;
        }[]
    }
}

interface Props {
    data: {
        totalPrice: number;
        cartItems: CartItem[]
    },
    profile: {
        ticket: number;
    }
}

export default (props: Props) => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            width={'90vw'}
            maxWidth={600}
            border={'1px solid #707070'}
            borderRadius={4}
            padding={'1rem'}
        >
            {Boolean(props.data?.totalPrice) &&
                <CartBody data={props.data} profile={props.profile}/>}
            {!props.data?.totalPrice && <Typography>カート内に商品がありません</Typography>}
        </Box>
    )
}

const CartBody = (props: Props) => (
    <>
        {props.data.cartItems.map((item, index) =>
            (
                <CartItem data={item} key={index}/>
            )
        )}
        <Box
            width={'100%'}
        >
            <Divider/>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Typography>
                    必要チケット
                </Typography>
                <Typography
                    variant={"h6"}
                    color={'secondary.main'}
                >
                    {`${props.data.totalPrice}円`}
                </Typography>
            </Box>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Typography
                    color={'secondary.main'}
                >
                    所持チケット
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
                        sizes="3rem"
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
                            {`x${props.profile?.ticket}`}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
        <CheckoutButton
            href={'/cart/checkout/confirm'}
            sx={{
                marginTop: '2rem'
            }}
            disabled={props.profile?.ticket * 1000 < props.data.totalPrice}
        >
            発送手続き
        </CheckoutButton>
    </>
)