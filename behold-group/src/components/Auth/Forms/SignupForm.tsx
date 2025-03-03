// // // // import React, { useState } from 'react';
// // // // import { Card, CardBody, CardHeader, CardFooter, Button, Input } from '@heroui/react';
// // // // import { Link } from '@heroui/link';
// // // // import { useApp } from '@/components/context/AppContext';
// // // // import { useNavigate } from 'react-router-dom';


// // // // export const SignupForm: React.FC = () => {
// // // //   const [username, setUsername] = useState('');
// // // //   const [email, setEmail] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [confirmPassword, setConfirmPassword] = useState('');

// // // //   const [usernameError, setUsernameError] = useState('');
// // // //   const [emailError, setEmailError] = useState('');
// // // //   const [passwordError, setPasswordError] = useState('');
// // // //   const [confirmPasswordError, setConfirmPasswordError] = useState('');

// // // //   const { isLoading, error, signup } = useApp();

// // // //   const navigate = useNavigate();


// // // //   const validateForm = (): boolean => {
// // // //     let isValid = true;

// // // //     // Username validation
// // // //     if (!username) {
// // // //       setUsernameError('Username is required');
// // // //       isValid = false;
// // // //     } else if (username.length < 3) {
// // // //       setUsernameError('Username must be at least 3 characters');
// // // //       isValid = false;
// // // //     } else {
// // // //       setUsernameError('');
// // // //     }

// // // //     // Email validation
// // // //     if (!email) {
// // // //       setEmailError('Email is required');
// // // //       isValid = false;
// // // //     } else if (!/\S+@\S+\.\S+/.test(email)) {
// // // //       setEmailError('Email is invalid');
// // // //       isValid = false;
// // // //     } else {
// // // //       setEmailError('');
// // // //     }

// // // //     // Password validation
// // // //     if (!password) {
// // // //       setPasswordError('Password is required');
// // // //       isValid = false;
// // // //     } else if (password.length < 6) {
// // // //       setPasswordError('Password must be at least 6 characters');
// // // //       isValid = false;
// // // //     } else {
// // // //       setPasswordError('');
// // // //     }

// // // //     // Confirm password validation
// // // //     if (password !== confirmPassword) {
// // // //       setConfirmPasswordError('Passwords do not match');
// // // //       isValid = false;
// // // //     } else {
// // // //       setConfirmPasswordError('');
// // // //     }

// // // //     return isValid;
// // // //   };

// // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // //     e.preventDefault();

// // // //     if (validateForm()) {
// // // //       try {
// // // //         await signup({ username, email, password });
// // // //         console.log('Signup successful, navigating to awaiting approval page');
// // // //         navigate('/awaiting-approval');

// // // //       } catch (error) {
// // // //         console.error('Signup error:', error);
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Card className="w-full max-w-md mx-auto">
// // // //       <CardHeader className="flex flex-col items-center">
// // // //         <h2 className="text-2xl font-bold">Create Account</h2>
// // // //         <p className="text-default-600">Sign up for a new account</p>
// // // //       </CardHeader>

// // // //       <CardBody>
// // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // //           <div>
// // // //             <Input
// // // //               fullWidth
// // // //               label="Username"
// // // //               placeholder="Enter your username"
// // // //               value={username}
// // // //               onChange={(e) => setUsername(e.target.value)}
// // // //               errorMessage={usernameError}
// // // //               isInvalid={!!usernameError}
// // // //             />
// // // //           </div>

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

// // // //           <div>
// // // //             <Input
// // // //               fullWidth
// // // //               label="Confirm Password"
// // // //               placeholder="Confirm your password"
// // // //               type="password"
// // // //               value={confirmPassword}
// // // //               onChange={(e) => setConfirmPassword(e.target.value)}
// // // //               errorMessage={confirmPasswordError}
// // // //               isInvalid={!!confirmPasswordError}
// // // //             />
// // // //           </div>

// // // //           {error && (
// // // //             <div className="p-3 rounded-lg bg-danger-50 text-danger text-sm">
// // // //               {error}
// // // //             </div>
// // // //           )}

