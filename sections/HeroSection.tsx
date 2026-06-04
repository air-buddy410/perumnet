import { Navbar } from "@/components/Navbar";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-[url('/images/hero.jpg')] bg-cover bg-center text-white"
    >
      <Navbar />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em]">
          Welcome to Bali
        </p>

        <h1 className="mb-6 text-5xl font-light leading-tight md:text-7xl">
          A Peaceful Stay in Nature
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/85">
          Discover a calm and beautiful villa experience surrounded by tropical
          gardens, warm hospitality, and Balinese atmosphere.
        </p>

        <a
          href="#rooms"
          className="inline-block rounded-full bg-white px-8 py-3 text-sm font-medium uppercase tracking-widest text-black"
        >
          Explore Rooms
        </a>
      </div>
    </section>
  );
}
