import Grid from '@mui/material/Unstable_Grid2';


import Header from './_components/header'
import Container from '@mui/material/Container';
import Tab from './_components/tab'
import styles from './page.module.css'
import {withPageAuthRequired, getAccessToken} from "@auth0/nextjs-auth0/edge";


export default withPageAuthRequired(async function Notifications() {
    const {accessToken} = await getAccessToken()
    const notifications = await getData(accessToken!)
    console.log(notifications)
    return (
        <main className={styles.main}>
            <Header/>
            <div className={styles.body}>
                <Tab notifications={notifications}/>
            </div>
        </main>
    )
})

async function getData(accessToken : string) {
    console.log(accessToken)
    const userRes = await fetch(`${process.env.API_URL}/notifications/user`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
    })
    const newsRes = await fetch(`${process.env.API_URL}/notifications/news`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
    })
    if (!userRes.ok ) {
        console.error(userRes.status)
        throw new Error('データの取得に失敗しました')
    }
    return [await userRes.json(), await newsRes.json()]
}
