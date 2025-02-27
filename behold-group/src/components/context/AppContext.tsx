// // // src/context/AppContext.tsx
// // import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// // import api from '@/services/api';

// // // Define the shape of the user object based on your Flask User model
// // interface User {
// //   id: number;
// //   username: string;
// //   email: string;
// // }

// // // Define the shape of your application state
// // interface AppState {
// //   isLoading: boolean;
// //   user: User | null;
// //   error: string | null;
// // }

// // // Define the context value shape
// // interface AppContextValue extends AppState {
// //   login: (credentials: { email: string; password: string }) => Promise<void>;
// //   signup: (userData: { username: string; email: string; password: string }) => Promise<void>;
// //   logout: () => Promise<void>;
// //   checkAuth: () => Promise<User | null>;
// // }

// // // Create the context with a default value
// // const AppContext = createContext<AppContextValue | undefined>(undefined);

// // // Custom hook for using the AppContext
// // export const useApp = () => {
// //   const context = useContext(AppContext);
// //   if (context === undefined) {
// //     throw new Error('useApp must be used within an AppProvider');
// //   }
// //   return context;
// // };

// // // Provider component
// // interface AppProviderProps {
// //   children: ReactNode;
// // }

// // export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
// //   const [state, setState] = useState<AppState>({
// //     isLoading: true, // Start with loading state
// //     user: null,
// //     error: null,
// //   });

// //   // Check authentication status on mount
// //   useEffect(() => {
// //     checkAuth()
// //       .catch(error => {
// //         console.error('Authentication check failed:', error);
// //         setState(prev => ({ ...prev, isLoading: false }));
// //       });
// //   }, []);

// //   // Check if the user is authenticated
// //   const checkAuth = async (): Promise<User | null> => {
// //     try {
// //       setState(prev => ({ ...prev, isLoading: true, error: null }));
// //       const userData = await api.get('/auth/');

// //       setState({
// //         isLoading: false,
// //         user: userData,
// //         error: null,
// //       });

// //       return userData;
// //     } catch (error) {
// //       setState({
// //         isLoading: false,
// //         user: null,
// //         error: null, // Don't show error for auth check
// //       });

// //       return null;
// //     }
// //   };

// //   // Login function
// //   const login = async (credentials: { email: string; password: string }) => {
// //     try {
// //       setState(prev => ({ ...prev, isLoading: true, error: null }));
// //       const userData = await api.post('/auth/login', credentials);

// //       setState({
// //         isLoading: false,
// //         user: userData,
// //         error: null,
// //       });
// //     } catch (error) {
// //       console.error('Login failed:', error);

// //       let errorMessage = 'Login failed. Please check your credentials.';

// //       // Try to extract error message from Flask response
// //       if (error instanceof Error) {
// //         try {
// //           const errorData = JSON.parse(error.message);
// //           if (errorData.email) {
// //             errorMessage = errorData.email[0];
// //           } else if (errorData.password) {
// //             errorMessage = errorData.password[0];
// //           } else if (errorData.errors && errorData.errors.message) {
// //             errorMessage = errorData.errors.message;
// //           }
// //         } catch (e) {
// //           // Use default error message if parsing fails
// //         }
// //       }

// //       setState(prev => ({
// //         ...prev,
// //         isLoading: false,
// //         error: errorMessage,
// //       }));
// //     }
// //   };

// //   // Signup function
// //   const signup = async (userData: { username: string; email: string; password: string }) => {
// //     try {
// //       setState(prev => ({ ...prev, isLoading: true, error: null }));
// //       const user = await api.post('/auth/signup', userData);

// //       setState({
// //         isLoading: false,
// //         user,
// //         error: null,
// //       });
// //     } catch (error) {
// //       console.error('Signup failed:', error);

// //       let errorMessage = 'Signup failed. Please check your information.';

// //       // Try to extract error message from Flask response
// //       if (error instanceof Error) {
// //         try {
// //           const errorData = JSON.parse(error.message);
// //           if (errorData.username) {
// //             errorMessage = errorData.username[0];
// //           } else if (errorData.email) {
// //             errorMessage = errorData.email[0];
// //           } else if (errorData.password) {
// //             errorMessage = errorData.password[0];
// //           }
// //         } catch (e) {
// //           // Use default error message if parsing fails
// //         }
// //       }

// //       setState(prev => ({
// //         ...prev,
// //         isLoading: false,
// //         error: errorMessage,
// //       }));
// //     }
// //   };

// //   // Logout function
// //   const logout = async () => {
// //     try {
// //       setState(prev => ({ ...prev, isLoading: true }));
// //       await api.get('/auth/logout');

// //       setState({
// //         isLoading: false,
// //         user: null,
// //         error: null,
// //       });
// //     } catch (error) {
// //       console.error('Logout failed:', error);

// //       // Still clear user state even if logout API call fails
// //       setState({
// //         isLoading: false,
// //         user: null,
// //         error: null,
// //       });
// //     }
// //   };

// //   // Create the context value object
// //   const value: AppContextValue = {
// //     ...state,
// //     login,
// //     signup,
// //     logout,
// //     checkAuth,
// //   };

// //   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// // };



