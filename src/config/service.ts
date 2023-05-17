import AppConfig from "./app";

export const ServiceUrl = AppConfig.Production ? {
    API: AppConfig.Domain,
    BASE: AppConfig.Domain
} : {
    API: "http://localhost:4000",
    BASE: "http://localhost:4000"

}