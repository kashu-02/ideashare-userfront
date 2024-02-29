'use client'
import Grid from '@mui/material/Unstable_Grid2';
import {useRouter} from "next/navigation";
import {useUser, withPageAuthRequired} from "@auth0/nextjs-auth0/client";
import {useEffect, useState} from "react";
import Header from './_components/header'
import Container from '@mui/material/Container';
import Cart from './_components/cart'
import styles from './page.module.css'

export default withPageAuthRequired(function Checkout_ConfirmPage() {
    const [data, setData] = useState(null);
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        fetch(`${window.location.origin}/api/cart`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, [])

    useEffect(() => {
        fetch(`${window.location.origin}/api/profile`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setProfile(data);
            });
    }, [])

    return (
        <main>
            <Header/>
            <div className={styles.body}>
                {data && <Cart data={data} profile={profile} />}
            </div>
        </main>
    )
})
