import {useContext, useState} from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import {AuthApi} from "../AuthApi";


export function LoginForm() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {auth, setAuth, name, setName} = useContext(AuthApi)
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
    const loginHandler = () => {
        axios
            .post("http://localhost:8080/sessions", {"email": email, "password": password})
            .then((response) => {
                if(response.status === 200){
                    //localStorage.setItem("username", "unknownUN")
                    window.location.href = "/"
                }
                else{

                }
            })
            .catch((error) => {
                console.warn(error);
            });
    }
    return (
        <section className="grid text-center h-screen items-center p-8">
            <div>
                <Typography variant="h3" color="blue-gray" className="mb-2">
                    Sign In
                </Typography>
                <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
                    Enter your email and password to sign in
                </Typography>
                <form action="#" className="mx-auto max-w-[24rem] text-left">
                    <div className="mb-6">
                        <label htmlFor="email">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Your Email
                            </Typography>
                        </label>
                        <Input
                            id="email"
                            color="gray"
                            size="lg"
                            type="email"
                            name="email"
                            placeholder="name@mail.com"
                            onChange={e => {setEmail(e.target.value)}}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Password
                            </Typography>
                        </label>
                        <Input
                            size="lg"
                            placeholder="********"
                            labelProps={{
                                className: "hidden",
                            }}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            type={passwordShown ? "text" : "password"}
                            icon={
                                <i onClick={togglePasswordVisiblity}>
                                    {passwordShown ? (
                                        <EyeIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeSlashIcon className="h-5 w-5" />
                                    )}
                                </i>
                            }
                        />
                    </div>
                    <Button onClick={loginHandler} color="gray" size="lg" className="mt-6" fullWidth>
                        sign in
                    </Button>
                    <div className="!mt-4 flex justify-end">
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            variant="small"
                            className="font-medium"
                        >
                            Forgot password
                        </Typography>
                    </div>
                    <Button
                        variant="outlined"
                        size="lg"
                        className="mt-6 flex h-12 items-center justify-center gap-2"
                        fullWidth
                    >
                        <img
                            src={`https://w7.pngwing.com/pngs/49/992/png-transparent-steam-logo-computer-icons-steam-tuners-steam-miscellaneous-rim-area-thumbnail.png`}
                            alt="steam"
                            className="h-6 w-6"
                        />{" "}
                        sign in with steam
                    </Button>
                    <Typography
                        variant="small"
                        color="gray"
                        className="!mt-4 text-center font-normal"
                    >
                        Not registered?{" "}
                        <a href="/register" className="font-medium text-gray-900">
                            Create account
                        </a>
                    </Typography>
                </form>
            </div>
        </section>
    );
}

export default LoginForm;