import { useState, type ReactNode } from "react";

const photos = {
  hero: "https://images.unsplash.com/photo-1676436293945-a613dde9c3b6?auto=format&fit=crop&w=1800&q=88",
  biryani: "https://images.unsplash.com/photo-1710091691777-3115088962c4?auto=format&fit=crop&w=900&q=85",
  curry: "https://images.unsplash.com/photo-1705174299330-939dd03cc864?auto=format&fit=crop&w=900&q=85",
  platter: "https://images.unsplash.com/photo-1755090154731-6b4f221490c3?auto=format&fit=crop&w=900&q=85",
  dining: "https://images.unsplash.com/photo-1582228096960-7f5d2ec4aa8e?auto=format&fit=crop&w=1200&q=85",
  interior: "https://images.unsplash.com/photo-1651684081211-602801541b08?auto=format&fit=crop&w=1000&q=85",
};

type IconName =
  | "arrow"
  | "chef"
  | "clock"
  | "cutlery"
  | "leaf"
  | "map"
  | "menu"
  | "phone"
  | "shield"
  | "sparkle"
  | "users"
  | "wallet"
  | "whatsapp"
  | "x";

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    chef: (
      <>
        <path d="M6 15v6h12v-6" />
        <path d="M5 14a4 4 0 0 1 1-7.87A6 6 0 0 1 18 7a4 4 0 0 1 1 7H5Z" />
        <path d="M9 17v4m6-4v4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    cutlery: (
      <>
        <path d="M6 3v7m-2-7v4a2 2 0 0 0 4 0V3m-2 7v11M17 3v18m0-18c-3 2-3 7 0 9" />
      </>
    ),
    leaf: <path d="M20 4C10 4 4 9 4 17c4 1 10 0 13-4 2-3 3-9 3-9ZM4 20c3-6 7-9 12-12" />,
    map: (
      <>
        <path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    phone: <path d="M7 3 4 5c0 8 7 15 15 15l2-3-5-3-2 2c-3-1-5-3-6-6l2-2-3-5Z" />,
    shield: <path d="M12 22S20 18 20 10V5l-8-3-8 3v5c0 8 8 12 8 12Zm-3-10 2 2 4-5" />,
    sparkle: <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Zm7 11 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />,
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2" />
        <path d="M3 20v-2a6 6 0 0 1 12 0v2m0-6c3 0 6 2 6 5v1" />
      </>
    ),
    wallet: (
      <>
        <path d="M4 6h14a2 2 0 0 1 2 2v11H4a2 2 0 0 1-2-2V6a3 3 0 0 1 3-3h11v3" />
        <path d="M15 11h5v4h-5a2 2 0 0 1 0-4Z" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
        <path d="M9 8c.5 3 2 4.5 5 5l1-1 2 1c-.5 2-1.5 2.5-3 2-4-1-6-3-7-7-.5-1.5 0-2.5 2-3l1 2-1 1Z" />
      </>
    ),
    x: <path d="m6 6 12 12M18 6 6 18" />,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function SectionTitle({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <h2 className={`section-title ${light ? "text-white" : "text-ink"}`}>
      {children}
      <span />
    </h2>
  );
}

const menuItems = [
  {
    title: "South Indian",
    description: "Dosa, idli, vada and more",
    image: photos.platter,
  },
  {
    title: "North Indian",
    description: "Rich curries, paneer and tandoor",
    image: photos.curry,
  },
  {
    title: "Royal Biryani",
    description: "Fragrant rice, spice and tender meat",
    image: photos.biryani,
  },
];

