"use client";

import { useState } from "react";
import { useCreateProduct } from "../api/postProducts";
import FileUploader from "../ui/fileuploader";
import { useRouter } from "next/navigation";


export default function Page(){
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setLocation] = useState("");
    const router = useRouter();

    const {mutate, isPending} = useCreateProduct();

    const onSubmit = () => {
        mutate({title, price, category, description, image});
        router.push("/");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Title"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="w-full pb-[110px] px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-[150px]"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <FileUploader setLocation={setLocation}/>
        <button
          type="submit"
          onClick={onSubmit}
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </div>
    );
}