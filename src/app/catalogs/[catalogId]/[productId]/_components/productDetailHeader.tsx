import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

interface Props{
    data: {
        imageUrl : string;
        companyName: string;
    }
}
export default (props : Props) => {

    return (
        <Box
            display={"flex"}
            alignItems={"center"}
        >
            <Image
                src={props.data.imageUrl}
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
                {props.data.companyName}
            </Typography>
        </Box>
    )
}