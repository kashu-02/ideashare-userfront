'use client'
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Image from 'next/image';

import TicketGet from '../_icons/ticket_get.webp';
import Ticket from '@/app/_icons/ticket.jpg';
import Typography from "@mui/material/Typography";
import {DialogContent} from "@mui/material";

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
}

export default (props: SimpleDialogProps) => {
    const {open, onClose} = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    height: '90vh',
                },
            }}

        >
            <DialogContent
                style={{
                    overflow: "hidden",
                    height: '100%'
            }}
            >
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                border={'1px solid primary.main'}
                borderRadius={14}
                padding={'1rem'}
                sx={{
                    backgroundColor: 'primary.main',
                }}
                height={'90vh'}
            >
                <Image
                    src={TicketGet}
                    alt={'Get ticket image'}
                    width={1638}
                    height={2042}
                    sizes={'100%'}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
                <Image
                    src={Ticket}
                    alt={'ticket'}
                    width={2533}
                    height={1200}
                    sizes={'100%'}
                    style={{
                        width: '40%',
                        height: 'auto',
                        border: '2px solid #FFFFFF',
                        margin: '0.5rem 0',
                    }}
                />
                <Typography
                    variant={'h4'}
                    color={'white'}
                >
                    1000円チケット
                </Typography>
                <Typography
                    variant={'h4'}
                    color={'white'}
                >
                    GET！
                </Typography>
            </Box>
            </DialogContent>
        </Dialog>
    )
}