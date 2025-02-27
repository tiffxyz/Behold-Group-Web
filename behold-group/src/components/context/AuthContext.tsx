// // // src/context/AuthContext.tsx
// // import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// // interface User {
// //   id: number;
// //   email: string;
// //   username: string;
// //   // Add any other user properties from your backend
// // }

// // interface AuthContextType {
// //   user: User | null;
// //   setUser: React.Dispatch<React.SetStateAction<User | null>>;
// //   logout: () => Promise<void>;
// //   loading: boolean;
// // }

// // interface AuthProviderProps {
// //   children: ReactNode;
// // }

// // const AuthContext = createContext<AuthContextType | null>(null);

// // export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
// //   const [user, setUser] = useState<User | null>(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     // Check authentication status when the app loads
// //     fetch('/api/auth/')
// //       .then(res => res.json())
// //       .then(data => {
// //         if (!data.errors) {
// //           setUser(data);
// //         }
// //       })
// //       .finally(() => setLoading(false));
// //   }, []);

// //   const logout = async (): Promise<void> => {
// //     const response = await fetch('/api/auth/logout');
// //     if (response.ok) {
// //       setUser(null);
// //     }
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, setUser, logout, loading }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = (): AuthContextType => {
// //   const context = useContext(AuthContext);
// //   if (!context) {
// //     throw new Error('useAuth must be used within an AuthProvider');
// //   }
// //   return context;
// // };

// // src/context/AuthContext.tsx
// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import api from '@/services/api';

// // Define the shape of the user object based on your Flask User model
// interface User {
//   id: number;
//   username: string;
//   email: string;
// }

// // Define the context shape
// interface AuthContextType {
//   user: User | null;
//   isLoading: boolean;
//   error: string | null;
//   login: (credentials: { email: string; password: string }) => Promise<void>;
//   signup: (userData: { username: string; email: string; password: string }) => Promise<void>;
//   logout: () => Promise<void>;
//   clearError: () => void;
// }

// // Create the context
// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // Hook for using the auth context
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// interface AuthProviderProps {
//   children: ReactNode;
// }

// // Auth provider component
// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Clear error helper
//   const clearError = () => setError(null);

//   // Check authentication status on mount
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const userData = await api.get('/auth');
//         setUser(userData);
//       } catch (error) {
//         // Don't show error for initial auth check
//         console.log('Not logged in');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   // Login function
//   const login = async (credentials: { email: string; password: string }) => {
//     try {
//       setIsLoading(true);
//       clearError();
//       const userData = await api.post('/auth/login', credentials);
//       setUser(userData);
//     } catch (error) {
//       console.error('Login failed:', error);

//       let errorMessage = 'Login failed. Please check your credentials.';

//       // Try to extract error message from Flask response
//       if (error instanceof Error) {
//         try {
//           const errorData = JSON.parse(error.message);
//           if (errorData.email) {
//             errorMessage = errorData.email[0];
//           } else if (errorData.password) {
//             errorMessage = errorData.password[0];
//           } else if (errorData.errors && errorData.errors.message) {
//             errorMessage = errorData.errors.message;
//           }
//         } catch (e) {
//           // Use default error message if parsing fails
//         }
//       }

//       setError(errorMessage);
//       throw error;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Signup function
//   const signup = async (userData: { username: string; email: string; password: string }) => {
//     try {
//       setIsLoading(true);
//       clearError();
//       const newUser = await api.post('/auth/signup', userData);
//       setUser(newUser);
//     } catch (error) {
//       console.error('Signup failed:', error);

//       let errorMessage = 'Signup failed. Please check your information.';

//       // Try to extract error message from Flask response
//       if (error instanceof Error) {
//         try {
//           const errorData = JSON.parse(error.message);
//           if (errorData.username) {
//             errorMessage = errorData.username[0];
//           } else if (errorData.email) {
//             errorMessage = errorData.email[0];
//           } else if (errorData.password) {
//             errorMessage = errorData.password[0];
//           }
//         } catch (e) {
//           // Use default error message if parsing fails
//         }
//       }

//       setError(errorMessage);
//       throw error;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Logout function
//   const logout = async () => {
//     try {
//       setIsLoading(true);
//       await api.get('/auth/logout');
//       setUser(null);
//     } catch (error) {
//       console.error('Logout failed:', error);
//       // Still remove user data even if logout API call fails
//       setUser(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Create the context value
//   const value = {
//     user,
//     isLoading,
//     error,
//     login,
//     signup,
//     logout,
//     clearError,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };


// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import api from '@/services/api';

// Define the shape of the user object based on your Flask User model
interface User {
  id: number;
  username: string;
  email: string;
}

// Define the context shape
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  signup: (userData: { username: string; email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook for using the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

// Auth provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Clear error helper
  const clearError = () => setError(null);

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await api.get('/auth');
        setUser(userData);
      } catch (error) {
        // Don't show error for initial auth check
        console.log('Not logged in');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (credentials: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      clearError();
      const userData = await api.post('/auth/login', credentials);
      setUser(userData);
    } catch (error) {
      console.error('Login failed:', error);

      let errorMessage = 'Login failed. Please check your credentials.';

      // Try to extract error message from Flask response
      if (error instanceof Error) {
        try {
          const errorData = JSON.parse(error.message);
          if (errorData.email) {
            errorMessage = errorData.email[0];
          } else if (errorData.password) {
            errorMessage = errorData.password[0];
          } else if (errorData.errors && errorData.errors.message) {
            errorMessage = errorData.errors.message;
          }
        } catch (e) {
          // Use default error message if parsing fails
        }
      }

      setError(errorMessage);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Signup function
  const signup = async (userData: { username: string; email: string; password: string }) => {
    try {
      setIsLoading(true);
      clearError();
      const newUser = await api.post('/auth/signup', userData);
      setUser(newUser);
    } catch (error) {
      console.error('Signup failed:', error);

      let errorMessage = 'Signup failed. Please check your information.';

      // Try to extract error message from Flask response
      if (error instanceof Error) {
        try {
          const errorData = JSON.parse(error.message);
          if (errorData.username) {
            errorMessage = errorData.username[0];
          } else if (errorData.email) {
            errorMessage = errorData.email[0];
          } else if (errorData.password) {
            errorMessage = errorData.password[0];
          }
        } catch (e) {
          // Use default error message if parsing fails
        }
      }

      setError(errorMessage);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      setIsLoading(true);
      await api.get('/auth/logout');
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
      // Still remove user data even if logout API call fails
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Create the context value
  const value = {
    user,
    isLoading,
    error,
    login,
    signup,
    logout,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
