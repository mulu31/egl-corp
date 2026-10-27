import { Link } from "react-router";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import type { BlogPost } from "@/data/blogData";
import { formatDate } from "@/utils/dateUtils";

export interface BlogCardProps {
  post: BlogPost;
  viewMode: "grid" | "list";
}

export function BlogCard({ post, viewMode }: BlogCardProps) {
  const isEvent = post.type === "event";

  const statusBadge = () => {
    if (!isEvent) return null;
    const isUpcoming = post.eventData?.status === "upcoming";
    return (
      <span
        className={`text-[10px] uppercase font-bold px-2 py-1 rounded-sm ${
          isUpcoming
            ? "bg-orange-500 text-white"
            : "bg-slate-700 text-slate-300"
        }`}
      >
        {isUpcoming ? "Upcoming" : "Past"}
      </span>
    );
  };

  // Grid: standard vertical card
  // List: Horizontal card on mobile/tablet, larger horizontal on desktop
  const containerClass =
    viewMode === "grid"
      ? "flex flex-col h-full"
      : "flex flex-row h-32 sm:h-48 md:h-56";

  const imageWrapperClass =
    viewMode === "grid"
      ? "aspect-[16/9] w-full shrink-0"
      : "w-1/3 sm:w-2/5 md:w-1/3 shrink-0 h-full";

  const contentClass =
    viewMode === "grid"
      ? "p-6 flex flex-col flex-1"
      : "p-4 sm:p-6 flex flex-col flex-1 justify-center";

  return (
    <Link
      to={`/blogs/${post.slug}`}
      className={`group overflow-hidden border border-border bg-background hover:shadow-md transition-all duration-300 focus-ring-orange ${containerClass}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden bg-muted ${imageWrapperClass}`}>
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-200 dark:bg-slate-800 text-muted-foreground">
            <span className="text-xs">No image</span>
          </div>
        )}
        <div className="absolute top-2 left-2 flex gap-2">
          <span className="bg-background/90 text-foreground backdrop-blur-sm text-[10px] uppercase font-bold px-2 py-0.5">
            {post.category}
          </span>
          {statusBadge()}
        </div>
      </div>

      {/* Content */}
      <div className={contentClass}>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground mb-2">
          {isEvent && post.eventData?.startAt ? (
            <span className="flex items-center gap-1">
              <FiCalendar /> {formatDate(post.eventData.startAt)}
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <FiCalendar /> {formatDate(post.publishedAt)}
            </span>
          )}
          {isEvent && post.eventData?.location && (
            <span className="flex items-center gap-1 line-clamp-1">
              <FiMapPin /> {post.eventData.location}
            </span>
          )}
        </div>

        <h3
          className={`font-serif font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 ${
            viewMode === "grid"
              ? "text-xl mb-2"
              : "text-base sm:text-xl mb-1 sm:mb-2"
          }`}
        >
          {post.title}
        </h3>

        <p
          className={`text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-3 ${
            viewMode === "grid" ? "mb-4 flex-1" : "hidden sm:block"
          }`}
        >
          {post.summary}
        </p>

        {viewMode === "grid" && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase font-medium bg-muted text-muted-foreground px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
