// // // // // // // // import { useState } from "react";
// // // // // // // // import type { AuthFormProps, AuthErrors } from "../../..types/auth";

// // // // // // // // export function LoginForm({ onSuccess, onError }: AuthFormProps) {
// // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // //   const [errors, setErrors] = useState<AuthErrors>({});

// // // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // // //     e.preventDefault();

// // // // // // // //     try {
// // // // // // // //       const response = await fetch('/api/login', {
// // // // // // // //         method: 'POST',
// // // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // // //         body: JSON.stringify({ email, password })
// // // // // // // //       });

// // // // // // // //       if (!response.ok) {
// // // // // // // //         const error = await response.json();
// // // // // // // //         setErrors(error);
// // // // // // // //         onError?.(error);
// // // // // // // //         return;
// // // // // // // //       }

// // // // // // // //       onSuccess?.();
// // // // // // // //     } catch (err) {
// // // // // // // //       const error = { server: 'Failed to connect to server' };
// // // // // // // //       setErrors(error);
// // // // // // // //       onError?.(error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="w-full max-w-md mx-auto p-6">
// // // // // // // //       <h1 className="text-2xl font-bold text-center mb-6">Log In</h1>
// // // // // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // //         <div>
// // // // // // // //           <label className="block text-gray-700 mb-2">
// // // // // // // //             Email
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               value={email}
// // // // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // // // //               required
// // // // // // // //               className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // //             />
// // // // // // // //           </label>
// // // // // // // //           {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
// // // // // // // //         </div>

// // // // // // // //         <div>
// // // // // // // //           <label className="block text-gray-700 mb-2">
// // // // // // // //             Password
// // // // // // // //             <input
// // // // // // // //               type="password"
// // // // // // // //               value={password}
// // // // // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // // // // //               required
// // // // // // // //               className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // //             />
// // // // // // // //           </label>
// // // // // // // //           {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
// // // // // // // //         </div>

// // // // // // // //         <button
// // // // // // // //           type="submit"
// // // // // // // //           className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
// // // // // // // //         >
// // // // // // // //           Log In
// // // // // // // //         </button>
// // // // // // // //       </form>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // import { useState } from 'react';
// // // // // // // import { Card, CardBody, CardHeader, Input, Button } from "@heroui/react";

// // // // // // // export default function LoginForm() {
// // // // // // //   const [email, setEmail] = useState("");
// // // // // // //   const [password, setPassword] = useState("");
// // // // // // //   const [errors, setErrors] = useState({});

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();

// // // // // // //     try {
// // // // // // //       const response = await fetch('/api/auth/login', {
// // // // // // //         method: 'POST',
// // // // // // //         headers: {
// // // // // // //           'Content-Type': 'application/json',
// // // // // // //         },
// // // // // // //         body: JSON.stringify({
// // // // // // //           email,
// // // // // // //           password,
// // // // // // //           csrf_token: document.cookie.split('csrf_token=')[1]
// // // // // // //         })
// // // // // // //       });

// // // // // // //       if (response.ok) {
// // // // // // //         const data = await response.json();
// // // // // // //         // Handle successful login - you might want to update app state here
// // // // // // //         window.location.reload(); // Simple reload to update auth state
// // // // // // //       } else {
// // // // // // //         const data = await response.json();
// // // // // // //         setErrors(data);
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       setErrors({ server: "An error occurred. Please try again." });
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <Card className="max-w-md mx-auto">
// // // // // // //       <CardHeader>
// // // // // // //         <h2 className="text-2xl font-bold">Login</h2>
// // // // // // //       </CardHeader>
// // // // // // //       <CardBody>
// // // // // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // //           <div>
// // // // // // //             <Input
// // // // // // //               type="email"
// // // // // // //               label="Email"
// // // // // // //               value={email}
// // // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // // //               errorMessage={errors.email}
// // // // // // //               isRequired
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //           <div>
// // // // // // //             <Input
// // // // // // //               type="password"
// // // // // // //               label="Password"
// // // // // // //               value={password}
// // // // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // // // //               errorMessage={errors.password}
// // // // // // //               isRequired
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //           {errors.server && (
// // // // // // //             <p className="text-danger text-sm">{errors.server}</p>
// // // // // // //           )}
// // // // // // //           <Button
// // // // // // //             type="submit"
// // // // // // //             color="primary"
// // // // // // //             className="w-full"
// // // // // // //           >
// // // // // // //             Login
// // // // // // //           </Button>
// // // // // // //         </form>
// // // // // // //       </CardBody>
// // // // // // //     </Card>
// // // // // // //   );
// // // // // // // }


