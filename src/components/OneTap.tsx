"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const GoogleOneTapLogin = () => {
    const router = useRouter();

    useEffect(() => {
        oneTap();
    });

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

    const oneTap = () => {
        const { google } = window;
        if (google && clientId) {
            google.accounts.id.initialize({
                use_fedcm_for_prompt: true,
                client_id: clientId,
                callback: async (response) => {
                    await call(response.credential);
                },
            });

            google.accounts.id.prompt(() => {});
        }
    };

    const call = async (token: any) => {
        try {
            const response = await fetch("/api/onetap", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token }),
            });

            if(response.status === 200) return router.refresh();
            console.log(await response.json());
        } catch (error) {
            console.log(error)
        }
    };

    return <div />;
};

export default GoogleOneTapLogin;