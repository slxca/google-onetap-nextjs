import GoogleOneTapLogin from "@/components/OneTap";

export default function Home() {

    const isLoggedIn = false;

    return (
        <div>
            <h1>Hello World</h1>

            {!isLoggedIn && (
                <GoogleOneTapLogin />
            )}
        </div>
    );
}