// // // // // // import React, { useState } from 'react';
// // // // // // import { Card, CardBody, CardHeader, Input, Button } from "@heroui/react";
// // // // // // import { useAuth } from '@/components/context/AuthContext';

// // // // // // interface LoginErrors {
// // // // // //   email?: string;
// // // // // //   password?: string;
// // // // // //   server?: string;
// // // // // // }

// // // // // // export default function LoginForm() {
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [errors, setErrors] = useState<LoginErrors>({});
// // // // // //   const { setUser } = useAuth();

// // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // //     e.preventDefault();

// // // // // //     try {
// // // // // //       const response = await fetch('/api/auth/login', {
// // // // // //         method: 'POST',
// // // // // //         headers: {
// // // // // //           'Content-Type': 'application/json',
// // // // // //         },
// // // // // //         body: JSON.stringify({
// // // // // //           email,
// // // // // //           password,
// // // // // //           csrf_token: document.cookie.split('csrf_token=')[1]
// // // // // //         })
// // // // // //       });

// // // // // //       const data = await response.json();

// // // // // //       if (response.ok) {
// // // // // //         setUser(data);
// // // // // //         // Redirect or handle successful login
// // // // // //       } else {
// // // // // //         setErrors(data);
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       setErrors({ server: "An error occurred. Please try again." });
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <Card className="max-w-md mx-auto">
// // // // // //       <CardHeader>
// // // // // //         <h2 className="text-2xl font-bold">Login</h2>
// // // // // //       </CardHeader>
// // // // // //       <CardBody>
// // // // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // // // //           <div>
// // // // // //             <Input
// // // // // //               type="email"
// // // // // //               label="Email"
// // // // // //               value={email}
// // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // //               errorMessage={errors.email}
// // // // // //               isRequired
// // // // // //             />
// // // // // //           </div>
// // // // // //           <div>
// // // // // //             <Input
// // // // // //               type="password"
// // // // // //               label="Password"
// // // // // //               value={password}
// // // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // // //               errorMessage={errors.password}
// // // // // //               isRequired
// // // // // //             />
// // // // // //           </div>
// // // // // //           {errors.server && (
// // // // // //             <p className="text-danger text-sm">{errors.server}</p>
// // // // // //           )}
// // // // // //           <Button
// // // // // //             type="submit"
// // // // // //             color="primary"
// // // // // //             className="w-full"
// // // // // //           >
// // // // // //             Login
// // // // // //           </Button>
// // // // // //         </form>
// // // // // //       </CardBody>
// // // // // //     </Card>
// // // // // //   );
// // // // // // }

// // // // // // import React, { useState } from 'react';
// // // // // // import { Card, CardBody, CardHeader, Input, Button } from "@heroui/react";
// // // // // // import { useAuth } from '@/components/context/AuthContext';

// // // // // // interface LoginErrors {
// // // // // //   email?: string;
// // // // // //   password?: string;
// // // // // //   server?: string;
// // // // // // }

// // // // // // interface LoginFormProps {
// // // // // //   onSuccess?: () => void;
// // // // // //   onError?: (message?: any) => void;
// // // // // // }

// // // // // // export default function LoginForm({ onSuccess, onError }: LoginFormProps) {
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [errors, setErrors] = useState<LoginErrors>({});
// // // // // //   const { setUser } = useAuth();

// // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // //     e.preventDefault();

// // // // // //     try {
// // // // // //       const response = await fetch('/api/auth/login', {
// // // // // //         method: 'POST',
// // // // // //         headers: {
// // // // // //           'Content-Type': 'application/json',
// // // // // //         },
// // // // // //         body: JSON.stringify({
// // // // // //           email,
// // // // // //           password,
// // // // // //           csrf_token: document.cookie.split('csrf_token=')[1],
// // // // // //         }),
// // // // // //       });

