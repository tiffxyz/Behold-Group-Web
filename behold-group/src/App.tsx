import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
// import DocsPage from "@/pages/docs";
import ServicesPage from "@/pages/services";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import ResourcesPage from "@/pages/resources";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import PartnershipsPage from "@/pages/partnerships";
import PartnerPortal from "@/pages/portal";
import Journey from "./pages/journey";
import Apply from "./pages/application";
// import { LoginForm } from "./components/Auth/Forms";
// import { SignupForm } from "./components/Auth/Forms";
import { LoginForm } from "./components/Auth/Forms/LoginForm";
import { SignupForm } from "./components/Auth/Forms/SignupForm";


function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<LoginForm />} path="/login" />
      <Route element={<SignupForm />} path="/signup" />
      <Route element={<ResourcesPage />} path="/resources" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ServicesPage />} path="/services" />
      <Route element={<PartnershipsPage />} path="/partnerships" />
      <Route element={<Apply />} path="/partnerships/apply" />
      <Route element={<Journey />} path="/partnerships/journey" />
      <Route element={<PartnerPortal />} path="/portal" />
    </Routes>
  );
}

export default App;
