import * as React from 'react';
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
                        やることリスト
                    </Typography>
                </Toolbar>
            </AppBar>
        // </Box>
)