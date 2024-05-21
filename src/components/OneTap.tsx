"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const GoogleOneTapLogin = () => {
    const router = useRouter();

    useEffect(() => {
        oneTap();
    });

    const oneTap = () => {
        const { google } = window;
        if (google) {
            google.accounts.id.initialize({
                use_fedcm_for_prompt: false,
                client_id: "789080324001-m0po6vtce4ohqgr8gmhe4jsjo1coktek.apps.googleusercontent.com",
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