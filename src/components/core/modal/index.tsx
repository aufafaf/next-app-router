"use client"

import { useRouter } from "next/navigation";
import { MouseEventHandler, useRef } from "react";

export default function Modal({children} : {children: React.ReactNode}){
    const overlay = useRef(null);
    const router = useRouter();

    const close: MouseEventHandler = (e) => {
        if(e.target === overlay.current) {
            router.back();
        }
    };

    return (
        <div
            ref={overlay}
            className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 flex justify-center items-center"
            onClick={close}
        >
            <div
                className="absolute p-6 bg-white rounded-lg h-auto w-100"
            >
                {children}
            </div>
        </div>
    )
}