import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
    addProduct,
    getAllProduct,
    getAllProductOfUser,
    getProductById,
    updateProduct,
    deleteProduct,
} from "../apis/productApi";
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

    // full product list — public shop page, related products, etc.
    let { data, isPending } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProduct,
        staleTime: 10000,
        keepPreviousData: true,
        placeholderData: (prev) => prev,
    });

    // user products
    let { data: userProduct, isPending: isUserProductPending } = useQuery({
        queryKey: ["userProducts"],
        queryFn: getAllProductOfUser,
        staleTime: 10000,
        keepPreviousData: true,
        placeholderData: (prev) => prev,
    });

    // single product
    const { data: singleProduct, isPending: isSingleProductPending } = useQuery({
        queryKey: ["product", id],
        queryFn: () => getProductById(id),
        enabled: !!id,
    });

    // pre-filled value for update product form
    const currentProduct = userProduct?.products?.find(
        (product) => product.id === id
    );

    // 4 releted product
    const relatedProducts = (data?.products || [])
        .filter((product) => product.id !== id)
        .slice(0, 4);

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
        await queryClient.invalidateQueries({ queryKey: ["products"] });
        await queryClient.invalidateQueries({ queryKey: ["userProducts"] });
        navigate("/dashboard/product");
    };

    const handleProductUpdate = async (formData) => {
        const res = await updateProduct(id, formData);
        navigate("/dashboard/product");
        await queryClient.invalidateQueries({ queryKey: ["products"] });
        await queryClient.invalidateQueries({ queryKey: ["userProducts"] });
    };

    const handleProductDelete = async (id) => {
        const res = await deleteProduct(id);
        await queryClient.invalidateQueries({ queryKey: ["products"] });
        await queryClient.invalidateQueries({ queryKey: ["userProducts"] });
    };

    return {
        data,
        isPending,
        userProduct,
        isUserProductPending,
        currentProduct,
        singleProduct,
        isSingleProductPending,
        relatedProducts,
        register,
        handleSubmit,
        errors,
        handleProductAdd,
        handleProductUpdate,
        handleProductDelete,
        navigate,
    };
};