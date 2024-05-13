
const Configuration = (() => {
    const dev = {
        API: "https://lobby-bff-test.apiusoft.com",
        
    }
    const local = {
        //API:"http://192.168.1.35:5000",
        API: "http//localhost:8080",
    }
    const prod = {
        API: "https://lobby-bff.apiusoft.com",
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