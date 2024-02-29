'use client'
import Header from './_components/header'
import Container from '@mui/material/Container';
import Cart from './_components/cart'
import styles from './page.module.css'
import {useRouter} from "next/navigation";
import {useUser, withPageAuthRequired} from "@auth0/nextjs-auth0/client";
import {useEffect, useState} from "react";


export default withPageAuthRequired(function CartPage() {
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

    const updateCart = (d: {
        catalogProductId: string;
        cartProductId: string;
        quantity: number
    }) => {
        if (!d) return
        fetch(`${window.location.origin}/api/cart`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                catalogProductId: d.catalogProductId,
                cartProductId: d.cartProductId,
                quantity: d.quantity,
            }),
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }
    return (
        <main>
            <Header/>
            <div className={styles.body}>
                <Cart data={data} profile={profile} updateCart={updateCart}/>
            </div>
        </main>
    )
})
