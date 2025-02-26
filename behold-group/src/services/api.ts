// // src/services/api.ts
// import { API_URL, AUTH_CONFIG } from '@/config/env';
// import { addCsrfHeader, isUnauthorized, handleUnauthorized } from './auth-interceptor';

// const API_BASE_URL = API_URL;

// /**
//  * Base API class for handling network requests to the Flask backend
//  */
// class Api {
//   /**
//    * Gets the session cookie automatically included in requests
//    * Flask session is handled via cookies, not JWT tokens
//    */
//   getAuthHeader() {
//     // In Flask with Flask-Login, auth is maintained through cookies
//     // so we don't need to add any special headers for authentication
//     return {};
//   }

//   /**
//    * Performs a GET request to the specified endpoint
//    * @param endpoint - The API endpoint to call
//    * @param params - Optional query parameters
//    * @returns The response data
//    */
//   async get(endpoint: string, params?: Record<string, string>) {
//     const url = new URL(`${API_BASE_URL}${endpoint}`);

//     if (params) {
//       Object.keys(params).forEach(key =>
//         url.searchParams.append(key, params[key])
//       );
//     }

//     const response = await fetch(url.toString(), {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         ...this.getAuthHeader()
//       },
//       // Include credentials to send cookies with the request
//       credentials: 'include'
//     });

//     if (isUnauthorized(response)) {
//       handleUnauthorized();
//       throw new Error('Unauthorized');
//     }

//     if (!response.ok) {
//       throw new Error(`API error: ${response.status} ${response.statusText}`);
//     }

//     return response.json();
//   }

//   /**
//    * Performs a POST request to the specified endpoint
//    * @param endpoint - The API endpoint to call
//    * @param data - The data to send in the request body
//    * @returns The response data
//    */
//   async post(endpoint: string, data: any) {
//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         ...this.getAuthHeader(),
//         ...addCsrfHeader()
//       },
//       body: JSON.stringify(data),
//       credentials: 'include'
//     });

//     if (isUnauthorized(response)) {
//       handleUnauthorized();
//       throw new Error('Unauthorized');
//     }

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => null);
//       if (errorData) {
//         throw new Error(JSON.stringify(errorData));
//       }
//       throw new Error(`API error: ${response.status} ${response.statusText}`);
//     }

//     return response.json();
//   }

//   /**
//    * Performs a PUT request to the specified endpoint
//    * @param endpoint - The API endpoint to call
//    * @param data - The data to send in the request body
//    * @returns The response data
//    */
//   async put(endpoint: string, data: any) {
//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         ...this.getAuthHeader(),
//         ...addCsrfHeader()
//       },
//       body: JSON.stringify(data),
//       credentials: 'include'
//     });

//     if (isUnauthorized(response)) {
//       handleUnauthorized();
//       throw new Error('Unauthorized');
//     }

//     if (!response.ok) {
//       throw new Error(`API error: ${response.status} ${response.statusText}`);
//     }

//     return response.json();
//   }

//   /**
//    * Performs a DELETE request to the specified endpoint
//    * @param endpoint - The API endpoint to call
//    * @returns The response data
//    */
//   async delete(endpoint: string) {
//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         ...this.getAuthHeader(),
//         ...addCsrfHeader()
//       },
//       credentials: 'include'
//     });

//     if (isUnauthorized(response)) {
//       handleUnauthorized();
//       throw new Error('Unauthorized');
//     }

//     if (!response.ok) {
//       throw new Error(`API error: ${response.status} ${response.statusText}`);
//     }

//     return response.json();
//   }
// }

// // Create and export a singleton instance
// export const api = new Api();


// // src/services/api.ts
// import { getCsrfToken } from "./csrf";

// // API base URL - adjust this to match your Flask backend
// const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// /**
//  * Base API class for handling network requests to the Flask backend
//  */
// class Api {
//   /**
//    * Add CSRF token to request headers for Flask
//    */
//   addCsrfHeader(headers: Record<string, string> = {}): Record<string, string> {
//     const csrfToken = getCsrfToken();

