import {redirect} from "next/navigation";
import {getAccessToken, withPageAuthRequired} from "@auth0/nextjs-auth0/edge";
import Header from './_components/header'
import Cart from './_components/cart'
import styles from './page.module.css'

export default withPageAuthRequired(async function CheckoutConfirmPage() {
    const {accessToken} = await getAccessToken()
    const cart = await getCart(accessToken!)
    const profile = await getProfile(accessToken!)

    return (
        <main>
            <Header/>
            <div className={styles.body}>
                <Cart data={cart} profile={profile} />
            </div>
        </main>
    )
})

async function getCart(accessToken: string) {
    const res = await fetch(`${process.env.API_URL}/cart`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }, cache: 'no-store'
    })
    if (!res.ok) {
        console.error(res.status)
        throw new Error('データの取得に失敗しました')
    }
    return await res.json()
}

async function getProfile(accessToken: string) {
    const res = await fetch(`${process.env.API_URL}/account`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }, cache: 'no-store'
    })
    if (!res.ok) {
        console.error(res.status)
        if (res.status === 404) redirect(`/signup`)
        throw new Error('データの取得に失敗しました')
    }
    return await res.json()
}
