import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

import Header from '../_components/header'
import ProductDetailHeader from "./_components/productDetailHeader";
import ProductDetailCarousel from "./_components/productDetailCarousel";
import ProductDetailBody from "./_components/productDetailBody";
import AddCartButton from "./_components/addCartButton";
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <Header/>
            <div className={styles.body}>
                <ProductDetailHeader/>
                <ProductDetailCarousel/>
                <ProductDetailBody/>
                <AddCartButton/>
            </div>
        </main>
    )
}
