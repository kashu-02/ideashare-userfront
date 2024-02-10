'use client'
import * as React from 'react'
import {useRouter} from 'next/navigation';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from "@mui/material/Typography";

import NotifyForYou from "./notifyForYou";
import NotifyNews from "./notifyNews";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export default () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                centered
                variant="fullWidth"
            >
                <Tab value={0} label="あなた宛"/>
                <Tab value={1} label="ニュース"/>
            </Tabs>
            <TabPanel value={value} index={0}>
                <NotifyForYou />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <NotifyNews />
            </TabPanel>
        </>
    )
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}