// // In your AppContext.tsx
// import { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// interface User {
//   id: number;
//   username: string;
//   email: string;
//   // other user properties
// }

// interface AppContextType {
//   user: User | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   error: string | null;
//   login: (credentials: { email: string; password: string }) => Promise<void>;
//   signup: (userData: { username: string; email: string; password: string }) => Promise<void>;
//   logout: () => Promise<void>;
//   checkAuth: () => Promise<void>;
// }

// const AppContext = createContext<AppContextType | undefined>(undefined);

// export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   // Check authentication status on mount
//   useEffect(() => {
//     checkAuth();
//   }, []);

//   const checkAuth = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/auth/', {
//         method: 'GET',
//         credentials: 'include',
//       });

//       if (response.ok) {
//         const userData = await response.json();
//         setUser(userData);
//         setIsAuthenticated(true);
//       } else {
//         setUser(null);
//         setIsAuthenticated(false);
//       }
//     } catch (error) {
//       console.error('Auth check failed:', error);
//       setUser(null);
//       setIsAuthenticated(false);
//     }
//   };

// // In your AppContext.tsx login function
// const login = async (credentials: { email: string; password: string }) => {
//   setIsLoading(true);
//   setError(null);

//   try {
//     const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       credentials: 'include', // This is crucial for cookie-based auth
//       body: JSON.stringify(credentials)
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.errors?.message || 'Login failed');
//     }

//     const userData = await response.json();

//     // Update auth state first
//     setUser(userData);
//     setIsAuthenticated(true);

//     // Then navigate with a small delay to ensure state is updated
//     setTimeout(() => {
//       navigate('/portal');
//     }, 100);
//   } catch (error) {
//     console.error('Login error:', error);
//     setError(error instanceof Error ? error.message : 'Login failed');
//     throw error;
//   } finally {
//     setIsLoading(false);
//   }
// };

// //   const login = async (credentials: { email: string; password: string }) => {
// //     setIsLoading(true);
// //     setError(null);

// //     try {
// //       console.log('Making login request');
// //       const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         credentials: 'include',
// //         body: JSON.stringify(credentials)
// //       });

// //       console.log('Login response status:', response.status);


// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.errors?.message || 'Login failed');
// //       }

// //       const userData = await response.json();
// //       console.log('User data received:', userData);
// //       setUser(userData);
// //       setIsAuthenticated(true);

// //       // Navigate to dashboard after login
// //       navigate('/portal');

// //       // In AppContext.tsx login function
// // console.log('About to navigate to:', '/portal');
// // navigate('/portal');
// // console.log('Navigation called');


// //     } catch (error) {
// //       console.error('Login error:', error);
// //       setError(error instanceof Error ? error.message : 'Login failed');
// //       throw error;
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

//   const logout = async () => {
//     try {
//       await fetch('http://127.0.0.1:8000/api/auth/logout', {
//         method: 'GET',
//         credentials: 'include',
//       });

//       setUser(null);
//       setIsAuthenticated(false);
//       navigate('/');
//     } catch (error) {
//       console.error('Logout error:', error);
//     }
//   };

//   const signup = async (data: { username: string; email: string; password: string }) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//         body: JSON.stringify(data)
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.errors?.message || 'Signup failed');
//       }

//       const userData = await response.json();
//       setUser(userData);
//       setIsAuthenticated(true);
//       navigate('/awaiting-approval');

//     } catch (error) {
//       console.error('Signup error:', error);
//       setError(error instanceof Error ? error.message : 'Signup failed');
//       throw error;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         user,
//         isAuthenticated,
//         isLoading,
//         error,
//         login,
//         logout,
//         signup,
//         checkAuth,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useApp = () => {
//   const context = useContext(AppContext);
//   if (context === undefined) {
//     throw new Error('useApp must be used within an AppProvider');
//   }
//   return context;
// };


import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  username: string;
  email: string;
  // other user properties
}

interface AppContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  signup: (userData: { username: string; email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  clearError: () => void; // Added clearError
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Clear error helper
  const clearError = () => setError(null);

  // Check authentication status on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/', {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const login = async (credentials: { email: string; password: string }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // This is crucial for cookie-based auth
        body: JSON.stringify(credentials)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors?.message || 'Login failed');
      }

      const userData = await response.json();

      // Update auth state first
      setUser(userData);
      setIsAuthenticated(true);

      // Then navigate with a small delay to ensure state is updated
      setTimeout(() => {
        navigate('/portal');
      }, 100);
    } catch (error) {
      console.error('Login error:', error);
      setError(error instanceof Error ? error.message : 'Login failed');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch('http://127.0.0.1:8000/api/auth/logout', {
        method: 'GET',
        credentials: 'include',
      });

      setUser(null);
      setIsAuthenticated(false);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const signup = async (data: { username: string; email: string; password: string }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors?.message || 'Signup failed');
      }

      const userData = await response.json();
      setUser(userData);
      setIsAuthenticated(true);
      navigate('/awaiting-approval');

    } catch (error) {
      console.error('Signup error:', error);
      setError(error instanceof Error ? error.message : 'Signup failed');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        error,
        login,
        logout,
        signup,
        checkAuth,
        clearError // Added to the provider value
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
