import { useEffect, useState } from "react";
import {
    Avatar,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import { UserAuth } from "@/context/AuthContext";

import Link from "next/link";

const Nav = () => {
    
    const [loading, setLoading] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {user, googleSignIn, logOut} = UserAuth();

    const handleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 100))
            setLoading(false)
        }
        checkAuthentication()
    }, [user])

    const menuItems = [
      "Subjects",
      "Pricing",
      "Contact Us"
    ];

    return (
        <header>
            <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-slate-900 absolute w-full">
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden text-white"
                    />
                    <NavbarBrand>
                        <Link href="/" className="font-bold text-inherit text-white">ScholarBot</Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link href="/question" className="text-white">
                            Subjects
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/question" className="text-white">
                            Pricing
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/question" className="text-white">
                            Contact Us
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    {loading ? null : !user ? (
                        <>
                            <NavbarItem>
                                <Link href="/authentication" className="font-bold text-sm text-white bg-red-500 py-3 px-4 rounded-lg">
                                    Sign Up
                                </Link>
                            </NavbarItem>
                        </>
                    ) : (
                        <NavbarItem>
                            {/* <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" /> */}
                            <p className="text-white">Welcome, {user.displayName}</p>
                            <p className="text-white cursor-pointer" onClick={handleSignOut}>Sign Out</p>
                        </NavbarItem>
                    )}
                </NavbarContent>
                
                <NavbarMenu className="bg-white">
                    {menuItems.map((item,
                    index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color="foreground"
                            className="w-full"
                            href="/question"
                            size="lg"
                        >
                        {item}
                        </Link>
                    </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </header>
    )
}

export default Nav;