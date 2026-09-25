import { axiosInstance } from "../../../app/config/axiosInstance";

export const getAllProduct = async () => {
    try {
        let res = await axiosInstance.get('/product');
        console.log(res.data.data)
        return res.data.data;
    } catch (error) {
        console.log("get all product api error: ", error.message);
    }
}