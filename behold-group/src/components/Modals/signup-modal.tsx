
// // // import {
// // //     Modal,
// // //     ModalContent,
// // //     ModalHeader,
// // //     ModalBody,
// // //     ModalFooter,
// // //     Button,

// // //     Checkbox,
// // //     Input,
// // //   } from "@heroui/react";


// // //   import { Mail, Lock } from "lucide-react";



// // // interface SignupModalProps {
// // //   isOpen: boolean;
// // //   onOpenChange: (isOpen: boolean) => void;
// // // }

// // // export default function SignupModal({ isOpen, onOpenChange }: SignupModalProps) {
// // //   return (
// // //     <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
// // //       <ModalContent>
// // //         {(onClose) => (
// // //           <>
// // //             <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
// // //             <ModalBody>
// // //             <Input
// // //                 endContent={""}
// // //                 label="First Name"
// // //                 placeholder="First Name"
// // //                 variant="bordered"
// // //               />
// // //                             <Input
// // //                 endContent={""}
// // //                 label="Last Name"
// // //                 placeholder="Last Name"
// // //                 variant="bordered"
// // //               />



// // //               <Input
// // //                 endContent={<Mail className="text-2xl text-default-400" />}
// // //                 label="Email"
// // //                 placeholder="Enter your email"
// // //                 variant="bordered"
// // //               />
// // //               <Input
// // //                 endContent={<Lock className="text-2xl text-default-400" />}
// // //                 label="Password"
// // //                 placeholder="Enter your password"
// // //                 type="password"
// // //                 variant="bordered"
// // //               />
// // //               <div className="flex py-2 px-1 justify-between">
// // //                 <Checkbox classNames={{ label: "text-small" }}>Remember me</Checkbox>

// // //               </div>
// // //             </ModalBody>
// // //             <ModalFooter>
// // //               {/* <Button color="danger" variant="flat" onPress={onClose}>
// // //                 Close
// // //               </Button> */}
// // //               <Button color="primary" onPress={onClose}>
// // //                 Sign Up
// // //               </Button>
// // //             </ModalFooter>
// // //           </>
// // //         )}
// // //       </ModalContent>
// // //     </Modal>
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

// // interface SignupModalProps {
// //   isOpen: boolean;
// //   onOpenChange: () => void;
// // }

