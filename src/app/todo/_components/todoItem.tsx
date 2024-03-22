import NextLink from 'next/link'
import Image from 'next/image';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import {CardActionArea} from '@mui/material';

import {daytimeAgoConverter} from "@/app/_logic/daytimeAgoConverter";

import IdeashareIcon from '../_icons/ideashare-icon.webp';

interface Props{
    todo: {
        title: string;
        content: string;
        createdAt: string;
    }
}
export default (props: Props) => {
    return (
        <Card
            sx={{
                boxShadow: 'none'
            }}
        >
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
                                {props.todo.title}
                            </Typography>
                            <Typography
                                variant={'caption'}
                            >
                                {daytimeAgoConverter(props.todo.createdAt)}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}