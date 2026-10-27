import { PageContainer } from "@/components/PageContainer";
import { BLOG_POSTS as BLOGS } from "@/data/blogs";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";

export function BlogHighlights() {
  return (
    <section className="py-24 bg-background">
      <PageContainer>
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-orange-500 mb-2">
            Insights
          </p>
          <h2 className="font-serif text-4xl font-semibold text-foreground">
            Upcoming Highlights
          </h2>
          <p className="mt-4 text-muted-foreground">
            Discover the latest news and technical insights from our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.slice(0, 3).map((blog) => (
            <Link
              key={blog.slug}
              to={`/blogs/${blog.slug}`}
              className="focus-ring-orange group flex flex-col bg-background border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span>{blog.publishedAt}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span className="border border-border px-2 py-0.5 rounded text-[10px] uppercase font-semibold">
                    {blog.category}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-1 mb-4">
                  {blog.content.slice(0, 100)}...
                </p>
                <p className="text-xs text-muted-foreground mb-4 font-medium">
                  {blog.eventData?.location}
                </p>
                <div className="mt-auto pt-4 border-t border-border text-sm font-medium text-foreground flex items-center group-hover:text-orange-500 transition-colors">
                  View Details <FiArrowRight className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blogs"
            className="focus-ring-orange inline-flex items-center justify-center border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted"
          >
            See all articles
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