// // // //           <Button
// // // //             type="submit"
// // // //             color="primary"
// // // //             fullWidth
// // // //             isLoading={isLoading}
// // // //             disabled={isLoading}
// // // //           >
// // // //             Sign Up
// // // //           </Button>
// // // //         </form>
// // // //       </CardBody>

// // // //       <CardFooter className="flex justify-center">
// // // //         <p className="text-sm text-default-600">
// // // //           Already have an account? <Link href="/login">Login</Link>
// // // //         </p>
// // // //       </CardFooter>
// // // //     </Card>
// // // //   );
// // // // };


// // // import React, { useState } from 'react';
// // // import { Card, CardBody, CardHeader, CardFooter, Button, Input } from '@heroui/react';
// // // import { Link } from '@heroui/link';
// // // import { useApp } from '@/components/context/AppContext';
// // // import { useNavigate } from 'react-router-dom';


// // // export const SignupForm: React.FC = () => {
// // //   const [username, setUsername] = useState('');
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [confirmPassword, setConfirmPassword] = useState('');
// // //   const [firstName, setFirstName] = useState('');
// // //   const [lastName, setLastName] = useState('');
// // //   const [companyName, setCompanyName] = useState('');

// // //   const [usernameError, setUsernameError] = useState('');
// // //   const [emailError, setEmailError] = useState('');
// // //   const [passwordError, setPasswordError] = useState('');
// // //   const [confirmPasswordError, setConfirmPasswordError] = useState('');
// // //   const [firstNameError, setFirstNameError] = useState('');
// // //   const [lastNameError, setLastNameError] = useState('');

// // //   const { isLoading, error, signup } = useApp();

// // //   const navigate = useNavigate();


// // //   const validateForm = (): boolean => {
// // //     let isValid = true;

// // //     // Username validation
// // //     if (!username) {
// // //       setUsernameError('Username is required');
// // //       isValid = false;
// // //     } else if (username.length < 3) {
// // //       setUsernameError('Username must be at least 3 characters');
// // //       isValid = false;
// // //     } else {
// // //       setUsernameError('');
// // //     }

// // //     // Email validation
// // //     if (!email) {
// // //       setEmailError('Email is required');
// // //       isValid = false;
// // //     } else if (!/\S+@\S+\.\S+/.test(email)) {
// // //       setEmailError('Email is invalid');
// // //       isValid = false;
// // //     } else {
// // //       setEmailError('');
// // //     }

// // //     // Password validation
// // //     if (!password) {
// // //       setPasswordError('Password is required');
// // //       isValid = false;
// // //     } else if (password.length < 6) {
// // //       setPasswordError('Password must be at least 6 characters');
// // //       isValid = false;
// // //     } else {
// // //       setPasswordError('');
// // //     }

// // //     // Confirm password validation
// // //     if (password !== confirmPassword) {
// // //       setConfirmPasswordError('Passwords do not match');
// // //       isValid = false;
// // //     } else {
// // //       setConfirmPasswordError('');
// // //     }

// // //     // First name validation
// // //     if (!firstName) {
// // //       setFirstNameError('First name is required');
// // //       isValid = false;
// // //     } else {
// // //       setFirstNameError('');
// // //     }

// // //     // Last name validation
// // //     if (!lastName) {
// // //       setLastNameError('Last name is required');
// // //       isValid = false;
// // //     } else {
// // //       setLastNameError('');
// // //     }

// // //     return isValid;
// // //   };

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();

// // //     if (validateForm()) {
// // //       try {
// // //         await signup({
// // //           username,
// // //           email,
// // //           password,
// // //           firstName,
// // //           lastName,
// // //           companyName
// // //         });
// // //         console.log('Signup successful, navigating to awaiting approval page');
// // //         navigate('/awaiting-approval');

// // //       } catch (error) {
// // //         console.error('Signup error:', error);
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <Card className="w-full max-w-md mx-auto">
// // //       <CardHeader className="flex flex-col items-center">
// // //         <h2 className="text-2xl font-bold">Create Account</h2>
// // //         <p className="text-default-600">Sign up for a new account</p>
// // //       </CardHeader>

