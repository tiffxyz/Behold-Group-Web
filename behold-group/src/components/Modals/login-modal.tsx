import React, { useState, useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, Input, Link } from '@heroui/react';
import { useApp } from '../context/AppContext';
import { useDisclosure } from '@heroui/react';
import SignupModal from './signup-modal';

interface LoginModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LoginModal({ isOpen, onOpenChange }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { login, isLoading, error, clearError } = useApp();

  // For signup modal
  const { isOpen: isSignupOpen, onOpen: onSignupOpen, onOpenChange: onSignupOpenChange } = useDisclosure();

  // Clear errors when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      clearError();
      setEmailError('');
      setPasswordError('');
    }
  }, [isOpen, clearError]);

  const validateForm = (): boolean => {
    let isValid = true;

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
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await login({ email, password });
        // Reset form
        setEmail('');
        setPassword('');
        // Close modal on successful login
        onOpenChange(false);
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  };

  // Handle switching to signup modal
  const handleSignupClick = () => {
    onOpenChange(false); // Close login modal
    onSignupOpen(); // Open signup modal
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="md"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Partner Portal Login</ModalHeader>
          <ModalBody>
            <form onSubmit={handleLogin} className="space-y-4 pb-6">
              <Input
                autoFocus
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                errorMessage={emailError || (error && error.includes('email') ? error : undefined)}
                isInvalid={!!emailError || (error && error.includes('email') ? true : false)}
                isRequired
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                errorMessage={passwordError || (error && error.includes('password') ? error : undefined)}
                isInvalid={!!passwordError || (error && error.includes('password') ? true : false)}
                isRequired
              />
              {error && !error.includes('email') && !error.includes('password') && (
                <p className="text-danger text-sm">{error}</p>
              )}
              <div className="flex justify-between items-center pt-2">
                <p className="text-sm">
                  Don't have an account?{' '}
                  <Button
                    as={Link}
                    color="primary"
                    variant="light"
                    className="p-0"
                    onPress={handleSignupClick}
                  >
                    Sign up
                  </Button>
                </p>
                <div className="flex gap-2">
                  <Button color="danger" variant="light" onPress={() => onOpenChange(false)}>
                    Close
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    isLoading={isLoading}
                    disabled={isLoading}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Signup Modal */}
      <SignupModal isOpen={isSignupOpen} onOpenChange={onSignupOpenChange} />
    </>
  );
};
