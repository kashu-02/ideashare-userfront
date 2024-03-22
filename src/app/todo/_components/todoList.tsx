import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";

import TodoItem from './todoItem';

interface Props{
    todos: {
        title: string;
        content: string;
        createdAt: string;
    }[]
}

export const TodoList = (props:Props) => {
    const todos = props.todos
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
        >
            {todos.map((todo, index) =>
                <div key={index}>
                    <TodoItem todo={todo}/>
                    <Divider flexItem />
                </div>
            )}
        </Box>
    )
}