import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

import Header from '../_components/header'
import ProductItem from './_components/productItem'
import styles from './page.module.css'

export default async function CatalogSelect({params}: { params: { catalogId: string } }) {
    const [products, catalog] = await Promise.all([
        getCatalogProducts(params.catalogId),
        getCatalog(params.catalogId)
    ])
    return (
        <main className={styles.main}>
            <Header/>
            <Grid container spacing={3} sx={{ marginTop: '1rem'}}>
                <Grid xs={12} sm={12} md={12} position='relative' display="flex" justifyContent="end"
                      alignItems="center">
                    <Box
                        sx={{
                            display: 'block',
                            // position: 'absolute',
                            right: '-1.5rem',
                            border: 2,
                            borderColor: 'secondary.main',
                            borderRadius: 9999,
                            // marginBottom: '3rem',
                            padding: '0.8rem',
                            paddingX: '1rem',
                            paddingRight: '3rem',
                            marginRight: '-2rem'
                        }}
                    >
                        <Typography
                            variant={"h5"}
                            sx={{
                                color: 'secondary.main',
                            }}
                        >
                            {`${catalog.name}コースカタログ`}
                        </Typography>
                    </Box>
                </Grid>
                {products.map((product, index) => (
                    <Grid xs={12} sm={12} md={12} key={index}
                          display="flex"
                          justifyContent="center"
                          alignItems="center">
                        <ProductItem
                            product={product}
                        />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}


async function getCatalogProducts(catalogId) {
    console.log(catalogId)
    const res = await fetch(`${process.env.API_URL}/catalogs/${catalogId}/products`)
    if(!res.ok){
        throw new Error('データの取得に失敗しました')
    }

    return res.json()
}

async function getCatalog(catalogId) {
    console.log(catalogId)
    const res = await fetch(`${process.env.API_URL}/catalogs/${catalogId}`)
    if(!res.ok){
        throw new Error('データの取得に失敗しました')
    }

    return res.json()
}