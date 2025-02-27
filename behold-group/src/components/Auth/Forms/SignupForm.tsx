import React, { useState } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Button, Input } from '@heroui/react';
import { Link } from '@heroui/link';
import { useApp } from '@/components/context/AppContext';


export const SignupForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const { isLoading, error, signup } = useApp();


  const validateForm = (): boolean => {
    let isValid = true;

    // Username validation
    if (!username) {
      setUsernameError('Username is required');
      isValid = false;
    } else if (username.length < 3) {
      setUsernameError('Username must be at least 3 characters');
      isValid = false;
    } else {
      setUsernameError('');
    }

    // Email validation
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Password validation
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await signup({ username, email, password });

      } catch (error) {
        console.error('Signup error:', error);
      }
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Create Account</h2>
        <p className="text-default-600">Sign up for a new account</p>
      </CardHeader>

      <CardBody>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              fullWidth
              label="Username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              errorMessage={usernameError}
              isInvalid={!!usernameError}
            />
          </div>

          <div>
            <Input
              fullWidth
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              errorMessage={emailError}
              isInvalid={!!emailError}
            />
          </div>

          <div>
            <Input
              fullWidth
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              errorMessage={passwordError}
              isInvalid={!!passwordError}
            />
          </div>

          <div>
            <Input
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              errorMessage={confirmPasswordError}
              isInvalid={!!confirmPasswordError}
            />
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-danger-50 text-danger text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            color="primary"
            fullWidth
            isLoading={isLoading}
            disabled={isLoading}
          >
            Sign Up
          </Button>
        </form>
      </CardBody>

      <CardFooter className="flex justify-center">
        <p className="text-sm text-default-600">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </CardFooter>
    </Card>
  );
};
