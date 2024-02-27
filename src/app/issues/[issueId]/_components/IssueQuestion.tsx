'use client'
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import Button, { ButtonProps } from "@mui/material/Button";
import {useRef, createRef, RefObject} from "react";

export default () => {

    const answerRefs = useRef<RefObject<HTMLInputElement>[]>([])

    const questions = [
        {
            id: '1',
            question: 'あなたの考えるこの商品名を教えてください',
            required: true,
        },
        {
            id: '2',
            question: 'その商品名にした理由を教えて下さい',
            required: true,
        },
        {
            id: '3',
            question: '他にも名前の候補があればお願いします',
            required: true,
        },
    ]

    questions.forEach((_, index) => {
        answerRefs.current[index] = createRef<HTMLInputElement>()
    })
    const submit = () =>{
        answerRefs.current.forEach((data, index) =>{
            console.log(index, data.current?.value, data.current?.validity.valid)
        })
    }

    const AnswerInput = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '2px solid #00BCD7',
                borderRadius: '7px',
            },
            '&:hover fieldset': {
                borderColor: '#00C7E6',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#00ABD6',
            },
        },
    });

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


    return (
        <>
            <Box
                display={'flex'}
                flexDirection={'column'}
                >
                {questions.map((question, index) => (<div key={index}>
                        <Box
                            justifySelf={'start'}
                            width={'fit-content'}
                            border={'2px solid #FF905D'}
                            borderRadius={9999}
                            paddingLeft={'1.5rem'}
                            paddingRight={'1rem'}
                            marginTop={'1rem'}
                            marginBottom={'1.5rem'}
                        >
                            <Typography
                                color={'#FF905D'}
                                variant={'h6'}
                            >
                                {`Q${index + 1}　${question.question}`}
                            </Typography>
                        </Box>
                        <AnswerInput
                            label={'A:'}
                            required={question.required}
                            inputRef={answerRefs.current[index]}
                            sx={{
                                alignSelf: 'end',
                                width: '80%'
                            }}
                        />
                    </div>)
                )}
                <AddToCartButton
                    sx={{
                        alignSelf: 'center',
                        marginTop: '2rem',
                        marginX: '0.7rem',
                    }}
                    onClick={submit}
                >
                   送信
                </AddToCartButton>
            </Box>
        </>
    )
}