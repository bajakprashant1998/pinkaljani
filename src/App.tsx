import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CategoryPage from "./pages/services/CategoryPage";
import SubcategoryPage from "./pages/services/SubcategoryPage";
import SolutionsPage from "./pages/SolutionsPage";
import AboutPage from "./pages/company/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Category Pages */}
          <Route path="/services/:category" element={<CategoryPage />} />
          
          {/* Service Subcategory Pages */}
          <Route path="/services/:category/:subcategory" element={<SubcategoryPage />} />
          
          {/* Solutions */}
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:challenge" element={<SolutionsPage />} />
          
          {/* Company */}
          <Route path="/company/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Industries, Resources, Platform - placeholder routes */}
          <Route path="/industries" element={<SolutionsPage />} />
          <Route path="/industries/:industry" element={<SolutionsPage />} />
          <Route path="/platform" element={<Index />} />
          <Route path="/resources/*" element={<Index />} />
          <Route path="/pricing" element={<Index />} />
          <Route path="/reviews" element={<Index />} />
          <Route path="/faqs" element={<Index />} />
          <Route path="/company/*" element={<AboutPage />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