// // // // // //       const data = await response.json();

// // // // // //       if (response.ok) {
// // // // // //         setUser(data);
// // // // // //         onSuccess?.(); // Call onSuccess if provided
// // // // // //       } else {
// // // // // //         setErrors(data);
// // // // // //         onError?.(data.server || "Login failed."); // Call onError if provided
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       setErrors({ server: "An error occurred. Please try again." });
// // // // // //       onError?.(error); // Call onError if provided
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <Card className="max-w-md mx-auto">
// // // // // //       <CardHeader>
// // // // // //         <h2 className="text-2xl font-bold">Login</h2>
// // // // // //       </CardHeader>
// // // // // //       <CardBody>
// // // // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // // // //           <div>
// // // // // //             <Input
// // // // // //               type="email"
// // // // // //               label="Email"
// // // // // //               value={email}
// // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // //               errorMessage={errors.email}
// // // // // //               isRequired
// // // // // //             />
// // // // // //           </div>
// // // // // //           <div>
// // // // // //             <Input
// // // // // //               type="password"
// // // // // //               label="Password"
// // // // // //               value={password}
// // // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // // //               errorMessage={errors.password}
// // // // // //               isRequired
// // // // // //             />
// // // // // //           </div>
// // // // // //           {errors.server && (
// // // // // //             <p className="text-danger text-sm">{errors.server}</p>
// // // // // //           )}
// // // // // //           <Button
// // // // // //             type="submit"
// // // // // //             color="primary"
// // // // // //             className="w-full"
// // // // // //           >
// // // // // //             Login
// // // // // //           </Button>
// // // // // //         </form>
// // // // // //       </CardBody>
// // // // // //     </Card>
// // // // // //   );
// // // // // // }


// // // // // // src/components/auth/LoginForm.tsx
// // // // // import React, { useState } from 'react';
// // // // // import { Card, CardBody, CardHeader, CardFooter, Button, Input } from '@heroui/react';
// // // // // import { Link } from '@heroui/link';
// // // // // import { useApp } from '@/components/context/AppContext';
// // // // // // import { useNavigate } from 'react-router-dom';

// // // // // export const LoginForm: React.FC = () => {
// // // // //   const [email, setEmail] = useState('');
// // // // //   const [password, setPassword] = useState('');
// // // // //   const [emailError, setEmailError] = useState('');
// // // // //   const [passwordError, setPasswordError] = useState('');

// // // // //   const { isLoading, error, login } = useApp();
// // // // //   // const navigate = useNavigate();

// // // // //   const validateForm = (): boolean => {
// // // // //     let isValid = true;

// // // // //     // Email validation
// // // // //     if (!email) {
// // // // //       setEmailError('Email is required');
// // // // //       isValid = false;
// // // // //     } else if (!/\S+@\S+\.\S+/.test(email)) {
// // // // //       setEmailError('Email is invalid');
// // // // //       isValid = false;
// // // // //     } else {
// // // // //       setEmailError('');
// // // // //     }

// // // // //     // Password validation
// // // // //     if (!password) {
// // // // //       setPasswordError('Password is required');
// // // // //       isValid = false;
// // // // //     } else {
// // // // //       setPasswordError('');
// // // // //     }

// // // // //     return isValid;
// // // // //   };

// // // // //   // const handleSubmit = async (e: React.FormEvent) => {
// // // // //   //   e.preventDefault();

// // // // //   //   if (validateForm()) {
// // // // //   //     try {
// // // // //   //       await login({ email, password });
// // // // //   //       // Redirect to home page after successful login
// // // // //   //       navigate('/portal');
// // // // //   //     } catch (error) {
// // // // //   //       console.error('Login error:', error);
// // // // //   //     }
// // // // //   //   }
// // // // //   // };

// // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // //     e.preventDefault();

// // // // //     if (validateForm()) {
// // // // //       try {
// // // // //         const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
// // // // //           method: 'POST',
// // // // //           headers: {
// // // // //             'Content-Type': 'application/json',
// // // // //           },
// // // // //           credentials: 'include',
// // // // //           body: JSON.stringify({ email, password })
// // // // //         });

// // // // //         if (!response.ok) {
// // // // //           throw new Error('Login failed');
// // // // //         }

