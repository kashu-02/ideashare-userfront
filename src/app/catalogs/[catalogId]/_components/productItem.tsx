import Image from 'next/image'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';
import NextLink from 'next/link'

import Check from '../_icons/check.svg';
import {CardActionArea} from "@mui/material";

interface Props {
    product: {
        id: string;
        catalogId: string;
        companyId: string;
        name: string;
        description?: string;
        rating: number;
        price: number;
        images: {
            id: string;
            imageUrl: string;
        }[]
    }
}
export default (props : Props) => {

    return (
        <Card
            sx={{
                width: '70vw',
                maxWidth: 700,
            }}
            variant="outlined"
        >
            <CardActionArea>
                <NextLink href={`/catalogs/${props.product.catalogId}/${props.product.id}`} legacyBehavior>
                <CardContent
                    sx={{
                        display: "flex",
                    }}
                >
                    <Image
                        src={"https://placehold.jp/100x100.png"}
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

                    >
                        <Typography
                            variant={"h5"}
                        >
                            {props.product.name}
                        </Typography>
                        <Box
                            display={"flex"}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <Typography
                                variant={"body1"}
                                align={'center'}
                                sx={{
                                    marginRight: '0.5rem',
                                }}
                            >
                                評価
                            </Typography>
                            <Rating
                                sx={{
                                    color: 'secondary.main',
                                }}
                                value={props.product.rating}
                                readOnly
                            />
                        </Box>
                        <Box
                            alignSelf={"end"}
                            display={"flex"}
                            marginLeft={'3rem'}
                            padding={'0.1rem 1rem 0.1rem 1rem'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            border={2}
                            borderColor={'primary.main'}
                            borderRadius={9999}
                        >
                            <Check/>
                            <Typography
                                color={"primary.main"}
                            >
                                レビュー
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
                </NextLink>
            </CardActionArea>
        </Card>
    )
}