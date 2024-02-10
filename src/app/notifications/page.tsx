import Grid from '@mui/material/Unstable_Grid2';


import Header from './_components/header'
import Container from '@mui/material/Container';
import Tab from './_components/tab'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <Header/>
            <Tab />
        </main>
    )
}
