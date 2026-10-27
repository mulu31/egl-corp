import type { BlogPost, EventStatus } from "@/data/blogs";

export function getEventStatus(post: BlogPost): EventStatus | null {
  if (post.type !== "event") return null;

  // Explicit status overrides date logic
  if (post.eventData?.status) return post.eventData.status;
  if (!post.eventData?.startAt) return "past"; // Fallback for invalid data

  const now = new Date().getTime();
  const start = new Date(post.eventData?.startAt).getTime();
  const end = post.eventData?.endAt ? new Date(post.eventData?.endAt).getTime() : start;

  if (now > end) return "past";
  // If we want to support "live" events in the future:
  // if (now >= start && now <= end) return "live";
  return "upcoming";
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
