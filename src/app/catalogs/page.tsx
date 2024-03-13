import Grid from '@mui/material/Unstable_Grid2';


import Header from './_components/header'
import CatalogItem from './_components/catalogItem'
import styles from './page.module.css'

export const revalidate = 600;
export default async function Home() {
    const catalogs = await getCatalogs()
    console.log(catalogs)
    return (
        <main className={styles.main}>
            <Header/>
            <Grid container spacing={3} sx={{ marginTop: 1 }}>
                {catalogs.map((catalog, index) => (
                    <Grid xs={12} sm={12} md={12} key={index} display="flex" justifyContent="end" alignItems="center">
                        <CatalogItem catalog={catalog}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

async function getCatalogs() {
    const res = await fetch(`${process.env.API_URL}/catalogs`)
    if(!res.ok){
        throw new Error('データの取得に失敗しました')
    }

    return res.json()
}
