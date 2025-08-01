import { retreiveData, retreiveDataById } from "@/lib/firebase/services";
import { NextRequest, NextResponse } from "next/server";

const dataProduct = [
  {
    id: 1,
    title: "Nike Air Max TL 2.5",
    price: 2849000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3ea3412-5646-4d99-8927-951489e3239e/AIR+MAX+TL+2.5.png",
  },
  {
    id: 2,
    title: "Nike Air Max TL 2.5",
    price: 2849000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c9f7cdb-9149-429e-ad00-20c0574c0a22/AIR+MAX+TL+2.5.png",
  },
  {
    id: 3,
    title: "Nike Air Max Plus",
    price: 2849000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f4a2b207-924e-4356-b0f6-4d1f05c75222/NIKE+AIR+MAX+PLUS.png",
  },
  {
    id: 4,
    title: "Nike Field General",
    price: 1549000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/68aa56ba-29a6-4ad5-8e12-6b7fe73091b7/WMNS+NIKE+FIELD+GENERAL.png",
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = await retreiveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({ status: 404, message: "Not Found", data: {} });
  }

  const products = await retreiveData("products");

  return NextResponse.json({ status: 200, message: "Success", data: products });
}
