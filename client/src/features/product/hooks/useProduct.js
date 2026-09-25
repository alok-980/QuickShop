import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { addProduct, getAllProduct, updateProduct, deleteProduct } from "../apis/productApi";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";

export const useProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const queryClient = useQueryClient();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    let { data, isPending } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProduct,
        staleTime: 10000,
        keepPreviousData: true,
        placeholderData: (prev) => prev,
    });

    const currentProduct = data?.products?.find((product) => product.id === id);

    useEffect(() => {
        if (currentProduct) {
            reset({
                title: currentProduct.title,
                description: currentProduct.description,
                price: currentProduct.price,
                stock: currentProduct.stock,
            });
        }
    }, [currentProduct, reset]);

    const handleProductAdd = async (data) => {
        const res = await addProduct(data);
        navigate("/dashboard/product");
    };

    const handleProductUpdate = async (formData) => {
        const res = await updateProduct(id, formData);
        navigate("/dashboard/product");
        await queryClient.invalidateQueries({ queryKey: ["products"] });
    };

    const handleProductDelete = async (id) => {
        const res = await deleteProduct(id);
        await queryClient.invalidateQueries({ queryKey: ["products"] });
    }

    return {
        data,
        isPending,
        currentProduct,
        register,
        handleSubmit,
        errors,
        handleProductAdd,
        handleProductUpdate,
        handleProductDelete,
        navigate,
    };
};