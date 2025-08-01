"use client";

// import { getData } from "@/services/product";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

// type ProductPage = {params : {slug: string[]}}
type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductPage() {
  // const {params} = props;

  // const products = await getData();

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product`,
    fetcher
  );

  const products = {
    data: data?.data,
  };

  return (
    <div className="grid grid-cols-4 mt-5 place-items-center">
      {/* <h1> {params.slug ? "Detail Product Page" : "Product Detail"}</h1> */}
      {products.data?.length > 0 &&
        products.data?.map((product: Product) => (
          <Link
            href={`/product/detail/${product.id}`}
            key={product.id}
            className="h-auto w-11/12 max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 my-2"
          >
            <Image
              className="p-6 rounded-t-lg object-cover h-75 w-full"
              src={product.image}
              alt="product image"
              width={500}
              height={500}
            />
            <div className="px-5 pb-5">
              <h5 className="text-xl mb-5 font-semibold tracking-tight text-white dark:text-white truncate">
                {product.title}
              </h5>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white dark:text-white">
                  ${product.price}
                </span>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        ))}

      {/* {params.slug && 
            <>
                <h2> category : {params.slug[0]}</h2>
                <h2> gender : {params.slug[1]}</h2>
                <h2> id : {params.slug[2]}</h2>
            </>} */}
    </div>
  );
}
