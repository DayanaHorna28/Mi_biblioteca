import Configuration from "./config"

import axios from "axios"

const conf=Configuration.getConfiguration()

const headers = {"Content-Type":"application/json;charset=UTF-8"}

const ServerConnection = (() => {



    const getListBooks = async () => {
        let response = await axios.get("http://localhost:8080/api/libros/lista");
        console.log("API=========>", response);
        return response;
    };

    
    
    return {
         getListBooks
    }
    
})()

export default ServerConnection