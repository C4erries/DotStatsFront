import { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import axios from "axios";

export function SignupForm() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);
    const signUpHandler = () => {
        axios
            .post("http://localhost:8080/users", {"email": email, "password": password})
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.warn(error);
            });
    }
    return (
        <section className="grid text-center h-screen items-center p-8">
            <div>
                <Typography variant="h3" color="blue-gray" className="mb-2">
                    Sign Up
                </Typography>
                <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
                    Hi
                </Typography>
                <form action="#" className="mx-auto max-w-[24rem] text-left">
                    <div className="mb-6">
                        <label htmlFor="email">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Your NickName
                            </Typography>
                        </label>
                        <Input
                            id="nickname"
                            color="gray"
                            size="lg"
                            type="text"
                            name="nickname"
                            placeholder="Крутойчел228"
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
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
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            onChange={e => setEmail(e.target.value)}
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
                                Your Password
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
                                <i onClick={togglePasswordVisibility}>
                                    {passwordShown ? (
                                        <EyeIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeSlashIcon className="h-5 w-5" />
                                    )}
                                </i>
                            }
                        />
                    </div>
                    <Button onClick={signUpHandler} color="gray" size="lg" className="mt-6" fullWidth>
                        sign up
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

export default SignupForm;