const rooms = [
  {
    name: "Deluxe Room",
    image: "/images/room-1.jpg",
    description: "A comfortable room with garden view and natural atmosphere.",
  },
  {
    name: "Suite Room",
    image: "/images/room-2.jpg",
    description: "A spacious stay designed for relaxation and privacy.",
  },
  {
    name: "Family Villa",
    image: "/images/room-3.jpg",
    description: "Perfect for families who want space and comfort.",
  },
];

export function RoomsSection() {
  return (
    <section id="rooms" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
            Our Rooms
          </p>

          <h2 className="text-4xl font-light text-stone-900 md:text-5xl">
            Stay in Comfort
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {rooms.map((room) => (
            <div key={room.name} className="group">
              <div
                className="mb-6 h-[420px] bg-cover bg-center transition duration-500 group-hover:scale-[1.02]"
                style={{ backgroundImage: `url(${room.image})` }}
              />

              <h3 className="mb-3 text-2xl font-light text-stone-900">
                {room.name}
              </h3>

              <p className="text-stone-600">{room.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
