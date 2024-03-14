'use client'

import Image from 'next/image';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

interface Props{
    images: {
        imageUrl: string;
    }[]
}
export default (props: Props) => {

    const Item = (props: {url: string}) => {
        return (
            <Image
                src={props.url}
                width={200}
                height={100}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
             alt={'product images'}/>
        )
    }
    return (
        <Carousel
            autoPlay={false}

        >
            {
                props.images.map( (image, index) => <Item key={index} url={image.imageUrl} /> )
            }
        </Carousel>
    )
}