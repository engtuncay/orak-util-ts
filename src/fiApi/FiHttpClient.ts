import axios from "axios";
import type { AxiosInstance,AxiosRequestConfig, AxiosResponse } from "axios";
import { FiKeybean } from "../fiDtc/FiKeybean";


export class FiHttpClient {

    private axiosInstance: AxiosInstance;

    constructor(baseURL: string, timeout = 10000, fkbExtraHeaders?: FiKeybean) {
        
      const headersAll = {
        "Content-Type": "application/json",
        ...fkbExtraHeaders?.getAsObject()
      }
      
      // Axios için özelleştirilmiş bir instance oluştur
        this.axiosInstance = axios.create({
            baseURL,
            timeout,
            headers: headersAll,
        });


        // Gerektiğinde interceptors ekleyerek istek/yanıt süreçlerini handle edebilirsiniz.
        this.initializeResponseInterceptor();
    }

    public getAxiosInstance(): AxiosInstance {
        return this.axiosInstance;
    }

    // Yanıtları otomatik olarak işlemek için bir interceptor yazıyoruz
    private initializeResponseInterceptor() {
        this.axiosInstance.interceptors.response.use(
            this.handleResponse,
            this.handleError
          );
    }

    // Yanıtları düzenleyen interceptor handler
    private handleResponse(response : AxiosResponse) { //{data}: AxiosResponse
        return Promise.resolve(response); // data; // Direkt olarak response.data'yı döndürüyoruz
    }

    // Hataları düzenleyen interceptor handler
    private handleError(error: any) {
        console.error("API Hatası:", error);
        //return Promise.reject(error.message || "Bir hata oluştu");
        return Promise.reject(error);
    }

    // private handleError(error: any) {
        // console.error("API Hatası:", error);
        // return Promise.reject(error.message || "Bir hata oluştu");
    // }

    // GET Metodu
    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.get(url, config);
    }

    // POST Metodu
    public async post<T>(
        url: string,
        data: any,
        config?: AxiosRequestConfig
    ): Promise<T> {
        return this.axiosInstance.post(url, data, config);
    }

    // PUT Metodu
    public async put<T>(
        url: string,
        data: any,
        config?: AxiosRequestConfig
    ): Promise<T> {
        return this.axiosInstance.put(url, data, config);
    }

    // DELETE Metodu
    public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.delete(url, config);
    }

}

