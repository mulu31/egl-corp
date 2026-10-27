import { useParams, Link } from "react-router";
import { Seo } from "@/components/Seo";
import { PageContainer } from "@/components/PageContainer";
import { getPostBySlug, getRelatedPosts } from "@/data/blogData";
import { formatDate } from "@/utils/dateUtils";
import { ArticleDetail } from "@/components/blogs/ArticleDetail";
import { EventDetail } from "@/components/blogs/EventDetail";
import {
  FiChevronRight,
  FiCalendar,
  FiMapPin,
  FiUser,
  FiClock,
} from "react-icons/fi";

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  // 404 Fallback State
  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-background">
        <h1 className="font-serif text-3xl font-semibold mb-4">
          Content Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The article or event you are looking for does not exist or has been
          moved.
        </p>
        <Link
          to="/blogs"
          className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md hover:bg-primary/90 transition-colors"
        >
          Return to Archive
        </Link>
      </div>
    );
  }

  const isEvent = post.type === "event";
  const isUpcoming = isEvent && post.eventData?.status === "upcoming";
  const relatedContent = getRelatedPosts(post.slug, post.category);

  return (
    <div className="bg-background min-h-screen">
      <Seo
        title={post.title}
        description={post.summary}
        path={`/blogs/${post.slug}`}
      />

      {/* Breadcrumbs */}
      <div className="bg-muted/30 border-b border-border py-4">
        <PageContainer>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <FiChevronRight size={14} />
            <Link to="/blogs" className="hover:text-foreground">
              Blogs & Events
            </Link>
            <FiChevronRight size={14} />
            <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-xs">
              {post.title}
            </span>
          </nav>
        </PageContainer>
      </div>

      {/* Shared Hero Section */}
      <header className="pt-20 pb-16 bg-slate-950 text-white relative">
        <div className="absolute inset-0 opacity-20">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <PageContainer>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="bg-primary/20 text-primary-foreground text-xs uppercase font-bold px-3 py-1 rounded-sm backdrop-blur-md">
                {post.category}
              </span>
              {isEvent && (
                <span
                  className={`text-xs uppercase font-bold px-3 py-1 rounded-sm ${
                    isUpcoming
                      ? "bg-orange-500 text-white"
                      : "bg-slate-700 text-slate-300"
                  }`}
                >
                  {isUpcoming ? "Upcoming Event" : "Past Event"}
                </span>
              )}
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-white text-shadow-sm">
              {post.title}
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              {post.summary}
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-400">
              {isEvent && post.eventData?.startAt && (
                <span className="flex items-center gap-2 text-white">
                  <FiCalendar /> {formatDate(post.eventData.startAt)}
                </span>
              )}
              {!isEvent && (
                <span className="flex items-center gap-2">
                  <FiCalendar /> {formatDate(post.publishedAt)}
                </span>
              )}
              {!isEvent && post.articleData && (
                <span className="flex items-center gap-2">
                  <FiClock /> {post.articleData.readTime} min read
                </span>
              )}
              {!isEvent && post.articleData && (
                <span className="flex items-center gap-2">
                  <FiUser /> {post.articleData.authorProfile.name}
                </span>
              )}
              {isEvent && post.eventData?.location && (
                <span className="flex items-center gap-2">
                  <FiMapPin /> {post.eventData.location}
                </span>
              )}
            </div>
          </div>
        </PageContainer>
      </header>

      {/* Conditional Detail Views */}
      {isEvent ? (
        <EventDetail post={post} relatedEvents={relatedContent} />
      ) : (
        <ArticleDetail post={post} relatedPosts={relatedContent} />
      )}
    </div>
  );
}
