import { useQuery } from "@tanstack/react-query";
import { addProduct, getAllProduct } from "../apis/productApi";
import { useForm } from 'react-hook-form';

export const useProduct = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    let { data, isPending } = useQuery({
        queryKey: ['products'],
        queryFn: getAllProduct,
        staleTime: 10000,
        keepPreviousData: true,
        placeholderData: (prev) => prev
    })

    const handleProductAdd = async (data) => {
        // console.log(data)
        const res = await addProduct(data)
    }

    const handleProductUpdate = (data) => {

    }

    return {
        data,
        isPending,
        register,
        handleSubmit,
        errors,
        handleProductAdd,
        handleProductUpdate
    }
}