// // //       <CardBody>
// // //         <form onSubmit={handleSubmit} className="space-y-4">
// // //           <div className="grid grid-cols-2 gap-4">
// // //             <div>
// // //               <Input
// // //                 fullWidth
// // //                 label="First Name"
// // //                 placeholder="Enter your first name"
// // //                 value={firstName}
// // //                 onChange={(e) => setFirstName(e.target.value)}
// // //                 errorMessage={firstNameError}
// // //                 isInvalid={!!firstNameError}
// // //               />
// // //             </div>
// // //             <div>
// // //               <Input
// // //                 fullWidth
// // //                 label="Last Name"
// // //                 placeholder="Enter your last name"
// // //                 value={lastName}
// // //                 onChange={(e) => setLastName(e.target.value)}
// // //                 errorMessage={lastNameError}
// // //                 isInvalid={!!lastNameError}
// // //               />
// // //             </div>
// // //           </div>

// // //           <div>
// // //             <Input
// // //               fullWidth
// // //               label="Username"
// // //               placeholder="Enter your username"
// // //               value={username}
// // //               onChange={(e) => setUsername(e.target.value)}
// // //               errorMessage={usernameError}
// // //               isInvalid={!!usernameError}
// // //             />
// // //           </div>

// // //           <div>
// // //             <Input
// // //               fullWidth
// // //               label="Email"
// // //               placeholder="Enter your email"
// // //               type="email"
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //               errorMessage={emailError}
// // //               isInvalid={!!emailError}
// // //             />
// // //           </div>

// // //           <div>
// // //             <Input
// // //               fullWidth
// // //               label="Company Name"
// // //               placeholder="Enter your company name (optional)"
// // //               value={companyName}
// // //               onChange={(e) => setCompanyName(e.target.value)}
// // //             />
// // //           </div>

// // //           <div>
// // //             <Input
// // //               fullWidth
// // //               label="Password"
// // //               placeholder="Enter your password"
// // //               type="password"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               errorMessage={passwordError}
// // //               isInvalid={!!passwordError}
// // //             />
// // //           </div>

// // //           <div>
// // //             <Input
// // //               fullWidth
// // //               label="Confirm Password"
// // //               placeholder="Confirm your password"
// // //               type="password"
// // //               value={confirmPassword}
// // //               onChange={(e) => setConfirmPassword(e.target.value)}
// // //               errorMessage={confirmPasswordError}
// // //               isInvalid={!!confirmPasswordError}
// // //             />
// // //           </div>

// // //           {error && (
// // //             <div className="p-3 rounded-lg bg-danger-50 text-danger text-sm">
// // //               {error}
// // //             </div>
// // //           )}

// // //           <Button
// // //             type="submit"
// // //             color="primary"
// // //             fullWidth
// // //             isLoading={isLoading}
// // //             disabled={isLoading}
// // //           >
// // //             Sign Up
// // //           </Button>
// // //         </form>
// // //       </CardBody>

// // //       <CardFooter className="flex justify-center">
// // //         <p className="text-sm text-default-600">
// // //           Already have an account? <Link href="/login">Login</Link>
// // //         </p>
// // //       </CardFooter>
// // //     </Card>
// // //   );
// // // };


// // import React, { useState } from 'react';
// // import { Card, CardBody, CardHeader, CardFooter, Button, Input } from '@heroui/react';
// // import { Link } from '@heroui/link';
// // import { useApp } from '@/components/context/AppContext';
// // import { useNavigate } from 'react-router-dom';
// // import { SignupFormData } from '@/types/user';

// // export const SignupForm: React.FC = () => {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [firstName, setFirstName] = useState('');
// //   const [lastName, setLastName] = useState('');
// //   const [companyName, setCompanyName] = useState('');

