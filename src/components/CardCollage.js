import {Card, CardHeader, CardFooter, Image} from "@nextui-org/react";

const CardCollage = () => (
    <div className="w-full bg-slate-900 flex justify-center py-16 px-10">
        <div className="w-[900px] gap-2 grid grid-cols-12 grid-rows-2">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Use it all the time</p>
            <h4 className="text-white font-medium text-large">Available 24/7</h4>
            </CardHeader>
            <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="static/images/pic1.jpg"
            />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">It's in your pocket</p>
            <h4 className="text-white font-medium text-large">Use it on your mobile</h4>
            </CardHeader>
            <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="static/images/pic3.jpg"
            />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Versatile</p>
            <h4 className="text-white font-medium text-large">Choose from a range of subjects</h4>
            </CardHeader>
            <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="static/images/pic4.jpg"
            />
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Scholar AI</p>
            <h4 className="text-white font-medium text-large">Become a scholar</h4>
            </CardHeader>
            <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="static/images/pic2.jpg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <p className="text-black text-tiny">Start now.</p>
            <p className="text-black text-tiny">It's free.</p>
            </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">World class study material</p>
            <h4 className="text-white font-medium text-large">Best study answers</h4>
            </CardHeader>
            <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="static/images/pic5.jpg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <p className="text-tiny text-white/60">ScholarAI App<br/>Your Personal AI Tutor.</p>
            </CardFooter>
        </Card>
        </div>
    </div>
)

export default CardCollage;