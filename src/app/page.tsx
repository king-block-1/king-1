"use client";

import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center gap-6 md:gap-8">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Web3 Creator Economy Platform
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-tight">
              Empowering Creators with Web3 Technology
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
              Launch your creator token, build your community, and monetize your content
              with blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">Get Started</Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center gap-6 md:gap-8 mb-12 md:mb-16">
            <span className="text-primary font-medium">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold">Everything You Need</h2>
            <p className="text-foreground/80 max-w-2xl">
              Built for creators who want to take control of their economy and community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col gap-4 p-6 rounded-2xl border border-black/[.08] dark:border-white/[.08] hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary">✦</span>
                </div>
                <h3 className="text-xl font-semibold">Feature {i}</h3>
                <p className="text-foreground/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-24 bg-black/[.02] dark:bg-white/[.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center gap-6 md:gap-8 mb-12 md:mb-16">
            <span className="text-primary font-medium">Trusted By Creators</span>
            <h2 className="text-3xl md:text-4xl font-bold">Join the Community</h2>
            <p className="text-foreground/80 max-w-2xl">
              Connect with creators who are building the future of digital economies.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-black/[.02] dark:bg-white/[.02] flex items-center justify-center"
              >
                <span className="text-xl md:text-2xl text-foreground/20">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-primary to-secondary p-8 md:p-12 text-white">
            <div className="flex flex-col items-center text-center gap-6 md:gap-8">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
              <p className="text-white/80 max-w-2xl">
                Join thousands of creators who are already building their digital
                economies on our platform.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
              >
                Launch Your Token
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
