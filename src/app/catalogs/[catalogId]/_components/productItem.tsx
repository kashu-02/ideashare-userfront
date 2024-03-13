import Image from 'next/image'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';
import Divider from "@mui/material/Divider";
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

export default (props: Props) => {

    return (
        <>
            <Card
                sx={{
                    width: '100%',
                    border: 'none',
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
                                marginLeft={"1rem"}
                                flexGrow={1}
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
                                        variant={"caption"}
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
                                        size="small"
                                        value={props.product.rating}
                                        readOnly
                                    />
                                </Box>
                                <Box
                                    alignSelf={"end"}
                                    display={"flex"}
                                    marginTop={'1rem'}
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
                                        variant={"caption"}
                                    >
                                        レビュー
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </NextLink>
                </CardActionArea>
            </Card>
        </>
    )
}