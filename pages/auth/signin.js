import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import Header from '../../components/Header/Header'

function signin({ providers }) {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
        <h1 className="font-bold">MUNIN</h1>
        <p className='font-xs italic'>Signin in you will be abailable to post, like and comment.</p>
        <div className='mt-40'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button className='p-3 bg-blue-400 rounded-lg text-white' onClick={() => SignIntoProvider(provider.id, {callbackUrl: '/'})}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers
    }
  }
}

export default signin