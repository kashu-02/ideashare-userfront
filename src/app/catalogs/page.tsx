import Grid from '@mui/material/Unstable_Grid2';


import Header from './_components/header'
import CatalogItem from './_components/catalogItem'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <Header/>
            <Grid container spacing={3} sx={{ marginTop: 1 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid xs={12} sm={12} md={12} key={index} display="flex" justifyContent="end" alignItems="center">
                        <CatalogItem/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
