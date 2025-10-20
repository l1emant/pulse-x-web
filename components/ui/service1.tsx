"use client";

const Service1 = () => {
  return (
    <section className="pb-32">
      {/* Full Width Hero */}
      <div className="bg-muted py-32 relative grid-animated-container">
        {/* Diagonal Striped Grid Spotlight Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(16,185,129,0.25) 1px, transparent 0),
              linear-gradient(180deg, rgba(16,185,129,0.25) 1px, transparent 0),
              repeating-linear-gradient(45deg, rgba(16,185,129,0.2) 0 2px, transparent 2px 6px)
            `,
            backgroundSize: "24px 24px, 24px 24px, 24px 24px",
            WebkitMask: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0, transparent 30%)",
            mask: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0, transparent 30%)",
            animation: "spotlight 8s ease-in-out infinite",
          }}
        />
        <div className="container text-center relative z-10">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            About PulseX
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-32">
        <div className="container px-6">
          <div className="mx-auto max-w-lg">
            <p className="leading-7 text-lg text-justify">
              PulseX began as a simple idea — to build a lightweight dashboard that displays real-time cryptocurrency data in a clear and intuitive way.
            </p>

            <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-justify">
              What started as a small experiment soon grew into a complete learning project focused on exploring API integration, handling live data, and visualizing dynamic information on the web.
            </p>

            <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-justify">
              PulseX isn't designed for professional trading or financial decisions. Instead, it's a developer-driven project built to learn, experiment, and demonstrate how a real-time crypto dashboard can be built from the ground up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Service1 };
