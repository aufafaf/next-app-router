"use client"

import { useState } from "react";

export default function AdminProductsPage(){

    const [status, setStatus] = useState("")
    async function handleRevalidate(){
        const res = await fetch("http://localhost:3000/api/revalidate?tag=products&secret=aufa123", {
            method: "POST",
        });

        if(!res.ok) {
            setStatus("Revalidate Failed");
        } else {
            const response = await res.json()
            if(response.revalidate){
                setStatus("Revalidate Success");
            }
        }   
    };

    return (
        <div className="w-3/6 h-80 bg-gray-300 rounded-[12px] flex justify-center items-center mr-5">
            <h1>{status}</h1>
            <button className="bg-black text-white p-3 m-5 cursor-pointer rounded-md" onClick={handleRevalidate}>
                Revalidate
            </button>
        </div>
    )
}