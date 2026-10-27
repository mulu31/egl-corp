export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  mapEmbedUrl: string;
  businessHours: { day: string; hours: string }[];
  licenseUrl: string;
}

export const CONTACT_INFO: ContactInfo = {
  email: "hello@egl-corp.com",
  phone: "+251 911 391 625",
  whatsapp: "251911391625",
  address: "Bishoftu, Oromia",
  // Standard Google Maps embed for Bishoftu
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
  licenseUrl: "#",
};

// Dummy data for the office gallery
export const OFFICE_GALLERY = [
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    caption: "Our collaborative workspace",
    aspect: "aspect-[4/3]",
  },
  {
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop",
    caption: "Quiet focus areas",
    aspect: "aspect-[3/4]",
  },
  {
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop",
    caption: "Meeting and strategy room",
    aspect: "aspect-square",
  },
  {
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
    caption: "Engineering workstations",
    aspect: "aspect-[3/4]",
  },
  {
    url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
    caption: "Team collaboration",
    aspect: "aspect-[4/3]",
  },
  {
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop",
    caption: "Lounge area",
    aspect: "aspect-square",
  },
];