// // // // //         // await response.json();

// // // // //         // Direct navigation after successful login
// // // // //         window.location.href = '/portal';
// // // // //       } catch (error) {
// // // // //         console.error('Login error:', error);

// // // // //       }
// // // // //     }
// // // // //   };



// // // // //   return (
// // // // //     <Card className="w-full max-w-md mx-auto">
// // // // //       <CardHeader className="flex flex-col items-center">
// // // // //         <h2 className="text-2xl font-bold">Login</h2>
// // // // //         <p className="text-default-600">Welcome back, please login to your account</p>
// // // // //       </CardHeader>

// // // // //       <CardBody>
// // // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // // //           <div>
// // // // //             <Input
// // // // //               fullWidth
// // // // //               label="Email"
// // // // //               placeholder="Enter your email"
// // // // //               type="email"
// // // // //               value={email}
// // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // //               errorMessage={emailError}
// // // // //               isInvalid={!!emailError}
// // // // //             />
// // // // //           </div>

// // // // //           <div>
// // // // //             <Input
// // // // //               fullWidth
// // // // //               label="Password"
// // // // //               placeholder="Enter your password"
// // // // //               type="password"
// // // // //               value={password}
// // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // //               errorMessage={passwordError}
// // // // //               isInvalid={!!passwordError}
// // // // //             />
// // // // //           </div>

// // // // //           {error && (
// // // // //             <div className="p-3 rounded-lg bg-danger-50 text-danger text-sm">
// // // // //               {error}
// // // // //             </div>
// // // // //           )}

// // // // //           <Button
// // // // //             type="submit"
// // // // //             color="primary"
// // // // //             fullWidth
// // // // //             isLoading={isLoading}
// // // // //             disabled={isLoading}
// // // // //           >
// // // // //             Login
// // // // //           </Button>
// // // // //         </form>
// // // // //       </CardBody>

// // // // //       <CardFooter className="flex justify-center">
// // // // //         <p className="text-sm text-default-600">
// // // // //           Don't have an account? <Link href="/signup">Sign up</Link>
// // // // //         </p>
// // // // //       </CardFooter>
// // // // //     </Card>
// // // // //   );
// // // // // };


// // // // import React, { useState, useEffect } from 'react';
// // // // import { Card, CardBody, CardHeader, CardFooter, Button, Input } from '@heroui/react';
// // // // import { Link } from '@heroui/link';
// // // // import { useApp } from '@/components/context/AppContext';
// // // // import { useNavigate, useLocation } from 'react-router-dom';
// // // // import { LoginFormData } from '@/types/user';

// // // // export const LoginForm: React.FC = () => {
// // // //   const [email, setEmail] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [emailError, setEmailError] = useState('');
// // // //   const [passwordError, setPasswordError] = useState('');
// // // //   const [formError, setFormError] = useState('');

// // // //   const { isLoading, error, login } = useApp();
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();

// // // //   // Check for any error messages passed via location state (from redirects)
// // // //   useEffect(() => {
// // // //     if (location.state && location.state.error) {
// // // //       setFormError(location.state.error);

// // // //       // Clear the error from location state to prevent it showing after refresh
// // // //       window.history.replaceState({}, document.title);
// // // //     }
// // // //   }, [location]);

// // // //   const validateForm = (): boolean => {
// // // //     let isValid = true;

// // // //     // Reset errors
// // // //     setEmailError('');
// // // //     setPasswordError('');
// // // //     setFormError('');

// // // //     // Email validation
// // // //     if (!email) {
// // // //       setEmailError('Email is required');
// // // //       isValid = false;
// // // //     } else if (!/\S+@\S+\.\S+/.test(email)) {
// // // //       setEmailError('Email is invalid');
// // // //       isValid = false;
// // // //     }

// // // //     // Password validation
// // // //     if (!password) {
// // // //       setPasswordError('Password is required');
// // // //       isValid = false;
// // // //     }

// // // //     return isValid;
// // // //   };

// // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // //     e.preventDefault();

// // // //     if (validateForm()) {
// // // //       try {
// // // //         const credentials: LoginFormData = { email, password };
// // // //         const user = await login(credentials);

