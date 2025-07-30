import { getData } from "@/services/product";

export default async function DetailProductPage(props: any){
    const {params} = props;
    const products = await getData('http://localhost:3000/api/product/?id=' + params.id);
    return (
        <div className="container mx-auto my-10">
            <div className="w-100 mx-auto border border-gray-700 rounded-md">
                <img src={products.data.image} alt="" className="w-full object-cover aspect-square col-span-2"/>
                <div className="bg-gray-800 p-4 px-6 text-white">
                    <h3>{products.data.title}</h3>
                    <p>Price : $ {products.data.price}</p>
                </div>
            </div>
        </div>
    )
}