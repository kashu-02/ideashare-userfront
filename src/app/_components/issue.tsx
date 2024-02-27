import Image from 'next/image'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props {
    issue: {
        id: number;
        companyId: string;
        rewards: number;
        title: string;
        imageUrl: string;
        content: string;
    }
}
export default () => (
    <Card
        elevation={0}
        variant={'outlined'}
        sx={{
            border: "2px solid #00BCD7",
            borderRadius: '10px'
        }}
    >
        <CardContent>
            <Image
                src={"https://placehold.jp/500x400.png"}
                alt={"image"}
                width={500}
                height={400}
                // size={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />
            <Typography gutterBottom variant="h5">
                一言課題
            </Typography>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', pl: 1, pb: 1}}>
                <Typography gutterBottom variant="body1">
                    O月O日まで
                </Typography>
                <Typography gutterBottom variant="body1" align="right">
                    報酬
                </Typography>
            </Box>
            <Typography gutterBottom variant="caption">
                会社名
            </Typography>
        </CardContent>
    </Card>
)