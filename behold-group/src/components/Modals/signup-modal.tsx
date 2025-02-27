import React, { useState, useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, Input } from '@heroui/react';
import { useApp } from '../context/AppContext';

interface SignupModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SignupModal({ isOpen, onOpenChange }: SignupModalProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmError, setConfirmError] = useState('');

  const { signup, isLoading, error, clearError } = useApp();

  // Clear errors when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      clearError();
      setConfirmError('');
    }
  }, [isOpen, clearError]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setConfirmError('Passwords do not match');
      return;
    }

    setConfirmError('');

    try {
      await signup({ username, email, password });
      // Reset form
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      // Close modal on successful signup
      onOpenChange(false);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      size="md"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Create Partner Account</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSignup} className="space-y-4 pb-6">
            <Input
              autoFocus
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              errorMessage={error && error.includes('email') ? error : undefined}
              isInvalid={error && error.includes('email') ? true : false}
              isRequired
            />
            <Input
              label="Username"
              placeholder="Choose a username"
              variant="bordered"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              errorMessage={error && error.includes('username') ? error : undefined}
              isInvalid={error && error.includes('username') ? true : false}
              isRequired
            />
            <Input
              label="Password"
              placeholder="Choose a password"
              type="password"
              variant="bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              errorMessage={error && error.includes('password') ? error : undefined}
              isInvalid={error && error.includes('password') ? true : false}
              isRequired
            />
            <Input
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
              variant="bordered"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              errorMessage={confirmError}
              isInvalid={!!confirmError}
              isRequired
            />
            {error && !error.includes('email') && !error.includes('username') && !error.includes('password') && (
              <p className="text-danger text-sm">{error}</p>
            )}
            <div className="flex gap-2 justify-end mt-4">
              <Button color="danger" variant="light" onPress={() => onOpenChange(false)}>
                Close
              </Button>
              <Button
                color="primary"
                type="submit"
                isLoading={isLoading}
                disabled={isLoading}
              >
                Create Account
              </Button>
            </div>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
