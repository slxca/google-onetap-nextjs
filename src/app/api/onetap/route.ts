import {OAuth2Client} from "google-auth-library";

export async function POST(request: Request) {

    const payload = await request.json();

    if(!payload.token) {
        return Response.json("Missing Token", { status: 400 });
    }

    try {
        const googleAuthClient = new OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

        const ticket = await googleAuthClient.verifyIdToken({
            idToken: payload.token,
            audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        });

        const data = {
            id: ticket.getPayload()?.sub,
            email: ticket.getPayload()?.email,
            givenName: ticket.getPayload()?.given_name,
            familyName: ticket.getPayload()?.family_name,
        }

        return Response.json(data, { status: 200 });
    } catch (error) {
        console.log(error);
        return Response.json("Internal Server Error", { status: 500 });
    }

}