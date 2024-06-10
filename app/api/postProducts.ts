import { axiosInstance } from "../axios/axiosIntances";
import { useMutation, useQueryClient, UseMutationResult} from "@tanstack/react-query";
import { ProductType } from "../types/productType";

interface PostData{
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

const createProduct = async (postData: PostData) => {
    const response = await axiosInstance.post("/products", postData);
    console.log(response.data);
    return response.data;
};

export const useCreateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation<ProductType, Error, PostData>({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["products"]});
        },
    });
};

