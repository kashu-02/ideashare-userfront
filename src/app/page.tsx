import Grid from '@mui/material/Unstable_Grid2';


import Header from './_components/header'
import Issue from './_components/issue'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <Header/>
            <Grid container spacing={3} sx={{ margin: '1rem'}}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid xs={6} sm={4} md={3} key={index} display="flex" justifyContent="center" alignItems="center">
                        <Issue/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
