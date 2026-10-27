import { Link } from "react-router";
import type { BlogPost } from "@/data/blogs";
import { formatDate } from "@/utils/dateUtils";
import { FiClock, FiUser, FiArrowLeft } from "react-icons/fi";
import { BlogCard } from "./BlogCard";

export interface ArticleDetailProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function ArticleDetail({ post, relatedPosts }: ArticleDetailProps) {
  if (!post.articleData) return null;

  return (
    <div className="bg-background pb-24">
      {/* Lead Image */}
      {post.coverImage && (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-12">
          <div className="aspect-[21/9] w-full overflow-hidden rounded-xl border border-border shadow-lg bg-muted">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Meta Header */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-muted-foreground border-b border-border pb-6">
          <span className="flex items-center gap-2">
            <FiClock /> {post.articleData.readTime} min read
          </span>
          <span className="flex items-center gap-2">
            <FiUser /> {post.articleData.authorProfile.name}
          </span>
          <span>{formatDate(post.publishedAt)}</span>
        </div>

        {/* Main Content */}
        <div
          className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-serif prose-a:text-primary prose-img:rounded-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-muted text-muted-foreground text-xs font-medium px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Card */}
        <div className="mt-12 p-8 bg-muted/30 border border-border rounded-xl flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <img
            src={post.articleData.authorProfile.avatar}
            alt={post.articleData.authorProfile.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-background shadow-sm"
          />
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
              Written by
            </p>
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              {post.articleData.authorProfile.name}
            </h3>
            <p className="text-sm text-primary font-medium mb-3">
              {post.articleData.authorProfile.role}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {post.articleData.authorProfile.bio}
            </p>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            <FiArrowLeft className="mr-2" /> Back to all articles
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-24 pt-16 border-t border-border bg-muted/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug} post={p} viewMode="grid" />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
