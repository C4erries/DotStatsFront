import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

export function NavbarDefault() {
    const [openNav, setOpenNav] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="flex flex-col gap-1 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 font-medium"
            >
                <a href="#" className="flex items-center">
                    Matches
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 font-medium"
            >
                <a href="/players" className="flex items-center">
                    Players
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 font-medium"
            >
                <a href="#" className="flex items-center">
                    Meta
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 font-medium"
            >
                <a href="#" className="flex items-center">
                    Heroes
                </a>
            </Typography>
        </ul>
    );

    return (
        <>
        <Navbar className="mx-auto max-w-full  py-2 ">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="/"
                    className="cursor-pointer mr-20 py-1.5 font-medium"
                >
                    DotStats
                </Typography>
                <div className=" hidden lg:block">{navList}</div>
                <div className="flex items-center gap-x-1">
                    <a href="/login">
                    <Button variant="text" size="sm" className="hidden lg:inline-block">

                        <span>Sign In</span>

                    </Button>
                    </a>
                    <a href="/register">
                    <Button
                        variant="gradient"
                        size="sm"
                        className="hidden lg:inline-block"
                    >

                        <span>Sign Up</span>

                    </Button>
                    </a>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <a href="/login">
                        <Button fullWidth variant="text" size="sm" className="">
                            <span>Sign in</span>
                        </Button>
                        </a>
                        <a href="/register">
                        <Button fullWidth variant="gradient" size="sm" className="">
                            <span>Sign up</span>
                        </Button>
                        </a>
                    </div>
                </div>
            </MobileNav>
        </Navbar>

        </>
    );
}