import Grid from '@mui/material/Unstable_Grid2';


import Header from './_components/header'
import Container from '@mui/material/Container';
import {TodoList} from './_components/todoList'
import styles from './page.module.css'
import {withPageAuthRequired} from "@auth0/nextjs-auth0/edge";


export default withPageAuthRequired(function TodoPage() {
    return (
        <main className={styles.main}>
            <Header/>
            <div className={styles.body}>
                <TodoList todos={[]}/>
            </div>
        </main>
    )
})

// async function getData(accessToken : string) {
//     console.log(accessToken)
//     const res = await fetch(`${process.env.API_URL}/notifications/user`, {
//         method: 'GET',
//         headers: {
//             'Authorization': `Bearer ${accessToken}`
//         },
//     })
//     if (!res.ok ) {
//         console.error(res.status)
//         throw new Error('データの取得に失敗しました')
//     }
//     return await res.json()
// }