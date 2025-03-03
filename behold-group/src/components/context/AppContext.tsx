// // // // import { createContext, useContext, useState, useEffect } from 'react';
// // // // import { useNavigate } from 'react-router-dom';

// // // // interface User {
// // // //   id: number;
// // // //   username: string;
// // // //   email: string;
// // // //   // other user properties
// // // // }

// // // // interface AppContextType {
// // // //   user: User | null;
// // // //   isAuthenticated: boolean;
// // // //   isLoading: boolean;
// // // //   error: string | null;
// // // //   login: (credentials: { email: string; password: string }) => Promise<void>;
// // // //   signup: (userData: { username: string; email: string; password: string }) => Promise<void>;
// // // //   logout: () => Promise<void>;
// // // //   checkAuth: () => Promise<void>;
// // // //   clearError: () => void; // Added clearError
// // // // }

// // // // const AppContext = createContext<AppContextType | undefined>(undefined);

// // // // export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
// // // //   const [user, setUser] = useState<User | null>(null);
// // // //   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
// // // //   const [isLoading, setIsLoading] = useState<boolean>(false);
// // // //   const [error, setError] = useState<string | null>(null);
// // // //   const navigate = useNavigate();

// // // //   // Clear error helper
// // // //   const clearError = () => setError(null);

// // // //   // Check authentication status on mount
// // // //   useEffect(() => {
// // // //     checkAuth();
// // // //   }, []);

// // // //   const checkAuth = async () => {
// // // //     try {
// // // //       const response = await fetch('http://127.0.0.1:8000/api/auth/', {
// // // //         method: 'GET',
// // // //         credentials: 'include',
// // // //       });

// // // //       if (response.ok) {
// // // //         const userData = await response.json();
// // // //         setUser(userData);
// // // //         setIsAuthenticated(true);
// // // //       } else {
// // // //         setUser(null);
// // // //         setIsAuthenticated(false);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Auth check failed:', error);
// // // //       setUser(null);
// // // //       setIsAuthenticated(false);
// // // //     }
// // // //   };

// // // //   const login = async (credentials: { email: string; password: string }) => {
// // // //     setIsLoading(true);
// // // //     setError(null);

// // // //     try {
// // // //       const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         credentials: 'include', // This is crucial for cookie-based auth
// // // //         body: JSON.stringify(credentials)
// // // //       });

// // // //       if (!response.ok) {
// // // //         const errorData = await response.json();
// // // //         throw new Error(errorData.errors?.message || 'Login failed');
// // // //       }

// // // //       const userData = await response.json();

// // // //       // Update auth state first
// // // //       setUser(userData);
// // // //       setIsAuthenticated(true);

