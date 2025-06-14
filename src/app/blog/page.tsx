import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      slug: "ai-in-healthcare",
      title: "The Future of AI in Healthcare",
      excerpt:
        "AI is poised to revolutionize healthcare, from diagnostics to personalized treatment plans...",
      date: "October 26, 2023",
    },
    {
      slug: "generative-ai-explained",
      title: "Generative AI: A Creative Revolution",
      excerpt:
        "Exploring how generative AI is transforming creative industries and what it means for artists...",
      date: "October 20, 2023",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Okavyx AI Blog
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Insights, news, and thoughts on the world of artificial
            intelligence.
          </p>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-card p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="text-sm text-muted-foreground">{post.date}</div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
} 