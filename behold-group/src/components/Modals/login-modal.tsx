// // // // // import {
// // // // //     Modal,
// // // // //     ModalContent,
// // // // //     ModalHeader,
// // // // //     ModalBody,
// // // // //     ModalFooter,
// // // // //     Button,
// // // // //     useDisclosure,
// // // // //     Checkbox,
// // // // //     Input,
// // // // //     Link,
// // // // //   } from "@heroui/react";

// // // // //   import { Mail, Lock } from "lucide-react";

// // // // // import SignupModal from "./signup-modal";


// // // // // interface LoginModalProps {
// // // // //   isOpen: boolean;
// // // // //   onOpenChange: (isOpen: boolean) => void;
// // // // // }

// // // // // const { isOpen, onOpen, onOpenChange } = useDisclosure();
// // // // // export default function LoginModal({ isOpen, onOpenChange }: LoginModalProps) {
// // // // //   return (
// // // // //     <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
// // // // //       <ModalContent>
// // // // //         {(onClose) => (
// // // // //           <>
// // // // //             <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
// // // // //             <ModalBody>
// // // // //               <Input
// // // // //                 endContent={<Mail className="text-2xl text-default-400" />}
// // // // //                 label="Email"
// // // // //                 placeholder="Enter your email"
// // // // //                 variant="bordered"
// // // // //               />
// // // // //               <Input
// // // // //                 endContent={<Lock className="text-2xl text-default-400" />}
// // // // //                 label="Password"
// // // // //                 placeholder="Enter your password"
// // // // //                 type="password"
// // // // //                 variant="bordered"
// // // // //               />
// // // // //               <div className="flex py-2 px-1 justify-between">
// // // // //                 <Checkbox classNames={{ label: "text-small" }}>Remember me</Checkbox>
// // // // //                 <Link color="primary" onPress={onOpen}>Sign Up</Link>
// // // // //                 <SignupModal isOpen={isOpen} onOpenChange={onOpenChange} />
// // // // //                 <Link color="primary" href="#" size="sm">
// // // // //                   Forgot password?
// // // // //                 </Link>
// // // // //               </div>
// // // // //               <div className="hidden lg:flex">
// // // // //               <Link color="primary" onPress={onOpen}>Sign Up</Link>
// // // // //               <SignupModal isOpen={isOpen} onOpenChange={onOpenChange} />
// // // // //         </div>
// // // // //             </ModalBody>
// // // // //             <ModalFooter>
// // // // //               <Button color="danger" variant="flat" onPress={onClose}>
// // // // //                 Close
// // // // //               </Button>
// // // // //               <Button color="primary" onPress={onClose}>
// // // // //                 Sign in
// // // // //               </Button>
// // // // //             </ModalFooter>
// // // // //           </>
// // // // //         )}
// // // // //       </ModalContent>
// // // // //     </Modal>
// // // // //   );
// // // // // }


// // // // import {
// // // //   Modal,
// // // //   ModalContent,
// // // //   ModalHeader,
// // // //   ModalBody,
// // // //   ModalFooter,
// // // //   Button,
// // // //   useDisclosure,
// // // //   Checkbox,
// // // //   Input,
// // // //   Link,
// // // // } from "@heroui/react";

// // // // import { Mail, Lock } from "lucide-react";

// // // // import SignupModal from "./signup-modal";

// // // // export default function LoginModal() {
// // // //   const { isOpen, onOpen, onOpenChange } = useDisclosure(); // This manages the modal state

