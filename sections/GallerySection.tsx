const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-[#f7f2ea] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
            Gallery
          </p>

          <h2 className="text-4xl font-light text-stone-900 md:text-5xl">
            Moments Around the Villa
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {images.map((image) => (
            <div
              key={image}
              className="h-[320px] bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
