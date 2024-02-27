import Grid from '@mui/material/Unstable_Grid2';


import Header from './_components/header'
import Issue from './_components/issue'
import styles from './page.module.css'

export const runtime = 'edge';
export default async function Home() {
    const issues = await getIssues()
    return (
        <main className={styles.main}>
            <Header/>
            <Grid container spacing={3} sx={{ margin: '1rem'}}>
                {issues.map((issue, index) => (
                    <Grid xs={6} sm={4} md={3} key={index} display="flex" justifyContent="center" alignItems="center">
                        <Issue issue={issue}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

async function getIssues() {
    const res = await fetch(`${process.env.API_URL}/problems`)
    if(!res.ok){
        throw new Error('データの取得に失敗しました')
    }

    return res.json()
}
