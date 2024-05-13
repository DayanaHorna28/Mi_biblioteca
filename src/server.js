import Configuration from "./config"

import axios from "axios"

const conf=Configuration.getConfiguration()

const headers = {"Content-Type":"application/json;charset=UTF-8", "clientAuth":conf.CLIENT_AUTH, "client":conf.CLIENT_CODE}

const ServerConnection = (() => {



    const getListBooks = async (params) => {
        console.log("API=========>", conf.API)
        return axios.get(conf.API + `/api/libros/lista`);
    };

    
    
    return {
         getListBooks
    }
    
})()

export default ServerConnection