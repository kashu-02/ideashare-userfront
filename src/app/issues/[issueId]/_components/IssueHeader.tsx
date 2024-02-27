import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";

import Light from '@/app/_icons/light.svg'

export default () => {
    return (
        <>
        <Box
            display={'flex'}
            border={'2px solid #FF905D'}
            borderRadius={9999}
            width={'90vw'}
            maxWidth={500}
            padding={'0.5rem 1.5rem'}
            alignItems={'center'}
        >
            <SvgIcon
                fontSize="large"
            >
                <Light />
            </SvgIcon>
            <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'start'}
                justifyContent={'end'}
                flexGrow={1}
            >
                <Typography
                    color={'primary.main'}
                >
                    商品名募集
                </Typography>
                <Typography
                    variant={'caption'}
                    color={'primary.main'}
                >
                    会社名
                </Typography>
            </Box>
            <Typography
                color={'primary.main'}
            >
                報酬
            </Typography>
        </Box>
        <Box
            position={'relative'}
            right={'1.3rem'}
            bottom={'1rem'}
            display={'flex'}
            justifyContent={'end'}
        >
            <Box
                padding={'0.1rem'}
                paddingX={'1rem'}
                border={'1px solid #FF905D'}
                borderRadius={9999}
                backgroundColor={'#FF905D'}
                alignItems={'center'}
            >
                <Typography
                    color={'#FFFFFF'}
                    variant={'caption'}
                >
                    O月O日まで！
                </Typography>
            </Box>

        </Box>
        </>
    )
}