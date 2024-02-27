import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

import Header from '../_components/header'
import ProductDetailHeader from "./_components/productDetailHeader";
import ProductDetailCarousel from "./_components/productDetailCarousel";
import ProductDetailBody from "./_components/productDetailBody";
import AddCartButton from "./_components/addCartButton";
import styles from './page.module.css'

export default async function ProductDetail({params}: { params: { productId: string } }) {
    const productDetail = await getData(params.productId)

    const companyData = {
        imageUrl: productDetail.Company.imageUrl,
        companyName: productDetail.Company.name
    }
    const images = productDetail.images

    return (
        <main className={styles.main}>
            <Header/>
            <div className={styles.body}>
                <ProductDetailHeader data={companyData}/>
                <ProductDetailCarousel images={images}/>
                <ProductDetailBody data={productDetail}/>
                <AddCartButton productId={params.productId}/>
            </div>
        </main>
    )
}

async function getData(productId) {
    const res = await fetch(`${process.env.API_URL}/products/${productId}`)
    if(!res.ok){
        throw new Error('データの取得に失敗しました')
    }

    return res.json()
}
