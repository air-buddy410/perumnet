export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-black/30 text-white backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="text-xl font-semibold tracking-wide">
          Maharani Template
        </div>

        <nav className="hidden gap-8 text-sm uppercase tracking-widest md:flex">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#rooms">Rooms</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-white px-5 py-2 text-sm uppercase tracking-widest md:block"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
