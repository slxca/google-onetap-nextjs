import GoogleOneTapLogin from "@/components/OneTap";

export default function Home() {

    const isLoggedIn = false;

    return (
        <div>
            <h1>Google One Tap Starter</h1>

            <GoogleOneTapLogin />
        </div>
    );
}
