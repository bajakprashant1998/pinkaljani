import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import CategoryPage from "./pages/services/CategoryPage";
import SubcategoryPage from "./pages/services/SubcategoryPage";
import SolutionsPage from "./pages/SolutionsPage";
import ChallengeDetailPage from "./pages/solutions/ChallengeDetailPage";
import AboutPage from "./pages/company/AboutPage";
import ContactPage from "./pages/ContactPage";
import PricingPage from "./pages/PricingPage";
import ProcessDetailPage from "./pages/process/ProcessDetailPage";
import WhatsIncludedDetailPage from "./pages/whats-included/WhatsIncludedDetailPage";
import CaseStudiesPage from "./pages/resources/CaseStudiesPage";
import CaseStudyDetailPage from "./pages/resources/CaseStudyDetailPage";
import FreeToolsPage from "./pages/tools/FreeToolsPage";
import ToolPage from "./pages/tools/ToolPage";
import WhyChooseDetailPage from "./pages/why-choose/WhyChooseDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Services */}
          <Route path="/services/:category" element={<CategoryPage />} />
          <Route path="/services/:category/:subcategory" element={<SubcategoryPage />} />
          
          {/* Solutions */}
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:challenge" element={<ChallengeDetailPage />} />
          
          {/* Free Tools */}
          <Route path="/tools" element={<FreeToolsPage />} />
          <Route path="/tools/:category" element={<FreeToolsPage />} />
          <Route path="/tools/:category/:toolId" element={<ToolPage />} />
          
          {/* Resources */}
          <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
          <Route path="/resources/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/resources/blog" element={<Index />} />
          <Route path="/resources/guides" element={<Index />} />
          <Route path="/resources/*" element={<Index />} />
          
          {/* Process & Features */}
          <Route path="/process/:step" element={<ProcessDetailPage />} />
          <Route path="/whats-included/:feature" element={<WhatsIncludedDetailPage />} />
          <Route path="/why-choose/:benefit" element={<WhyChooseDetailPage />} />
          
          {/* Company */}
          <Route path="/company/about" element={<AboutPage />} />
          <Route path="/company/*" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reviews" element={<Index />} />
          
          {/* Pricing */}
          <Route path="/pricing" element={<PricingPage />} />
          
          {/* Legacy Routes */}
          <Route path="/industries" element={<SolutionsPage />} />
          <Route path="/industries/:industry" element={<SolutionsPage />} />
          <Route path="/platform" element={<Index />} />
          <Route path="/faqs" element={<Index />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
