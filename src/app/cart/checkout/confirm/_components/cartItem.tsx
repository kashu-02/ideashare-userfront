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
}
export default (props: Props) => {

    return (
        <Box
            width='100%'
            marginY={'1rem'}
        >
            <Box
                display="flex"
                width='100%'
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
                    marginLeft={"2rem"}
                    width={'100%'}
                >
                    <Typography
                        variant={"h5"}
                    >
                        {props.data.CatalogProduct.name}
                    </Typography>
                    <Box
                        display={"flex"}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Typography
                            variant={"h5"}
                            align={'center'}
                            sx={{
                                marginLeft: '1rem',
                                marginRight: '0.5rem',
                            }}
                        >
                            {`${props.data.price}円`}
                        </Typography>
                        <Typography
                            variant={"h6"}
                            align={'center'}
                        >
                            カタログ
                        </Typography>
                    </Box>
                    <Box
                        alignSelf={"end"}
                        display={"flex"}
                        marginLeft={'3rem'}
                        padding={'0.1rem 1rem 0.1rem 1rem'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Typography>
                            数量
                        </Typography>
                        <Typography>
                            {props.data.quantity}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}