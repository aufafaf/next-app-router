import { getData } from "@/services/product";
import dynamic from "next/dynamic";
import Image from "next/image";

const Modal = dynamic(() => import('@/components/core/modal'));

export default async function DetailProductPage(props: any){
    const {params} = props;
    const products = await getData('http://localhost:3000/api/product/?id=' + params.id);
    return (
        <Modal>
                <Image src={products.data.image} alt="product" width={1000} height={1000} className="w-full object-cover aspect-square col-span-2"/>
                <div className="bg-gray-800 p-4 px-6 text-white">
                    <h3>{products.data.title}</h3>
                    <p>Price : $ {products.data.price}</p>
                </div>
        </Modal>
    )
}