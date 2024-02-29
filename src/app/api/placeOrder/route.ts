import {withApiAuthRequired, getSession, getAccessToken } from '@auth0/nextjs-auth0/edge';
import {NextResponse} from "next/server";

export const runtime = process.env.RUNTIME;
export const dynamic = 'force-dynamic';

export const POST = withApiAuthRequired(async function cartPOST(req) {
    const reqJSON = await req.json()
    const res = new NextResponse();
    const { accessToken } = await getAccessToken(req, res);
    const response = await fetch(`${process.env.API_URL}/checkout/placeorder`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            name: reqJSON.name,
            address: reqJSON.address,
            items: reqJSON.items,
        }),
    })
    const resJSON = await response.json()
    return NextResponse.json(resJSON, res);
});
