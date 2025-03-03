// src/config/env.ts

/**
 * Environment configuration
 * Use import.meta.env for Vite environment variables
 */

// API Base URL - default to Flask's typical local development URL
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// Other environment variables
export const ENV = {
  NODE_ENV: import.meta.env.MODE || 'development',
  IS_DEV: import.meta.env.MODE === 'development',
  IS_PROD: import.meta.env.MODE === 'production',
};

// Auth configuration
export const AUTH_CONFIG = {
  TOKEN_KEY: 'auth_token',
  CSRF_COOKIE_NAME: 'csrf_token',
};

// API Routes based on Flask backend
export const API_ROUTES = {
  // Auth routes
  AUTH: {
    CHECK: '/auth',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    SIGNUP: '/auth/signup',
  },
  // User routes
  USERS: {
    LIST: '/users',
    DETAILS: (id: number) => `/users/${id}`,
  },
};
