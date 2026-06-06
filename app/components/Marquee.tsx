const words = [
  "Weddings",
  "Private Events",
  "Jazz Clubs",
  "Receptions",
  "Ceremonies",
  "Venues",
  "Worldwide",
];

export function Marquee() {
  // Two identical tracks create a seamless loop.
  const track = (
    <div className="marquee__track" aria-hidden>
      {words.map((w, i) => (
        <span key={i} className="flex items-center gap-10 shrink-0">
          <span className="font-[family-name:var(--font-instrument)] text-3xl md:text-5xl">
            {w}
          </span>
          <span className="text-[var(--blue-light)] text-2xl">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="on-ink py-7 md:py-9 border-y border-[var(--line-light)]">
      <div className="marquee">
        {track}
        {track}
      </div>
    </div>
  );
}
