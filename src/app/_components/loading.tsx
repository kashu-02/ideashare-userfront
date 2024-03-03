import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface Props{
    loading: boolean;
}
export default function Loading(props : Props) {
    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
        >
            {props.loading &&
                <CircularProgress color="primary" />
            }
        </Box>
    );
}