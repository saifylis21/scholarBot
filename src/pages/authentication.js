import { GoogleButton } from 'react-google-button'
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { UserAuth } from "@/context/AuthContext";

export default function Authentication() {

    const [loading, setLoading] = useState(true);
    const {user, googleSignIn} = UserAuth();

    const handleSignIn = async () => {
        try {
            await googleSignIn()
            redirect('/');
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 100))
            setLoading(false)
        }
        checkAuthentication()
    }, [user])

    return (
        <>
            <div className="bg-slate-950 w-full h-screen flex justify-center">
                <div className="min-h-screen flex flex-col items-center justify-center text-center">
                    {loading ? null : !user ? (
                        <>
                            <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-7xl dark:text-white">Sign In and<br/>join the ride!</h1>
                            <GoogleButton
                                onClick={handleSignIn}
                            />
                        </>
                    ) : (
                        <>
                            <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
                                Hi there!<br/>
                                {user.displayName}
                            </h1>
                        </>
                    )}
                </div>
            </div>
            
        </>
    )
}