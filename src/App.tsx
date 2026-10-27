import { SiteLayout } from "@/components/SiteLayout";
import { AboutPage } from "@/pages/AboutPage";
import { BlogDetailPage } from "@/pages/BlogDetailPage";
import { BlogsPage } from "@/pages/BlogsPage"; // NEW
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PlaceholderPage } from "@/pages/PlaceholderPage";
import { ProductDetailPage } from "@/pages/ProductDetailPage";
import { ProjectDetailPage } from "@/pages/ProjectDetailPage";
import { ServiceDetailPage } from "@/pages/ServiceDetailPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { Route, Routes } from "react-router";

export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />

        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />

        <Route
          path="products"
          element={
            <PlaceholderPage
              title="Products"
              description="Software products engineered by EGL Corp."
              path="/products"
              eyebrow="What we build"
            />
          }
        />
        <Route path="products/:slug" element={<ProductDetailPage />} />

        <Route
          path="projects"
          element={
            <PlaceholderPage
              title="Projects"
              description="Selected software engineering work."
              path="/projects"
              eyebrow="Our work"
            />
          }
        />
        <Route path="projects/:slug" element={<ProjectDetailPage />} />

        {/* Updated Blogs Routes */}
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="blogs/:slug" element={<BlogDetailPage />} />

        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />

        <Route
          path="privacy"
          element={
            <PlaceholderPage
              title="Privacy Policy"
              description="How EGL Corp handles information."
              path="/privacy"
              eyebrow="Legal"
            />
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
