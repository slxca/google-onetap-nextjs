import type { NextApiRequest, NextApiResponse } from 'next'
import {OAuth2Client} from "google-auth-library";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

    try {
        const googleAuthClient = new OAuth2Client("789080324001-m0po6vtce4ohqgr8gmhe4jsjo1coktek.apps.googleusercontent.com");

        const ticket = await googleAuthClient.verifyIdToken({
            idToken: req.body.token,
            audience: "789080324001-m0po6vtce4ohqgr8gmhe4jsjo1coktek.apps.googleusercontent.com",
        });

        const body = {
            id: ticket.getPayload()?.sub,
            email: ticket.getPayload()?.email,
            givenName: ticket.getPayload()?.given_name,
            familyName: ticket.getPayload()?.family_name,
        }

        const response = await fetch("https://api.xo-6.studio/v1/oauth/google/onetap", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        res.status(200).json(await response.json());
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}