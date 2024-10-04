import { AxiosRequestConfig } from "axios"
import { configDotenv } from "dotenv"

export let getEnvCfg = ():AxiosRequestConfig=>{
    const env = configDotenv({path:"../../.env"}).parsed
    if (env === undefined) {
        throw new Error("ENV is not found")
    }
    return {
        url:env.DEFAULT_URL
    }
}