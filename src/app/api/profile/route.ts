import {withApiAuthRequired, getSession, getAccessToken } from '@auth0/nextjs-auth0/edge';
import {NextResponse} from "next/server";

export const runtime = 'edge';
export const dynamic = 'force-dynamic'
export const GET = withApiAuthRequired(async function myApiRoute(req) {
    const res = new NextResponse();
    const { user } = await getSession(req, res);
    const { accessToken } = await getAccessToken(req, res);
    console.log('accessToken:', accessToken, 'end')
    return NextResponse.json({ protected: 'My Secret', user, accessToken }, res);
});

export const POST = withApiAuthRequired(async function myApiRoute(req) {
    const reqJSON = await req.json()
    const res = new NextResponse();
    const { accessToken } = await getAccessToken(req, res);
    console.log('accessToken:', accessToken, 'end')
    const response = await fetch(`${process.env.API_URL}/account/create`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            email: reqJSON.email,
            nickname: reqJSON.nickname,
            sex: reqJSON.gender,
            birthday: reqJSON.birthday,
            address: reqJSON.address,
            avatar: reqJSON.avatar,
        }),
    })
    const resJSON = await response.json()
    return NextResponse.json(resJSON, res);
});
