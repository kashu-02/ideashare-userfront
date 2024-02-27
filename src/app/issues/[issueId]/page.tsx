import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import styles from './page.module.css'

import Header from './_components/header'
import IssueHeader from './_components/IssueHeader'
import IssueDescription from "./_components/IssuDescription";
import IssueQuestion from "./_components/IssueQuestion";

export default async function IssueDetail({params}: { params: { catalogId: string } }) {
    // const products = await getData(params.catalogId)

    return (
        <main className={styles.main}>
            <Header/>
            <div className={styles.body}>
                <IssueHeader />
                <IssueDescription />
                <IssueQuestion />
            </div>
        </main>
    )
}


async function getData(catalogId) {
    console.log(catalogId)
    const res = await fetch(`${process.env.API_URL}/catalogs/${catalogId}/products`)
    if(!res.ok){
        throw new Error('データの取得に失敗しました')
    }

    return res.json()
}