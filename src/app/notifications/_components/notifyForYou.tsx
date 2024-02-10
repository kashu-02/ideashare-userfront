import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";

import NotifyItem from './notifyItem';


export default () => {

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
        >
            {Array.from(Array(6)).map((_, index) =>
                <div key={index}>
                    <NotifyItem />
                    <Divider flexItem />
                </div>
            )}
        </Box>
    )
}