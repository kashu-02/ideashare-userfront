import Grid from '@mui/material/Unstable_Grid2';


import Header from './_components/header'
import Container from '@mui/material/Container';
import TodoList from './_components/todoList'
import styles from './page.module.css'
import {withPageAuthRequired} from "@auth0/nextjs-auth0/edge";


export default withPageAuthRequired(function TodoPage() {
    return (
        <main className={styles.main}>
            <Header/>
            <div className={styles.body}>
                <TodoList />
            </div>
        </main>
    )
})
