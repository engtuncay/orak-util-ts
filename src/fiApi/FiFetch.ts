import { Fkb } from "../fiDtc/Fkb";
import { FiRawResponse } from "./FiRawResponse";

/**
 * FiFetch 
 * 
 * created 06-24-2026
 */
export class FiFetch {
  private baseUrl: string;
  private fkbHeadersDef?: Fkb;

  constructor(baseUrl: string, fkbHeadersDefault?: Fkb) {
    this.baseUrl = baseUrl;
    this.fkbHeadersDef = fkbHeadersDefault;
  }

    /**
   * Temel fetch işlemi
   * 
   * Default headers ve options birleştirilir ve fetch çağrısı yapılır.
   * 
   * @param endpoint 
   * @param options 
   * @returns 
   */
  private async requestRaw(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<FiRawResponse> {
    console.log("requestRaw called 1940", endpoint);
    const url = `${this.baseUrl}${endpoint}`;
    const defaultHeadersObj = this.fkbHeadersDef instanceof Fkb ? this.fkbHeadersDef.getAsObject() : {};
    const optionsHeadersObj = options.headers instanceof Fkb ? options.headers.getAsObject() : options.headers;
    
    // Combined headers
    const headers = {
      ...defaultHeadersObj,
      ...optionsHeadersObj,
    };


    const response = await fetch(url, {
      ...options,
      headers,
    });

    let data: any = null;
    try {
      // body içeriği kullanılacaksa data = await response.clone().json(); olarak kullanılmalı
      data = await response.json();
    } catch (error) {
      // JSON parse hatası durumunda null bırak
      data = null;
    }

    return {
      response,
      data
    };
  }

  // POST işlemi
  public async post<T>(endpoint: string, data?: object | any[], headers?: Fkb): Promise<T> {
    
    const headersObj = headers instanceof Fkb ? headers.getAsObject() : headers;
    
    return this.request<T>(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headersObj,
      },
      body: JSON.stringify(data),
    });
  }

  public async postRaw(endpoint: string, data?: object | any[], headers?: Fkb): Promise<FiRawResponse> {

    const headersObj = headers instanceof Fkb ? headers.getAsObject() : headers;

    return this.requestRaw(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headersObj,
      },
      body: JSON.stringify(data),
    });
  }



  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const defaultHeadersObj = this.fkbHeadersDef instanceof Fkb ? this.fkbHeadersDef.getAsObject() : {};
    const optionsHeadersObj = options.headers instanceof Fkb ? options.headers.getAsObject() : options.headers;
    const headers = {
      ...defaultHeadersObj,
      ...optionsHeadersObj,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        // Hata fırlatma
        throw new Error(
          `Fetch error: ${response.status} - ${response.statusText}`
        );
      }

      // Yanıt içeriğini döndürür (JSON veya düz metin)
      if (response.headers.get("Content-Type")?.includes("application/json")) {
        return await response.json();
      } else {
        return (await response.text()) as unknown as T;
      }
    } catch (error) {
      console.error("Request failed:", error);
      throw error;
    }
  }

  public async getRaw(endpoint: string, headers?: Fkb): Promise<FiRawResponse> {
    const headersObj = headers instanceof Fkb ? headers.getAsObject() : headers;

    return this.requestRaw(endpoint, {
      method: "GET",
      headers: {
        ...headersObj,
      }
    });
  }


  // GET işlemi
  // public async get<T>(endpoint: string, headers?: Fks): Promise<T> {
  //     return this.request<T>(endpoint, {
  //         method: "GET",
  //         headers,
  //     });
  // }



  // PUT işlemi
  // public async put<T>(
  //   endpoint: string,
  //   body?: unknown,
  //   headers?: Fkb
  // ): Promise<T> {
  //   const headersObj = headers instanceof Fkb ? headers.getAsObject() : headers;
  //   return this.request<T>(endpoint, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       ...headersObj,
  //     },
  //     body: JSON.stringify(body),
  //   });
  // }

  // DELETE işlemi
  // public async delete<T>(endpoint: string, headers?: Fks): Promise<T> {
  //     return this.request<T>(endpoint, {
  //         method: "DELETE",
  //         headers,
  //     });
  // }
}
