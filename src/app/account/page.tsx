'use client'
import Grid from '@mui/material/Unstable_Grid2';


import Header from './_components/header'
import Container from '@mui/material/Container';
import AccountHeader from './_components/accountHeader';
import AccountBody from './_components/accountBody';
import AccountBottom from "./_components/accountBottom";
import styles from './page.module.css'

import {withPageAuthRequired} from '@auth0/nextjs-auth0/client';
import {useEffect, useState} from "react";
import Loading from '@/app/_components/loading'

export default withPageAuthRequired(function CheckoutPage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${window.location.origin}/api/profile`);
            setUser(await res.json());
        })();
    }, []);

    return (
        <main>
            <Header/>
            <div className={styles.body}>
                {user ?
                <>
                    <AccountHeader data={user}/>
                    <AccountBody data={user}/>
                    <AccountBottom/>
                </>
                    :
                    <>
                        <Loading loading={!Boolean(user)}/>
                    </>
                }
            </div>
        </main>
    )
});
