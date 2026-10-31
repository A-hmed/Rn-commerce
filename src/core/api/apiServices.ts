// var dio = Dio(BaseOptions(baseUrl: "", headers))

import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from "axios";

export const apiClient = axios.create({
    baseURL: 'https://ecommerce.routemisr.com/api/v1/',
    headers: {
        'Content-Type': 'application/json',
    }
})


// 1. REQUEST INTERCEPTOR
apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const method = config.method?.toUpperCase() || 'METHOD';

        console.group(`🚀 [API Request] ${method} ➔ ${config.url}`);

        // Log headers safely (avoids [object Object])
        if (config.headers) {
            console.log('Headers:', JSON.parse(JSON.stringify(config.headers)));
        }

        // Log request body/params if they exist
        if (config.data) {
            console.log('Body:', config.data);
        }
        if (config.params) {
            console.log('Params:', config.params);
        }

        console.groupEnd();
        return config;
    },
    (error: AxiosError) => {
        console.error('❌ [API Request Error]', error);
        return Promise.reject(error);
    }
);

// 2. RESPONSE INTERCEPTOR
apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        console.group(`✅ [API Response] ${response.status} ➔ ${response.config.url}`);

        // Log the actual server payload data
        if (response.data) {
            console.log('Data:', response.data);
        }

        console.groupEnd();
        return response;
    },
    (error: AxiosError) => {
        // Gracefully handle server responses with error codes (400, 401, 500, etc.)
        if (error.response) {
            console.group(`❌ [API Error Response] ${error.response.status} ➔ ${error.config?.url}`);
            console.log('Error Data:', error.response.data);
            console.groupEnd();
        } else if (error.request) {
            // The request was made but no response was received (e.g., Network Down)
            console.error('📡 [API Network Error] No response received:', error.request);
        } else {
            console.error('⚙️ [API Setup Error]:', error.message);
        }

        return Promise.reject(error);
    }
);
