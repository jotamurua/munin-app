import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../../atoms/modalAtom";

function Header() {
    const {data: session} = useSession();
    const [open, setOpen ] = useRecoilState(modalState);
    const router = useRouter();
    return (
        <div className="shadow-sm h-100 border-b bg-white sticky top-0 z-50 ">
            <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
                {/* left */}
                <div onClick={() => router.push('/')} className='relative w-24 hidden lg:inline-grid '>
                    <Image
                        src='https://firebasestorage.googleapis.com/v0/b/portfolio-eda94.appspot.com/o/Sin%20t%C3%ADtulo-1.png?alt=media&token=ca0b8ace-0414-4d98-b130-33c91c530634'
                        layout='fill'
                        objectFit="contain" 
                        alt=''/>
                </div>
                <div onClick={() => router.push('/')} className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                    <Image
                        src='https://firebasestorage.googleapis.com/v0/b/portfolio-eda94.appspot.com/o/Sin%20t%C3%ADtulo-1.png?alt=media&token=ca0b8ace-0414-4d98-b130-33c91c530634'
                        layout='fill'
                        objectFit="contain" 
                        alt=''/>
                </div>
                {/* middle  search*/}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md ">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <h1>MUNIN</h1>
                        </div>
                    </div>
                </div>
                {/* right  */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon onClick={() => router.push('/')} className="navBtn" />
                    {/* <MenuIcon className="h-6 md:hidden cursor-pointer" /> */}

                    {session? (
                    <>
                    <div className="relative navBtn">
                    {/* <PaperAirplaneIcon className="navBtn rotate-45" /> */}
                    {/* <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div> */}
                    </div>
                    <PlusCircleIcon  onClick= {() => setOpen(true)} className='h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out' />
                    {/* <UserGroupIcon className='navBtn' /> */}
                    {/* <HeartIcon className='navBtn' /> */}

                    <img 
                    onClick={signOut}
    
                    src={session.user.image} alt="profile pic" className="h-10 rounded-full cursor-pointer" />
                    </>)
                    :(
                        <button onClick={signIn}>Sign In</button>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default Header
