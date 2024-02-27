import {handleAuth, handleCallback, handleLogin, Session, getAccessToken} from '@auth0/nextjs-auth0';
import {NextRequest, NextResponse} from "next/server";

const afterCallback = async (req : NextRequest, session : Session) => {
    // const accessToken = session.accessToken
    // const res = await fetch(`${process.env.API_URL}/account`, {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${accessToken}`,
    //     },
    // })
    // console.log(res.status)
    // // if(res.status === 200) {
    // //     const data = await res.json()
    // // }
    // if(res.status === 404){
    //     headers.set('location', '/signup');
    // }
    return session
}

export const GET = handleAuth({
    login: handleLogin({
        authorizationParams: {
            connection: 'line',
            audience: 'https://api.idea-shares.com',
        }
    }),
    async callback(req, ctx) {
        const res = (await handleCallback(req, ctx, { afterCallback })) as NextResponse;
        const { accessToken } = await getAccessToken(req, res);
        // console.log('accessToken', accessToken)
        const response = await fetch(`${process.env.API_URL}/account`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        })
        console.log(response.status)
        // if(res.status === 200) {
        //     const data = await res.json()
        // }
        if(response.status === 404){
            res.headers.set('location', '/signup');
        }
        return res;
    }
});


