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
import {useRouter} from 'next/navigation'

import {CardActionArea} from "@mui/material";


const ColorButton = styled(Button)<ButtonProps>(({theme}) => ({
    minWidth: 0,
    color: '#707070',
    boxShadow: 'none',
    border: '1px solid',
    borderColor: '#707070',
    borderRadius: 4,
    padding: 2,
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: '#C6C6C6',
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
interface Props{
    data: CartItem;
    updateCart;
}
export default (props: Props) => {
    const [quantity, setQuantity] = React.useState(props.data.quantity);

    const handleQuantityChange = (event: SelectChangeEvent) => {
        setQuantity(Number(event.target.value));
        props.updateCart({
            cartProductId: props.data.id,
            catalogProductId: props.data.catalogProductId,
            quantity: event.target.value,
        })
    };

    const handleDelete = () =>{
        props.updateCart({
            cartProductId: props.data.id,
            catalogProductId: props.data.catalogProductId,
            quantity: 0,
        })
    }

    return (
        <Box
            width='100%'
            marginY={'1rem'}
        >
            <Box
                display="flex"
                width='100%'
                flexGrow={1}
            >
                <Image
                    src={props.data.CatalogProduct.images[0]?.imageUrl}
                    alt={"Item"}
                    width={100}
                    height={100}
                    // fill
                    objectFit={"cover"}
                />
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={'center'}
                    alignItems={'start'}
                    marginLeft={"1rem"}
                    width={'100%'}
                >
                    <Typography
                        variant={"body1"}
                    >
                        {props.data.CatalogProduct.name}
                    </Typography>
                    <Box
                        display={"flex"}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Typography
                            variant={"body1"}
                            align={'center'}
                            color={'secondary.main'}
                            sx={{
                                marginLeft: '1rem',
                            }}
                        >
                            {`${props.data.price}円`}
                        </Typography>
                        <Typography
                            alignSelf={'end'}
                            variant={"body2"}
                            align={'center'}
                            color={'secondary.main'}
                        >
                            カタログ
                        </Typography>
                    </Box>
                    <Box
                        alignSelf={"end"}
                        display={"flex"}
                        padding={'0.1rem 1rem 0.1rem 1rem'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Typography
                            variant={"body2"}
                        >
                            数量
                        </Typography>
                        <FormControl sx={{m: 1}} size="small">
                            <Select
                                value={quantity}
                                onChange={handleQuantityChange}
                                autoWidth
                            >{
                                Array.from(Array(5)).map((_,index) =>(
                                    <MenuItem value={index + 1} key={index}>{index + 1}</MenuItem>
                                ))
                            }
                            </Select>
                        </FormControl>
                        <ColorButton
                            variant="contained"
                            onClick={handleDelete}
                        >
                            削除
                        </ColorButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}