import dynamic from "next/dynamic";

const GoogleOneTap = dynamic(() => import("@/components/GoogleOneTap"), {
    ssr: false
});

export default function Page({ searchParams } : { searchParams: { id: string, email: string, givenName: string, familyName: string } }) {

    const isLoggedIn: boolean = searchParams.id != null;

    return (
        <div className={"m-12"}>
            <h1 className={"m-auto text-3xl"}>Google One Tap Starter</h1>

            {!isLoggedIn ? (
                <>
                    <GoogleOneTap />
                    <h2 className={"font-bold my-5"}>Not Logged in</h2>
                </>
            ) : (
                <>
                    <h2 className={"font-bold my-5"}>Logged in</h2>
                    <p>
                        <span className={"font-bold"}>Google ID: </span>
                        {searchParams.id}
                    </p>
                    <p>
                        <span className={"font-bold"}>E-Mail: </span>
                        {searchParams.email}
                    </p>
                    <p>
                        <span className={"font-bold"}>Given Name: </span>
                        {searchParams.givenName}
                    </p>
                    <p>
                        <span className={"font-bold"}>Family Name: </span>
                        {searchParams.familyName}
                    </p>
                </>
            )}

        </div>
    );
}
