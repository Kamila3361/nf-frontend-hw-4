import Image from "next/image";
import { ProductType } from "../types/productType";

export default function Product({title, price, category, description, image}: ProductType){
    return(
        <div className="flex flex-col w-[250px] bg-white rounded-md">
            <Image 
                src={image}
                alt="product photo"
                width={250}
                height={250}
                className="rounded-md mb-[5px] object-cover w-[250px]"
            />
            <div className="mx-[10px]">
                <p className="text-lg">{title}</p>
                <p className="font-bold text-xl my-[5px]">{price} tg</p>
                <p className="text-sm text-gray-800">{description.slice(0, 200)}</p>
                <div className="flex">
                    <p className="bg-gray-200 py-[5px] px-[10px] rounded-3xl text-sm my-[10px]">{category}</p>
                </div>
            </div>
            
        </div>
    );
}