// //   const [usernameError, setUsernameError] = useState('');
// //   const [emailError, setEmailError] = useState('');
// //   const [passwordError, setPasswordError] = useState('');
// //   const [confirmPasswordError, setConfirmPasswordError] = useState('');
// //   const [firstNameError, setFirstNameError] = useState('');
// //   const [lastNameError, setLastNameError] = useState('');

// //   const { isLoading, error, signup } = useApp();

// //   const navigate = useNavigate();


// //   const validateForm = (): boolean => {
// //     let isValid = true;

// //     // Username validation
// //     if (!username) {
// //       setUsernameError('Username is required');
// //       isValid = false;
// //     } else if (username.length < 3) {
// //       setUsernameError('Username must be at least 3 characters');
// //       isValid = false;
// //     } else {
// //       setUsernameError('');
// //     }

// //     // Email validation
// //     if (!email) {
// //       setEmailError('Email is required');
// //       isValid = false;
// //     } else if (!/\S+@\S+\.\S+/.test(email)) {
// //       setEmailError('Email is invalid');
// //       isValid = false;
// //     } else {
// //       setEmailError('');
// //     }

// //     // Password validation
// //     if (!password) {
// //       setPasswordError('Password is required');
// //       isValid = false;
// //     } else if (password.length < 6) {
// //       setPasswordError('Password must be at least 6 characters');
// //       isValid = false;
// //     } else {
// //       setPasswordError('');
// //     }

// //     // Confirm password validation
// //     if (password !== confirmPassword) {
// //       setConfirmPasswordError('Passwords do not match');
// //       isValid = false;
// //     } else {
// //       setConfirmPasswordError('');
// //     }

// //     // First name validation
// //     if (!firstName) {
// //       setFirstNameError('First name is required');
// //       isValid = false;
// //     } else {
// //       setFirstNameError('');
// //     }

// //     // Last name validation
// //     if (!lastName) {
// //       setLastNameError('Last name is required');
// //       isValid = false;
// //     } else {
// //       setLastNameError('');
// //     }

