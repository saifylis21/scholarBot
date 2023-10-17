import { useState } from "react";
import {
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

const Nav = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
      "Subjects",
      "Pricing",
      "Blog",
      "Contact Us",
    ];

    return (
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
    )
}

export default Nav;