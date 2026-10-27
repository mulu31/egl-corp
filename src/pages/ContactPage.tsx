import { PageContainer } from "@/components/PageContainer";
import { SectionSeparator } from "@/components/SectionSeparator";
import { Seo } from "@/components/Seo";
import { FinalCta } from "@/components/home/FinalCta";
import { CONTACT_INFO, OFFICE_GALLERY } from "@/data/contactData";
import { SERVICES as SERVICES_DETAILED } from "@/data/services";
import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    inquiryType: "New Project",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "error" | "not_configured"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim())
      newErrors.message = "Please provide a brief description.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitStatus("not_configured");
  };

  return (
    <div className="bg-[#0a0f16] text-slate-300 min-h-screen">
      <Seo
        title="Contact Us"
        description="Discuss your next software project with EGL Corp."
        path="/contact"
      />

      {/* Hero */}
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden text-center border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f16]/90 to-[#0a0f16]" />
        <PageContainer>
          <div className="relative z-10 mx-auto max-w-3xl py-20">
            <h1 className="font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl mb-6">
              Let's Build Something Meaningful.
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Whether you have a clear technical brief or an operational problem
              that needs solving, we're ready to listen.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Get in Touch */}
      <section className="py-24">
        <PageContainer>
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-[#d4a373] mb-4 border-t border-[#d4a373] inline-block pt-2">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
              Contact Information
            </h2>
            <p className="text-slate-400">
              Reach out to us through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="mb-4 text-[#d4a373]">
                <FiPhone size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">Phone</h3>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-slate-400 hover:text-[#d4a373] transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 text-[#d4a373]">
                <FiMail size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">Email</h3>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-slate-400 hover:text-[#d4a373] transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 text-[#d4a373]">
                <FiMapPin size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">
                Location
              </h3>
              <p className="text-slate-400">{CONTACT_INFO.address}</p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Business Hours */}
      <section className="py-24 border-t border-slate-800 bg-[#0d131c]">
        <PageContainer>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-[#d4a373] mb-4 border-t border-[#d4a373] inline-block pt-2">
                Business Hours
              </p>
              <h2 className="font-serif text-4xl font-semibold text-white">
                When We Are Available
              </h2>
            </div>
            <div className="border-t border-slate-800">
              {CONTACT_INFO.businessHours.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-5 border-b border-slate-800"
                >
                  <span className="text-white font-medium">{item.day}</span>
                  <span
                    className={
                      item.hours === "Closed"
                        ? "text-slate-600"
                        : "text-slate-400"
                    }
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Inquiry Form — Sharp, Flat, Classic Layout */}
      <section className="py-24">
        <PageContainer>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-[#d4a373] mb-4 border-t border-[#d4a373] inline-block pt-2">
                Send Inquiry
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
                Tell Us About Your Project
              </h2>
              <p className="text-slate-400">
                Fill out the form below and we will get back to you.
              </p>
            </div>

            <div className="bg-[#111823] border border-slate-800 rounded-none">
              {submitStatus === "not_configured" && (
                <div
                  className="p-4 bg-[#d4a373]/10 border-b border-[#d4a373]/20 text-[#d4a373] text-sm"
                  role="alert"
                >
                  <strong>Submission Endpoint Not Configured:</strong> This form
                  is for layout demonstration. Please email us directly at{" "}
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="underline font-bold"
                  >
                    {CONTACT_INFO.email}
                  </a>
                  .
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="p-8 md:p-10 space-y-6"
                noValidate
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-none border bg-[#0a0f16] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#d4a373] focus:border-transparent transition-all ${errors.name ? "border-red-500" : "border-slate-700"}`}
                      placeholder="John Doe"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-none border bg-[#0a0f16] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#d4a373] focus:border-transparent transition-all ${errors.email ? "border-red-500" : "border-slate-700"}`}
                      placeholder="john@example.com"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-none border border-slate-700 bg-[#0a0f16] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#d4a373] focus:border-transparent transition-all"
                    >
                      <option value="">Not sure yet</option>
                      {SERVICES_DETAILED.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full rounded-none border border-slate-700 bg-[#0a0f16] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#d4a373] focus:border-transparent transition-all"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full rounded-none border bg-[#0a0f16] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#d4a373] focus:border-transparent transition-all ${errors.message ? "border-red-500" : "border-slate-700"}`}
                    placeholder="Tell us about your business needs, constraints, and goals..."
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-none bg-[#d4a373] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#0a0f16] hover:bg-[#c29262] transition-colors flex justify-center items-center"
                >
                  Send Message <FiSend className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </PageContainer>
      </section>

      <SectionSeparator />

      {/* Our Space — Fixed Aspect Ratio Grid */}
      <section className="py-24 bg-[#0d131c]">
        <PageContainer>
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-[#d4a373] mb-4 border-t border-[#d4a373] inline-block pt-2">
              Our Environment
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
              Our Space
            </h2>
            <p className="text-slate-400">
              A look inside the EGL Corp office where ideas are engineered.
            </p>
          </div>

          {/* Grid with locked aspect ratios — no shifting regardless of source image size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OFFICE_GALLERY.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-slate-800 aspect-square"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Typography-led caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-serif text-lg md:text-xl tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {img.caption}
                  </p>
                </div>
                {/* Mobile always-visible caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent sm:hidden">
                  <p className="text-white text-sm font-medium">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Big Map */}
      <section className="relative h-[500px] w-full bg-slate-900 border-t border-slate-800">
        {CONTACT_INFO.mapEmbedUrl && (
          <iframe
            src={CONTACT_INFO.mapEmbedUrl}
            title="EGL Corp Location Map"
            className="absolute inset-0 h-full w-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            loading="lazy"
            allowFullScreen
          />
        )}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-24 md:translate-x-0 pointer-events-none w-full max-w-sm px-4">
          <div className="bg-[#0a0f16]/95 backdrop-blur-md p-8 border border-slate-700 shadow-2xl pointer-events-auto">
            <h3 className="font-serif text-2xl font-semibold text-white mb-2">
              Visit Our Office
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              {CONTACT_INFO.address}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-[#d4a373] hover:text-[#c29262] transition-colors"
            >
              Get Directions &rarr;
            </a>
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