const benefits = [
  { icon: "sparkle" as IconName, title: "Delicious Food", copy: "Made with fresh ingredients" },
  { icon: "shield" as IconName, title: "Clean & Hygienic", copy: "Your health is our priority" },
  { icon: "users" as IconName, title: "Comfortable Seating", copy: "Perfect for family and friends" },
  { icon: "wallet" as IconName, title: "Honest Prices", copy: "Great taste, genuine value" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-deep/95 backdrop-blur-lg">
        <div className="page-container flex h-[76px] items-center justify-between">
          <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-gold text-deep transition-transform group-hover:rotate-6">
              <Icon name="cutlery" className="h-6 w-6" />
            </span>
            <span>
              <strong className="font-display block text-xl leading-none text-white">Royal Spice</strong>
              <small className="mt-1 block text-[8px] font-bold tracking-[0.34em] text-gold">
                RESTAURANT
              </small>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 lg:flex">
            {["Home", "About", "Menu", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/918608621470"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-extrabold text-deep transition hover:bg-white sm:flex"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Book a table
          </a>

          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-deep px-6 py-5 lg:hidden">
            {["Home", "About", "Menu", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block border-b border-white/10 py-3 text-white/80"
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero relative min-h-[700px] overflow-hidden pt-[76px]">
          <img src={photos.hero} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,12,16,.97)_0%,rgba(7,12,16,.82)_36%,rgba(7,12,16,.14)_74%,rgba(7,12,16,.45)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,12,16,.55),transparent_45%)]" />
          <div className="page-container relative flex min-h-[624px] items-center">
            <div className="max-w-[630px] py-20">
              <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-gold sm:text-sm">
                <span className="h-px w-8 bg-gold" />
                Authentic taste, memorable moments
              </p>
              <h1 className="font-display text-5xl leading-[0.98] font-bold text-white sm:text-7xl lg:text-[86px]">
                Where every meal
                <span className="mt-2 block text-gold">feels royal.</span>
              </h1>
              <p className="mt-7 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
                Traditional Indian flavors, freshly prepared with handpicked spices and served
                with genuine warmth.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#menu" className="button-primary">
                  <Icon name="cutlery" className="h-4 w-4" />
                  Explore our menu
                </a>
                <a href="#gallery" className="button-secondary">
                  View gallery
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute right-5 bottom-5 hidden rounded-2xl border border-white/20 bg-black/30 px-5 py-4 text-right backdrop-blur-sm md:block">
            <p className="text-[10px] font-bold tracking-[.2em] text-gold">OPEN DAILY</p>
            <p className="mt-1 font-display text-xl text-white">11:00 AM — 11:00 PM</p>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 py-20 lg:py-28">
          <div className="page-container grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="eyebrow">Our story</p>
              <SectionTitle>Food that brings people together</SectionTitle>
              <p className="mt-6 max-w-xl leading-7 text-muted">
                Royal Spice is a family restaurant inspired by the color, generosity, and
                timeless flavors of India. Our kitchen celebrates recipes passed down through
                generations, made fresh for today.
              </p>
              <p className="mt-4 max-w-xl leading-7 text-muted">
                From a quiet weekday lunch to a joyful family dinner, we make every table feel
                like it belongs here.
              </p>
              <div className="mt-9 grid grid-cols-3 gap-3">
                {[
                  { icon: "leaf" as IconName, title: "Fresh", copy: "Ingredients" },
                  { icon: "chef" as IconName, title: "Skilled", copy: "Chefs" },
                  { icon: "users" as IconName, title: "Family", copy: "Friendly" },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-line bg-white p-4">
                    <Icon name={item.icon} className="h-7 w-7 text-amber" />
                    <p className="mt-3 text-sm font-extrabold">{item.title}</p>
                    <p className="text-xs text-muted">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-5 -right-5 h-32 w-32 rounded-full border border-gold/40" />
              <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-3xl bg-gold/15" />
              <img
                src={photos.dining}
                alt="A warmly lit table set with Indian dishes"
                className="relative h-[440px] w-full rounded-[30px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-5 right-5 rounded-2xl bg-deep px-6 py-5 text-white shadow-xl sm:right-8">
                <strong className="font-display text-3xl text-gold">15+</strong>
                <p className="text-xs text-white/60">Years of serving joy</p>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="scroll-mt-20 bg-white py-20 lg:py-28">
          <div className="page-container">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">Taste the tradition</p>
                <SectionTitle>Guest favorites</SectionTitle>
              </div>
              <a href="#contact" className="text-link">
                Reserve your table <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {menuItems.map((item, index) => (
                <article key={item.title} className="menu-card group">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted">{item.description}</p>
                      </div>
                      <span className="font-display text-lg text-amber">0{index + 1}</span>
                    </div>
                    <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber">
                      Order now <Icon name="arrow" className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="scroll-mt-20 bg-deep py-20 text-white lg:py-24">
          <div className="page-container">
            <div className="flex items-end justify-between">
              <div>
                <p className="eyebrow">A glimpse inside</p>
                <SectionTitle light>Royal moments</SectionTitle>
              </div>
              <span className="hidden text-xs font-bold uppercase tracking-widest text-white/40 sm:block">
                Food · Family · Flavor
              </span>
            </div>
            <div className="mt-10 grid auto-rows-[210px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4">
              {[
                { image: photos.biryani, label: "Our signature biryani", span: "md:col-span-2" },
                { image: photos.interior, label: "Warm evenings", span: "" },
                { image: photos.curry, label: "Crafted with care", span: "" },
                { image: photos.platter, label: "A table full of flavor", span: "" },
                { image: photos.dining, label: "Made for gathering", span: "md:col-span-2" },
                { image: photos.hero, label: "Royal hospitality", span: "" },
              ].map((item) => (
                <figure
                  key={item.label}
                  className={`gallery-item group relative overflow-hidden rounded-2xl ${item.span}`}
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 font-display text-lg">
                    {item.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-cream py-10">
          <div className="page-container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-amber">
                  <Icon name={benefit.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-sm font-extrabold">{benefit.title}</h3>
                  <p className="mt-1 text-xs text-muted">{benefit.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-[#0b161c] py-20 text-white">
          <div className="page-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow">Visit us</p>
              <SectionTitle light>Your table is waiting</SectionTitle>
              <p className="mt-5 max-w-md leading-7 text-white/55">
                Join us for a memorable meal. Walk in, call ahead, or send us a message to
                reserve your table.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <a href="tel:+919876543210" className="contact-row">
                  <Icon name="phone" /> +91 98765 43210
                </a>
                <div className="contact-row">
                  <Icon name="map" /> 123 Main Road, Kanchipuram, Tamil Nadu
                </div>
                <div className="contact-row">
                  <Icon name="clock" /> Open daily: 11:00 AM — 11:00 PM
                </div>
              </div>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/[.04] p-5 sm:p-8">
              <div className="grid gap-7 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[.2em] text-gold">
                    Special request?
                  </p>
                  <h3 className="font-display mt-2 text-3xl font-bold">Let&apos;s make it special.</h3>
                  <p className="mt-3 text-sm text-white/50">
                    Celebrations, groups, and private dining are always welcome.
                  </p>
                </div>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#28a85a] px-6 py-4 text-sm font-extrabold transition hover:bg-white hover:text-deep"
                >
                  <Icon name="whatsapp" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-deep py-6 text-white/40">
        <div className="page-container flex flex-col items-center justify-between gap-3 text-xs sm:flex-row">
          <p>© 2025 Royal Spice Restaurant. All rights reserved.</p>
          <p className="uppercase tracking-[.2em]">Good food · Good mood</p>
        </div>
      </footer>
    </div>
  );
}
