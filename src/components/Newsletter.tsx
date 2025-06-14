export default function Newsletter() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold">
            Stay Ahead with Okavyx AI
          </h2>
          <p className="mt-2">
            Subscribe to our newsletter for the latest AI insights and company news.
          </p>
          <div className="mt-4 max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-2 rounded-l-md border-0 text-gray-800"
            />
            <button
              type="submit"
              className="bg-secondary text-secondary-foreground font-semibold p-2 rounded-r-md"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 