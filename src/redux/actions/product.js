import axios from "axios";

const getList = () => {
    return {
        type : "GET_PRODDUCT",
        payload : axios.get ("http://192.168.100.60:9000/global/auth/product1/detail")
    }
}

export {
    getList
}