// // export default function SignupModal({ isOpen, onOpenChange }: SignupModalProps) {
// //   const [email, setEmail] = React.useState("");
// //   const [username, setUsername] = React.useState("");
// //   const [password, setPassword] = React.useState("");
// //   const [confirmPassword, setConfirmPassword] = React.useState("");
// //   const [errors, setErrors] = React.useState<{
// //     email?: string;
// //     username?: string;
// //     password?: string;
// //     confirmPassword?: string;
// //     server?: string;
// //   }>({});
// //   const { setUser } = useAuth();

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     if (password !== confirmPassword) {
// //       setErrors({
// //         confirmPassword: "Passwords must match"
// //       });
// //       return;
// //     }

// //     try {
// //       const response = await fetch('/api/auth/signup', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           email,
// //           username,
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
// //         <ModalHeader className="flex flex-col gap-1">Create Partner Account</ModalHeader>
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
// //               label="Username"
// //               placeholder="Choose a username"
// //               variant="bordered"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               errorMessage={errors.username}
// //               isRequired
// //             />
// //             <Input
// //               label="Password"
// //               placeholder="Choose a password"
// //               type="password"
// //               variant="bordered"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               errorMessage={errors.password}
// //               isRequired
// //             />
// //             <Input
// //               label="Confirm Password"
// //               placeholder="Confirm your password"
// //               type="password"
// //               variant="bordered"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               errorMessage={errors.confirmPassword}
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
// //                 Create Account
// //               </Button>
// //             </div>
// //           </form>
// //         </ModalBody>
// //       </ModalContent>
// //     </Modal>
// //   );
// // }


// // import React from 'react';
// // import {
// //   Modal,
// //   ModalContent,
// //   ModalHeader,
// //   ModalBody,
// //   Button,
// //   Input,
// // } from "@heroui/react";
// // // import { Eye, EyeOff } from "lucide-react";
// // import { useAuth } from '../context/AuthContext';

// // interface SignupModalProps {
// //   isOpen: boolean;
// //   onOpenChange: () => void;
// // }

// // export default function SignupModal({ isOpen, onOpenChange }: SignupModalProps) {
// //   const [email, setEmail] = React.useState("");
// //   const [username, setUsername] = React.useState("");
// //   const [password, setPassword] = React.useState("");
// //   const [confirmPassword, setConfirmPassword] = React.useState("");
// //   const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
// //   const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = React.useState(false);
// //   const [errors, setErrors] = React.useState<{
// //     email?: string;
// //     username?: string;
// //     password?: string;
// //     confirmPassword?: string;
// //     server?: string;
// //   }>({});
// //   const { setUser } = useAuth();

// //   const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
// //   const toggleConfirmPasswordVisibility = () => setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     if (password !== confirmPassword) {
// //       setErrors({
// //         confirmPassword: "Passwords must match"
// //       });
// //       return;
// //     }

// //     try {
// //       const response = await fetch('/api/auth/signup', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           email,
// //           username,
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
// //         <ModalHeader className="flex flex-col gap-1">Create Partner Account</ModalHeader>
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
// //               label="Username"
// //               placeholder="Choose a username"
// //               variant="bordered"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               errorMessage={errors.username}
// //               isRequired
// //             />
// //             <Input
// //               label="Password"
// //               placeholder="Choose a password"
// //               type={isPasswordVisible ? "text" : "password"}
// //               variant="bordered"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               errorMessage={errors.password}
// //               isRequired
// //               endContent={
// //                 <button
// //                   className="focus:outline-none"
// //                   type="button"
// //                   onClick={togglePasswordVisibility}
// //                 >
// //                   {/* {isPasswordVisible ? (
// //                     <EyeOff className="w-4 h-4 text-default-400" />
// //                   ) : (
// //                     <Eye className="w-4 h-4 text-default-400" />
// //                   )} */}
// //                 </button>
// //               }
// //             />
// //             <Input
// //               label="Confirm Password"
// //               placeholder="Confirm your password"
// //               type={isConfirmPasswordVisible ? "text" : "password"}
// //               variant="bordered"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               errorMessage={errors.confirmPassword}
// //               isRequired
// //               endContent={
// //                 <button
// //                   className="focus:outline-none"
// //                   type="button"
// //                   onClick={toggleConfirmPasswordVisibility}
// //                 >
// //                   {/* {isConfirmPasswordVisible ? (
// //                     <EyeOff className="w-4 h-4 text-default-400" />
// //                   ) : (
// //                     <Eye className="w-4 h-4 text-default-400" />
// //                   )} */}
// //                 </button>
// //               }
// //             />
// //             {errors.server && (
// //               <p className="text-danger text-sm">{errors.server}</p>
// //             )}
// //             <div className="flex gap-2 justify-end mt-4">
// //               <Button color="danger" variant="light" onPress={onOpenChange}>
// //                 Close
// //               </Button>
// //               <Button color="primary" type="submit">
// //                 Create Account
// //               </Button>
// //             </div>
// //           </form>
// //         </ModalBody>
// //       </ModalContent>
// //     </Modal>
// //   );
// // }


// // // src/components/auth/SignupModal.tsx
// // import React, { useState } from 'react';
// // import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from '@heroui/react';
// // import { useApp } from '../context/AppContext';

// // interface SignupModalProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// // }

// // export const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [confirmError, setConfirmError] = useState('');

// //   const { isLoading, error, signup } = useApp();

// //   const handleSignup = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     // Check if passwords match
// //     if (password !== confirmPassword) {
// //       setConfirmError('Passwords do not match');
// //       return;
// //     }

// //     setConfirmError('');

// //     try {
// //       await signup({ username, email, password });
// //       // Close modal on successful signup
// //       onClose();
// //     } catch (error) {
// //       console.error('Signup failed:', error);
// //     }
// //   };

// //   return (
// //     <Modal isOpen={isOpen} onClose={onClose}>
// //       <ModalContent>
// //         <ModalHeader className="flex flex-col gap-1">
// //           <h3 className="text-xl font-bold">Create Account</h3>
// //         </ModalHeader>
// //         <form onSubmit={handleSignup}>
// //           <ModalBody>
// //             <div className="space-y-4">
// //               <Input
// //                 label="Username"
// //                 placeholder="Choose a username"
// //                 value={username}
// //                 onChange={(e) => setUsername(e.target.value)}
// //                 fullWidth
// //                 required
// //               />
// //               <Input
// //                 label="Email"
// //                 placeholder="Enter your email"
// //                 type="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 fullWidth
// //                 required
// //               />
// //               <Input
// //                 label="Password"
// //                 placeholder="Create a password"
// //                 type="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 fullWidth
// //                 required
// //               />
// //               <Input
// //                 label="Confirm Password"
// //                 placeholder="Confirm your password"
// //                 type="password"
// //                 value={confirmPassword}
// //                 onChange={(e) => setConfirmPassword(e.target.value)}
// //                 errorMessage={confirmError}
// //                 isInvalid={!!confirmError}
// //                 fullWidth
// //                 required
// //               />
// //               {error && (
// //                 <p className="text-danger text-sm">{error}</p>
// //               )}
// //             </div>
// //           </ModalBody>
// //           <ModalFooter>
// //             <Button color="danger" variant="light" onPress={onClose}>
// //               Cancel
// //             </Button>
// //             <Button
// //               color="primary"
// //               type="submit"
// //               isLoading={isLoading}
// //               disabled={isLoading}
// //             >
// //               Sign Up
// //             </Button>
// //           </ModalFooter>
// //         </form>
// //       </ModalContent>
// //     </Modal>
// //   );
// // };


// // src/Modals/signup-modal.tsx
// import React, { useState, useEffect } from 'react';
// import { Modal, ModalContent, ModalHeader, ModalBody, Button, Input } from '@heroui/react';
// import { useAuth } from '../context/AuthContext';

// interface SignupModalProps {
//   isOpen: boolean;
//   onOpenChange: (open: boolean) => void; // Changed from onClose to match your app's pattern
// }

// export default function SignupModal({ isOpen, onOpenChange }: SignupModalProps) {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [confirmError, setConfirmError] = useState('');

//   const { signup, isLoading, error, clearError } = useAuth();

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
