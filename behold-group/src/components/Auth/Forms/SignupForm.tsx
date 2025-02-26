// // import { useState } from "react";
// // import type { AuthFormProps, AuthErrors } from "../../../types/auth";

// // export function SignupForm({ onSuccess, onError }: AuthFormProps) {
// //   const [email, setEmail] = useState("");
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [errors, setErrors] = useState<AuthErrors>({});

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     if (password !== confirmPassword) {
// //       const error = {
// //         confirmPassword: "Confirm Password field must be the same as the Password field",
// //       };
// //       setErrors(error);
// //       onError?.(error);
// //       return;
// //     }

// //     try {
// //       const response = await fetch('/api/signup', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ email, username, password })
// //       });

// //       if (!response.ok) {
// //         const error = await response.json();
// //         setErrors(error);
// //         onError?.(error);
// //         return;
// //       }

// //       onSuccess?.();
// //     } catch (err) {
// //       const error = { server: 'Failed to connect to server' };
// //       setErrors(error);
// //       onError?.(error);
// //     }
// //   };

// //   return (
// //     <div className="w-full max-w-md mx-auto p-6">
// //       <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
// //       {errors.server && <p className="text-red-500 text-sm text-center">{errors.server}</p>}

// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div>
// //           <label className="block text-gray-700 mb-2">
// //             Email
// //             <input
// //               type="text"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //               className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //           </label>
// //           {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
// //         </div>

// //         <div>
// //           <label className="block text-gray-700 mb-2">
// //             Username
// //             <input
// //               type="text"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               required
// //               className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //           </label>
// //           {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
// //         </div>

// //         <div>
// //           <label className="block text-gray-700 mb-2">
// //             Password
// //             <input
// //               type="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //               className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //           </label>
// //           {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
// //         </div>

// //         <div>
// //           <label className="block text-gray-700 mb-2">
// //             Confirm Password
// //             <input
// //               type="password"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               required
// //               className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //           </label>
// //           {errors.confirmPassword && (
// //             <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
// //           )}
// //         </div>

// //         <button
// //           type="submit"
// //           className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
// //         >
// //           Sign Up
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }


// import React, { useState } from 'react';
// import { Card, CardBody, CardHeader, Input, Button } from "@heroui/react";
// import { useAuth } from '@/components/context/AuthContext';

// interface SignupErrors {
//   email?: string;
//   username?: string;
//   password?: string;
//   confirmPassword?: string;
//   server?: string;
// }

// export default function SignupForm() {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState<SignupErrors>({});
//   const { setUser } = useAuth();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setErrors({
//         confirmPassword: "Passwords must match"
//       });
//       return;
//     }

//     try {
//       const response = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           username,
//           password,
//           csrf_token: document.cookie.split('csrf_token=')[1]
//         })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUser(data);
//         // Redirect or handle successful signup
//       } else {
//         setErrors(data);
//       }
//     } catch (error) {
//       setErrors({ server: "An error occurred. Please try again." });
//     }
//   };

//   return (
//     <Card className="max-w-md mx-auto">
//       <CardHeader>
//         <h2 className="text-2xl font-bold">Sign Up</h2>
//       </CardHeader>
//       <CardBody>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <Input
//               type="email"
//               label="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               errorMessage={errors.email}
//               isRequired
//             />
//           </div>
//           <div>
//             <Input
//               type="text"
//               label="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               errorMessage={errors.username}
//               isRequired
//             />
//           </div>
//           <div>
//             <Input
//               type="password"
//               label="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               errorMessage={errors.password}
//               isRequired
//             />
//           </div>
//           <div>
//             <Input
//               type="password"
//               label="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               errorMessage={errors.confirmPassword}
//               isRequired
//             />
//           </div>
//           {errors.server && (
//             <p className="text-danger text-sm">{errors.server}</p>
//           )}
//           <Button
//             type="submit"
//             color="primary"
//             className="w-full"
//           >
//             Sign Up
//           </Button>
//         </form>
//       </CardBody>
//     </Card>
//   );
// }


// import React, { useState } from 'react';
// import { Card, CardBody, CardHeader, Input, Button } from "@heroui/react";
// import { useAuth } from '@/components/context/AuthContext';

// interface SignupErrors {
//   email?: string;
//   username?: string;
//   password?: string;
//   confirmPassword?: string;
//   server?: string;
// }

// interface SignupFormProps {
//   onSuccess?: () => void;  // Callback when signup is successful
//   onError?: (message?: any) => void;  // Callback when an error occurs
// }

// export default function SignupForm({ onSuccess, onError }: SignupFormProps) {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState<SignupErrors>({});
//   const { setUser } = useAuth();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setErrors({ confirmPassword: "Passwords must match" });
//       onError?.("Passwords must match");
//       return;
//     }

//     try {
//       const response = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           email,
//           username,
//           password,
//           csrf_token: document.cookie.split('csrf_token=')[1]
//         })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUser(data);
//         onSuccess?.(); // Call onSuccess if provided
//       } else {
//         setErrors(data);
//         onError?.(data.server || "Signup failed."); // Call onError if provided
//       }
//     } catch (error) {
//       setErrors({ server: "An error occurred. Please try again." });
//       onError?.(error); // Call onError if provided
//     }
//   };

//   return (
//     <Card className="max-w-md mx-auto">
//       <CardHeader>
//         <h2 className="text-2xl font-bold">Sign Up</h2>
//       </CardHeader>
//       <CardBody>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <Input
//               type="email"
//               label="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               errorMessage={errors.email}
//               isRequired
//             />
//           </div>
//           <div>
//             <Input
//               type="text"
//               label="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               errorMessage={errors.username}
//               isRequired
//             />
//           </div>
//           <div>
//             <Input
//               type="password"
//               label="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               errorMessage={errors.password}
//               isRequired
//             />
//           </div>
//           <div>
//             <Input
//               type="password"
//               label="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               errorMessage={errors.confirmPassword}
//               isRequired
//             />
//           </div>
//           {errors.server && (
//             <p className="text-danger text-sm">{errors.server}</p>
//           )}
//           <Button type="submit" color="primary" className="w-full">
//             Sign Up
//           </Button>
//         </form>
//       </CardBody>
//     </Card>
//   );
// }


// src/components/auth/SignupForm.tsx
import React, { useState } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Button, Input } from '@heroui/react';
import { Link } from '@heroui/link';
import { useApp } from '@/components/context/AppContext';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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
        // Redirect to home page after successful signup
        navigate('/');
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
