"use client";

import Image from "next/image";
import Product from "./ui/product";
import ListProducts from "./ui/listProducts";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const onClick = () => {
    router.push("/createproduct");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-[100px]">
      <button 
        onClick={onClick} 
        className="px-6 py-3 mb-6 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Create Product
      </button>
      <ListProducts/>
    </div>
  );
}