// // // //         if (user) {
// // // //           navigate('/partner-portal');
// // // //         } else {
// // // //           // Show error in red box
// // // //           setFormError('Login failed. Please check your credentials and try again.');
// // // //         }
// // // //       } catch (err) {
// // // //         console.error('Login error:', err);
// // // //         setFormError('An unexpected error occurred. Please try again.');
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Card className="w-full max-w-md mx-auto">
// // // //       <CardHeader className="flex flex-col items-center">
// // // //         <h2 className="text-2xl font-bold">Login</h2>
// // // //         <p className="text-default-600">Sign in to your account</p>
// // // //       </CardHeader>

// // // //       <CardBody>
// // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // //           {/* Display form errors at the top */}
// // // //           {(formError || error) && (
// // // //             <div className="p-3 rounded-lg bg-danger-50 text-danger text-sm">
// // // //               {formError || error}
// // // //             </div>
// // // //           )}

// // // //           <div>
// // // //             <Input
// // // //               fullWidth
// // // //               label="Email"
// // // //               placeholder="Enter your email"
// // // //               type="email"
// // // //               value={email}
// // // //               onChange={(e) => setEmail(e.target.value)}
// // // //               errorMessage={emailError}
// // // //               isInvalid={!!emailError}
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <Input
// // // //               fullWidth
// // // //               label="Password"
// // // //               placeholder="Enter your password"
// // // //               type="password"
// // // //               value={password}
// // // //               onChange={(e) => setPassword(e.target.value)}
// // // //               errorMessage={passwordError}
// // // //               isInvalid={!!passwordError}
// // // //             />
// // // //           </div>

// // // //           <Button
// // // //             type="submit"
// // // //             color="primary"
// // // //             fullWidth
// // // //             isLoading={isLoading}
// // // //             disabled={isLoading}
// // // //           >
// // // //             Login
// // // //           </Button>
// // // //         </form>
// // // //       </CardBody>

// // // //       <CardFooter className="flex flex-col items-center space-y-2">
// // // //         <p className="text-sm text-default-600">
// // // //           Don't have an account? <Link href="/signup">Sign up</Link>
// // // //         </p>
// // // //         <Link href="/forgot-password" className="text-sm">
// // // //           Forgot password?
// // // //         </Link>
// // // //       </CardFooter>
// // // //     </Card>
// // // //   );
// // // // };


// // // import React, { useState, useEffect } from 'react';
// // // import { Card, CardBody, CardHeader, CardFooter, Button, Input } from '@heroui/react';
// // // import { Link } from '@heroui/link';
// // // import { useApp } from '@/components/context/AppContext';
// // // import { useNavigate, useLocation } from 'react-router-dom';
// // // import { LoginFormData } from '@/types/user';

// // // interface LocationState {
// // //   error?: string;
// // //   from?: string;
// // // }

// // // export const LoginForm: React.FC = () => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [emailError, setEmailError] = useState('');
// // //   const [passwordError, setPasswordError] = useState('');
// // //   const [formError, setFormError] = useState('');

// // //   const { isLoading, error, login } = useApp();
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   // Check for any error messages passed via location state (from redirects)
// // //   useEffect(() => {
// // //     const state = location.state as LocationState;
// // //     if (state?.error) {
// // //       setFormError(state.error);

// // //       // Clear the error from location state to prevent it showing after refresh
// // //       window.history.replaceState({}, document.title);
// // //     }
// // //   }, [location]);

// // //   const validateForm = (): boolean => {
// // //     let isValid = true;

// // //     // Reset errors
// // //     setEmailError('');
// // //     setPasswordError('');
// // //     setFormError('');

// // //     // Email validation
// // //     if (!email) {
// // //       setEmailError('Email is required');
// // //       isValid = false;
// // //     } else if (!/\S+@\S+\.\S+/.test(email)) {
// // //       setEmailError('Email is invalid');
// // //       isValid = false;
// // //     }

// // //     // Password validation
// // //     if (!password) {
// // //       setPasswordError('Password is required');
// // //       isValid = false;
// // //     }

// // //     return isValid;
// // //   };

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();

// // //     if (validateForm()) {
// // //       try {
// // //         const credentials: LoginFormData = { email, password };
// // //         const user = await login(credentials);

