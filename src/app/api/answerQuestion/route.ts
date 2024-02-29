import {withApiAuthRequired, getSession, getAccessToken } from '@auth0/nextjs-auth0/edge';
import {NextResponse} from "next/server";

export const runtime = process.env.RUNTIME;
export const dynamic = 'force-dynamic'

export const POST = withApiAuthRequired(async function issuePOST(req) {
    const reqJSON = await req.json()
    const res = new NextResponse();
    const { accessToken } = await getAccessToken(req, res);
    console.log('reqJSON', reqJSON)
    console.log(JSON.stringify(reqJSON.answers))
    const response = await fetch(`${process.env.API_URL}/problems/answer/${reqJSON.problemId}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(reqJSON.answers),
    })
    const resJSON = await response.json()
    return NextResponse.json(resJSON, res);
});
