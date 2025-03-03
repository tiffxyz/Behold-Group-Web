// // // // src/components/ProtectedRoute.tsx
// // // import React from 'react';
// // // import { Navigate } from 'react-router-dom';
// // // import { useApp } from '@/components/context/AppContext';

// // // interface ProtectedRouteProps {
// // //   children: React.ReactNode;
// // // }

// // // export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
// // //   const { isAuthenticated, isLoading } = useApp();

// // //   if (isLoading) {
// // //     return <div>Loading...</div>;
// // //   }

// // //   if (!isAuthenticated) {
// // //     return <Navigate to="/login" replace />;
// // //   }

// // //   return <>{children}</>;
// // // };

// // // File: src/components/routes/ProtectedRoute.tsx
// // import { ReactNode, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useApp } from '@/components/context/AppContext';

// // interface ProtectedRouteProps {
// //   children: ReactNode;
// //   redirectTo?: string;
// // }

// // /**
// //  * A route wrapper that requires authentication
// //  * Redirects to login page if user is not authenticated
// //  */
// // export const ProtectedRoute = ({
// //   children,
// //   redirectTo = '/login'
// // }: ProtectedRouteProps) => {
// //   const { user } = useApp();
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (!user) {
// //       navigate(redirectTo, {
// //         state: {
// //           error: 'Authentication required. Please log in to access the Partner Portal.'
// //         },
// //         replace: true
// //       });
// //     }
// //   }, [user, navigate, redirectTo]);

// //   // Don't render children if not authenticated
// //   if (!user) {
// //     return null;
// //   }

// //   return <>{children}</>;
// // };

// // File: src/components/routes/ProtectedRoute.tsx
// import { ReactNode} from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useApp } from '@/components/context/AppContext';

// interface ProtectedRouteProps {
//   children: ReactNode;
//   redirectTo?: string;
// }

// /**
//  * A route wrapper that requires authentication
//  * Redirects to login page if user is not authenticated
//  */
// export const ProtectedRoute = ({
//   children,
//   redirectTo = '/login'
// }: ProtectedRouteProps) => {
//   const { user } = useApp();
//   const location = useLocation();

//   // If not authenticated, redirect immediately with an error message
//   if (!user) {
//     console.log("User not authenticated, redirecting to login");
//     return (
//       <Navigate
//         to={redirectTo}
//         state={{
//           error: 'Authentication required. Please log in to access the Partner Portal.',
//           from: location.pathname
//         }}
//         replace
//       />
//     );
//   }

//   // If authenticated, render children
//   return <>{children}</>;
// };
// src/components/routes/ProtectedRoute.tsx
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useApp } from '@/components/context/AppContext';

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

/**
 * A route wrapper that requires authentication
 * Redirects to login page if user is not authenticated
 */
export const ProtectedRoute = ({
  children,
  redirectTo = '/login'
}: ProtectedRouteProps) => {
  const { user } = useApp();
  const location = useLocation();

  console.log("Protected Route - Current user:", user);

  // If not authenticated, redirect immediately with an error message
  if (!user) {
    console.log("User not authenticated, redirecting to login");
    return (
      <Navigate
        to={redirectTo}
        state={{
          error: 'Authentication required. Please log in to access the Partner Portal.',
          from: location.pathname
        }}
        replace
      />
    );
  }

  // If authenticated, render children
  return <>{children}</>;
};

export default ProtectedRoute;
