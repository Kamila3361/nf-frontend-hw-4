"use client";

import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axiosIntances";
import { ProductType } from "../types/productType";

const fetchPosts = async (): Promise<ProductType[]> => {
    const response = await axiosInstance.get("/products");
    return response.data;
};

export const useProducts = () => {
    return useQuery<ProductType[]>({
        queryKey: ["products"],
        queryFn: fetchPosts,
    });
};