// // // //   return (
// // // //     <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
// // // //       <ModalContent>
// // // //         {(onClose) => (
// // // //           <>
// // // //             <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
// // // //             <ModalBody>
// // // //               <Input
// // // //                 endContent={<Mail className="text-2xl text-default-400" />}
// // // //                 label="Email"
// // // //                 placeholder="Enter your email"
// // // //                 variant="bordered"
// // // //               />
// // // //               <Input
// // // //                 endContent={<Lock className="text-2xl text-default-400" />}
// // // //                 label="Password"
// // // //                 placeholder="Enter your password"
// // // //                 type="password"
// // // //                 variant="bordered"
// // // //               />
// // // //               <div className="flex py-2 px-1 justify-between">
// // // //                 <Checkbox classNames={{ label: "text-small" }}>Remember me</Checkbox>
// // // //                 <Link color="primary" onPress={onOpen}>Sign Up</Link>
// // // //                 <SignupModal isOpen={isOpen} onOpenChange={onOpenChange} />
// // // //                 <Link color="primary" href="#" size="sm">
// // // //                   Forgot password?
// // // //                 </Link>
// // // //               </div>
// // // //               <div className="hidden lg:flex">
// // // //                 <Link color="primary" onPress={onOpen}>Sign Up</Link>
// // // //                 <SignupModal isOpen={isOpen} onOpenChange={onOpenChange} />
// // // //               </div>
// // // //             </ModalBody>
// // // //             <ModalFooter>
// // // //               <Button color="danger" variant="flat" onPress={onClose}>
// // // //                 Close
// // // //               </Button>
// // // //               <Button color="primary" onPress={onClose}>
// // // //                 Sign in
// // // //               </Button>
// // // //             </ModalFooter>
// // // //           </>
// // // //         )}
// // // //       </ModalContent>
// // // //     </Modal>
// // // //   );
// // // // }


// // // import {
// // //   Modal,
// // //   ModalContent,
// // //   ModalHeader,
// // //   ModalBody,
// // //   ModalFooter,
// // //   Button,
// // //   Checkbox,
// // //   Input,
// // //   Link,
// // // } from "@heroui/react";
// // // import { Mail, Lock } from "lucide-react";


// // // interface LoginModalProps {
// // //   isOpen: boolean;
// // //   onOpenChange: () => void;
// // // }

// // // export default function LoginModal({ isOpen, onOpenChange }: LoginModalProps) {


// // //   return (
// // //     <>
// // //       {/* Login Modal */}
// // //       <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
// // //         <ModalContent>
// // //           {(onClose) => (
// // //             <>
// // //               <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
// // //               <ModalBody>
// // //                 <Input
// // //                   endContent={<Mail className="text-2xl text-default-400" />}
// // //                   label="Email"
// // //                   placeholder="Enter your email"
// // //                   variant="bordered"
// // //                 />
// // //                 <Input
// // //                   endContent={<Lock className="text-2xl text-default-400" />}
// // //                   label="Password"
// // //                   placeholder="Enter your password"
// // //                   type="password"
// // //                   variant="bordered"
// // //                 />
// // //                 <div className="flex py-2 px-1 justify-between">
// // //                   <Checkbox classNames={{ label: "text-small" }}>
// // //                     Remember me
// // //                   </Checkbox>
// // //                   <Link color="primary" href="#">
// // //                     Forgot password?
// // //                   </Link>
// // //                 </div>
// // //                 <div className="flex justify-center mt-2">
// // //                   <span className="text-sm">Don't have an account?</span>
// // //                   <Link color="primary" href="/contact" className="ml-1">
// // //                     Contact Us
// // //                   </Link>
// // //                 </div>
// // //               </ModalBody>
// // //               <ModalFooter>
// // //                 {/* <Button color="danger" variant="flat" onPress={onClose}>
// // //                   Close
// // //                 </Button> */}
// // // <Button
// // //   color="primary"
// // //   onPress={() => {
// // //     window.location.href = "/portal";
// // //     if (onClose) onClose();
// // //   }}
// // // >
// // //                   Sign in
// // //                 </Button>
// // //               </ModalFooter>
// // //             </>
// // //           )}
// // //         </ModalContent>
// // //       </Modal>

// // //       {/* Signup Modal (Opens when Sign Up is clicked) */}
// // //       {/* <SignupModal isOpen={isSignupOpen} onOpenChange={onSignupOpenChange} /> */}
// // //     </>
// // //   );
// // // }


// // import React from 'react';
// // import {
// //   Modal,
// //   ModalContent,
// //   ModalHeader,
// //   ModalBody,
// //   Button,
// //   Input,
// // } from "@heroui/react";
// // import { useAuth } from '../context/AuthContext';

