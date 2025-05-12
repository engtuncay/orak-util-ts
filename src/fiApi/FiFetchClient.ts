export class FiFetchClient {
    private baseUrl: string;
    private defaultHeaders: HeadersInit;

    constructor(baseUrl: string, defaultHeaders: HeadersInit = {}) {
        this.baseUrl = baseUrl;
        this.defaultHeaders = defaultHeaders;
    }

    // Temel fetch işlemi
    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            ...this.defaultHeaders,
            ...(options.headers || {}),
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

    // GET işlemi
    public async get<T>(endpoint: string, headers?: HeadersInit): Promise<T> {
        return this.request<T>(endpoint, {
            method: "GET",
            headers,
        });
    }

    // POST işlemi
    public async post<T>(
        endpoint: string,
        body?: unknown,
        headers?: HeadersInit
    ): Promise<T> {
        return this.request<T>(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            body: JSON.stringify(body),
        });
    }

    // PUT işlemi
    public async put<T>(
        endpoint: string,
        body?: unknown,
        headers?: HeadersInit
    ): Promise<T> {
        return this.request<T>(endpoint, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            body: JSON.stringify(body),
        });
    }

    // DELETE işlemi
    public async delete<T>(endpoint: string, headers?: HeadersInit): Promise<T> {
        return this.request<T>(endpoint, {
            method: "DELETE",
            headers,
        });
    }
}
