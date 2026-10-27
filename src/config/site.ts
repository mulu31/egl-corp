export const SITE = {
  name: "EGL Corp",
  tagline: "Engineering Ideas. Empowering Progress.",
  description:
    "EGL Corp engineers digital solutions and software products that help businesses solve problems, work smarter, and grow.",
  baseUrl: "https://REPLACE-BEFORE-LAUNCH.example",
  heroVideo: {
    mobile: "iMAfIRaLl3k",
    tablet: "iYHrMtCTUsM",
    desktop: "LwrAm6DkU1s",
  },
};

export const CONTACT_INFO = {
  email: "shimaliisinsarmu@gmail.com",
  phone: "+251 911 391 625",
  whatsapp: "251911391625",
  address: "Bishoftu, Oromia",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31551.83035087612!2d38.97029880000001!3d8.751444899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164a8b0003b0de1b%3A0x6a6f8c5b5b2f1d1!2sBishoftu!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set",
  businessHours: [
    { day: "Monday", hours: "8:00 AM – 5:00 PM" },
    { day: "Tuesday", hours: "8:00 AM – 5:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 5:00 PM" },
    { day: "Thursday", hours: "8:00 AM – 5:00 PM" },
    { day: "Friday", hours: "8:00 AM – 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 1:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
};

export function canonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.baseUrl}${normalized === "/" ? "" : normalized}`;
}
