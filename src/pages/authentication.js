import { UserAuth } from "@/context/AuthContext";

export default function Authentication() {

    const {user, googleSignIn, logOut} = UserAuth();

    const handleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    };

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch(error) {
            console.log(error)
        }
    };

    return (
        <>
            <div className="bg-slate-950 w-full h-screen flex justify-center mt-[64px]">
                <h1>njfkdnjksdf</h1>
                <br/>            <h1>njfkdnjksdf</h1>
                <br/>            <h1>njfkdnjksdf</h1>
                <br/>            <h1>njfkdnjksdf</h1>
                <br/>            <h1>njfkdnjksdf</h1>
                <br/>            <h1>njfkdnjksdf</h1>
                <br/>
            </div>
        </>
    )
}