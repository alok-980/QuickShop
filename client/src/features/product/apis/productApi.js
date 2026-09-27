import { axiosInstance } from "../../../app/config/axiosInstance";
import { toast } from "react-toastify";

const getErrorMessage = (error) => {
    const data = error?.response?.data;
    if (data?.errors?.length) return data.errors[0].msg;
    return data?.message || "Something went wrong";
};

export const addProduct = async (data) => {
    try {
        // console.log(data)
        let res = await axiosInstance.post('/product', data);
        // console.log(res.data)
        toast.success(res.data.message);
        return res.data
    } catch (error) {
        toast.error(getErrorMessage(error));
        console.log("add product api error: ", error.message);
        throw error;
    }
}

export const getAllProduct = async () => {
    try {
        let res = await axiosInstance.get('/product');
        // console.log(res.data.data)
        return res.data.data;
    } catch (error) {
        toast.error(getErrorMessage(error));
        console.log("get all product api error: ", error.message);
    }
}

export const getAllProductOfUser = async () => {
    try {
        let res = await axiosInstance.get('/product/user');
        // console.log(res.data.data)
        return res.data.data;
    } catch (error) {
        toast.error(getErrorMessage(error));
        console.log("get all product api error: ", error.message);
    }
}

export const getProductById = async (id) => {
    try {
        let res = await axiosInstance.get(`/product/${id}`);
        console.log(res.data.data);
        return res.data.data.product;
    } catch (error) {
        toast.error(getErrorMessage(error));
        console.log("det product by id api error: ", error.message);
    }
}

export const updateProduct = async (id, data) => {
    try {
        let res = await axiosInstance.put(`/product/${id}`, data);
        toast.success(res.data.message);
        return res.data.data;
    } catch (error) {
        toast.error(getErrorMessage(error));
        console.log("update product api error: ", error.message);
        throw error
    }
}

export const deleteProduct = async (id) => {
    try {
        console.log(id);
        let res = await axiosInstance.delete(`/product/${id}`);
        toast.success(res.data.message);
        return res.data;
    } catch (error) {
        toast.error(getErrorMessage(error));
        console.log("delete product api error: ", error.message);
        throw error
    }
}