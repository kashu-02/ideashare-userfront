'use client'
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import {styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import {OutlinedInputProps} from '@mui/material/OutlinedInput';
import Button, {ButtonProps} from "@mui/material/Button";
import {useRef, createRef, RefObject, useState} from "react";
import {useUser} from '@auth0/nextjs-auth0/client';
import {Controller, SubmitHandler, useForm} from 'react-hook-form'

interface Props {
    data: {
        id: string;
        questions: {
            id: string;
            question: string;
            required: boolean;
        }[]
    }
}

export default (props: Props) => {
    const {user, error, isLoading: isAuth0Loading} = useUser()
    const [submitLoading, setSubmitLoading] = useState(false)
    const {control, handleSubmit, formState: { errors },} = useForm({})
    const answerRefs = useRef<RefObject<HTMLInputElement>[]>([])

    const questions = props.data.questions

    questions.forEach((_, index) => {
        answerRefs.current[index] = createRef<HTMLInputElement>()
    })

    const submit = (data) => {
        setSubmitLoading(true)
        if (isAuth0Loading || !user) {
            setSubmitLoading(false)
            console.log("user is not logged in")
            return
        }

        const answers = Object.keys(data).map((key) => {
            return {
                questionId: key,
                answer: data[key]
            }
        })
        console.log('answers', answers)
        fetch(`${window.location.origin}/api/answerQuestion`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                problemId: props.data.id,
                answers: answers
            }),
        }).then((resultRaw) => {
            resultRaw.json().then((result) => {
                console.log(result)
            })
            setSubmitLoading(false)
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

    const AddToCartButton = styled(Button)<ButtonProps>(({theme}) => ({
        // width: '30vw',
        maxWidth: 300,
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
                        <Controller
                            name={question.id}
                            control={control}
                            defaultValue=""
                            rules={{
                                required: { value: question.required, message: '必須入力' }
                            }}
                            render={({ field, formState: { errors } }) => (
                                <AnswerInput
                                    {...field}
                                    label={'A:'}
                                    error={!!errors.text}
                                    helperText={errors.text?.message as string}
                                    // inputRef={answerRefs.current[index]}
                                    sx={{
                                        alignSelf: 'end',
                                        width: '80%'
                                    }}
                                />
                            )}
                        />
                    </div>)
                )}
                <AddToCartButton
                    sx={{
                        alignSelf: 'center',
                        marginTop: '2rem',
                        marginX: '0.7rem',
                    }}
                    onClick={handleSubmit(submit)}
                    disabled={isAuth0Loading || !user || submitLoading}
                >
                    {isAuth0Loading || !user ? "ログインが必要です" : "送信"}
                </AddToCartButton>
            </Box>
        </>
    )
}