// src/components/Auth/Forms/LoginForm.tsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Button, Input } from '@heroui/react';
import { Link } from '@heroui/link';
import { useApp } from '@/components/context/AppContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { LoginFormData } from '@/types/user';

interface LocationState {
  error?: string;
  from?: string;
}

export const LoginForm: React.FC = () => {
  // Use a single form state object for better stability
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Use a single errors object
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    form: ''
  });

  const { isLoading, error: apiError, login } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  // Check for any error messages passed via location state (from redirects)
  useEffect(() => {
    const state = location.state as LocationState;
    if (state?.error) {
      setErrors(prev => ({
        ...prev,
        form: state.error || ''
      }));

      // Clear the error from location state to prevent it showing after refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  // Single handler for all input changes
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {
      email: '',
      password: '',
      form: ''
    };

    let isValid = true;

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formData]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login form submitted");

    if (validateForm()) {
      try {
        const credentials: LoginFormData = {
          email: formData.email,
          password: formData.password
        };

        console.log("Attempting login with:", credentials.email);
        const user = await login(credentials);

        if (user) {
          console.log("Login successful, redirecting to portal");
          // Check if we're being redirected from somewhere
          const state = location.state as LocationState;
          navigate(state?.from || '/portal');
        } else {
          setErrors(prev => ({
            ...prev,
            form: 'Login failed. Please check your credentials and try again.'
          }));
        }
      } catch (err) {
        console.error('Login error:', err);
        setErrors(prev => ({
          ...prev,
          form: 'An unexpected error occurred. Please try again.'
        }));
      }
    }
  }, [formData, validateForm, login, navigate, location.state]);

  // Error display is memoized to avoid recreation on every render
  const errorMessage = useMemo(() => {
    return (errors.form || apiError) ? (
      <div className="p-3 rounded-lg bg-danger-50 text-danger text-sm">
        {errors.form || apiError}
      </div>
    ) : null;
  }, [errors.form, apiError]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="w-full border-b border-divider">
        <div className="container mx-auto flex justify-between items-center py-2">
          <div className="flex items-center">
            <a href="/" className="font-bold text-2xl text-primary">Behold Group</a>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto pt-12 px-6 flex items-center justify-center">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="flex flex-col items-center">
            <h2 className="text-2xl font-bold">Login</h2>
            <p className="text-default-600">Sign in to your account</p>
          </CardHeader>

          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage}

              <div>
                <Input
                  fullWidth
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  errorMessage={errors.email}
                  isInvalid={!!errors.email}
                />
              </div>

              <div>
                <Input
                  fullWidth
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  errorMessage={errors.password}
                  isInvalid={!!errors.password}
                />
              </div>

              <Button
                type="submit"
                color="primary"
                fullWidth
                isLoading={isLoading}
                disabled={isLoading}
              >
                Login
              </Button>
            </form>
          </CardBody>

          <CardFooter className="flex flex-col items-center space-y-2">
            <p className="text-sm text-default-600">
              Don't have an account? <Link href="/signup">Sign up</Link>
            </p>
            <Link href="/forgot-password" className="text-sm">
              Forgot password?
            </Link>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default LoginForm;