// // //         if (user) {
// // //           // Check if we're being redirected from somewhere
// // //           const state = location.state as LocationState;
// // //           navigate(state?.from || '/partner-portal');
// // //         } else {
// // //           // Show error in red box
// // //           setFormError('Login failed. Please check your credentials and try again.');
// // //         }
// // //       } catch (err) {
// // //         console.error('Login error:', err);
// // //         setFormError('An unexpected error occurred. Please try again.');
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-background flex flex-col">
// // //       <header className="w-full border-b border-divider">
// // //         <div className="container mx-auto flex justify-between items-center py-2">
// // //           <div className="flex items-center">
// // //             <a href="/" className="font-bold text-2xl text-primary">Behold Group</a>
// // //           </div>
// // //         </div>
// // //       </header>
// // //       <main className="flex-grow container mx-auto pt-12 px-6 flex items-center justify-center">
// // //         <Card className="w-full max-w-md mx-auto">
// // //           <CardHeader className="flex flex-col items-center">
// // //             <h2 className="text-2xl font-bold">Login</h2>
// // //             <p className="text-default-600">Sign in to your account</p>
// // //           </CardHeader>

// // //           <CardBody>
// // //             <form onSubmit={handleSubmit} className="space-y-4">
// // //               {/* Display form errors at the top */}
// // //               {(formError || error) && (
// // //                 <div className="p-3 rounded-lg bg-danger-50 text-danger text-sm">
// // //                   {formError || error}
// // //                 </div>
// // //               )}

// // //               <div>
// // //                 <Input
// // //                   fullWidth
// // //                   label="Email"
// // //                   placeholder="Enter your email"
// // //                   type="email"
// // //                   value={email}
// // //                   onChange={(e) => setEmail(e.target.value)}
// // //                   errorMessage={emailError}
// // //                   isInvalid={!!emailError}
// // //                 />
// // //               </div>

// // //               <div>
// // //                 <Input
// // //                   fullWidth
// // //                   label="Password"
// // //                   placeholder="Enter your password"
// // //                   type="password"
// // //                   value={password}
// // //                   onChange={(e) => setPassword(e.target.value)}
// // //                   errorMessage={passwordError}
// // //                   isInvalid={!!passwordError}
// // //                 />
// // //               </div>

// // //               <Button
// // //                 type="submit"
// // //                 color="primary"
// // //                 fullWidth
// // //                 isLoading={isLoading}
// // //                 disabled={isLoading}
// // //               >
// // //                 Login
// // //               </Button>
// // //             </form>
// // //           </CardBody>

// // //           <CardFooter className="flex flex-col items-center space-y-2">
// // //             <p className="text-sm text-default-600">
// // //               Don't have an account? <Link href="/signup">Sign up</Link>
// // //             </p>
// // //             <Link href="/forgot-password" className="text-sm">
// // //               Forgot password?
// // //             </Link>
// // //           </CardFooter>
// // //         </Card>
// // //       </main>
// // //     </div>
// // //   );
// // // };


// // import React, { useState, useEffect } from 'react';
// // import { Card, CardBody, CardHeader, CardFooter, Button, Input } from '@heroui/react';
// // import { Link } from '@heroui/link';
// // import { useApp } from '@/components/context/AppContext';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import { LoginFormData } from '@/types/user';

// // interface LocationState {
// //   error?: string;
// //   from?: string;
// // }

// // export const LoginForm: React.FC = () => {
// //   // Use a single form state object for better stability
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: ''
// //   });

// //   // Use a single errors object
// //   const [errors, setErrors] = useState({
// //     email: '',
// //     password: '',
// //     form: ''
// //   });

// //   const { isLoading, error: apiError, login } = useApp();
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   // Check for any error messages passed via location state (from redirects)
// //   useEffect(() => {
// //     const state = location.state as LocationState;
// //     if (state?.error) {
// //       setErrors(prev => ({
// //         ...prev,
// //         form: state.error || ''  // Ensure string type
// //       }));

// //       // Clear the error from location state to prevent it showing after refresh
// //       window.history.replaceState({}, document.title);
// //     }
// //   }, [location]);

// //   // Handle all input changes with a single handler
// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));

