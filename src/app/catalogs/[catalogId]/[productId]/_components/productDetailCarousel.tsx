'use client'

import Image from 'next/image';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

interface Props{
    images: string[]
}
export default (props: Props) => {
    // const items = [
    //     {
    //         name: "Random Name #1",
    //         description: "Probably the most random thing you have ever seen!",
    //         url: "https://placehold.jp/1000x500.png"
    //     },
    //     {
    //         name: "Random Name #2",
    //         description: "Hello World!",
    //         url: "https://placehold.jp/800x400.png"
    //     }
    //     ]

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
            />
        )
    }
    return (
        <Carousel
            autoPlay={false}

        >
            {
                props.images.map( (url, i) => <Item key={i} url={url} /> )
            }
        </Carousel>
    )
}