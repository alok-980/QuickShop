import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../apis/productApi";

export const useProduct = () => {

    let { data, isPending } = useQuery({
        queryKey: ['products'],
        queryFn: getAllProduct,
        staleTime: 10000,
        keepPreviousData: true,
        placeholderData: (prev) => prev
    })

    return {
        data,
        isPending
    }
}