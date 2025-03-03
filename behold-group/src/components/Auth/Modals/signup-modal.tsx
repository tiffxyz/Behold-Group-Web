// import React, { useState, useEffect } from 'react';
// import { Modal, ModalContent, ModalHeader, ModalBody, Button, Input } from '@heroui/react';
// import { useApp } from '../../context/AppContext';

// interface SignupModalProps {
//   isOpen: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// export default function SignupModal({ isOpen, onOpenChange }: SignupModalProps) {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [confirmError, setConfirmError] = useState('');

//   const { signup, isLoading, error, clearError } = useApp();

//   // Clear errors when modal opens/closes
//   useEffect(() => {
//     if (isOpen) {
//       clearError();
//       setConfirmError('');
//     }
//   }, [isOpen, clearError]);

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       setConfirmError('Passwords do not match');
//       return;
//     }

//     setConfirmError('');

//     try {
//       await signup({ username, email, password });
//       // Reset form
//       setUsername('');
//       setEmail('');
//       setPassword('');
//       setConfirmPassword('');
//       // Close modal on successful signup
//       onOpenChange(false);
//     } catch (error) {
//       console.error('Signup failed:', error);
//     }
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onOpenChange={onOpenChange}
//       placement="center"
//       size="md"
//     >
//       <ModalContent>
//         <ModalHeader className="flex flex-col gap-1">Create Partner Account</ModalHeader>
//         <ModalBody>
//           <form onSubmit={handleSignup} className="space-y-4 pb-6">
//             <Input
//               autoFocus
//               label="Email"
//               placeholder="Enter your email"
//               variant="bordered"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               errorMessage={error && error.includes('email') ? error : undefined}
//               isInvalid={error && error.includes('email') ? true : false}
//               isRequired
//             />
//             <Input
//               label="Username"
//               placeholder="Choose a username"
//               variant="bordered"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               errorMessage={error && error.includes('username') ? error : undefined}
//               isInvalid={error && error.includes('username') ? true : false}
//               isRequired
//             />
//             <Input
//               label="Password"
//               placeholder="Choose a password"
//               type="password"
//               variant="bordered"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               errorMessage={error && error.includes('password') ? error : undefined}
//               isInvalid={error && error.includes('password') ? true : false}
//               isRequired
//             />
//             <Input
//               label="Confirm Password"
//               placeholder="Confirm your password"
//               type="password"
//               variant="bordered"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               errorMessage={confirmError}
//               isInvalid={!!confirmError}
//               isRequired
//             />
//             {error && !error.includes('email') && !error.includes('username') && !error.includes('password') && (
//               <p className="text-danger text-sm">{error}</p>
//             )}
//             <div className="flex gap-2 justify-end mt-4">
//               <Button color="danger" variant="light" onPress={() => onOpenChange(false)}>
//                 Close
//               </Button>
//               <Button
//                 color="primary"
//                 type="submit"
//                 isLoading={isLoading}
//                 disabled={isLoading}
//               >
//                 Create Account
//               </Button>
//             </div>
//           </form>
//         </ModalBody>
//       </ModalContent>
//     </Modal>
//   );
// };
// src/components/Auth/Modals/signup-modal.tsx
import React, { useState, useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, Input } from '@heroui/react';
import { useApp } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

interface SignupModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SignupModal({ isOpen, onOpenChange }: SignupModalProps) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    companyName: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    form: ''
  });

  const { signup, isLoading, error, clearError } = useApp();
  const navigate = useNavigate();

  // Clear errors when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      clearError();
      setErrors({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        form: ''
      });
    }
  }, [isOpen, clearError]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear field-specific error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      form: ''
    };

    let isValid = true;

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
      isValid = false;
    }

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
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        console.log("Signup attempt from modal...");
        const userData = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyName: formData.companyName || undefined
        };

        const user = await signup(userData);

        if (user) {
          // Reset form
          setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            companyName: ''
          });

          // Close modal and navigate
          onOpenChange(false);
          navigate('/portal');
          console.log("Signup successful, redirected to portal");
        } else {
          setErrors(prev => ({
            ...prev,
            form: 'Signup failed. Please try again.'
          }));
        }
      } catch (error) {
        console.error('Signup failed:', error);
        setErrors(prev => ({
          ...prev,
          form: 'An unexpected error occurred. Please try again.'
        }));
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      size="xl"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Create Partner Account</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSignup} className="space-y-4 pb-6">
            {/* Form error message */}
            {(errors.form || error) && (
              <div className="p-3 rounded-lg bg-danger-50 text-danger text-sm">
                {errors.form || error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <Input
                name="firstName"
                label="First Name"
                placeholder="Enter your first name"
                variant="bordered"
                value={formData.firstName}
                onChange={handleChange}
                errorMessage={errors.firstName}
                isInvalid={!!errors.firstName}
                isRequired
              />
              <Input
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
                variant="bordered"
                value={formData.lastName}
                onChange={handleChange}
                errorMessage={errors.lastName}
                isInvalid={!!errors.lastName}
                isRequired
              />
            </div>

            <Input
              name="username"
              label="Username"
              placeholder="Choose a username"
              variant="bordered"
              value={formData.username}
              onChange={handleChange}
              errorMessage={errors.username}
              isInvalid={!!errors.username}
              isRequired
            />

            <Input
              name="email"
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
              value={formData.email}
              onChange={handleChange}
              errorMessage={errors.email}
              isInvalid={!!errors.email}
              isRequired
            />

            <Input
              name="companyName"
              label="Company Name (Optional)"
              placeholder="Enter your company name"
              variant="bordered"
              value={formData.companyName}
              onChange={handleChange}
            />

            <Input
              name="password"
              label="Password"
              placeholder="Choose a password"
              type="password"
              variant="bordered"
              value={formData.password}
              onChange={handleChange}
              errorMessage={errors.password}
              isInvalid={!!errors.password}
              isRequired
            />

            <Input
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
              variant="bordered"
              value={formData.confirmPassword}
              onChange={handleChange}
              errorMessage={errors.confirmPassword}
              isInvalid={!!errors.confirmPassword}
              isRequired
            />

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
}
