import React, {useEffect, useState} from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import BgSwitch from "./bgSwitch";

const exitLogo = <><svg xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1" viewBox="0 0 256 256" xmlSpace="preserve">
    <defs></defs>
    <g className="exitLogo" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
        <path d="M 86.356 46.27 c 0.031 -0.065 0.059 -0.131 0.085 -0.199 c 0.042 -0.11 0.076 -0.222 0.104 -0.336 c 0.016 -0.062 0.034 -0.123 0.046 -0.186 c 0.034 -0.181 0.055 -0.364 0.055 -0.548 l 0 0 c 0 0 0 0 0 0 c 0 -0.184 -0.022 -0.367 -0.055 -0.548 c -0.012 -0.064 -0.03 -0.124 -0.046 -0.186 c -0.029 -0.114 -0.062 -0.226 -0.104 -0.336 c -0.026 -0.068 -0.055 -0.134 -0.086 -0.199 c -0.046 -0.099 -0.099 -0.194 -0.156 -0.288 c -0.039 -0.063 -0.077 -0.126 -0.12 -0.186 c -0.02 -0.027 -0.033 -0.057 -0.054 -0.084 L 74.316 27.93 c -1.009 -1.313 -2.894 -1.561 -4.207 -0.551 c -1.313 1.009 -1.561 2.893 -0.551 4.207 L 77.56 42 H 30.903 c -1.657 0 -3 1.343 -3 3 c 0 1.657 1.343 3 3 3 h 46.656 l -8.001 10.414 c -1.01 1.314 -0.763 3.197 0.551 4.207 c 0.545 0.419 1.188 0.621 1.826 0.621 c 0.9 0 1.79 -0.403 2.381 -1.172 l 11.71 -15.242 c 0.021 -0.027 0.035 -0.057 0.055 -0.085 c 0.043 -0.06 0.08 -0.122 0.119 -0.184 C 86.257 46.464 86.31 46.369 86.356 46.27 z"  transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
        <path d="M 60.442 90 H 9.353 c -1.657 0 -3 -1.343 -3 -3 V 3 c 0 -1.657 1.343 -3 3 -3 h 51.089 c 1.657 0 3 1.343 3 3 v 30.054 c 0 1.657 -1.343 3 -3 3 s -3 -1.343 -3 -3 V 6 H 12.353 v 78 h 45.089 V 55.61 c 0 -1.657 1.343 -3 3 -3 s 3 1.343 3 3 V 87 C 63.442 88.657 62.1 90 60.442 90 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
    </g>
</svg>
</>

export function NavbarDefault() {
    const [openNav, setOpenNav] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    const playerName = "c4erries"
    const imgUrl = "https://loremflickr.com/64/64";
    const [isAuth, setIsAuth] = useState(()=>{
        return localStorage.getItem("isAuth") === "true";
    });
    useEffect(()=> {
        setInterval(() => {
            setIsAuth(localStorage.getItem("isAuth") === "true")
        }, 1000)
    },
        [localStorage.getItem("isAuth")])
    const navList = (
        <ul className="flex flex-col gap-1 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 font-medium"
            >
                <a href="/cybersport" className="flex items-center">
                    Cybersport
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 font-medium"
            >
                <a href="/matches" className="flex items-center">
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
                <a href="/meta" className="flex items-center">
                    Meta
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 font-medium"
            >
                <a href="/heroes" className="flex items-center">
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
                {
                    //<BgSwitch/>
                }
                <div className="hidden lg:block">{navList}</div>
                <div className="flex items-center gap-x-1">
                    {isAuth?
                        (
                            <div className="flex items-center">
                            <a href={"/player/"+playerName} className="flex items-center lg:inline-block">
                                <img
                                  src={imgUrl}
                                  alt="avatar"
                                  className="hidden relative lg:inline-block h-12 w-12 !rounded-full object-cover object-center"
                                />
                                <div className="hidden ml-2 lg:inline-block">Name</div>
                            </a>
                                <div className="hidden lg:inline-block ml-2 w-5 h-5 place-items-center text-blue-gray-500">{exitLogo}</div>
                        </div>):(<>
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
                    </>)
                    }
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
                        {isAuth?
                            <div className="flex items-center">
                                <a href={"/player/"+playerName}>
                                    <img
                                        src={imgUrl}
                                        alt="avatar"
                                        className="relative h-12 w-12 !rounded-full object-cover object-center"
                                    />
                                </a>
                                <div className="ml-2 w-5 h-5 text-blue-gray-500">{exitLogo}</div>
                            </div>
                            :<>
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
                           </>
                        }
                    </div>
                </div>
            </MobileNav>
        </Navbar>

        </>
    );
}