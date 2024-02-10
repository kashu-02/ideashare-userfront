import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

import Header from '../_components/header'
import ProductItem from './_components/productItem'
import styles from './page.module.css'

export default function CatalogSelect({params}: { params: { catalogName: string } }) {
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
                            3000円コースカタログ
                        </Typography>
                    </Box>
                </Grid>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid xs={12} sm={12} md={12} key={index}
                          display="flex"
                          justifyContent="center"
                          alignItems="center">
                        <ProductItem
                            catalogName={params.catalogName}
                        />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
