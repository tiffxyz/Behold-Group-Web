
// src/App.tsx
import { Routes, Route} from 'react-router-dom';
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


function App() {
  return (

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
