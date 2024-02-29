import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import styles from './page.module.css'

import Header from './_components/header'
import IssueHeader from './_components/IssueHeader'
import IssueDescription from "./_components/IssuDescription";
import IssueQuestion from "./_components/IssueQuestion";

export default async function IssueDetail({params}: { params: { issueId: string } }) {
    const issueResponse = await fetch(`${process.env.API_URL}/problems/${params.issueId}`)
    const issue = await issueResponse.json()
    console.log(issue)

    return (
        <main className={styles.main}>
            <Header/>
            <div className={styles.body}>
                <IssueHeader data={issue}/>
                <IssueDescription data={issue}/>
                <IssueQuestion data={issue}/>
            </div>
        </main>
    )
}