//     if (csrfToken) {
//       return {
//         ...headers,
//         'X-CSRFToken': csrfToken
//       };
//     }

//     return headers;
//   }

//   /**
//    * Performs a GET request to the specified endpoint
//    * @param endpoint - The API endpoint to call
//    * @param params - Optional query parameters
//    * @returns The response data
//    */
//   async get(endpoint: string, params?: Record<string, string>) {
//     const url = new URL(`${API_BASE_URL}${endpoint}`);

//     if (params) {
//       Object.keys(params).forEach(key =>
//         url.searchParams.append(key, params[key])
//       );
//     }

//     const response = await fetch(url.toString(), {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       // Include credentials to send cookies with the request
//       credentials: 'include'
//     });

//     if (response.status === 401) {
//       throw new Error('Unauthorized');
//     }

//     if (!response.ok) {
//       throw new Error(`API error: ${response.status} ${response.statusText}`);
//     }

//     return response.json();
//   }

//   /**
//    * Performs a POST request to the specified endpoint
//    * @param endpoint - The API endpoint to call
//    * @param data - The data to send in the request body
//    * @returns The response data
//    */
//   async post(endpoint: string, data: any) {
//     const headers = {
//       'Content-Type': 'application/json',
//       ...this.addCsrfHeader()
//     };

//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       method: 'POST',
//       headers,
//       body: JSON.stringify(data),
//       credentials: 'include'
//     });

//     if (response.status === 401) {
//       throw new Error('Unauthorized');
//     }

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => null);
//       if (errorData) {
//         throw new Error(JSON.stringify(errorData));
//       }
//       throw new Error(`API error: ${response.status} ${response.statusText}`);
//     }

//     return response.json();
//   }

//   /**
//    * Performs a PUT request to the specified endpoint
//    * @param endpoint - The API endpoint to call
//    * @param data - The data to send in the request body
//    * @returns The response data
//    */
//   async put(endpoint: string, data: any) {
//     const headers = {
//       'Content-Type': 'application/json',
//       ...this.addCsrfHeader()
//     };

//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       method: 'PUT',
//       headers,
//       body: JSON.stringify(data),
//       credentials: 'include'
//     });

//     if (response.status === 401) {
//       throw new Error('Unauthorized');
//     }

//     if (!response.ok) {
//       throw new Error(`API error: ${response.status} ${response.statusText}`);
//     }

//     return response.json();
//   }

//   /**
//    * Performs a DELETE request to the specified endpoint
//    * @param endpoint - The API endpoint to call
//    * @returns The response data
//    */
//   async delete(endpoint: string) {
//     const headers = {
//       'Content-Type': 'application/json',
//       ...this.addCsrfHeader()
//     };

//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       method: 'DELETE',
//       headers,
//       credentials: 'include'
//     });

//     if (response.status === 401) {
//       throw new Error('Unauthorized');
//     }

//     if (!response.ok) {
//       throw new Error(`API error: ${response.status} ${response.statusText}`);
//     }

//     return response.json();
//   }
// }

// // Create and export a singleton instance
// export const api = new Api();

// api.ts - Update your API base URL to use port 8000

class Api {
    private baseUrl = 'http://127.0.0.1:8000/api'; // Updated to your correct backend URL

    // If you're using Vite's proxy in development, use a relative URL instead:
    // private baseUrl = '/api';

    async post(endpoint: string, data: any) {
      try {
        const url = `${this.baseUrl}${endpoint}`;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',  // Critical for sending and receiving cookies
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.errors?.message || 'Request failed');
        }

        return response.json();
      } catch (error) {
        console.error('API request failed:', error);
        throw error;
      }
    }

    // Add similar methods for get, put, delete as needed

    // Example:
    async get(endpoint: string) {
      try {
        const url = `${this.baseUrl}${endpoint}`;
        const response = await fetch(url, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.errors?.message || 'Request failed');
        }

        return response.json();
      } catch (error) {
        console.error('API request failed:', error);
        throw error;
      }
    }
  }

  export default new Api();
