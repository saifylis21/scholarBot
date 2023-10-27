import { Input, Button } from "@nextui-org/react";

const HelpField = () => (
    <div className="w-full w-[1024px] bg-pink-500 py-16 px-6 flex justify-center items-center">
        <div>
        <h1 className="text-white text-center font-bold mb-8 text-3xl lg:text-5xl">How Can ScholarBot Help You?</h1>
        <form>
            <div className="flex items-center w-full gap-4">
            <Input size="lg" type="text" placeholder="Ask Anything..." />
            <Button className="bg-slate-900 font-bold text-white" size="lg">
                Enter
            </Button>
            </div>
        </form>
        </div>
    </div>
)

export default HelpField