import {withApiAuthRequired, getSession, getAccessToken } from '@auth0/nextjs-auth0/edge';
import {NextResponse} from "next/server";

export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const GET = withApiAuthRequired(async function myApiRoute(req) {
    const res = new NextResponse();
    const { accessToken } = await getAccessToken(req, res);
    const response = await fetch(`${process.env.API_URL}/cart`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
    })
    const resJSON = await response.json()
    return NextResponse.json(resJSON, res);
});

export const POST = withApiAuthRequired(async function myApiRoute(req) {
    const reqJSON = await req.json()
    const res = new NextResponse();
    const { accessToken } = await getAccessToken(req, res);
    const response = await fetch(`${process.env.API_URL}/cart`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            items: [{
                catalogProductId: reqJSON.productId,
                quantity: 1
            }]
        }),
    })
    const resJSON = await response.json()
    return NextResponse.json(resJSON, res);
});
