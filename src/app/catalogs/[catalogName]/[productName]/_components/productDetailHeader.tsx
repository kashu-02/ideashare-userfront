import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

export default (props) => {

    return (
        <Box
            display={"flex"}
            alignItems={"center"}
        >
            <Image
                src={"https://placehold.jp/100x100.png"}
                alt={"Item"}
                width={50}
                height={50}
                sx={{
                    margin: '1rem'
                }}
            />
            <Typography
                variant={"h5"}
                align={"center"}
                sx={{
                    marginLeft: '1rem',
                }}
            >
                会社名
            </Typography>
        </Box>
    )
}