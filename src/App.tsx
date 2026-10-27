import { Routes, Route } from "react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { PlaceholderPage } from "@/pages/PlaceholderPage";
import { ServiceDetailPage } from "@/pages/ServiceDetailPage";
import { ProductDetailPage } from "@/pages/ProductDetailPage";
import { ProjectDetailPage } from "@/pages/ProjectDetailPage";
import { BlogDetailPage } from "@/pages/BlogDetailPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />

        {/* Updated Services Route */}
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

        <Route
          path="blogs"
          element={
            <PlaceholderPage
              title="Blogs & Events"
              description="Articles and event updates from EGL Corp will be published here."
              path="/blogs"
              eyebrow="Insights"
            />
          }
        />
        <Route path="blogs/:slug" element={<BlogDetailPage />} />

        <Route path="about" element={<AboutPage />} />

        <Route
          path="contact"
          element={
            <PlaceholderPage
              title="Contact"
              description="Get in touch with EGL Corp about your next project."
              path="/contact"
              eyebrow="Start a conversation"
            />
          }
        />

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