// // // //       // Then navigate with a small delay to ensure state is updated
// // // //       setTimeout(() => {
// // // //         navigate('/portal');
// // // //       }, 100);
// // // //     } catch (error) {
// // // //       console.error('Login error:', error);
// // // //       setError(error instanceof Error ? error.message : 'Login failed');
// // // //       throw error;
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   const logout = async () => {
// // // //     try {
// // // //       await fetch('http://127.0.0.1:8000/api/auth/logout', {
// // // //         method: 'GET',
// // // //         credentials: 'include',
// // // //       });

// // // //       setUser(null);
// // // //       setIsAuthenticated(false);
// // // //       navigate('/');
// // // //     } catch (error) {
// // // //       console.error('Logout error:', error);
// // // //     }
// // // //   };

// // // //   const signup = async (data: { username: string; email: string; password: string }) => {
// // // //     setIsLoading(true);
// // // //     setError(null);

// // // //     try {
// // // //       const response = await fetch('http://127.0.0.1:8000/api/auth/signup', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         credentials: 'include',
// // // //         body: JSON.stringify(data)
// // // //       });

// // // //       if (!response.ok) {
// // // //         const errorData = await response.json();
// // // //         throw new Error(errorData.errors?.message || 'Signup failed');
// // // //       }

// // // //       const userData = await response.json();
// // // //       setUser(userData);
// // // //       setIsAuthenticated(true);
// // // //       navigate('/awaiting-approval');

// // // //     } catch (error) {
// // // //       console.error('Signup error:', error);
// // // //       setError(error instanceof Error ? error.message : 'Signup failed');
// // // //       throw error;
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <AppContext.Provider
// // // //       value={{
// // // //         user,
// // // //         isAuthenticated,
// // // //         isLoading,
// // // //         error,
// // // //         login,
// // // //         logout,
// // // //         signup,
// // // //         checkAuth,
// // // //         clearError // Added to the provider value
// // // //       }}
// // // //     >
// // // //       {children}
// // // //     </AppContext.Provider>
// // // //   );
// // // // };

// // // // export const useApp = () => {
// // // //   const context = useContext(AppContext);
// // // //   if (context === undefined) {
// // // //     throw new Error('useApp must be used within an AppProvider');
// // // //   }
// // // //   return context;
// // // // };

// // // // File: components/context/AppContext.tsx
// // // import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { UserType, SignupFormData, LoginFormData, ProfileUpdateData } from '@/types/user';

// // // interface AppContextType {
// // //   user: UserType | null;
// // //   isLoading: boolean;
// // //   error: string | null;
// // //   login: (credentials: LoginFormData) => Promise<UserType | null>;
// // //   signup: (userData: SignupFormData) => Promise<UserType | null>;
// // //   logout: () => Promise<void>;
// // //   updateProfile: (profileData: ProfileUpdateData) => Promise<boolean>;
// // // }

// // // // Create the context with default values
// // // const AppContext = createContext<AppContextType>({
// // //   user: null,
// // //   isLoading: false,
// // //   error: null,
// // //   login: async () => null,
// // //   signup: async () => null,
// // //   logout: async () => {},
// // //   updateProfile: async () => false
// // // });

// // // // Hook to use the context
// // // export const useApp = () => useContext(AppContext);

// // // interface AppProviderProps {
// // //   children: ReactNode;
// // // }

// // // // Context provider
// // // // export const AppProvider = ({ children }: AppProviderProps) => {
// // //   const AppProvider = ({ children }: AppProviderProps) => {
// // //   const [user, setUser] = useState<UserType | null>(null);
// // //   const [isLoading, setIsLoading] = useState<boolean>(false);
// // //   const [error, setError] = useState<string | null>(null);
// // //   const navigate = useNavigate();

// // //   // Check if user is authenticated on load
// // //   useEffect(() => {
// // //     checkAuth();
// // //   }, []);

// // //   // Check authentication status
// // //   const checkAuth = async () => {
// // //     try {
// // //       const response = await fetch('/api/auth/');
// // //       if (response.ok) {
// // //         const data: UserType = await response.json();
// // //         setUser(data);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error checking auth:', error);
// // //     }
// // //   };

// // //   // Login function
// // //   const login = async (credentials: LoginFormData): Promise<UserType | null> => {
// // //     setIsLoading(true);
// // //     setError(null);

// // //     try {
// // //       const response = await fetch('/api/auth/login', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify(credentials),
// // //       });

// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         setUser(data);
// // //         navigate('/partner-portal');
// // //         return data;
// // //       } else {
// // //         setError(data.errors?.email || data.errors?.message || 'Login failed');
// // //         return null;
// // //       }
// // //     } catch (error) {
// // //       setError('Login failed. Please try again.');
// // //       console.error('Login error:', error);
// // //       return null;
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // Signup function with new fields
// // //   const signup = async (userData: SignupFormData): Promise<UserType | null> => {
// // //     setIsLoading(true);
// // //     setError(null);

// // //     // Format data for backend - convert camelCase to snake_case
// // //     const formattedData = {
// // //       username: userData.username,
// // //       email: userData.email,
// // //       password: userData.password,
// // //       first_name: userData.firstName,
// // //       last_name: userData.lastName,
// // //       company_name: userData.companyName || ''
// // //     };

// // //     try {
// // //       const response = await fetch('/api/auth/signup', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify(formattedData),
// // //       });

// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         setUser(data as UserType);
// // //         return data as UserType;
// // //       } else {
// // //         const errorMsg =
// // //           data.errors?.username ||
// // //           data.errors?.email ||
// // //           data.errors?.password ||
// // //           data.errors?.first_name ||
// // //           data.errors?.last_name ||
// // //           data.errors?.message ||
// // //           'Signup failed';
// // //         setError(errorMsg);
// // //         return null;
// // //       }
// // //     } catch (error) {
// // //       setError('Signup failed. Please try again.');
// // //       console.error('Signup error:', error);
// // //       return null;
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // Logout function
// // //   const logout = async (): Promise<void> => {
// // //     setIsLoading(true);

// // //     try {
// // //       const response = await fetch('/api/auth/logout');

// // //       if (response.ok) {
// // //         setUser(null);
// // //         navigate('/');
// // //       } else {
// // //         console.error('Logout failed');
// // //       }
// // //     } catch (error) {
// // //       console.error('Logout error:', error);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // Update user profile
// // //   const updateProfile = async (profileData: ProfileUpdateData): Promise<boolean> => {
// // //     setIsLoading(true);

// // //     try {
// // //       let response;

// // //       // If we have a file, use FormData
// // //       if (profileData.profileImage) {
// // //         const formData = new FormData();
// // //         if (profileData.username) formData.append('username', profileData.username);
// // //         if (profileData.bio) formData.append('bio', profileData.bio);
// // //         if (profileData.firstName) formData.append('firstName', profileData.firstName);
// // //         if (profileData.lastName) formData.append('lastName', profileData.lastName);
// // //         if (profileData.companyName) formData.append('companyName', profileData.companyName);
// // //         formData.append('profile_image', profileData.profileImage);

// // //         response = await fetch('/api/users/profile', {
// // //           method: 'PUT',
// // //           body: formData,
// // //         });
// // //       } else {
// // //         // Use JSON for text-only updates
// // //         response = await fetch('/api/users/profile', {
// // //           method: 'PUT',
// // //           headers: {
// // //             'Content-Type': 'application/json',
// // //           },
// // //           body: JSON.stringify(profileData),
// // //         });
// // //       }

// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         setUser(data as UserType);
// // //         return true;
// // //       } else {
// // //         return false;
// // //       }
// // //     } catch (error) {
// // //       console.error('Update profile error:', error);
// // //       return false;
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // Context values to provide
// // //   const contextValue: AppContextType = {
// // //     user,
// // //     isLoading,
// // //     error,
// // //     login,
// // //     signup,
// // //     logout,
// // //     updateProfile,
// // //   };

// // //   return (
// // //     <AppContext.Provider value={contextValue}>
// // //       {children}
// // //     </AppContext.Provider>
// // //   );
// // // };


// // // File: components/context/AppContext.tsx
// // import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { UserType, SignupFormData, LoginFormData, ProfileUpdateData } from '@/types/user';

// // const API_BASE_URL = 'http://127.0.0.1:8000';


// // interface AppContextType {
// //   user: UserType | null;
// //   isLoading: boolean;
// //   error: string | null;
// //   login: (credentials: LoginFormData) => Promise<UserType | null>;
// //   signup: (userData: SignupFormData) => Promise<UserType | null>;
// //   logout: () => Promise<void>;
// //   updateProfile: (profileData: ProfileUpdateData) => Promise<boolean>;
// //   clearError: () => void;
// // }

// // // Create the context with default values
// // const AppContext = createContext<AppContextType>({
// //   user: null,
// //   isLoading: false,
// //   error: null,
// //   login: async () => null,
// //   signup: async () => null,
// //   logout: async () => {},
// //   updateProfile: async () => false,
// //   clearError: () => {}
// // });

// // // Hook to use the context
// // export const useApp = () => useContext(AppContext);

// // interface AppProviderProps {
// //   children: ReactNode;
// // }

// // // Context provider
// // export const AppProvider = ({ children }: AppProviderProps) => {
// //   const [user, setUser] = useState<UserType | null>(null);
// //   const [isLoading, setIsLoading] = useState<boolean>(false);
// //   const [error, setError] = useState<string | null>(null);
// //   const navigate = useNavigate();

// //   // Clear error helper
// //   const clearError = () => setError(null);

// //   // Check if user is authenticated on load
// //   useEffect(() => {
// //     checkAuth();
// //   }, []);

// //   // Check authentication status
// //   const checkAuth = async () => {
// //     try {
// //       const response = await fetch('/api/auth/');
// //       if (response.ok) {
// //         const data: UserType = await response.json();
// //         setUser(data);
// //       }
// //     } catch (error) {
// //       console.error('Error checking auth:', error);
// //     }
// //   };

// //   // Login function
// //   const login = async (credentials: LoginFormData): Promise<UserType | null> => {
// //     setIsLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch('/api/auth/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(credentials),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         setUser(data);
// //         navigate('/partner-portal');
// //         return data;
// //       } else {
// //         setError(data.errors?.email || data.errors?.message || 'Login failed');
// //         return null;
// //       }
// //     } catch (error) {
// //       setError('Login failed. Please try again.');
// //       console.error('Login error:', error);
// //       return null;
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Signup function with new fields
// //   const signup = async (userData: SignupFormData): Promise<UserType | null> => {
// //     setIsLoading(true);
// //     setError(null);

// //     // Format data for backend - convert camelCase to snake_case
// //     const formattedData = {
// //       username: userData.username,
// //       email: userData.email,
// //       password: userData.password,
// //       first_name: userData.firstName,
// //       last_name: userData.lastName,
// //       company_name: userData.companyName || ''
// //     };

// //     try {
// //       const response = await fetch('/api/auth/signup', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(formattedData),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         setUser(data as UserType);
// //         return data as UserType;
// //       } else {
// //         const errorMsg =
// //           data.errors?.username ||
// //           data.errors?.email ||
// //           data.errors?.password ||
// //           data.errors?.first_name ||
// //           data.errors?.last_name ||
// //           data.errors?.message ||
// //           'Signup failed';
// //         setError(errorMsg);
// //         return null;
// //       }
// //     } catch (error) {
// //       setError('Signup failed. Please try again.');
// //       console.error('Signup error:', error);
// //       return null;
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Logout function
// //   const logout = async (): Promise<void> => {
// //     setIsLoading(true);

// //     try {
// //       const response = await fetch('/api/auth/logout');

// //       if (response.ok) {
// //         setUser(null);
// //         navigate('/');
// //       } else {
// //         console.error('Logout failed');
// //       }
// //     } catch (error) {
// //       console.error('Logout error:', error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Update user profile
// //   const updateProfile = async (profileData: ProfileUpdateData): Promise<boolean> => {
// //     setIsLoading(true);

// //     try {
// //       let response;

// //       // If we have a file, use FormData
// //       if (profileData.profileImage) {
// //         const formData = new FormData();
// //         if (profileData.username) formData.append('username', profileData.username);
// //         if (profileData.bio) formData.append('bio', profileData.bio);
// //         if (profileData.firstName) formData.append('firstName', profileData.firstName);
// //         if (profileData.lastName) formData.append('lastName', profileData.lastName);
// //         if (profileData.companyName) formData.append('companyName', profileData.companyName);
// //         formData.append('profile_image', profileData.profileImage);

// //         response = await fetch('/api/users/profile', {
// //           method: 'PUT',
// //           body: formData,
// //         });
// //       } else {
// //         // Use JSON for text-only updates
// //         response = await fetch('/api/users/profile', {
// //           method: 'PUT',
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //           body: JSON.stringify(profileData),
// //         });
// //       }

// //       const data = await response.json();

// //       if (response.ok) {
// //         setUser(data as UserType);
// //         return true;
// //       } else {
// //         return false;
// //       }
// //     } catch (error) {
// //       console.error('Update profile error:', error);
// //       return false;
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Context values to provide
// //   const contextValue: AppContextType = {
// //     user,
// //     isLoading,
// //     error,
// //     login,
// //     signup,
// //     logout,
// //     updateProfile,
// //     clearError
// //   };

// //   return (
// //     <AppContext.Provider value={contextValue}>
// //       {children}
// //     </AppContext.Provider>
// //   );
// // };


// // File: src/components/context/AppContext.tsx
// import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { UserType, SignupFormData, LoginFormData, ProfileUpdateData } from '@/types/user';

// // Base API URL - adjust this to match your Flask backend
// const API_BASE_URL = 'http://127.0.0.1:8000';

// interface AppContextType {
//   user: UserType | null;
//   isLoading: boolean;
//   error: string | null;
//   login: (credentials: LoginFormData) => Promise<UserType | null>;
//   signup: (userData: SignupFormData) => Promise<UserType | null>;
//   logout: () => Promise<void>;
//   updateProfile: (profileData: ProfileUpdateData) => Promise<boolean>;
// }

// // Create the context with default values
// const AppContext = createContext<AppContextType>({
//   user: null,
//   isLoading: false,
//   error: null,
//   login: async () => null,
//   signup: async () => null,
//   logout: async () => {},
//   updateProfile: async () => false
// });

// // Hook to use the context
// export const useApp = () => useContext(AppContext);

// interface AppProviderProps {
//   children: ReactNode;
// }

// // Context provider
// export const AppProvider = ({ children }: AppProviderProps) => {
//   const [user, setUser] = useState<UserType | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   // Check if user is authenticated on load
//   useEffect(() => {
//     checkAuth();
//   }, []);

//   // Check authentication status
//   const checkAuth = async () => {
//     console.log("Checking authentication status...");
//     try {
//       const response = await fetch(`${API_BASE_URL}/api/auth/`, {
//         credentials: 'include',
//         headers: {
//           'Accept': 'application/json'
//         }
//       });
//       console.log("Auth check response status:", response.status);

//       if (response.ok) {
//         const data: UserType = await response.json();
//         console.log("User authenticated:", data.username);
//         setUser(data);
//       } else {
//         console.log("Not authenticated");
//       }
//     } catch (error) {
//       console.error('Error checking auth:', error);
//     }
//   };

//   // Login function
//   const login = async (credentials: LoginFormData): Promise<UserType | null> => {
//     console.log("Login attempt with email:", credentials.email);
//     setIsLoading(true);
//     setError(null);

//     try {
//       console.log("Sending login request to backend...");
//       const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         credentials: 'include',  // Important for cookies
//         body: JSON.stringify(credentials),
//       });

//       console.log("Login response status:", response.status);
//       const data = await response.json();
//       console.log("Login response data:", data);

//       if (response.ok) {
//         console.log("Login successful");
//         setUser(data);
//         return data;
//       } else {
//         const errorMsg = data.errors?.email || data.errors?.message || 'Login failed';
//         console.error("Login failed:", errorMsg);
//         setError(errorMsg);
//         return null;
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError('Login failed. Please try again.');
//       return null;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Signup function with new fields
//   const signup = async (userData: SignupFormData): Promise<UserType | null> => {
//     console.log("Signup attempt with data:", {
//       username: userData.username,
//       email: userData.email,
//       firstName: userData.firstName,
//       lastName: userData.lastName,
//       companyName: userData.companyName
//     });

//     setIsLoading(true);
//     setError(null);

//     // Format data for backend - convert camelCase to snake_case
//     const formattedData = {
//       username: userData.username,
//       email: userData.email,
//       password: userData.password,
//       first_name: userData.firstName,
//       last_name: userData.lastName,
//       company_name: userData.companyName || ''
//     };

//     try {
//       console.log("Sending signup request to backend...");
//       const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         credentials: 'include',  // Important for cookies
//         body: JSON.stringify(formattedData),
//       });

//       console.log("Signup response status:", response.status);
//       const data = await response.json();
//       console.log("Signup response data:", data);

//       if (response.ok) {
//         console.log("Signup successful");
//         setUser(data as UserType);
//         return data as UserType;
//       } else {
//         const errorMsg =
//           data.errors?.username ||
//           data.errors?.email ||
//           data.errors?.password ||
//           data.errors?.first_name ||
//           data.errors?.last_name ||
//           data.errors?.message ||
//           'Signup failed';
//         console.error("Signup failed:", errorMsg);
//         setError(errorMsg);
//         return null;
//       }
//     } catch (error) {
//       console.error('Signup error:', error);
//       setError('Signup failed. Please try again.');
//       return null;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Logout function
//   const logout = async (): Promise<void> => {
//     console.log("Logout attempt");
//     setIsLoading(true);

//     try {
//       console.log("Sending logout request to backend...");
//       const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
//         credentials: 'include'  // Important for cookies
//       });

//       console.log("Logout response status:", response.status);

//       if (response.ok) {
//         console.log("Logout successful");
//         setUser(null);
//         navigate('/');
//       } else {
//         console.error('Logout failed');
//       }
//     } catch (error) {
//       console.error('Logout error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Update user profile
//   const updateProfile = async (profileData: ProfileUpdateData): Promise<boolean> => {
//     console.log("Profile update attempt with data:", profileData);
//     setIsLoading(true);

//     try {
//       let response;

//       // If we have a file, use FormData
//       if (profileData.profileImage) {
//         console.log("Using FormData for file upload");
//         const formData = new FormData();
//         if (profileData.username) formData.append('username', profileData.username);
//         if (profileData.bio) formData.append('bio', profileData.bio);
//         if (profileData.firstName) formData.append('firstName', profileData.firstName);
//         if (profileData.lastName) formData.append('lastName', profileData.lastName);
//         if (profileData.companyName) formData.append('companyName', profileData.companyName);
//         formData.append('profile_image', profileData.profileImage);

//         response = await fetch(`${API_BASE_URL}/api/users/profile`, {
//           method: 'PUT',
//           credentials: 'include',
//           body: formData,
//         });
//       } else {
//         // Use JSON for text-only updates
//         console.log("Using JSON for text-only update");
//         response = await fetch(`${API_BASE_URL}/api/users/profile`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//           },
//           credentials: 'include',
//           body: JSON.stringify(profileData),
//         });
//       }

//       console.log("Profile update response status:", response.status);
//       const data = await response.json();
//       console.log("Profile update response data:", data);

//       if (response.ok) {
//         console.log("Profile update successful");
//         setUser(data as UserType);
//         return true;
//       } else {
//         console.error("Profile update failed:", data.errors || "Unknown error");
//         return false;
//       }
//     } catch (error) {
//       console.error('Update profile error:', error);
//       return false;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Context values to provide
//   const contextValue: AppContextType = {
//     user,
//     isLoading,
//     error,
//     login,
//     signup,
//     logout,
//     updateProfile,
//   };

//   return (
//     <AppContext.Provider value={contextValue}>
//       {children}
//     </AppContext.Provider>
//   );
// };
// src/components/context/AppContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserType, SignupFormData, LoginFormData, ProfileUpdateData } from '@/types/user';

// Base API URL - adjust this to match your backend
const API_BASE_URL = 'http://127.0.0.1:8000';

interface AppContextType {
  user: UserType | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginFormData) => Promise<UserType | null>;
  signup: (userData: SignupFormData) => Promise<UserType | null>;
  logout: () => Promise<void>;
  updateProfile: (profileData: ProfileUpdateData) => Promise<boolean>;
  clearError: () => void;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

// Context provider
export const AppProvider = ({ children }: AppProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Clear error helper
  const clearError = () => setError(null);

  // Check if user is authenticated on load
  useEffect(() => {
    checkAuth();
  }, []);

  // Check authentication status
  const checkAuth = async () => {
    console.log("Checking authentication status...");
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/`, {
        credentials: 'include',
        headers: {
          'Accept': 'application/json'
        }
      });
      console.log("Auth check response status:", response.status);

      if (response.ok) {
        const data: UserType = await response.json();
        console.log("User authenticated:", data.username);
        setUser(data);
      } else {
        console.log("Not authenticated");
        setUser(null);
      }
    } catch (error) {
      console.error('Error checking auth:', error);
      setUser(null);
    }
  };

  // Login function
  const login = async (credentials: LoginFormData): Promise<UserType | null> => {
    console.log("Login attempt with email:", credentials.email);
    setIsLoading(true);
    setError(null);

    try {
      console.log("Sending login request to backend...");
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include',  // Important for cookies
        body: JSON.stringify(credentials),
      });

      console.log("Login response status:", response.status);
      const data = await response.json();
      console.log("Login response data:", data);

      if (response.ok) {
        console.log("Login successful");
        setUser(data);
        return data;
      } else {
        const errorMsg = data.errors?.email || data.errors?.message || 'Login failed';
        console.error("Login failed:", errorMsg);
        setError(errorMsg);
        return null;
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Signup function
  const signup = async (userData: SignupFormData): Promise<UserType | null> => {
    console.log("Signup attempt with data:", {
      username: userData.username,
      email: userData.email,
    });

    setIsLoading(true);
    setError(null);

    // Format data for backend - convert camelCase to snake_case if needed
    const formattedData = {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      first_name: userData.firstName,
      last_name: userData.lastName,
      company_name: userData.companyName || ''
    };

    try {
      console.log("Sending signup request to backend...");
      const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include',  // Important for cookies
        body: JSON.stringify(formattedData),
      });

      console.log("Signup response status:", response.status);
      const data = await response.json();
      console.log("Signup response data:", data);

      if (response.ok) {
        console.log("Signup successful");
        setUser(data as UserType);
        return data as UserType;
      } else {
        const errorMsg =
          data.errors?.username ||
          data.errors?.email ||
          data.errors?.password ||
          data.errors?.first_name ||
          data.errors?.last_name ||
          data.errors?.message ||
          'Signup failed';
        console.error("Signup failed:", errorMsg);
        setError(errorMsg);
        return null;
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('Signup failed. Please try again.');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async (): Promise<void> => {
    console.log("Logout attempt");
    setIsLoading(true);

    try {
      console.log("Sending logout request to backend...");
      const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: 'GET',
        credentials: 'include'  // Important for cookies
      });

      console.log("Logout response status:", response.status);

      // Always clear the user state regardless of response
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
      // Still clear user state on error
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Update user profile
  const updateProfile = async (profileData: ProfileUpdateData): Promise<boolean> => {
    console.log("Profile update attempt with data:", profileData);
    setIsLoading(true);

    try {
      let response;

      // If we have a file, use FormData
      if (profileData.profileImage) {
        console.log("Using FormData for file upload");
        const formData = new FormData();
        if (profileData.username) formData.append('username', profileData.username);
        if (profileData.bio) formData.append('bio', profileData.bio);
        if (profileData.firstName) formData.append('firstName', profileData.firstName);
        if (profileData.lastName) formData.append('lastName', profileData.lastName);
        if (profileData.companyName) formData.append('companyName', profileData.companyName);
        formData.append('profile_image', profileData.profileImage);

        response = await fetch(`${API_BASE_URL}/api/users/profile`, {
          method: 'PUT',
          credentials: 'include',
          body: formData,
        });
      } else {
        // Use JSON for text-only updates
        console.log("Using JSON for text-only update");
        response = await fetch(`${API_BASE_URL}/api/users/profile`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify(profileData),
        });
      }

      console.log("Profile update response status:", response.status);
      const data = await response.json();
      console.log("Profile update response data:", data);

      if (response.ok) {
        console.log("Profile update successful");
        setUser(data as UserType);
        return true;
      } else {
        console.error("Profile update failed:", data.errors || "Unknown error");
        return false;
      }
    } catch (error) {
      console.error('Update profile error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Context values to provide
  const contextValue: AppContextType = {
    user,
    isLoading,
    error,
    login,
    signup,
    logout,
    updateProfile,
    clearError
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