// //     // Clear field-specific error when user types
// //     if (errors[name as keyof typeof errors]) {
// //       setErrors(prev => ({
// //         ...prev,
// //         [name]: ''
// //       }));
// //     }
// //   };

// //   const validateForm = (): boolean => {
// //     const newErrors = {
// //       email: '',
// //       password: '',
// //       form: ''
// //     };

// //     let isValid = true;

// //     // Email validation
// //     if (!formData.email.trim()) {
// //       newErrors.email = 'Email is required';
// //       isValid = false;
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       newErrors.email = 'Email is invalid';
// //       isValid = false;
// //     }

// //     // Password validation
// //     if (!formData.password) {
// //       newErrors.password = 'Password is required';
// //       isValid = false;
// //     }

// //     setErrors(newErrors);
// //     return isValid;
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     console.log("Login form submitted");

// //     if (validateForm()) {
// //       try {
// //         const credentials: LoginFormData = {
// //           email: formData.email,
// //           password: formData.password
// //         };

// //         console.log("Attempting login with:", credentials.email);
// //         const user = await login(credentials);

// //         if (user) {
// //           console.log("Login successful, redirecting to portal");
// //           // Check if we're being redirected from somewhere
// //           const state = location.state as LocationState;
// //           navigate(state?.from || '/partner-portal');
// //         } else {
// //           console.log("Login failed, setting error");
// //           setErrors(prev => ({
// //             ...prev,
// //             form: 'Login failed. Please check your credentials and try again.'
// //           }));
// //         }
// //       } catch (err) {
// //         console.error('Login error:', err);
// //         setErrors(prev => ({
// //           ...prev,
// //           form: 'An unexpected error occurred. Please try again.'
// //         }));
// //       }
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-background flex flex-col">
// //       <header className="w-full border-b border-divider">
// //         <div className="container mx-auto flex justify-between items-center py-2">
// //           <div className="flex items-center">
// //             <a href="/" className="font-bold text-2xl text-primary">Behold Group</a>
// //           </div>
// //         </div>
// //       </header>
// //       <main className="flex-grow container mx-auto pt-12 px-6 flex items-center justify-center">
// //         <Card className="w-full max-w-md mx-auto">
// //           <CardHeader className="flex flex-col items-center">
// //             <h2 className="text-2xl font-bold">Login</h2>
// //             <p className="text-default-600">Sign in to your account</p>
// //           </CardHeader>

// //           <CardBody>
// //             <form onSubmit={handleSubmit} className="space-y-4">
// //               {/* Display form errors at the top */}
// //               {(errors.form || apiError) && (
// //                 <div className="p-3 rounded-lg bg-danger-50 text-danger text-sm">
// //                   {errors.form || apiError}
// //                 </div>
// //               )}

// //               <div>
// //                 <Input
// //                   fullWidth
// //                   name="email"
// //                   label="Email"
// //                   placeholder="Enter your email"
// //                   type="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   errorMessage={errors.email}
// //                   isInvalid={!!errors.email}
// //                 />
// //               </div>

// //               <div>
// //                 <Input
// //                   fullWidth
// //                   name="password"
// //                   label="Password"
// //                   placeholder="Enter your password"
// //                   type="password"
// //                   value={formData.password}
// //                   onChange={handleChange}
// //                   errorMessage={errors.password}
// //                   isInvalid={!!errors.password}
// //                 />
// //               </div>

// //               <Button
// //                 type="submit"
// //                 color="primary"
// //                 fullWidth
// //                 isLoading={isLoading}
// //                 disabled={isLoading}
// //               >
// //                 Login
// //               </Button>
// //             </form>
// //           </CardBody>

// //           <CardFooter className="flex flex-col items-center space-y-2">
// //             <p className="text-sm text-default-600">
// //               Don't have an account? <Link href="/signup">Sign up</Link>
// //             </p>
// //             <Link href="/forgot-password" className="text-sm">
// //               Forgot password?
// //             </Link>
// //           </CardFooter>
// //         </Card>
// //       </main>
// //     </div>
// //   );
// // };