// //     return isValid;
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     if (validateForm()) {
// //       try {
// //         const userData: SignupFormData = {
// //           username,
// //           email,
// //           password,
// //           firstName,
// //           lastName,
// //           companyName
// //         };

// //         await signup(userData);
// //         console.log('Signup successful, navigating to awaiting approval page');
// //         navigate('/awaiting-approval');

// //       } catch (error) {
// //         console.error('Signup error:', error);
// //       }
// //     }
// //   };

// //   return (
// //     <Card className="w-full max-w-md mx-auto">
// //       <CardHeader className="flex flex-col items-center">
// //         <h2 className="text-2xl font-bold">Create Account</h2>
// //         <p className="text-default-600">Sign up for a new account</p>
// //       </CardHeader>

// //       <CardBody>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div className="grid grid-cols-2 gap-4">
// //             <div>
// //               <Input
// //                 fullWidth
// //                 label="First Name"
// //                 placeholder="Enter your first name"
// //                 value={firstName}
// //                 onChange={(e) => setFirstName(e.target.value)}
// //                 errorMessage={firstNameError}
// //                 isInvalid={!!firstNameError}
// //               />
// //             </div>
// //             <div>
// //               <Input
// //                 fullWidth
// //                 label="Last Name"
// //                 placeholder="Enter your last name"
// //                 value={lastName}
// //                 onChange={(e) => setLastName(e.target.value)}
// //                 errorMessage={lastNameError}
// //                 isInvalid={!!lastNameError}
// //               />
// //             </div>
// //           </div>

// //           <div>
// //             <Input
// //               fullWidth
// //               label="Username"
// //               placeholder="Enter your username"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               errorMessage={usernameError}
// //               isInvalid={!!usernameError}
// //             />
// //           </div>

// //           <div>
// //             <Input
// //               fullWidth
// //               label="Email"
// //               placeholder="Enter your email"
// //               type="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               errorMessage={emailError}
// //               isInvalid={!!emailError}
// //             />
// //           </div>

// //           <div>
// //             <Input
// //               fullWidth
// //               label="Company Name"
// //               placeholder="Enter your company name (optional)"
// //               value={companyName}
// //               onChange={(e) => setCompanyName(e.target.value)}
// //             />
// //           </div>

// //           <div>
// //             <Input
// //               fullWidth
// //               label="Password"
// //               placeholder="Enter your password"
// //               type="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               errorMessage={passwordError}
// //               isInvalid={!!passwordError}
// //             />
// //           </div>

// //           <div>
// //             <Input
// //               fullWidth
// //               label="Confirm Password"
// //               placeholder="Confirm your password"
// //               type="password"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               errorMessage={confirmPasswordError}
// //               isInvalid={!!confirmPasswordError}
// //             />
// //           </div>

// //           {error && (
// //             <div className="p-3 rounded-lg bg-danger-50 text-danger text-sm">
// //               {error}
// //             </div>
// //           )}

// //           <Button
// //             type="submit"
// //             color="primary"
// //             fullWidth
// //             isLoading={isLoading}
// //             disabled={isLoading}
// //           >
// //             Sign Up
// //           </Button>
// //         </form>
// //       </CardBody>

// //       <CardFooter className="flex justify-center">
// //         <p className="text-sm text-default-600">
// //           Already have an account? <Link href="/login">Login</Link>
// //         </p>
// //       </CardFooter>
// //     </Card>
// //   );
// // };


// import React, { useState } from 'react';
// import { Card, CardBody, CardHeader, CardFooter, Button, Input } from '@heroui/react';
// import { Link } from '@heroui/link';
// import { useApp } from '@/components/context/AppContext';
// import { useNavigate } from 'react-router-dom';
// import { SignupFormData } from '@/types/user';

// export const SignupForm: React.FC = () => {
//   // Use a single form state object to prevent erratic behavior
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     firstName: '',
//     lastName: '',
//     companyName: ''
//   });

//   // Use a single error state object
//   const [errors, setErrors] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     firstName: '',
//     lastName: '',
//     form: ''
//   });

//   const { isLoading, error, signup } = useApp();
//   const navigate = useNavigate();

//   // Single handler for all form fields
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // Clear field-specific error when typing
//     if (errors[name as keyof typeof errors]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const validateForm = (): boolean => {
//     const newErrors = {
//       username: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       firstName: '',
//       lastName: '',
//       form: ''
//     };

//     let isValid = true;

//     // First name validation
//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First name is required';
//       isValid = false;
//     }

//     // Last name validation
//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last name is required';
//       isValid = false;
//     }

//     // Username validation
//     if (!formData.username.trim()) {
//       newErrors.username = 'Username is required';
//       isValid = false;
//     } else if (formData.username.length < 3) {
//       newErrors.username = 'Username must be at least 3 characters';
//       isValid = false;
//     }

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
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//       isValid = false;
//     }

//     // Confirm password validation
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Signup form submitted");

//     if (validateForm()) {
//       try {
//         console.log("Form is valid, attempting signup");
//         const userData: SignupFormData = {
//           username: formData.username,
//           email: formData.email,
//           password: formData.password,
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           companyName: formData.companyName
//         };

//         const result = await signup(userData);
//         if (result) {
//           console.log('Signup successful, navigating to partner portal');
//           navigate('/partner-portal');
//         } else {
//           setErrors(prev => ({
//             ...prev,
//             form: 'Signup failed. Please try again.'
//           }));
//         }
//       } catch (error) {
//         console.error('Signup error:', error);
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
//             <h2 className="text-2xl font-bold">Create Account</h2>
//             <p className="text-default-600">Sign up for a new account</p>
//           </CardHeader>

//           <CardBody>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* Form error message */}
//               {(errors.form || error) && (
//                 <div className="p-3 rounded-lg bg-danger-50 text-danger text-sm">
//                   {errors.form || error}
//                 </div>
//               )}

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Input
//                     fullWidth
//                     name="firstName"
//                     label="First Name"
//                     placeholder="Enter your first name"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     errorMessage={errors.firstName}
//                     isInvalid={!!errors.firstName}
//                   />
//                 </div>
//                 <div>
//                   <Input
//                     fullWidth
//                     name="lastName"
//                     label="Last Name"
//                     placeholder="Enter your last name"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     errorMessage={errors.lastName}
//                     isInvalid={!!errors.lastName}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <Input
//                   fullWidth
//                   name="username"
//                   label="Username"
//                   placeholder="Enter your username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   errorMessage={errors.username}
//                   isInvalid={!!errors.username}
//                 />
//               </div>

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
//                   name="companyName"
//                   label="Company Name"
//                   placeholder="Enter your company name (optional)"
//                   value={formData.companyName}
//                   onChange={handleChange}
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

//               <div>
//                 <Input
//                   fullWidth
//                   name="confirmPassword"
//                   label="Confirm Password"
//                   placeholder="Confirm your password"
//                   type="password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   errorMessage={errors.confirmPassword}
//                   isInvalid={!!errors.confirmPassword}
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 color="primary"
//                 fullWidth
//                 isLoading={isLoading}
//                 disabled={isLoading}
//               >
//                 Sign Up
//               </Button>
//             </form>
//           </CardBody>

//           <CardFooter className="flex justify-center">
//             <p className="text-sm text-default-600">
//               Already have an account? <Link href="/login">Login</Link>
//             </p>
//           </CardFooter>
//         </Card>
//       </main>
//     </div>
//   );
// };


import React, { useState } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Button, Input } from '@heroui/react';
import { Link } from '@heroui/link';
import { useApp } from '@/components/context/AppContext';
import { useNavigate } from 'react-router-dom';
import { SignupFormData } from '@/types/user';
import { SignupFormState, SignupFormErrors } from '@/types/authforms';

