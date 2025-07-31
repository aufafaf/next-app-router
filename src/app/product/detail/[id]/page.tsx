"use client"

// import { getData } from "@/services/product";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailProductPage(props: any){
    const {params} = props;
    // const products = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=` + params.id);

    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=${params.id}`, fetcher);

    const products = {
        data: data?.data,
    };
    
    return (
        <div className="container mx-auto my-10">
            <div className="w-100 mx-auto border border-gray-700 rounded-md">
                <Image src={products.data?.image} alt="" width={500} height={500} className="w-full object-cover aspect-square col-span-2"/>
                <div className="bg-gray-800 p-4 px-6 text-white">
                    <h3>{products.data?.title}</h3>
                    <p>Price : $ {products.data?.price}</p>
                </div>
            </div>
        </div>
    )
}

