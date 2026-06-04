export function ContactSection() {
  return (
    <section id="contact" className="bg-stone-950 px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
            Contact
          </p>

          <h2 className="mb-6 text-4xl font-light md:text-5xl">
            Plan your stay with us
          </h2>

          <p className="text-white/70">
            Send us your inquiry and we will get back to you soon.
          </p>
        </div>

        <form className="space-y-4">
          <input
            className="w-full border border-white/20 bg-transparent px-4 py-3 outline-none"
            placeholder="Name"
          />
          <input
            className="w-full border border-white/20 bg-transparent px-4 py-3 outline-none"
            placeholder="Email"
          />
          <textarea
            className="h-32 w-full border border-white/20 bg-transparent px-4 py-3 outline-none"
            placeholder="Message"
          />
          <button className="rounded-full bg-white px-8 py-3 text-sm uppercase tracking-widest text-black">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