// import React, { useState, useEffect } from 'react';
// import { Card, CardBody, CardHeader, CardFooter, Button, Input } from '@heroui/react';
// import { Link } from '@heroui/link';
// import { useApp } from '@/components/context/AppContext';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { LoginFormData } from '@/types/user';
// import { LoginFormState, LoginFormErrors } from '@/types/authforms';

// interface LocationState {
//   error?: string;
//   from?: string;
// }

// export const LoginForm: React.FC = () => {
//   // Use a single form state object for better stability with explicit type
//   const [formData, setFormData] = useState<LoginFormState>({
//     email: '',
//     password: ''
//   });

//   // Use a single errors object with explicit type
//   const [errors, setErrors] = useState<LoginFormErrors>({
//     email: '',
//     password: '',
//     form: ''
//   });

//   const { isLoading, error: apiError, login } = useApp();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Check for any error messages passed via location state (from redirects)
//   useEffect(() => {
//     const state = location.state as LocationState;
//     if (state?.error) {
//       setErrors(prev => ({
//         ...prev,
//         form: state.error || ''  // Ensure string type
//       }));

//       // Clear the error from location state to prevent it showing after refresh
//       window.history.replaceState({}, document.title);
//     }
//   }, [location]);

//   // Handle all input changes with a single handler
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // Clear field-specific error when user types
//     if (errors[name as keyof LoginFormErrors]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const validateForm = (): boolean => {
//     const newErrors: LoginFormErrors = {
//       email: '',
//       password: '',
//       form: ''
//     };

//     let isValid = true;

//     // Email validation
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//       isValid = false;
//     }

//     // Password validation
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Login form submitted");

//     if (validateForm()) {
//       try {
//         const credentials: LoginFormData = {
//           email: formData.email,
//           password: formData.password
//         };

//         console.log("Attempting login with:", credentials.email);
//         const user = await login(credentials);

//         if (user) {
//           console.log("Login successful, redirecting to portal");
//           // Check if we're being redirected from somewhere
//           const state = location.state as LocationState;
//           navigate(state?.from || '/partner-portal');
//         } else {
//           console.log("Login failed, setting error");
//           setErrors(prev => ({
//             ...prev,
//             form: 'Login failed. Please check your credentials and try again.'
//           }));
//         }
//       } catch (err) {
//         console.error('Login error:', err);
//         setErrors(prev => ({
//           ...prev,
//           form: 'An unexpected error occurred. Please try again.'
//         }));
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background flex flex-col">
//       <header className="w-full border-b border-divider">
//         <div className="container mx-auto flex justify-between items-center py-2">
//           <div className="flex items-center">
//             <a href="/" className="font-bold text-2xl text-primary">Behold Group</a>
//           </div>
//         </div>
//       </header>
//       <main className="flex-grow container mx-auto pt-12 px-6 flex items-center justify-center">
//         <Card className="w-full max-w-md mx-auto">
//           <CardHeader className="flex flex-col items-center">
//             <h2 className="text-2xl font-bold">Login</h2>
//             <p className="text-default-600">Sign in to your account</p>
//           </CardHeader>

//           <CardBody>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* Display form errors at the top */}
//               {(errors.form || apiError) && (
//                 <div className="p-3 rounded-lg bg-danger-50 text-danger text-sm">
//                   {errors.form || apiError}
//                 </div>
//               )}

//               <div>
//                 <Input
//                   fullWidth
//                   name="email"
//                   label="Email"
//                   placeholder="Enter your email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   errorMessage={errors.email}
//                   isInvalid={!!errors.email}
//                 />
//               </div>

//               <div>
//                 <Input
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   placeholder="Enter your password"
//                   type="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   errorMessage={errors.password}
//                   isInvalid={!!errors.password}
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 color="primary"
//                 fullWidth
//                 isLoading={isLoading}
//                 disabled={isLoading}
//               >
//                 Login
//               </Button>
//             </form>
//           </CardBody>

//           <CardFooter className="flex flex-col items-center space-y-2">
//             <p className="text-sm text-default-600">
//               Don't have an account? <Link href="/signup">Sign up</Link>
//             </p>
//             <Link href="/forgot-password" className="text-sm">
//               Forgot password?
//             </Link>
//           </CardFooter>
//         </Card>
//       </main>
//     </div>
//   );
// };
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
