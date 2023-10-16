import React from "react";
import {
  Image,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  } from "@nextui-org/react";

import {} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";

export default function Home() {

  const [isMenuOpen,
    setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Subjects",
    "Pricing",
    "Blog",
    "Contact Us",
  ];

  return (
    <>
      <header>
        <Navbar onMenuOpenChange={setIsMenuOpen} className="absolute bg-slate-900">
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden text-white"
            />
            <NavbarBrand>
              <p className="font-bold text-inherit text-white">Scholar AI</p>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link href="#" className="text-white">
                Subjects
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#" className="text-white">
                Pricing
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#" className="text-white">
                Blog
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#" className="text-white">
                Contact Us
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu className="bg-white">
            {menuItems.map((item,
            index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color="foreground"
                  className="w-full"
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </header>
      
      <main className="w-full h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate">
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
          <h5 className="mb-6 text-lg font-normal text-white">Scholar AI</h5>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Your Personal<br/>AI Tutor</h1>
        </div>
      </main>

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

      <div className="w-full w-[1024px] bg-pink-500 py-16 px-10 flex justify-center items-center">
        <div>
          <h1 className="text-white text-center font-bold mb-8 text-3xl lg:text-5xl">How Can ScholarAI Help You?</h1>
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
              <p className="text-tiny text-white/60 uppercase font-bold">Study easily</p>
              <h4 className="text-white font-medium text-large">Study like a scholar</h4>
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

    </>
  )
}