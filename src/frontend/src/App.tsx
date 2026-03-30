import {
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

// ─── Constants ────────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = "919810128513";
const WHATSAPP_MSG = encodeURIComponent(
  "Hello Nail World by Pratima! I would like to book a nail appointment. Please let me know the available slots. Thank you!",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "GALLERY", href: "#gallery" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

const SERVICES = [
  {
    title: "Nail Extensions",
    description:
      "Achieve the length and shape you've always dreamed of. Our premium acrylic and gel extensions are crafted to perfection with superior durability.",
    price: "Starting ₹799",
    image: "/assets/generated/service-extensions.dim_400x300.jpg",
  },
  {
    title: "Gel Polish",
    description:
      "Long-lasting, chip-free gel polish in hundreds of shades. Mirror-finish shine that stays flawless for 3–4 weeks without fading.",
    price: "Starting ₹499",
    image: "/assets/generated/service-gel.dim_400x300.jpg",
  },
  {
    title: "Nail Art Designs",
    description:
      "From delicate florals to bold geometric patterns — our nail artists create bespoke hand-painted designs that make every nail a canvas.",
    price: "Starting ₹299",
    image: "/assets/generated/service-nailart.dim_400x300.jpg",
  },
  {
    title: "Manicure & Pedicure",
    description:
      "Indulge in our signature spa manicure and pedicure treatments. Deep nourishment, exfoliation, and relaxation all in one luxury session.",
    price: "Starting ₹599",
    image: "/assets/generated/service-manicure.dim_400x300.jpg",
  },
];

const GALLERY_CATEGORIES = [
  {
    id: "bridal",
    label: "Bridal Nails",
    images: [
      {
        src: "/assets/generated/gallery-bridal.dim_600x400.jpg",
        alt: "Bridal nail design with crystals",
      },
      {
        src: "/assets/generated/gallery-bridal.dim_600x400.jpg",
        alt: "Bridal white lace nails",
      },
      {
        src: "/assets/generated/gallery-bridal.dim_600x400.jpg",
        alt: "Bridal pearl nails",
      },
      {
        src: "/assets/generated/gallery-bridal.dim_600x400.jpg",
        alt: "Bridal French tip nails",
      },
      {
        src: "/assets/generated/gallery-bridal.dim_600x400.jpg",
        alt: "Bridal rose gold nails",
      },
      {
        src: "/assets/generated/gallery-bridal.dim_600x400.jpg",
        alt: "Bridal floral nail art",
      },
    ],
  },
  {
    id: "party",
    label: "Party Nails",
    images: [
      {
        src: "/assets/generated/gallery-party.dim_600x400.jpg",
        alt: "Glitter party nails",
      },
      {
        src: "/assets/generated/gallery-party.dim_600x400.jpg",
        alt: "Rose gold glitter nails",
      },
      {
        src: "/assets/generated/gallery-party.dim_600x400.jpg",
        alt: "Gold foil party nails",
      },
      {
        src: "/assets/generated/gallery-party.dim_600x400.jpg",
        alt: "Dramatic black party nails",
      },
      {
        src: "/assets/generated/gallery-party.dim_600x400.jpg",
        alt: "Festive sparkle nails",
      },
      {
        src: "/assets/generated/gallery-party.dim_600x400.jpg",
        alt: "Jewel party nails",
      },
    ],
  },
  {
    id: "simple",
    label: "Simple Nails",
    images: [
      {
        src: "/assets/generated/gallery-simple.dim_600x400.jpg",
        alt: "Minimalist nude nails",
      },
      {
        src: "/assets/generated/gallery-simple.dim_600x400.jpg",
        alt: "Classic French manicure",
      },
      {
        src: "/assets/generated/gallery-simple.dim_600x400.jpg",
        alt: "Simple blush nails",
      },
      {
        src: "/assets/generated/gallery-simple.dim_600x400.jpg",
        alt: "Clean natural nails",
      },
      {
        src: "/assets/generated/gallery-simple.dim_600x400.jpg",
        alt: "Soft pink short nails",
      },
      {
        src: "/assets/generated/gallery-simple.dim_600x400.jpg",
        alt: "Everyday elegant nails",
      },
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    text: "Absolutely loved my experience at Nail World! Pratima is incredibly talented — my bridal nails were exactly what I envisioned. Every guest complimented them at my wedding!",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Ananya Gupta",
    text: "Best nail salon in Ghaziabad hands down. The gel polish lasted over a month without chipping. The studio is so clean and premium. I'm a regular customer now!",
    rating: 5,
    initials: "AG",
  },
  {
    name: "Meera Joshi",
    text: "Pratima's nail art skills are beyond amazing. She did a custom floral design for my sister's mehendi and everyone was asking for the salon's details. Highly recommended!",
    rating: 5,
    initials: "MJ",
  },
];

// ─── Rose CTA Button ──────────────────────────────────────────────────────────

function RoseButton({
  children,
  href,
  onClick,
  className = "",
  "data-ocid": dataOcid,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  "data-ocid"?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 bg-rose-cta hover:bg-rose-dark text-white font-inter font-semibold text-sm rounded-full px-8 py-3.5 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${className}`;
  if (href) {
    return (
      <a href={href} className={cls} data-ocid={dataOcid}>
        {children}
      </a>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={cls}
      data-ocid={dataOcid}
    >
      {children}
    </button>
  );
}

// ─── Gold Button ──────────────────────────────────────────────────────────────

function GoldButton({
  children,
  href,
  className = "",
  "data-ocid": dataOcid,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  "data-ocid"?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-white font-inter font-semibold text-sm rounded-full px-8 py-3.5 transition-all duration-300 ${className}`;
  return (
    <a href={href} className={cls} data-ocid={dataOcid}>
      {children}
    </a>
  );
}

// ─── Section Label ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
      {children}
    </p>
  );
}

// ─── Gold Divider ─────────────────────────────────────────────────────────────

function GoldDivider() {
  return (
    <div className="flex items-center gap-2 my-4">
      <div className="h-px w-8 bg-gold/40" />
      <Sparkles size={12} className="text-gold" />
      <div className="h-px w-8 bg-gold/40" />
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white/90 backdrop-blur-sm shadow-sm"
      }`}
    >
      {/* Top tagline strip */}
      <div
        className="hidden md:flex items-center justify-center py-1.5 text-xs font-inter tracking-wider"
        style={{ backgroundColor: "oklch(var(--blush))" }}
      >
        <span className="text-nail-muted">
          ✦ &nbsp; Luxury Nails, Perfect Style &nbsp; ✦ &nbsp; Open 11 AM – 8 PM
          &nbsp; ✦ &nbsp; +91 98101 28513
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#home"
            className="flex flex-col leading-tight"
            data-ocid="nav.link"
          >
            <span className="font-playfair text-xl font-bold tracking-widest uppercase text-gold">
              Nail World
            </span>
            <span className="font-cormorant italic text-xs font-medium text-nail-dark tracking-wider">
              by Pratima
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-xs font-semibold tracking-wider text-nail-dark hover:text-gold transition-colors duration-200"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <RoseButton href="#contact" data-ocid="nav.primary_button">
              Book Online
            </RoseButton>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-nail-dark hover:text-gold transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t shadow-lg"
          style={{ backgroundColor: "oklch(var(--cream))" }}
        >
          <div className="px-5 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-inter text-sm font-semibold tracking-wider text-nail-dark hover:text-gold transition-colors py-2.5 border-b last:border-0"
                style={{ borderColor: "oklch(var(--nail-border))" }}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <RoseButton
              href="#contact"
              className="mt-2"
              data-ocid="nav.primary_button"
            >
              Book Online
            </RoseButton>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section id="home" className="pt-28 md:pt-32 pb-16 md:pb-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="fade-up">
            <SectionLabel>✦ Premium Nail Studio</SectionLabel>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gold leading-tight mb-5">
              Get Beautiful Nails
              <br />
              <em className="not-italic text-nail-dark">That Shine</em>
            </h1>
            <p className="font-inter text-base text-nail-muted leading-relaxed mb-8 max-w-md">
              Professional Nail Art &amp; Care Services in Ghaziabad. Experience
              luxury nail care at Nail World by Pratima.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: "💅", label: "500+ Happy Clients" },
                { icon: "⭐", label: "8+ Years Experience" },
                { icon: "✨", label: "Premium Products" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-inter font-medium text-nail-dark"
                  style={{
                    borderColor: "oklch(var(--gold) / 0.3)",
                    backgroundColor: "oklch(var(--blush))",
                  }}
                >
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <RoseButton href="#contact" data-ocid="hero.primary_button">
                Book Appointment
              </RoseButton>
              <GoldButton href="#services" data-ocid="hero.secondary_button">
                Our Services <ChevronRight size={14} />
              </GoldButton>
            </div>
          </div>

          {/* Right image */}
          <div className="relative fade-up fade-up-delay-2">
            <div
              className="absolute -top-4 -right-4 w-full h-full rounded-3xl"
              style={{ border: "2px solid oklch(var(--gold) / 0.2)" }}
            />
            <img
              src="/assets/generated/hero-nails.dim_800x600.jpg"
              alt="Luxury nail art by Nail World by Pratima"
              className="relative z-10 w-full rounded-3xl shadow-luxury object-cover"
              style={{ maxHeight: "480px" }}
            />
            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -left-5 z-20 rounded-2xl px-5 py-4 shadow-card"
              style={{ backgroundColor: "oklch(var(--blush-deep))" }}
            >
              <p className="font-inter text-xs font-semibold uppercase tracking-wider text-gold mb-0.5">
                Open Today
              </p>
              <p className="font-playfair text-lg font-bold text-nail-dark">
                11 AM – 8 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(var(--blush))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-up">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-nail-dark mb-4">
            Our Premium Services
          </h2>
          <GoldDivider />
          <p className="font-inter text-nail-muted max-w-xl mx-auto">
            Each service is delivered with precision, premium products, and a
            touch of artistry that sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`fade-up fade-up-delay-${i + 1} bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
              data-ocid={`services.item.${i + 1}`}
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-playfair text-xl font-bold text-nail-dark">
                    {service.title}
                  </h3>
                  <span
                    className="font-inter text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ml-3"
                    style={{
                      backgroundColor: "oklch(var(--blush))",
                      color: "oklch(var(--gold))",
                    }}
                  >
                    {service.price}
                  </span>
                </div>
                <p className="font-inter text-sm text-nail-muted leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-rose-cta font-inter text-sm font-semibold hover:gap-2 transition-all duration-200"
                  data-ocid={`services.link.${i + 1}`}
                >
                  Book Now <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("bridal");
  const category =
    GALLERY_CATEGORIES.find((c) => c.id === activeCategory) ??
    GALLERY_CATEGORIES[0];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-nail-dark mb-4">
            Gallery of Artistry
          </h2>
          <GoldDivider />
          <p className="font-inter text-nail-muted max-w-xl mx-auto">
            A glimpse into the stunning designs crafted by Pratima and her team.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 mb-10 fade-up">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`font-inter text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-rose-cta text-white shadow-md"
                  : "bg-white text-nail-muted hover:text-nail-dark border border-nail-border"
              }`}
              data-ocid="gallery.tab"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery-grid fade-up">
          {category.images.map((img, i) => (
            <div
              key={`${activeCategory}-${img.alt}`}
              className="overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 group aspect-video"
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function TestimonialsSection() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(var(--blush))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-up">
          <SectionLabel>Happy Clients</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-nail-dark mb-4">
            Client Love
          </h2>
          <GoldDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`fade-up fade-up-delay-${i + 1} bg-white rounded-2xl p-7 shadow-card flex flex-col`}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                <Star size={14} className="text-gold fill-gold" />
                <Star size={14} className="text-gold fill-gold" />
                <Star size={14} className="text-gold fill-gold" />
                <Star size={14} className="text-gold fill-gold" />
                <Star size={14} className="text-gold fill-gold" />
              </div>
              <p className="font-inter text-sm text-nail-muted leading-relaxed flex-1 italic mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-playfair font-bold text-sm text-white"
                  style={{ backgroundColor: "oklch(var(--rose))" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-inter text-sm font-semibold text-nail-dark">
                    {t.name}
                  </p>
                  <p className="font-inter text-xs text-gold">
                    Verified Client
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((tItem, i) => (
            <div
              key={tItem.name}
              className={`rounded-full transition-all ${
                i === 0 ? "w-6 h-2 bg-rose-cta" : "w-2 h-2 bg-nail-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Portrait */}
          <div className="flex flex-col items-center fade-up">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-full"
                style={{ border: "2px dashed oklch(var(--gold) / 0.4)" }}
              />
              <img
                src="/assets/generated/pratima-founder.dim_400x400.jpg"
                alt="Pratima, Founder of Nail World"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-luxury"
              />
            </div>
            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-sm">
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "8+", label: "Years Exp." },
                { value: "100%", label: "Premium" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="text-center py-4 px-2 rounded-xl"
                  style={{ backgroundColor: "oklch(var(--blush))" }}
                >
                  <p className="font-playfair text-2xl font-bold text-gold">
                    {badge.value}
                  </p>
                  <p className="font-inter text-xs text-nail-muted mt-0.5">
                    {badge.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="fade-up fade-up-delay-2">
            <SectionLabel>Our Founder</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-nail-dark mb-4 leading-tight">
              Meet <span className="text-gold">Pratima</span>
            </h2>
            <GoldDivider />
            <p className="font-inter text-nail-muted leading-relaxed mb-4">
              With over 8 years of experience in the nail industry, Pratima has
              transformed thousands of hands into works of art. Her passion for
              nail artistry began as a personal love for beauty, and evolved
              into a thriving premium nail studio in the heart of Ghaziabad.
            </p>
            <p className="font-inter text-nail-muted leading-relaxed mb-8">
              At Nail World by Pratima, we believe that beautiful nails aren't a
              luxury — they're self-care. Every client is treated with
              personalized attention, premium international products, and a
              warm, welcoming experience that keeps them coming back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <RoseButton href={WHATSAPP_URL} data-ocid="about.primary_button">
                Book with Pratima
              </RoseButton>
              <a
                href="tel:+919810128513"
                className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-nail-dark hover:text-gold transition-colors"
                data-ocid="about.link"
              >
                <Phone size={16} className="text-gold" />
                +91 98101 28513
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", phone: "", message: "" });
  };

  const inputCls =
    "w-full font-inter text-sm border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all bg-white text-nail-dark placeholder:text-nail-muted";

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(var(--blush))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-up">
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-nail-dark mb-4">
            Visit Us
          </h2>
          <GoldDivider />
          <p className="font-inter text-nail-muted max-w-lg mx-auto">
            Find us at Astoria Boulevard Mall, Ghaziabad or reach out to book
            your next appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Map + info */}
          <div className="fade-up space-y-6">
            {/* Map */}
            <div
              className="rounded-2xl overflow-hidden shadow-card border"
              style={{ borderColor: "oklch(var(--nail-border))" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.99!2d77.4355!3d28.6742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1a4!2sAstoria%20Boulevard%20Mall%20Ghaziabad!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nail World by Pratima Location"
              />
            </div>

            {/* Contact details */}
            <div className="bg-white rounded-2xl p-7 shadow-card space-y-5">
              <h3 className="font-playfair text-2xl font-bold text-nail-dark">
                Contact Details
              </h3>

              <div className="flex items-start gap-4">
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "oklch(var(--blush))" }}
                >
                  <MapPin size={16} className="text-gold" />
                </span>
                <div>
                  <p className="font-inter text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                    Address
                  </p>
                  <p className="font-inter text-sm text-nail-dark leading-relaxed">
                    LGF 7, Astoria Boulevard Mall,
                    <br />
                    Hint Chowk, RDC, Sector 15,
                    <br />
                    Raj Nagar, Ghaziabad, UP 201002
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "oklch(var(--blush))" }}
                >
                  <Phone size={16} className="text-gold" />
                </span>
                <div>
                  <p className="font-inter text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+919810128513"
                    className="font-inter text-sm text-nail-dark hover:text-gold transition-colors font-medium"
                    data-ocid="contact.link"
                  >
                    +91 98101 28513
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "oklch(var(--blush))" }}
                >
                  <Clock size={16} className="text-gold" />
                </span>
                <div>
                  <p className="font-inter text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                    Working Hours
                  </p>
                  <p className="font-inter text-sm text-nail-dark font-medium">
                    11:00 AM – 8:00 PM
                  </p>
                  <p className="font-inter text-xs text-nail-muted">All Days</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-2">
                <a
                  href="tel:+919810128513"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-inter text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: "oklch(var(--gold))" }}
                  data-ocid="contact.primary_button"
                >
                  <Phone size={15} /> Call Now
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-inter text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: "#25D366" }}
                  data-ocid="contact.secondary_button"
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="fade-up fade-up-delay-2">
            <div
              className="bg-white rounded-2xl shadow-card p-8 border"
              style={{ borderColor: "oklch(var(--nail-border))" }}
            >
              <h3 className="font-playfair text-2xl font-bold text-nail-dark mb-2">
                Send a Message
              </h3>
              <p className="font-inter text-sm text-nail-muted mb-7">
                We'll reach out to confirm your appointment quickly.
              </p>

              {submitted ? (
                <div
                  className="text-center py-12"
                  data-ocid="contact.success_state"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "oklch(var(--blush))" }}
                  >
                    <span className="text-2xl">💅</span>
                  </div>
                  <h4 className="font-playfair text-xl font-bold text-nail-dark mb-2">
                    Message Sent!
                  </h4>
                  <p className="font-inter text-sm text-nail-muted">
                    Thank you! Pratima will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 font-inter text-sm text-gold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="contact.panel"
                >
                  <div>
                    <label
                      htmlFor="c-name"
                      className="font-inter text-xs font-semibold uppercase tracking-wider text-nail-dark block mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="e.g. Priya Sharma"
                      className={inputCls}
                      style={{
                        borderColor: "oklch(var(--nail-border))",
                        outlineColor: "oklch(var(--rose))",
                      }}
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="c-phone"
                      className="font-inter text-xs font-semibold uppercase tracking-wider text-nail-dark block mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      placeholder="+91 XXXXX XXXXX"
                      className={inputCls}
                      style={{
                        borderColor: "oklch(var(--nail-border))",
                        outlineColor: "oklch(var(--rose))",
                      }}
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="c-msg"
                      className="font-inter text-xs font-semibold uppercase tracking-wider text-nail-dark block mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="c-msg"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      placeholder="Tell us what service you're interested in, preferred date/time..."
                      className={`${inputCls} resize-none`}
                      style={{
                        borderColor: "oklch(var(--nail-border))",
                        outlineColor: "oklch(var(--rose))",
                      }}
                      data-ocid="contact.textarea"
                    />
                  </div>
                  <RoseButton
                    className="w-full"
                    data-ocid="contact.submit_button"
                  >
                    Send Message
                  </RoseButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? window.location.hostname
      : "nailworldbypratima.com";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="text-white"
      style={{ backgroundColor: "oklch(0.18 0.008 42)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-playfair text-2xl font-bold tracking-widest uppercase text-gold">
                Nail World
              </span>
              <br />
              <span className="font-cormorant italic text-sm font-medium text-white/60 tracking-wider">
                by Pratima
              </span>
            </div>
            <p className="font-inter text-sm text-white/50 leading-relaxed mb-5">
              Luxury Nails, Perfect Style. Premium nail studio in Ghaziabad
              offering expert nail art and care services.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: "oklch(1 0 0 / 0.1)" }}
                data-ocid="footer.link"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: "oklch(1 0 0 / 0.1)" }}
                data-ocid="footer.link"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: "#25D366" }}
                data-ocid="footer.link"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-inter text-xs font-semibold uppercase tracking-widest text-gold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-white/50 hover:text-gold transition-colors flex items-center gap-2"
                    data-ocid="footer.link"
                  >
                    <ChevronRight size={12} className="text-gold" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-inter text-xs font-semibold uppercase tracking-widest text-gold mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="font-inter text-sm text-white/50 hover:text-gold transition-colors flex items-center gap-2"
                    data-ocid="footer.link"
                  >
                    <ChevronRight size={12} className="text-gold" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter text-xs font-semibold uppercase tracking-widest text-gold mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-1 flex-shrink-0" />
                <span className="font-inter text-sm text-white/50 leading-relaxed">
                  LGF 7, Astoria Boulevard Mall, Hint Chowk, RDC, Sector 15, Raj
                  Nagar, Ghaziabad, UP 201002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+919810128513"
                  className="font-inter text-sm text-white/50 hover:text-gold transition-colors"
                  data-ocid="footer.link"
                >
                  +91 98101 28513
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={14} className="text-gold flex-shrink-0" />
                <span className="font-inter text-sm text-white/50">
                  11:00 AM – 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid oklch(1 0 0 / 0.1)" }}
        >
          <p className="font-inter text-sm text-white/30 text-center">
            © {year} Nail World by Pratima. All rights reserved.
          </p>
          <p className="font-inter text-xs text-white/25">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating Buttons ─────────────────────────────────────────────────────────

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3 items-center">
      {/* Book Now pill */}
      <a
        href="#contact"
        className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full font-inter text-xs font-semibold text-white shadow-xl hover:-translate-y-0.5 transition-all duration-300"
        style={{ backgroundColor: "oklch(var(--rose))" }}
        data-ocid="booknow.button"
      >
        <Sparkles size={13} /> Book Now
      </a>
      {/* WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:-translate-y-1 transition-all duration-300"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat on WhatsApp"
        data-ocid="whatsapp.button"
      >
        <MessageCircle size={22} className="text-white" />
      </a>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
