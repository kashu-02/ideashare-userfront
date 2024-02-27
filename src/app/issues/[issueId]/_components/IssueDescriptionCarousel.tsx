'use client'

import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';

interface Props{
    images: string[]
}
export default (props: Props) => {
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            url: "https://placehold.jp/1000x500.png"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            url: "https://placehold.jp/800x400.png"
        }
        ]

    const Item = (props: {url: string}) => {
        return (
            <Image
                alt={""}
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
            autoPlay={true}
        >
            {
                // props.images.map( (url, i) => <Item key={i} url={url} /> )
                items.map( (item, i) => <Item key={i} url={item.url} /> )
            }
        </Carousel>
    )
}