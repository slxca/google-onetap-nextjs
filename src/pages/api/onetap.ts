import type { NextApiRequest, NextApiResponse } from 'next'
import {OAuth2Client} from "google-auth-library";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') return res.status(405);

    try {
        const googleAuthClient = new OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

        const ticket = await googleAuthClient.verifyIdToken({
            idToken: req.body.token,
            audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        });

        const data = {
            id: ticket.getPayload()?.sub,
            email: ticket.getPayload()?.email,
            givenName: ticket.getPayload()?.given_name,
            familyName: ticket.getPayload()?.family_name,
        }

        console.log(data);

        res.status(200);
    } catch (error) {
        res.status(500);
    }
}