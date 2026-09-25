import { axiosInstance } from "../../../app/config/axiosInstance";

export const addProduct = async (data) => {
    try {
        // console.log(data)
        let res = await axiosInstance.post('/product', data);
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log("add product api error: ", error.message);
    }
}

export const getAllProduct = async () => {
    try {
        let res = await axiosInstance.get('/product');
        console.log(res.data.data)
        return res.data.data;
    } catch (error) {
        console.log("get all product api error: ", error.message);
    }
}