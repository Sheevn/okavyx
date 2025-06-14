export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  // In a real app, you would fetch the post content based on the slug
  // For this example, we'll just display the slug.
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <h1 className="text-4xl font-bold mb-4">Blog Post: {slug}</h1>
          <p>
            This is a placeholder for the blog post content. In a real
            application, you would fetch the content of the post with slug
            &quot;{slug}&quot; from a CMS or a local markdown file and render
            it here.
          </p>
          <p>
            For example, you could use a library like `gray-matter` to parse
            markdown files with frontmatter.
          </p>
        </article>
      </main>
    </div>
  );
} 