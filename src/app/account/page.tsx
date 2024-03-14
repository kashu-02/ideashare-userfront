import Header from './_components/header'
import Container from '@mui/material/Container';
import AccountHeader from './_components/accountHeader';
import AccountBody from './_components/accountBody';
import AccountBottom from "./_components/accountBottom";
import { redirect } from "next/navigation";
import styles from './page.module.css'

import {withPageAuthRequired, getAccessToken} from '@auth0/nextjs-auth0/edge';

export default withPageAuthRequired(async function AccountPage() {
    const {accessToken} = await getAccessToken()
    const user = await getData(accessToken!)

    return (
        <main>
            <Header/>
            <div className={styles.body}>
                    <AccountHeader data={user}/>
                    <AccountBody data={user}/>
                    <AccountBottom/>
            </div>
        </main>
    )
});

async function getData(accessToken : string) {
    const res = await fetch(`${process.env.API_URL}/account`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
    })
    if (!res.ok) {
        console.error(res.status)
        if(res.status === 404) redirect(`/signup`)
        throw new Error('データの取得に失敗しました')
    }
    return await res.json()
}

