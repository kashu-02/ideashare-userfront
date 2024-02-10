'use client'
import * as React from 'react';
import Image from 'next/image'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {styled} from '@mui/material/styles';
import Button, {ButtonProps} from '@mui/material/Button';
import {useRouter} from 'next/navigation'

import {CardActionArea} from "@mui/material";


const ColorButton = styled(Button)<ButtonProps>(({theme}) => ({
    minWidth: 0,
    color: '#707070',
    boxShadow: 'none',
    border: '1px solid',
    borderColor: '#707070',
    borderRadius: 4,
    padding: 2,
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: '#C6C6C6',
    },
}));


export default (props: { catalogName: string }) => {
    const router = useRouter()
    const [quantity, setQuantity] = React.useState(1);

    const handleChange = (event: SelectChangeEvent) => {
        setQuantity(Number(event.target.value));
    };

    return (
        <Box
            width='100%'
            marginY={'1rem'}
        >
            <Box
                display="flex"
                width='100%'
            >
                <Image
                    src={"https://placehold.jp/100x100.png"}
                    alt={"Item"}
                    width={100}
                    height={100}
                    // fill
                    objectFit={"cover"}
                />
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={'center'}
                    alignItems={'start'}
                    marginLeft={"2rem"}
                    width={'100%'}
                >
                    <Typography
                        variant={"h5"}
                    >
                        商品名
                    </Typography>
                    <Box
                        display={"flex"}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Typography
                            variant={"h5"}
                            align={'center'}
                            sx={{
                                marginLeft: '1rem',
                                marginRight: '0.5rem',
                            }}
                        >
                            1000円
                        </Typography>
                        <Typography
                            variant={"h6"}
                            align={'center'}
                        >
                            カタログ
                        </Typography>
                    </Box>
                    <Box
                        alignSelf={"end"}
                        display={"flex"}
                        marginLeft={'3rem'}
                        padding={'0.1rem 1rem 0.1rem 1rem'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Typography>
                            数量
                        </Typography>
                        <FormControl sx={{m: 1}} size="small">
                            {/*<InputLabel id="demo-select-small-label">Age</InputLabel>*/}
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={quantity}
                                // label="Age"
                                onChange={handleChange}
                                autoWidth
                            >
                                <MenuItem value={1}>1</MenuItem>
                            </Select>
                        </FormControl>
                        <ColorButton variant="contained">削除</ColorButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}