export const SignupForm: React.FC = () => {
  // Use a single form state object to prevent erratic behavior
  const [formData, setFormData] = useState<SignupFormState>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    companyName: ''
  });

  // Use a single error state object
  const [errors, setErrors] = useState<SignupFormErrors>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    form: ''
  });

  const { isLoading, error, signup } = useApp();
  const navigate = useNavigate();

  // Single handler for all form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear field-specific error when typing
    if (errors[name as keyof SignupFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: SignupFormErrors = {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup form submitted");

    if (validateForm()) {
      try {
        console.log("Form is valid, attempting signup");
        const userData: SignupFormData = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyName: formData.companyName
        };

        const result = await signup(userData);
        if (result) {
          console.log('Signup successful, navigating to partner portal');
          navigate('/partner-portal');
        } else {
          setErrors(prev => ({
            ...prev,
            form: 'Signup failed. Please try again.'
          }));
        }
      } catch (error) {
        console.error('Signup error:', error);
        setErrors(prev => ({
          ...prev,
          form: 'An unexpected error occurred. Please try again.'
        }));
      }
    }
  };

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
            <h2 className="text-2xl font-bold">Create Account</h2>
            <p className="text-default-600">Sign up for a new account</p>
          </CardHeader>

          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form error message */}
              {(errors.form || error) && (
                <div className="p-3 rounded-lg bg-danger-50 text-danger text-sm">
                  {errors.form || error}
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    fullWidth
                    name="firstName"
                    label="First Name"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    errorMessage={errors.firstName}
                    isInvalid={!!errors.firstName}
                  />
                </div>
                <div>
                  <Input
                    fullWidth
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    errorMessage={errors.lastName}
                    isInvalid={!!errors.lastName}
                  />
                </div>
              </div>

              <div>
                <Input
                  fullWidth
                  name="username"
                  label="Username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  errorMessage={errors.username}
                  isInvalid={!!errors.username}
                />
              </div>

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
                  name="companyName"
                  label="Company Name"
                  placeholder="Enter your company name (optional)"
                  value={formData.companyName}
                  onChange={handleChange}
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

              <div>
                <Input
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  errorMessage={errors.confirmPassword}
                  isInvalid={!!errors.confirmPassword}
                />
              </div>

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
      </main>
    </div>
  );
};
