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
