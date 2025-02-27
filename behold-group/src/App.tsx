import { Route, Routes } from "react-router-dom";

// import DocsPage from "@/pages/docs";
import { LoginForm } from "./components/Auth/Forms/LoginForm";
import { SignupForm } from "./components/Auth/Forms/SignupForm";
import IndexPage from "@/pages/index";
import ServicesPage from "@/pages/services";
// import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import ResourcesPage from "@/pages/resources";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import PartnershipsPage from "@/pages/partnerships";
import PartnerPortal from "@/pages/portal";
import Journey from "./pages/journey";
import Apply from "./pages/application";
import { ProfilePage } from "./pages/profile";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute";
import { AppProvider } from './components/context/AppContext';
import { AwaitingApprovalPage } from "./pages/awaitingApproval";

// import { LoginForm } from "./components/Auth/Forms";
// import { SignupForm } from "./components/Auth/Forms";


function App() {
  return (
    <AppProvider>
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<LoginForm />} path="/login" />
      <Route element={<SignupForm />} path="/signup" />
      <Route element={<AwaitingApprovalPage />} path="/awaiting-approval" />
      <Route element={<ResourcesPage />} path="/resources" />
      {/* <Route element={<PricingPage />} path="/pricing" /> */}
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ServicesPage />} path="/services" />
      <Route element={<PartnershipsPage />} path="/partnerships" />
      <Route element={<Apply />} path="/partnerships/apply" />
      <Route element={<Journey />} path="/partnerships/journey" />
      <Route path="/portal" element={

          <PartnerPortal/>

      } />
           <Route path="/profile" element={
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      } />
    </Routes>
    </AppProvider>
  );
}

export default App;
