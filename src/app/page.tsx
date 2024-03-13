import Grid from '@mui/material/Unstable_Grid2';


import Header from './_components/header'
import Issue from './_components/issue'
import styles from './page.module.css'
import {useEffect, useState} from "react";

export const revalidate = 60;
export default async function Home() {
    const issuesResponse = await fetch(`${process.env.API_URL}/problems`)
    console.log(issuesResponse.status)
    const issues = await issuesResponse.json()
    console.log(issues)
    return (
        <main className={styles.main}>
            <Header/>
            <Grid container spacing={3} sx={{ margin: '1rem'}}>
                {issues.map((issue, index) => (
                    <Grid xs={6} sm={4} md={3} key={index} display="flex" justifyContent="center" alignItems="center">
                        <Issue data={issue}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
