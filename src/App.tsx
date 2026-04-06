import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import EnquireNowWidget from "@/components/EnquireNowWidget";
import Index from "./pages/Index.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Departments from "./pages/Departments.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import CampusLife from "./pages/CampusLife.tsx";
import InstitutionArts from "./pages/InstitutionArts.tsx";
import InstitutionAlliedHealth from "./pages/InstitutionAlliedHealth.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <EnquireNowWidget />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/institutions/engineering" element={<Departments />} />
          <Route path="/institutions/arts" element={<InstitutionArts />} />
          <Route path="/institutions/allied-health" element={<InstitutionAlliedHealth />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
