import {handleAuth, handleCallback, handleLogin, getAccessToken} from '@auth0/nextjs-auth0/edge';
import {NextRequest, NextResponse} from "next/server";

export const runtime = 'edge';
// const afterCallback = async (req : NextRequest, session : Session) => {
//     // const accessToken = session.accessToken
//     // const res = await fetch(`${process.env.API_URL}/account`, {
//     //     headers: {
//     //         'Content-Type': 'application/json',
//     //         'Authorization': `Bearer ${accessToken}`,
//     //     },
//     // })
//     // console.log(res.status)
//     // // if(res.status === 200) {
//     // //     const data = await res.json()
//     // // }
//     // if(res.status === 404){
//     //     headers.set('location', '/signup');
//     // }
//     return session
// }

export const GET = handleAuth({
    login: handleLogin({
        authorizationParams: {
            // connection: 'line',
            audience: 'https://api.idea-fanding.com',
        }
    }),
    async callback(req, ctx) {
        const res = (await handleCallback(req, ctx)) as NextResponse;
        const { accessToken } = await getAccessToken(req, res);
        const response = await fetch(`${process.env.API_URL}/account`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        })
        if(response.status === 404){
            res.headers.set('location', '/signup');
        }
        return res;
    }
});


