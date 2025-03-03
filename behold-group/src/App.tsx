// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // import { LoginForm } from "./components/Auth/Forms/LoginForm";
// // import { SignupForm } from "./components/Auth/Forms/SignupForm";
// import IndexPage from "@/pages/index";
// import ServicesPage from "@/pages/services";
// import BlogPage from "@/pages/blog";
// import ResourcesPage from "@/pages/resources";
// import AboutPage from "@/pages/about";
// import ContactPage from "@/pages/contact";
// import PartnershipsPage from "@/pages/partnerships";
// // import Apply from "./pages/application";
// // import Journey from "./pages/journey";

// import { LoginForm, SignupForm } from "@/components/Auth/Forms";
// import { ProtectedRoute } from "@/components/routes/ProtectedRoute";
// import { AppProvider } from './components/context/AppContext';
// import PartnerPortal from "@/pages/portal";
// import { ProfilePage } from "./pages/profile";

// import { AwaitingApprovalPage } from "./pages/awaitingApproval";

// // function App() {
// //   return (
// //     <AppProvider>
// //     <Routes>
// //       <Route element={<IndexPage />} path="/" />
// //       <Route element={<LoginForm />} path="/login" />
// //       <Route element={<SignupForm />} path="/signup" />
// //       <Route element={<AwaitingApprovalPage />} path="/awaiting-approval" />
// //       <Route element={<ResourcesPage />} path="/resources" />
// //       <Route element={<BlogPage />} path="/blog" />
// //       <Route element={<ContactPage />} path="/contact" />
// //       <Route element={<AboutPage />} path="/about" />
// //       <Route element={<ServicesPage />} path="/services" />
// //       <Route element={<PartnershipsPage />} path="/partnerships" />
// //       <Route element={<Apply />} path="/partnerships/apply" />
// //       <Route element={<Journey />} path="/partnerships/journey" />
// //       <Route path="/portal" element={

// //           <PartnerPortal/>

// //       } />
// //            <Route path="/profile" element={
// //         <ProtectedRoute>
// //           <ProfilePage />
// //         </ProtectedRoute>
// //       } />
// //     </Routes>
// //     </AppProvider>
// //   );
// // }
// function App() {
//   return (
//     <Router>

//     <AppProvider>
//       <Routes>
//         <Route element={<IndexPage />} path="/" />
//         <Route element={<ResourcesPage />} path="/resources" />
//         {/* <Route element={<PricingPage />} path="/pricing" /> */}
//         <Route element={<BlogPage />} path="/blog" />
//         <Route element={<ContactPage />} path="/contact" />
//         <Route element={<AboutPage />} path="/about" />
//         <Route element={<ServicesPage />} path="/services" />
//         <Route element={<PartnershipsPage />} path="/partnerships" />

//         {/* Auth Routes */}
//         <Route element={<LoginForm />} path="/login" />
//         <Route element={<SignupForm />} path="/signup" />
//         <Route element={<AwaitingApprovalPage />} path="/awaiting-approval" />

//         {/* Protected Routes */}
//         <Route path="/portal" element={
//           <ProtectedRoute>
//             <PartnerPortal />
//           </ProtectedRoute>
//         } />
//         <Route path="/profile" element={
//           <ProtectedRoute>
//             <ProfilePage />
//           </ProtectedRoute>
//         } />
//          <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </AppProvider>
//     </Router>
//   );
// }
// export default App;
// src/App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import IndexPage from "@/pages/index";
import ServicesPage from "@/pages/services";
import BlogPage from "@/pages/blog";
import ResourcesPage from "@/pages/resources";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import PartnershipsPage from "@/pages/partnerships";
import Journey from './pages/journey';
import Apply from './pages/application';

import { LoginForm, SignupForm } from "@/components/Auth/Forms";
import { ProtectedRoute } from "@/components/routes/ProtectedRoute";
import PartnerPortal from "@/pages/portal";
import { ProfilePage } from "./pages/profile";

import { AwaitingApprovalPage } from "./pages/awaitingApproval";
import UnderConstruction from "@/pages/UnderConstruction";

// IMPORTANT: Remove the BrowserRouter from here since it's in your provider or main file
function App() {
  return (
    // DO NOT wrap with BrowserRouter here
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/partnerships" element={<PartnershipsPage />} />
      <Route path="/partnerships/journey" element={< Journey />} />
      <Route path="/partnerships/apply" element={< Apply />} />


      {/* Auth Routes */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/awaiting-approval" element={<AwaitingApprovalPage />} />

      {/* Protected Routes */}
      <Route path="/portal" element={
        <ProtectedRoute>
          <PartnerPortal />
        </ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      } />
      {/* Catch-all route for undefined pages */}
      <Route path="*" element={<UnderConstruction />} />
    </Routes>
  );
}

export default App;
