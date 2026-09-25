import { axiosInstance } from "../../../app/config/axiosInstance";

export const addProduct = async (data) => {
    try {
        // console.log(data)
        let res = await axiosInstance.post('/product', data);
        // console.log(res.data)
        return res.data
    } catch (error) {
        console.log("add product api error: ", error.message);
    }
}

export const getAllProduct = async () => {
    try {
        let res = await axiosInstance.get('/product');
        // console.log(res.data.data)
        return res.data.data;
    } catch (error) {
        console.log("get all product api error: ", error.message);
    }
}

export const updateProduct = async (id, data) => {
    try {
        let res = await axiosInstance.put(`/product/${id}`, data);
        return res.data.data;
    } catch (error) {
        console.log("update product api error: ", error.message);
    }
}

export const deleteProduct = async (id) => {
    try {
        console.log(id);
        let res = await axiosInstance.delete(`/product/${id}`);
        return res.data;
    } catch (error) {
        console.log("delete product api error: ", error.message);
    }
}