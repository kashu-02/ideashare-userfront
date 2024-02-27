import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default () => (
        // <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="sticky"
                color="yellow"
                elevation={0}
            >
                <Toolbar
                sx={{
                    marginX: 'auto'
                }}
                >
                    <Typography
                    variant={"h6"}
                    >
                        アイディア回答
                    </Typography>
                </Toolbar>
            </AppBar>
        // </Box>
)