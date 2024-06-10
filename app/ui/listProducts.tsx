"use client";

import { useProducts } from "../api/fetchProducts";
import Product from "./product";

export default function ListProducts(){
    const { data, isLoading, isSuccess } = useProducts();

    if(isLoading){
        return (
            <div>Is loading</div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 items-start py-10 gap-[25px]">
            {isSuccess && data?.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
}