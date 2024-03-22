import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";

import NotifyItem from './notifyItem';


interface Props{
    notifications: {
        title: string;
        content: string;
        createdAt: string;
    }[]
}
export default (props:Props) => {
    const notifications = props.notifications
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
        >
            {notifications.map((notification, index) =>
                <div key={index}>
                    <NotifyItem notification={notification}/>
                    <Divider flexItem />
                </div>
            )}
        </Box>
    )
}