// // interface LoginModalProps {
// //   isOpen: boolean;
// //   onOpenChange: () => void;
// // }

// // export default function LoginModal({ isOpen, onOpenChange }: LoginModalProps) {
// //   const [email, setEmail] = React.useState("");
// //   const [password, setPassword] = React.useState("");
// //   const [errors, setErrors] = React.useState<{email?: string; password?: string; server?: string}>({});
// //   const { setUser } = useAuth();

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch('/api/auth/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           email,
// //           password,
// //           csrf_token: document.cookie.split('csrf_token=')[1]
// //         })
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         setUser(data);
// //         onOpenChange(); // Close modal on success
// //       } else {
// //         setErrors(data);
// //       }
// //     } catch (error) {
// //       setErrors({ server: "An error occurred. Please try again." });
// //     }
// //   };

// //   return (
// //     <Modal
// //       isOpen={isOpen}
// //       onOpenChange={onOpenChange}
// //       placement="center"
// //       size="md"
// //     >
// //       <ModalContent>
// //         <ModalHeader className="flex flex-col gap-1">Partner Portal Login</ModalHeader>
// //         <ModalBody>
// //           <form onSubmit={handleSubmit} className="space-y-4 pb-6">
// //             <Input
// //               autoFocus
// //               label="Email"
// //               placeholder="Enter your email"
// //               variant="bordered"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               errorMessage={errors.email}
// //               isRequired
// //             />
// //             <Input
// //               label="Password"
// //               placeholder="Enter your password"
// //               type="password"
// //               variant="bordered"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               errorMessage={errors.password}
// //               isRequired
// //             />
// //             {errors.server && (
// //               <p className="text-danger text-sm">{errors.server}</p>
// //             )}
// //             <div className="flex gap-2 justify-end mt-4">
// //               <Button color="danger" variant="light" onPress={onOpenChange}>
// //                 Close
// //               </Button>
// //               <Button color="primary" type="submit">
// //                 Sign In
// //               </Button>
// //             </div>
// //           </form>
// //         </ModalBody>
// //       </ModalContent>
// //     </Modal>
// //   );
// // }


// import React from 'react';
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   Button,
//   Input,
//   Link,
//   useDisclosure
// } from "@heroui/react";
// import { useAuth } from '../context/AuthContext';
// import SignupModal from './signup-modal';

// interface LoginModalProps {
//   isOpen: boolean;
//   onOpenChange: () => void;
// }

// export default function LoginModal({ isOpen, onOpenChange }: LoginModalProps) {
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [errors, setErrors] = React.useState<{email?: string; password?: string; server?: string}>({});
//   const { setUser } = useAuth();

//   // For signup modal
//   const {
//     isOpen: isSignupOpen,
//     onOpen: onSignupOpen,
//     onOpenChange: onSignupOpenChange
//   } = useDisclosure();

//   const handleSignupClick = () => {
//     onOpenChange(); // Close login modal
//     onSignupOpen(); // Open signup modal
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//           csrf_token: document.cookie.split('csrf_token=')[1]
//         })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUser(data);
//         onOpenChange(); // Close modal on success
//       } else {
//         setErrors(data);
//       }
//     } catch (error) {
//       setErrors({ server: "An error occurred. Please try again." });
//     }
//   };

//   return (
//     <>
//       <Modal
//         isOpen={isOpen}
//         onOpenChange={onOpenChange}
//         placement="center"
//         size="md"
//       >
//         <ModalContent>
//           <ModalHeader className="flex flex-col gap-1">Partner Portal Login</ModalHeader>
//           <ModalBody>
//             <form onSubmit={handleSubmit} className="space-y-4 pb-6">
//               <Input
//                 autoFocus
//                 label="Email"
//                 placeholder="Enter your email"
//                 variant="bordered"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 errorMessage={errors.email}
//                 isRequired
//               />
//               <Input
//                 label="Password"
//                 placeholder="Enter your password"
//                 type="password"
//                 variant="bordered"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 errorMessage={errors.password}
//                 isRequired
//               />
//               {errors.server && (
//                 <p className="text-danger text-sm">{errors.server}</p>
//               )}
//               <div className="flex flex-col gap-2">
//                 <div className="flex gap-2 justify-end">
//                   <Button color="danger" variant="light" onPress={onOpenChange}>
//                     Close
//                   </Button>
//                   <Button color="primary" type="submit">
//                     Sign In
//                   </Button>
//                 </div>
//                 <div className="flex justify-center pt-4">
//                   <p className="text-sm">
//                     Don't have an account?{" "}
//                     <Link
//                       className="cursor-pointer"
//                       color="primary"
//                       onPress={handleSignupClick}
//                     >
//                       Sign up
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </form>
//           </ModalBody>
//         </ModalContent>
//       </Modal>

//       <SignupModal
//         isOpen={isSignupOpen}
//         onOpenChange={onSignupOpenChange}
//       />
//     </>
//   );
// }


// import React from 'react';
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   Button,
//   Input,
//   Link,
//   useDisclosure
// } from "@heroui/react";
// // import { Eye, EyeOff } from "lucide-react";
// import { useAuth } from '../context/AuthContext';
// import SignupModal from './signup-modal';

// interface LoginModalProps {
//   isOpen: boolean;
//   onOpenChange: () => void;
// }

// export default function LoginModal({ isOpen, onOpenChange }: LoginModalProps) {
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
//   const [errors, setErrors] = React.useState<{email?: string; password?: string; server?: string}>({});
//   const { setUser } = useAuth();

//   const {
//     isOpen: isSignupOpen,
//     onOpen: onSignupOpen,
//     onOpenChange: onSignupOpenChange
//   } = useDisclosure();

//   const handleSignupClick = () => {
//     onOpenChange(); // Close login modal
//     onSignupOpen(); // Open signup modal
//   };

//   const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//           csrf_token: document.cookie.split('csrf_token=')[1]
//         })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUser(data);
//         onOpenChange(); // Close modal on success
//       } else {
//         setErrors(data);
//       }
//     } catch (error) {
//       setErrors({ server: "An error occurred. Please try again." });
//     }
//   };

//   return (
//     <>
//       <Modal
//         isOpen={isOpen}
//         onOpenChange={onOpenChange}
//         placement="center"
//         size="md"
//       >
//         <ModalContent>
//           <ModalHeader className="flex flex-col gap-1">Partner Portal Login</ModalHeader>
//           <ModalBody>
//             <form onSubmit={handleSubmit} className="space-y-4 pb-6">
//               <Input
//                 autoFocus
//                 label="Email"
//                 placeholder="Enter your email"
//                 variant="bordered"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 errorMessage={errors.email}
//                 isRequired
//               />
//               <Input
//                 label="Password"
//                 placeholder="Enter your password"
//                 type={isPasswordVisible ? "text" : "password"}
//                 variant="bordered"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 errorMessage={errors.password}
//                 isRequired
//                 endContent={
//                   <button
//                     className="focus:outline-none"
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {/* {isPasswordVisible ? (
//                       <EyeOff className="w-4 h-4 text-default-400" />
//                     ) : (
//                       <Eye className="w-4 h-4 text-default-400" />
//                     )} */}
//                   </button>
//                 }
//               />
//               {errors.server && (
//                 <p className="text-danger text-sm">{errors.server}</p>
//               )}
//               <div className="flex flex-col gap-2">
//                 <div className="flex gap-2 justify-end">
//                   <Button color="danger" variant="light" onPress={onOpenChange}>
//                     Close
//                   </Button>
//                   <Button color="primary" type="submit">
//                     Sign In
//                   </Button>
//                 </div>
//                 <div className="flex justify-center pt-4">
//                   <p className="text-sm">
//                     Don't have an account?{" "}
//                     <Link
//                       className="cursor-pointer"
//                       color="primary"
//                       onPress={handleSignupClick}
//                     >
//                       Sign up
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </form>
//           </ModalBody>
//         </ModalContent>
//       </Modal>

//       <SignupModal
//         isOpen={isSignupOpen}
//         onOpenChange={onSignupOpenChange}
//       />
//     </>
//   );
// }


// // src/components/auth/LoginModal.tsx
// import React, { useState } from 'react';
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from '@heroui/react';
// import { useApp } from '../context/AppContext';

// interface LoginModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { isLoading, error, login } = useApp();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       await login({ email, password });
//       // Close modal on successful login
//       onClose();
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <ModalContent>
//         <ModalHeader className="flex flex-col gap-1">
//           <h3 className="text-xl font-bold">Login</h3>
//         </ModalHeader>
//         <form onSubmit={handleLogin}>
//           <ModalBody>
//             <div className="space-y-4">
//               <Input
//                 label="Email"
//                 placeholder="Enter your email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 fullWidth
//                 required
//               />
//               <Input
//                 label="Password"
//                 placeholder="Enter your password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 fullWidth
//                 required
//               />
//               {error && (
//                 <p className="text-danger text-sm">{error}</p>
//               )}
//             </div>
//           </ModalBody>
//           <ModalFooter>
//             <Button color="danger" variant="light" onPress={onClose}>
//               Cancel
//             </Button>
//             <Button
//               color="primary"
//               type="submit"
//               isLoading={isLoading}
//               disabled={isLoading}
//             >
//               Login
//             </Button>
//           </ModalFooter>
//         </form>
//       </ModalContent>
//     </Modal>
//   );
// };


// src/Modals/login-modal.tsx
// import React, { useState } from 'react';
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from '@heroui/react';
// import { useAuth } from '../context/AuthContext';

// interface LoginModalProps {
//   isOpen: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onOpenChange }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const { login, isLoading, error, clearError } = useAuth();

//   const validateForm = (): boolean => {
//     let isValid = true;

//     // Email validation
//     if (!email) {
//       setEmailError('Email is required');
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setEmailError('Email is invalid');
//       isValid = false;
//     } else {
//       setEmailError('');
//     }

//     // Password validation
//     if (!password) {
//       setPasswordError('Password is required');
//       isValid = false;
//     } else {
//       setPasswordError('');
//     }

//     return isValid;
//   };

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (validateForm()) {
//       try {
//         await login({ email, password });
//         onOpenChange(false); // Close modal on successful login
//         // Reset form
//         setEmail('');
//         setPassword('');
//       } catch (error) {
//         console.error('Login failed:', error);
//       }
//     }
//   };

//   // Clear errors when modal opens/closes
//   React.useEffect(() => {
//     if (isOpen) {
//       clearError();
//     }
//   }, [isOpen, clearError]);

//   return (
//     <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
//       <ModalContent>
//         <form onSubmit={handleLogin}>
//           <ModalHeader className="flex flex-col gap-1">
//             Partner Portal Login
//           </ModalHeader>
//           <ModalBody>
//             <Input
//               autoFocus
//               label="Email"
//               placeholder="Enter your email"
//               type="email"
//               variant="bordered"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               errorMessage={emailError}
//               isInvalid={!!emailError}
//             />
//             <Input
//               label="Password"
//               placeholder="Enter your password"
//               type="password"
//               variant="bordered"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               errorMessage={passwordError}
//               isInvalid={!!passwordError}
//             />
//             {error && (
//               <div className="text-danger text-sm mt-2">
//                 {error}
//               </div>
//             )}
//           </ModalBody>
//           <ModalFooter>
//             <Button color="danger" variant="flat" onPress={() => onOpenChange(false)}>
//               Close
//             </Button>
//             <Button
//               color="primary"
//               type="submit"
//               isLoading={isLoading}
//               disabled={isLoading}
//             >
//               Login
//             </Button>
//           </ModalFooter>
//         </form>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default LoginModal;


// src/Modals/login-modal.tsx
import React, { useState, useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Link } from '@heroui/react';
import { useAuth } from '../context/AuthContext';
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

  const { login, isLoading, error, clearError } = useAuth();

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
