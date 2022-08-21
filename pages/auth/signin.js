import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
//browser
const signIn = (providers) => {
    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => SignIntoProvider(provider.id)}>
                        Sign in with {provider.name}

                    </button>
                </div>
            ))}
        </>
    );
}

//midsv
export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}
export default signIn