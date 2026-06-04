export function AboutSection() {
  return (
    <section id="about" className="bg-[#f7f2ea] px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
            About Us
          </p>

          <h2 className="mb-6 text-4xl font-light text-stone-900 md:text-5xl">
            Experience the beauty of traditional Balinese living
          </h2>

          <p className="leading-8 text-stone-600">
            Our villa offers a peaceful escape with natural surroundings,
            comfortable rooms, and a warm atmosphere. This section can later be
            updated with your real story, location, and brand message.
          </p>
        </div>

        <div className="h-[500px] bg-[url('/images/about.jpg')] bg-cover bg-center" />
      </div>
    </section>
  );
}
