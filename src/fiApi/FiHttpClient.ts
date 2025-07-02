import axios from "axios";
import type { AxiosInstance,AxiosRequestConfig, AxiosResponse } from "axios";

export class FiHttpClient {

    private axiosInstance: AxiosInstance;

    constructor(baseURL: string, timeout = 10000) {
        // Axios için özelleştirilmiş bir instance oluştur
        this.axiosInstance = axios.create({
            baseURL,
            timeout,
            headers: {
                "Content-Type": "application/json",
            },
        });


        // Gerektiğinde interceptors ekleyerek istek/yanıt süreçlerini handle edebilirsiniz.
        this.initializeResponseInterceptor();
    }

    // Yanıtları otomatik olarak işlemek için bir interceptor yazıyoruz
    private initializeResponseInterceptor() {
        this.axiosInstance.interceptors.response.use(
            this.handleResponse,
            this.handleError
        );
    }

    // Yanıtları düzenleyen interceptor handler
    private handleResponse({data}: AxiosResponse) {
        return data; // Direkt olarak response.data'yı döndürüyoruz
    }

    // Hataları düzenleyen interceptor handler
    private handleError(error: any) {
        console.error("API Hatası:", error);
        return Promise.reject(error.message || "Bir hata oluştu");
    }

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

