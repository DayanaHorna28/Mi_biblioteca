import Configuration from "./config"
import util from "./js/util"
import axios from "axios"

const conf=Configuration.getConfiguration()

const headers = {"Content-Type":"application/json;charset=UTF-8", "clientAuth":conf.CLIENT_AUTH, "client":conf.CLIENT_CODE}

const ServerConnection = (() => {



    const getListBooks = async (params) => {
        console.log("API=========>", conf.API)
        return axios.get(conf.API + `/api/libros/lista`);
    };

    const getBalance=(userToken)=>{
        return axios.get(conf.API + `/api/casino/balance/${userToken}`, {headers});
    }

    const getURL = async (url) => {
        const response = await axios.get(url);
        return response.data;
    };

    const getFavGames = async (userToken, category) => {
        const mode = util.isMoble() ? "mb" : "wb";
        const url = `${conf.API}/favs?c=${category}&m=${mode}&t=${userToken}`;
        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const saveFav = async (userToken, gameId, action) => {
        const url = `${conf.API}/saveFavs`;
        const payload = { action, g: gameId, t: userToken };
        try {
            const response = await axios.post(url, payload, { headers });
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const getMovements = (token, dateStringFrom, dateStringTo, filter)=>{
        return new Promise( (result, reject)=>{
            fetch(conf.API+`/wallet/${token}/${dateStringFrom}/${dateStringTo}/${filter}/movements`,{method:"GET"})
            .then(response => response.json())
            .then( data =>{ if(data.errorCode){ checkReject(data).then(r=> reject(r) ) } else result(data)})    
            .catch( (e)=>{ reject(e) } )
        })
    }
    const checkReject=(data)=>{
       return new Promise( (result, reject) =>{
        if(data.errorCode!='OLD_TOKEN' ) result(data)
        else{
            alert("SESION ABIERTA EN OTRO DISPOSITIVO");
            location.reload();
            return;
        }
       })
    }
    const uploadFile = (fileName, base64file) => {
        var url=conf.API+"/uploadFile";
        var payload = {fileName, base64file}
        return new Promise( (result, reject)=>{
            fetch(url,{method:"POST",headers, body:JSON.stringify(payload)} )
            .then(response => response.json())
            .then( data =>{result(data)})   
            .catch( (e)=>{ reject(e) } )
        } )
    }
    const user={
        preRegister:(username, email,codephone, phone)=>{
            var url=conf.API+"/user/preRegister";
            var payload = {username,email,phone:codephone+phone, org: conf.org}
            return axios.post( url,payload,{headers} );
        },
        resertPassword: (password, token)=>{
            var url = conf.API + "/api/casino/password/reset";
            var payload = {password};
            headers.Authorization = token;
            return axios.post(url, payload, { headers });
        }
    }
    const getGamesTypes = async (clientid) => {
        const mode = util.isMoble() ? "mb" : "wb";
        try {
            const response = await axios.get(`${conf.API}/gameTypesByClient?cat=slot&mode=${mode}&client=${clientid}`, { headers });
            return response.data;
        } catch (error) {
            throw error;
        }
    };
    
    return {
        user, getMovements, uploadFile, getFavGames, saveFav, getListBooks, getBalance, getGamesTypes, getURL
    }
    
})()

export default ServerConnection