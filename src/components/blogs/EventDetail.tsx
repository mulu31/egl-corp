import type { BlogPost } from "@/data/blogData";
import { formatDate } from "@/utils/dateUtils";
import { useState } from "react";
import {
  FiArrowRight,
  FiCalendar,
  FiChevronDown,
  FiMapPin,
} from "react-icons/fi";
import { Link } from "react-router";
import { BookingWizard } from "./BookingWizard";

export interface EventDetailProps {
  post: BlogPost;
  relatedEvents: BlogPost[];
}

export function EventDetail({ post, relatedEvents }: EventDetailProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (!post.eventData) return null;
  const { details, startAt, status } = post.eventData;
  const isUpcoming = status === "upcoming";

  // Formatting date and time for the details section
  const dateObj = new Date(startAt);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = `${dateObj.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${post.eventData.endAt ? new Date(post.eventData.endAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "End"}`;

  return (
    <div className="bg-[#0a0f16] text-slate-300 font-sans">
      {isUpcoming && (
        <BookingWizard
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          eventTitle={post.title}
        />
      )}

      {/* 1. About the Event (Split Layout) */}
      <section className="py-24 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            {/* Left: About */}
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-[#d4a373] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#d4a373]"></span> About the Event
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                {post.title}
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                {post.summary}
              </p>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col justify-center space-y-6 md:pl-12 md:border-l border-slate-800">
              <p className="text-sm font-medium uppercase tracking-wider text-[#d4a373] mb-2 flex items-center gap-3">
                <span className="w-8 h-px bg-[#d4a373]"></span> Event Details
              </p>

              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Date
                </h4>
                <p className="text-slate-400">{formattedDate}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Time
                </h4>
                <p className="text-slate-400">{formattedTime}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Location
                </h4>
                <p className="text-slate-400">
                  {details.venue.name}
                  <br />
                  {details.venue.address}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Hosted By
                </h4>
                <p className="text-slate-400">{details.hostedBy}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Category
                </h4>
                <p className="text-slate-400">{post.category}</p>
              </div>

              {isUpcoming && (
                <div className="pt-4">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="bg-[#d4a373] text-[#0a0f16] font-bold uppercase tracking-wider px-8 py-3 rounded-sm hover:bg-[#c29262] transition-colors w-full sm:w-auto"
                  >
                    Book Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Agenda */}
      {details.agenda.length > 0 && (
        <section className="py-24 border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-medium uppercase tracking-wider text-[#d4a373] mb-4 flex justify-center items-center gap-3">
                <span className="w-8 h-px bg-[#d4a373]"></span> Agenda
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white">
                Agenda
              </h2>
            </div>

            <div className="border-t border-slate-800">
              {details.agenda.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row py-6 border-b border-slate-800 group hover:bg-slate-900/50 transition-colors px-4"
                >
                  <div className="sm:w-32 shrink-0 font-mono text-lg text-[#d4a373] mb-2 sm:mb-0">
                    {item.time}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-white mb-1 group-hover:text-[#d4a373] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Speakers */}
      {details.speakers.length > 0 && (
        <section className="py-24 border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-medium uppercase tracking-wider text-[#d4a373] mb-4 flex justify-center items-center gap-3">
                <span className="w-8 h-px bg-[#d4a373]"></span> Speakers
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white">
                Speakers
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {details.speakers.map((speaker, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border border-slate-700">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-white mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-[#d4a373] font-medium mb-4">
                    {speaker.role}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {speaker.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Venue */}
      <section className="py-24 border-b border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm font-medium uppercase tracking-wider text-[#d4a373] mb-4 flex justify-center items-center gap-3">
            <span className="w-8 h-px bg-[#d4a373]"></span> Venue
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-semibold text-white mb-4">
            {details.venue.name}
          </h2>
          <p className="text-lg text-slate-400">{details.venue.address}</p>
        </div>
      </section>

      {/* 5. Event FAQs */}
      {details.faqs.length > 0 && (
        <section className="py-24 border-b border-slate-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-[#d4a373] mb-4 flex justify-center items-center gap-3">
                <span className="w-8 h-px bg-[#d4a373]"></span> Event FAQs
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white">
                Event FAQs
              </h2>
            </div>

            <div className="border-t border-slate-800">
              {details.faqs.map((faq, i) => (
                <details key={i} className="group border-b border-slate-800">
                  <summary className="flex items-center justify-between py-6 cursor-pointer list-none">
                    <span className="font-serif text-xl text-white group-hover:text-[#d4a373] transition-colors">
                      {faq.q}
                    </span>
                    <FiChevronDown className="text-slate-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pb-6 text-slate-400 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Supported By */}
      {details.sponsors.length > 0 && (
        <section className="py-24 border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-medium uppercase tracking-wider text-[#d4a373] mb-4 flex justify-center items-center gap-3">
                <span className="w-8 h-px bg-[#d4a373]"></span> Supported By
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white">
                Supported By
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {details.sponsors.map((sponsor, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-800 group bg-slate-900"
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] via-transparent to-transparent flex items-end p-6">
                    <p className="text-white font-serif text-lg">
                      {sponsor.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Gallery */}
      {details.gallery.length > 0 && (
        <section className="py-24 border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-medium uppercase tracking-wider text-[#d4a373] mb-4 flex justify-center items-center gap-3">
                <span className="w-8 h-px bg-[#d4a373]"></span> Gallery
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white">
                Gallery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
              {/* Large Image */}
              <div className="md:col-span-2 h-full rounded-xl overflow-hidden border border-slate-800">
                <img
                  src={details.gallery[0]}
                  alt="Gallery main"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Small Images Stack */}
              <div className="flex flex-col gap-4 h-full">
                {details.gallery[1] && (
                  <div className="h-1/2 rounded-xl overflow-hidden border border-slate-800">
                    <img
                      src={details.gallery[1]}
                      alt="Gallery secondary"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                {details.gallery[2] && (
                  <div className="h-1/2 rounded-xl overflow-hidden border border-slate-800">
                    <img
                      src={details.gallery[2]}
                      alt="Gallery tertiary"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. Related Events */}
      {relatedEvents.length > 0 && (
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-medium uppercase tracking-wider text-[#d4a373] mb-4 flex justify-center items-center gap-3">
                <span className="w-8 h-px bg-[#d4a373]"></span> Related Events
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
                Related Events
              </h2>
              <p className="text-slate-400">
                You might also be interested in these events.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedEvents.map((event) => (
                <Link
                  key={event.slug}
                  to={`/blogs/${event.slug}`}
                  className="group bg-[#111823] border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-colors flex flex-col"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={event.coverImage}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#d4a373] text-[#0a0f16] text-xs font-bold px-3 py-1 rounded-sm">
                      {event.eventData?.status === "upcoming"
                        ? "Upcoming"
                        : "Past"}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <FiCalendar size={12} />{" "}
                        {formatDate(
                          event.eventData?.startAt || event.publishedAt,
                        )}
                      </span>
                      <span>•</span>
                      <span>{event.category}</span>
                    </div>
                    <h3 className="font-serif text-xl text-white mb-2 group-hover:text-[#d4a373] transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-2 mb-4 flex-1">
                      {event.summary}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
                      <FiMapPin size={12} />
                      <span>{event.eventData?.location}</span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-800 text-sm font-medium text-[#d4a373] flex items-center group-hover:underline">
                      View Details <FiArrowRight className="ml-2" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
