'use client'

import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';

interface Props{
    images: string[]
}
export default (props: Props) => {

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
                props.images.map( (item, i) => <Item key={i} url={item} /> )
            }
        </Carousel>
    )
}