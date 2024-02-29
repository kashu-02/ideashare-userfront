import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";

import Light from '@/app/_icons/light.svg'
import dayjs from "dayjs";

interface Props{
    data:{
       shortTitle: string;
       Company:{
           name: string;
       };
       rewards: number;
       deadline: number;
    }
}
export default (props: Props) => {
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
                    {props.data.shortTitle}
                </Typography>
                <Typography
                    variant={'caption'}
                    color={'primary.main'}
                >
                    {props.data.Company.name}
                </Typography>
            </Box>
            <Typography
                color={'primary.main'}
            >
                {`${props.data.rewards}pt`}
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
                    {`${dayjs(props.data.deadline).format("MM月DD日")}まで！`}
                </Typography>
            </Box>

        </Box>
        </>
    )
}