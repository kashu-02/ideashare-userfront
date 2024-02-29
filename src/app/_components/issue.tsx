import NextLink from 'next/link'
import dayjs from 'dayjs';
import Image from 'next/image'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActionArea} from '@mui/material';
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

interface Props{
    data: {
        id: string;
        shortTitle: string;
        rewards: number;
        deadline: string;
        imageUrl: string;
        Company:{
            name: string;
        }
    }
}
export default (props: Props) => (
    <Card
        elevation={0}
        variant={'outlined'}
        sx={{
            border: "2px solid #00BCD7",
            borderRadius: '10px'
        }}
    >
        <NextLink href={`/issues/${props.data.id}`} legacyBehavior>
        <CardActionArea>
        <CardContent>
            <Image
                src={props.data.imageUrl}
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
                {props.data?.shortTitle}
            </Typography>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', pl: 1, pb: 1}}>
                <Typography gutterBottom variant="body1">
                    {`${dayjs(props.data?.deadline).format("MM月DD日")}まで`}
                </Typography>
                <Typography gutterBottom variant="body1" align="right">
                    {`${props.data?.rewards}pt`}
                </Typography>
            </Box>
            <Typography gutterBottom variant="caption">
                {props.data?.Company.name}
            </Typography>
        </CardContent>
        </CardActionArea>
        </NextLink>
    </Card>
)