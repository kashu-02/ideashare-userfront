import Grid from '@mui/material/Unstable_Grid2';


import Header from './_components/header'
import Container from '@mui/material/Container';
import Form from './_components/Form'
import CircularProgress from '@mui/material/CircularProgress'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <Header/>
            <div className={styles.body}>
                <Form />
                <CircularProgress />
            </div>
        </main>
    )
}
