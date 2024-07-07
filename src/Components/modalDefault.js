import React, {useEffect} from "react";
import axios from 'axios';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
const instance = axios.create()
const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With",
        "Access-Control-Allow-Methods": "POST, OPTIONS, GET, PUT",
    },
    mode: 'cors'
};
export function ModalDefault() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    return (
        <>
            <Button onClick={handleOpen} variant="gradient">
                Open Dialog
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Its a simple dialog.</DialogHeader>
                <DialogBody>
                    The key to more success is to have a lot of pillows. Put it this way,
                    it took me twenty five years to get these plants, twenty five years of
                    blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                    getting started. I&apos;m up to something. Fan luv.
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}