"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function GoogleOneTap() {

    const router = useRouter();

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

    const oneTap = () => {
        const { google } = window;
        if (google && clientId) {
            google.accounts.id.initialize({
                use_fedcm_for_prompt: false,
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

            const payload = await response.json();

            if (response.status === 200) {
                router.push(`/?id=${payload.id}&email=${payload.email}&givenName=${payload.givenName}&familyName=${payload.familyName}`);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => oneTap(), 1000);
        return () => clearTimeout(timeout);
    });

    return <div />;
};