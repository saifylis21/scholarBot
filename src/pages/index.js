import React from "react";
import { 
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle} from "@nextui-org/react";

import {Image} from "@nextui-org/react";

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
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-slate-900">
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

      <div className="w-full h-screen flex justify-center items-center bg-slate-900 py-16">
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
    </>
  )
}