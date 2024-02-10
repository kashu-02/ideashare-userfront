import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';

import Check from '../../_icons/check.svg';

export default (props) => {

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'start'}

            marginX={'2rem'}
        >
            <Typography
                variant={"h6"}
                align={"center"}
                sx={{
                    marginY: '0.5rem',
                }}
            >
                商品名
            </Typography>
            <Box
                display={"flex"}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                    marginBottom: '0.5rem',
                }}
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
                    value={3.5}
                    readOnly
                />
            </Box>
            <Box
                display={"flex"}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                    marginY: '1rem',
                }}
            >
                <Typography
                    variant={"h5"}
                    align={"center"}
                    color={'secondary.main'}
                    sx={{}}
                >
                    3000円
                </Typography>
                <Typography
                    variant={"h6"}
                    align={"center"}
                    color={'secondary.main'}
                    sx={{}}
                >
                    カタログ
                </Typography>
            </Box>
            <Box
                display={"flex"}
                padding={'0.1rem 1rem 0.1rem 1rem'}
                justifyContent={'center'}
                alignItems={'center'}
                border={2}
                borderColor={'primary.main'}
                borderRadius={9999}
                sx={{
                    marginY: '0.5rem',
                }}
            >
                <Check/>
                <Typography
                    color={"primary.main"}
                >
                    レビュー
                </Typography>
            </Box>
            <Typography
                variant={'body1'}
                sx={{
                    marginY: '0.5rem',
                }}
                >
                ここに商品説明が入る。
                ここに商品説明が入る。
                ここに商品説明が入る。
                ここに商品説明が入る。
                ここに商品説明が入る。
                ここに商品説明が入る。
                ここに商品説明が入る。
                ここに商品説明が入る。
                ここに商品説明が入る。
                ここに商品説明が入る。
            </Typography>
        </Box>
    )
}