'use client'
import Header from './_components/header'
import Container from '@mui/material/Container';
import Cart from './_components/cart'
import styles from './page.module.css'
import {useRouter} from "next/navigation";
import {useUser} from "@auth0/nextjs-auth0/client";
import {useEffect, useState} from "react";

export default function CartPage() {
    //
    // const router = useRouter();
    // const {user, error} = useUser();
    // const [data, setData] = useState(null);
    //
    // useEffect(() => {
    //     if (!user) router.push('/api/auth/login')
    //     fetch(`${window.location.origin}/api/cart`)
    //         .then(response => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         });
    // }, []);

    return (
        <main className={styles.main}>
            <Header/>
            <div className={styles.body}>
                <Cart/>
            </div>
        </main>
    )
}
