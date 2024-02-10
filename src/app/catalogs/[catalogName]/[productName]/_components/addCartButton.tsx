'use client'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button, { ButtonProps } from "@mui/material/Button";

const AddToCartButton = styled(Button)<ButtonProps>(({theme}) =>({
    width: '25vw',
    maxWidth: 200,
    height: 'auto',
    color: '#FFFFFF',
    backgroundColor: '#00BCD7',
    border: '1px',
    borderColor: '#00BCD7',
    borderRadius: 9999,
    fontSize: '1.3rem',
    '&:hover': {
        backgroundColor: '#00A9C1',
        borderColor: '#0096AC',
        boxShadow: 'none',
    },
}));

const BuyNowButton = styled(Button)<ButtonProps>(({theme}) =>({
    width: '25vw',
    maxWidth: 200,
    height: 'auto',
    color: '#00BCD7',
    backgroundColor: '#FFFFFF',
    border: '2px solid',
    lineHeight: 1.5,
    borderColor: '#00BCD7',
    borderRadius: 9999,
    fontSize: '1.3rem',
    '&:hover': {
        backgroundColor: '#00A9C1',
        borderColor: '#0096AC',
        boxShadow: 'none',
    },
}));

export default () => {

    return (
        <Box
            display={'flex'}
            position={'fixed'}
            zIndex={50}
            left={'50%'}
            bottom={'10%'}
            sx={{
                transform: 'translateX(-50%)',
            }}
        >
            <AddToCartButton
                sx={{
                    marginX: '0.7rem',
                }}
            >
                かごに追加
            </AddToCartButton>
            <BuyNowButton
                sx={{
                    marginX: '0.7rem',
                }}
            >
                今すぐ買う
            </BuyNowButton>
        </Box>
    )
}