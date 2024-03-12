import NextLink from 'next/link';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import {CardActionArea} from '@mui/material';
import SvgIcon from "@mui/material/SvgIcon";

import DetailIcon from '../_icons/detail.svg'
import CatalogIcon from '../../_icons/bottom/searchIcon.svg'

interface CatalogData{
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
}
export default (props: {catalog: CatalogData}) => {
    const catalog = props.catalog;
    console.log(catalog)
    return (
        <Card
            sx={{
                width: '80vw',
                maxWidth: 400,
                border: '2px solid #00BCD7',
                borderRight: 'none',
                borderRadius: '28px 0 0 28px',
                boxShadow: 'none',
            }}
        >
            <NextLink href={`/catalogs/${catalog.id}`} legacyBehavior>
                <CardActionArea>
                    <CardMedia
                        sx={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: "100%",
                            height: "100%",
                        }}
                        image={props.catalog.imageUrl}
                        title="catalog image"
                    />
                    <CardContent
                        sx={{
                            position: "relative",
                            backgroundColor: "transparent",
                            color: "#FFFFFF",
                            paddingTop: '2rem',
                            paddingBottom: '1rem',

                        }}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            justifyContent={'end'}
                            alignItems={'center'}
                            width={'100%'}
                            height={'100%'}
                        >
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                            >
                                <SvgIcon
                                    sx={{
                                        marginRight: "5px",
                                    }}
                                >
                                    <CatalogIcon
                                        sx={{
                                            fill: "#FFFFFF"
                                        }}
                                    />
                                </SvgIcon>
                                <Box
                                    display={'flex'}
                                    alignItems={'end'}
                                >
                                    <Typography
                                        variant={"h4"}
                                    >
                                        　{catalog.name}
                                    </Typography>
                                    <Typography
                                        variant={"subtitle1"}
                                    >
                                        カタログ
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                display={'flex'}
                                alignSelf={'end'}
                                alignItems={'center'}
                                justifyContent={'center'}
                            >
                                <Typography
                                    gutterBottom
                                    variant={"subtitle1"}
                                    sx={{
                                        marginRight: '1rem',
                                    }}
                                >
                                    中身を見る
                                </Typography>
                                <SvgIcon>
                                    <DetailIcon/>
                                </SvgIcon>
                            </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </NextLink>
        </Card>
    )
}