class Api {
    private baseUrl = 'http://127.0.0.1:8000/api';

    async post(endpoint: string, data: any) {
      try {
        const url = `${this.baseUrl}${endpoint}`;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          // Try to get error details, but handle case where response isn't JSON
          try {
            const errorData = await response.json();
            throw new Error(JSON.stringify(errorData));
          } catch (jsonError) {
            // If parsing JSON fails, throw with status text
            throw new Error(`Request failed: ${response.status} ${response.statusText}`);
          }
        }

        return await response.json();
      } catch (error) {
        console.error('API post request failed:', error);
        throw error;
      }
    }

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
          // Try to get error details, but handle case where response isn't JSON
          try {
            const errorData = await response.json();
            throw new Error(JSON.stringify(errorData));
          } catch (jsonError) {
            // If parsing JSON fails, throw with status text
            throw new Error(`Request failed: ${response.status} ${response.statusText}`);
          }
        }

        return await response.json();
      } catch (error) {
        console.error('API get request failed:', error);
        throw error;
      }
    }
  }

  export default new Api();
