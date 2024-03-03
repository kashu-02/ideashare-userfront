import Box from '@mui/material/Box';
import Link from 'next/link';

export default () => {
    
    return (
        <>
            <Link
                href={"/api/auth/logout"}
                style={{
                    position: 'absolute',
                    bottom: 90,
                    left: '50%',
                    transform: 'translate(-50%)',
                    color: '#707070'
                }}
            >
                ログアウト
            </Link>
        <Link
            href={"/terms"}
            style={{
                position: 'absolute',
                bottom: 60,
                left: '50%',
                transform: 'translate(-50%)',
                color: '#707070'
            }}
        >
            利用規約
        </Link>
        </>
    )
}
