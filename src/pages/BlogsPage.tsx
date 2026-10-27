import { BlogCard } from "@/components/blogs/BlogCard";
import { PageContainer } from "@/components/PageContainer";
import { Seo } from "@/components/Seo";
import { BLOG_POSTS } from "@/data/blogData";
import { useEffect, useMemo, useState } from "react";
import { FiFilter, FiGrid, FiList, FiSearch } from "react-icons/fi";

const CATEGORIES = [
  "All",
  ...Array.from(new Set(BLOG_POSTS.map((p) => p.category))),
];
const ITEMS_PER_PAGE = 9;

export function BlogsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "featured">(
    "newest",
  );
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [search, category, sortBy]);

  const filteredPosts = useMemo(() => {
    let result = [...BLOG_POSTS];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }

    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    result.sort((a, b) => {
      if (sortBy === "featured") {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      return sortBy === "newest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [search, category, sortBy]);

  const showFeatured =
    BLOG_POSTS.find((p) => p.featured) &&
    !search &&
    category === "All" &&
    sortBy === "newest";
  const featuredPost = BLOG_POSTS.find((p) => p.featured);

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  return (
    <div className="bg-background min-h-screen pb-24">
      <Seo
        title="Blogs & Events"
        description="Read the latest engineering insights..."
        path="/blogs"
      />

      <section className="bg-slate-950 py-20 text-white border-b border-border">
        <PageContainer>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold mb-4">
              Insights & Events
            </h1>
            <p className="text-lg text-slate-400">
              Stay updated with our latest technical articles, engineering deep
              dives, and community events.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-16">
        <PageContainer>
          {/* Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 bg-muted/30 p-4 border border-border">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto flex-1">
              <div className="relative w-full sm:max-w-xs">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search content..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-md border border-border bg-background py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="relative w-full sm:max-w-[200px]">
                <FiFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full appearance-none rounded-md border border-border bg-background py-2 pl-10 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto justify-between sm:justify-end">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="rounded-md border border-border bg-background py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="featured">Featured First</option>
              </select>

              <div className="flex border border-border rounded-md overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                  className={`p-2 ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-muted"}`}
                >
                  <FiGrid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                  className={`p-2 ${viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-muted"}`}
                >
                  <FiList size={18} />
                </button>
              </div>
            </div>
          </div>

          {showFeatured && featuredPost && (
            <div className="mb-12">
              <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                Featured
              </h2>
              <BlogCard post={featuredPost} viewMode="list" />
            </div>
          )}

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-muted/20 border border-border">
              <h3 className="text-xl font-serif font-semibold mb-2">
                No content found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filters.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="text-primary hover:underline font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "flex flex-col gap-4 sm:gap-6"
                }
              >
                {displayedPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} viewMode={viewMode} />
                ))}
              </div>

              {visibleCount < filteredPosts.length && (
                <div className="mt-12 text-center">
                  <button
                    onClick={() =>
                      setVisibleCount((prev) => prev + ITEMS_PER_PAGE)
                    }
                    className="border border-border px-8 py-3 rounded-md text-sm font-medium hover:bg-muted transition-colors"
                  >
                    Load More Content
                  </button>
                </div>
              )}
            </>
          )}
        </PageContainer>
      </section>
    </div>
  );
}
