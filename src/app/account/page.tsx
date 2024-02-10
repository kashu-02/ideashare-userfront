import Grid from '@mui/material/Unstable_Grid2';


import Header from './_components/header'
import Container from '@mui/material/Container';
import AccountHeader from './_components/accountHeader';
import AccountBody from './_components/accountBody';
import AccountBottom from "./_components/accountBottom";
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <Header/>
            <AccountHeader/>
            <AccountBody/>
            <AccountBottom/>
        </main>
    )
}
