import axios from "axios"
import React from "react"
import { toast } from "react-toastify"
import { IResponse } from "./models/MyResponse"

/**
 * 
 * @param T {Return Type}
 * @param K {Input Type}
 */

const postData = async <T, K>(
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    url: string,
    data: K,
    onDone: (result: T) => void
) => {
    setLoading(true)
    try {
        const result = await axios.post<IResponse<T>>(url, data)
        if (result.data.error == false) {
            onDone(result.data.response!)
        } else {
            toast(result.data.message)
        }
    } catch (e) {
        console.log(e);
        toast((e as Error).message)
    } finally {
        setLoading(false)
    }
}
const AxiosHelper = {
    postData
}
export default AxiosHelper
