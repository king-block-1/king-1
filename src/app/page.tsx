export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <section className="flex flex-col items-center text-center gap-6 py-16">
        <h1 className="text-5xl font-bold max-w-3xl">
          Empowering Creators with Web3 Technology
        </h1>
        <p className="text-lg text-foreground/80 max-w-2xl">
          Launch your creator token, build your community, and monetize your content
          with blockchain technology.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="rounded-full bg-primary text-white px-6 py-3 font-medium hover:bg-primary/90 transition-colors">
            Get Started
          </button>
          <button className="rounded-full border border-black/[.08] dark:border-white/[.145] px-6 py-3 font-medium hover:bg-black/[.05] dark:hover:bg-white/[.06] transition-colors">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
