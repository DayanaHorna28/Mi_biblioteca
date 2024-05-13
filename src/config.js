
const Configuration = (() => {
    const dev = {
        GAMEAPI_URL: "https://test.apiuniversalsoft.com/api",
        API: "https://lobby-bff-test.apiusoft.com",
        CLIENT_AUTH: "JU02TOMCAT00023423JAVA009DEMOPLATFORM123",
        CLIENT_CODE: "JU02",
        platformId: "58dc8282-ab26-4e2d-9235-be4a3e2be91d",
        LOBBY_GAMES_API: "https://lobby.apiusoft.com",
        ASSETS: "https://assets.apiusoft.com",
        WS_URL: "wss://lobby-bff-test.apiusoft.com/lobbybff",
        BALANCE_WS: "wss://casino-stage-ws.apiusoft.com",
        enviroment: "",
        operatorId: "123",
        domain: "http://coliseosport.com/",
        org: "CLS",
        currency: 0,//ARS
        platform: "DemoPlatform",
        cid: "goldenbet",
        gameid: "nft-aviatrix"
    }
    const local = {
        GAMEAPI_URL: "https://test.apiuniversalsoft.com/api",
        //API:"http://192.168.1.35:5000",
        API: "http//localhost:8080",
    }
    const prod = {
        GAMEAPI_URL: "https://casino.apiusoft.com/node/api",
        API: "https://lobby-bff.apiusoft.com",
        CLIENT_AUTH: "JU02TOMCAT00023423JAVA009DEMOPLATFORM123",
        CLIENT_CODE: "JU02",
        platformId: "58dc8282-ab26-4e2d-9235-be4a3e2be91d",
        LOBBY_GAMES_API: "https://lobby.apiusoft.com",
        ASSETS: "https://assets.apiusoft.com",
        WS_URL: "wss://lobby-bff.apiusoft.com/lobbybff",
        BALANCE_WS: "wss://casino-ws.apiusoft.com",
        operatorId: "123",
        domain: "https://demo-platform.pages.dev/",
        org: "CLS",
        currency: 0,
        platform: "DemoPlatform",
        cid: "goldenbet",
        gameid: "nft-aviatrix"
    }

    const configMap = new Map()
    configMap.set("local", local)
    configMap.set("dev", dev)
    configMap.set("prod", prod)
    
    const getConfiguration = () => {
        const host = window.location.toString()
        const env = 'local'
        const defaultConfig = configMap.get(env)
        return defaultConfig;
    }
    return { getConfiguration }
})()

export default Configuration