import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Carousel from './IssueDescriptionCarousel';
import Markdown, {Components} from "react-markdown";

interface Props{
    data:{
        title: string;
        imageUrl: string;
        content: string;
    }
}
export default (props: Props) => {

    const components : Components = {
        h1: 'h4',
        h2: 'h5',
        h3: 'h5',
        h4: 'h5',
        h5: 'h5',
    }
    return (
        <>
            <Typography
                color={"#FFFFFF"}
                sx={{
                    width: 'fit-content',
                    backgroundColor: '#FF905D',
                    border: '1px solid #FF905D',
                    borderRadius: 5,
                    padding: '0.1rem 0.5rem',
                    marginBottom: '0.5rem'
                }}
            >
                お題
            </Typography>
            <Typography>
                {props.data.title}
            </Typography>
            <Carousel images={[props.data.imageUrl]}/>
            <div
                className={'markdown'}
                style={{
                    marginBottom: '2rem'
                }}
            >
                <Markdown
                    components={components}
                >
                    {props.data.content}
                </Markdown>
            </div>
        </>
    )
}