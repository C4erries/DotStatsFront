import React, {useContext, useEffect, useState} from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import BgSwitch from "./bgSwitch";
import {AuthApi} from "../AuthApi";
import ExitLogo from "./addons/exitLogo";
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
export function NavbarDefault(props) {
    const [openNav, setOpenNav] = React.useState(false);
    const handler = () =>{

    }
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    const playerName = useContext(AuthApi).name;
    const imgUrl = "https://loremflickr.com/64/64";
    const auth  = useContext(AuthApi).auth;
    const exitHandler = props.exitHandler;
    return (
        <>
        <Navbar className="mx-auto max-w-full  py-2">

            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">

                <Typography as="a" href="/" className="cursor-pointer mr-20 py-1.5 font-medium">DotStats</Typography>
                {

                }
                <div className="hidden lg:block">{navList}</div>
                <div className="flex items-center gap-x-1">
                    {auth?
                        (
                            <div className="flex items-center">
                            <a href={"/player/"+playerName} className="flex items-center lg:inline-block">
                                <img
                                  src={imgUrl}
                                  alt="avatar"
                                  className="hidden relative lg:inline-block h-12 w-12 !rounded-full object-cover object-center"
                                />
                                <div className="hidden ml-2 lg:inline-block">{playerName}</div>
                            </a>
                                <button onClick={exitHandler} className="hidden lg:inline-block ml-2 w-5 h-5 place-items-center text-blue-gray-500">{<ExitLogo/>}</button>
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
                <IconButton variant="text" ripple={false} onClick={() => setOpenNav(!openNav)}
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden">
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
                        {auth?
                            <div className="flex items-center">
                                <a href={"/player/"+playerName}>
                                    <img
                                        src={imgUrl}
                                        alt="avatar"
                                        className="relative h-12 w-12 !rounded-full object-cover object-center"
                                    />
                                </a>
                                <button onClick={exitHandler} className="ml-2 w-5 h-5 text-blue-gray-500">{<ExitLogo/>}</button>
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