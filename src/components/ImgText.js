import { Image } from "@nextui-org/react";

const ImgText = () => (
    <div className="h-screen w-full bg-slate-900 flex justify-center items-center px-10">
        <div className="w-[1024px] text-white flex justify-center lg:justify-between">
        <Image
            className="hidden lg:flex"
            isZoomed
            width={400}
            alt="NextUI Fruit Image with Zoom"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
        />

        <div className="max-w-lg flex flex-col justify-between">
            <div className="mb-10">
            <h1 className="font-bold text-4xl mb-6">Learn Smarter, Not Harder<br/>with AI.</h1>
            <p className="text-yellow-300">Introducing Scholar AI, your AI-powered tutor. <br/><br/>
                Scholar AI can tutor complex homework questions, enhance your essay writing and assess your work—all in seconds.</p>
            </div>
            <div>
            <h1 className="font-bold text-4xl mb-6">To never too late<br/>to learn.</h1>
            <p className="text-yellow-300">Super easy sign up process. Get into learning within seconds. <br/><br/>
                Join via Google, LinkedIn, Twitter, or Github.
            </p>
            </div>
        </div>
        </div>
    </div>
)

export default ImgText;