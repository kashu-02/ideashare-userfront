import NextLink from 'next/link'
import Image from 'next/image';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import {CardActionArea} from '@mui/material';

import IdeashareIcon from '../_icons/ideashare-icon.webp';

export default () => {
    return (
        <Card
            sx={{
                boxShadow: 'none'
            }}
        >
            <NextLink href={'/'} legacyBehavior>
                <CardActionArea>
                    <CardContent
                        sx={{
                            position: "relative",
                            backgroundColor: "transparent",
                        }}
                    >
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                        >
                            <Image
                                src={IdeashareIcon}
                                alt={'ideashare icon'}
                                width={1271}
                                height={1271}
                                sizes={'100%'}
                                style={{
                                    width: '3rem',
                                    height: 'auto',
                                }}
                            />
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                justifyContent={'start'}
                                sx={{
                                    marginLeft: '1rem'
                                }}
                            >
                                <Typography
                                    variant={'h6'}
                                >
                                    「商品名募集！」の結果が出ました！
                                </Typography>
                                <Typography
                                    variant={'caption'}
                                >
                                    2時間前
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </NextLink>
        </Card>
    )
}