import {
  Check,
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    title: "Facials",
    description:
      "Rejuvenate your skin with our premium facial treatments using the latest techniques and luxury products tailored to your skin type.",
    image: "/assets/generated/service-facial.dim_400x300.jpg",
    icon: "✨",
  },
  {
    title: "Hair Care",
    description:
      "From expert cuts and vibrant color to nourishing treatments, our stylists craft looks that celebrate your individual beauty.",
    image: "/assets/generated/service-hair.dim_400x300.jpg",
    icon: "💇",
  },
  {
    title: "Makeup",
    description:
      "Whether for bridal, party, or everyday glam, our makeup artists create flawless looks that last all day and night.",
    image: "/assets/generated/service-makeup.dim_400x300.jpg",
    icon: "💄",
  },
  {
    title: "Waxing",
    description:
      "Smooth, gentle, and long-lasting waxing services for all skin types. We use premium wax for a comfortable experience.",
    image: null,
    icon: "🌸",
  },
  {
    title: "Nail Care",
    description:
      "Pamper yourself with our nail services — manicures, pedicures, nail art, and gel extensions for perfectly polished nails.",
    image: "/assets/generated/service-nails.dim_400x300.jpg",
    icon: "💅",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/assets/generated/gallery-1.dim_400x500.jpg",
    tall: true,
    alt: "Bridal Hairstyle",
  },
  {
    src: "/assets/generated/gallery-2.dim_400x300.jpg",
    tall: false,
    alt: "Skin Facial",
  },
  {
    src: "/assets/generated/gallery-3.dim_400x300.jpg",
    tall: false,
    alt: "Hair Color",
  },
  {
    src: "/assets/generated/gallery-4.dim_400x300.jpg",
    tall: false,
    alt: "Nail Art",
  },
  {
    src: "/assets/generated/gallery-5.dim_400x500.jpg",
    tall: true,
    alt: "Bridal Makeup",
  },
  {
    src: "/assets/generated/gallery-6.dim_400x300.jpg",
    tall: false,
    alt: "Hair Styling",
  },
];

// ─── Gold Button ─────────────────────────────────────────────────────────────

function GoldButton({
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
  const cls = `inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-poppins font-semibold text-sm rounded-full px-7 py-3 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${className}`;
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

// ─── Section Heading ─────────────────────────────────────────────────────────

function SectionHeading({
  title,
  subtitle,
}: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-14 fade-up">
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-salon-dark mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-poppins text-muted-salon text-base max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-0.5 w-16 bg-gold rounded-full" />
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex flex-col leading-tight"
            data-ocid="nav.link"
          >
            <span className="font-playfair text-2xl font-bold text-gold">
              Sakshi
            </span>
            <span className="font-poppins text-xs font-medium text-salon-dark tracking-widest uppercase">
              Salon &amp; Academy
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-poppins text-sm font-medium text-salon-dark hover:text-gold transition-colors duration-200"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <GoldButton href="#contact" data-ocid="nav.primary_button">
              Book Appointment
            </GoldButton>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-salon-dark hover:text-gold transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-blush shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-poppins text-sm font-medium text-salon-dark hover:text-gold transition-colors py-2 border-b border-blush last:border-0"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <GoldButton
              href="#contact"
              className="mt-2"
              data-ocid="nav.primary_button"
            >
              Book Appointment
            </GoldButton>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-salon.dim_1400x700.jpg')",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.52)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="font-poppins text-sm font-medium tracking-[0.25em] uppercase text-gold mb-4 fade-up">
          Welcome to Sakshi Salon &amp; Academy
        </p>
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gold leading-tight mb-6 fade-up fade-up-delay-1">
          Enhance Your Beauty
          <br />
          <em className="not-italic text-white">With Experts</em>
        </h1>
        <p className="font-poppins text-lg text-white/90 mb-10 fade-up fade-up-delay-2">
          Professional Salon &amp; Academy – 24 Hours Service
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up fade-up-delay-3">
          <GoldButton href="#contact" data-ocid="hero.primary_button">
            <Sparkles size={16} />
            Book Appointment
          </GoldButton>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-poppins font-semibold text-sm rounded-full px-7 py-3 hover:bg-white hover:text-salon-dark transition-all duration-300"
            data-ocid="hero.secondary_button"
          >
            Our Services <ChevronRight size={16} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Indulge in a world of beauty with our comprehensive range of luxury services crafted just for you."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`fade-up fade-up-delay-${Math.min(i + 1, 5)} bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
              data-ocid={`services.item.${i + 1}`}
            >
              {service.image ? (
                <div className="h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="h-52 bg-gradient-to-br from-blush to-white flex items-center justify-center">
                  <span className="text-6xl">{service.icon}</span>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{service.icon}</span>
                  <h3 className="font-playfair text-xl font-bold text-salon-dark">
                    {service.title}
                  </h3>
                </div>
                <p className="font-poppins text-sm text-muted-salon leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 mt-4 text-gold font-poppins text-sm font-semibold hover:gap-2 transition-all duration-200"
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

// ─── About ────────────────────────────────────────────────────────────────────

function AboutSection() {
  const highlights = [
    "Professional & Experienced Staff",
    "Latest Beauty Techniques",
    "Professional Training Courses Available",
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="fade-up">
            <p className="font-poppins text-sm font-semibold tracking-widest text-gold uppercase mb-3">
              About Us
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-salon-dark mb-6 leading-tight">
              Sakshi Salon
              <br />
              <span className="text-gold">&amp; Academy</span>
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-6" />
            <p className="font-poppins text-muted-salon leading-relaxed mb-6">
              Welcome to Sakshi Salon & Academy — Ghaziabad's premier
              destination for beauty and wellness. Nestled in the heart of
              Shastri Nagar, we combine artistry with expertise to deliver
              transformative beauty experiences that leave you feeling confident
              and radiant.
            </p>
            <p className="font-poppins text-muted-salon leading-relaxed mb-10">
              Beyond our salon services, our Academy offers professional
              training programs in beauty and cosmetology, empowering the next
              generation of beauty professionals with world-class education and
              hands-on experience.
            </p>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-gold rounded-full flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-white" />
                  </span>
                  <span className="font-poppins text-salon-dark font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <GoldButton href="#contact" data-ocid="about.primary_button">
                Learn More About Us
              </GoldButton>
            </div>
          </div>

          {/* Image */}
          <div className="relative fade-up fade-up-delay-2">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-2xl" />
            <img
              src="/assets/generated/about-salon.dim_500x600.jpg"
              alt="Sakshi Salon & Academy"
              className="relative z-10 w-full rounded-2xl shadow-xl object-cover"
              style={{ maxHeight: "580px" }}
            />
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-gold text-white rounded-2xl p-5 shadow-xl">
              <p className="font-poppins text-xs font-semibold tracking-wider uppercase mb-1">
                Open
              </p>
              <p className="font-playfair text-2xl font-bold">24 Hours</p>
              <p className="font-poppins text-xs opacity-80">
                Always Here For You
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Gallery"
          subtitle="A glimpse into the transformations and artistry we create every day at Sakshi Salon."
        />
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.src}
              className={`overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group fade-up fade-up-delay-${Math.min(i + 1, 5)} ${
                img.tall ? "gallery-tall" : ""
              }`}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact & Map ────────────────────────────────────────────────────────────

function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputCls =
    "w-full font-poppins text-sm border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white";

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Find Us"
          subtitle="Visit us at our salon in Ghaziabad or get in touch — we'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Map + contact info */}
          <div className="fade-up space-y-8">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-blush">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0!2d77.4166!3d28.6596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM5JzM0LjYiTiA3N8KwMjUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sakshi Salon Location"
              />
            </div>

            {/* Contact info */}
            <div className="bg-blush-light rounded-2xl p-8 space-y-5">
              <h3 className="font-playfair text-2xl font-bold text-salon-dark mb-6">
                Contact Info
              </h3>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                  <MapPin size={16} className="text-white" />
                </span>
                <div>
                  <p className="font-poppins text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                    Address
                  </p>
                  <p className="font-poppins text-sm text-salon-dark">
                    Shop No A, 5, near Carte Chowk, Mahindra Enclave,
                    <br />
                    Shastri Nagar, Ghaziabad, Uttar Pradesh 201002
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                  <Phone size={16} className="text-white" />
                </span>
                <div>
                  <p className="font-poppins text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+919315685969"
                    className="font-poppins text-sm text-salon-dark hover:text-gold transition-colors font-medium"
                    data-ocid="contact.link"
                  >
                    +91 9315685969
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                  <Mail size={16} className="text-white" />
                </span>
                <div>
                  <p className="font-poppins text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@sakshisalon.com"
                    className="font-poppins text-sm text-salon-dark hover:text-gold transition-colors font-medium"
                    data-ocid="contact.link"
                  >
                    info@sakshisalon.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                  <Clock size={16} className="text-white" />
                </span>
                <div>
                  <p className="font-poppins text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                    Timings
                  </p>
                  <p className="font-poppins text-sm text-salon-dark font-medium">
                    Open 24 Hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="fade-up fade-up-delay-2">
            <div className="bg-white rounded-2xl shadow-card p-8 border border-blush">
              <h3 className="font-playfair text-2xl font-bold text-salon-dark mb-2">
                Send Us a Message
              </h3>
              <p className="font-poppins text-sm text-muted-salon mb-8">
                We'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <div
                  className="text-center py-12"
                  data-ocid="contact.success_state"
                >
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={28} className="text-gold" />
                  </div>
                  <h4 className="font-playfair text-xl font-bold text-salon-dark mb-2">
                    Message Sent!
                  </h4>
                  <p className="font-poppins text-sm text-muted-salon">
                    Thank you for reaching out. We'll contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 font-poppins text-sm text-gold hover:underline"
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="font-poppins text-xs font-semibold text-salon-dark uppercase tracking-wider block mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        id="contact-name"
                        placeholder="Your Name"
                        className={inputCls}
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="font-poppins text-xs font-semibold text-salon-dark uppercase tracking-wider block mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        id="contact-email"
                        placeholder="Your Email"
                        className={inputCls}
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="font-poppins text-xs font-semibold text-salon-dark uppercase tracking-wider block mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, subject: e.target.value }))
                      }
                      id="contact-subject"
                      placeholder="How can we help?"
                      className={inputCls}
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="font-poppins text-xs font-semibold text-salon-dark uppercase tracking-wider block mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      required
                      id="contact-message"
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      placeholder="Tell us about your appointment or query..."
                      className={`${inputCls} resize-none`}
                      data-ocid="contact.textarea"
                    />
                  </div>
                  <GoldButton
                    className="w-full"
                    data-ocid="contact.submit_button"
                  >
                    Send Message
                  </GoldButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Newsletter ───────────────────────────────────────────────────────────────

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-20 bg-blush">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-up">
          <Sparkles className="mx-auto text-gold mb-4" size={32} />
          <h2 className="font-playfair text-4xl font-bold text-salon-dark mb-4">
            Subscribe for Beauty Tips &amp; Offers
          </h2>
          <p className="font-poppins text-muted-salon mb-10">
            Stay updated with the latest trends and exclusive offers from Sakshi
            Salon.
          </p>
          {subscribed ? (
            <div
              className="bg-gold/10 rounded-2xl p-8"
              data-ocid="newsletter.success_state"
            >
              <Check className="mx-auto text-gold mb-3" size={32} />
              <p className="font-playfair text-xl font-bold text-salon-dark">
                Thank You for Subscribing!
              </p>
              <p className="font-poppins text-sm text-muted-salon mt-2">
                You'll receive our latest beauty tips and exclusive offers.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              data-ocid="newsletter.panel"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 font-poppins text-sm border border-border bg-white rounded-full px-6 py-3 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                data-ocid="newsletter.input"
              />
              <GoldButton data-ocid="newsletter.submit_button">
                Subscribe
              </GoldButton>
            </form>
          )}
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
      : "sakshisalon.com";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      style={{ backgroundColor: "oklch(0.11 0 0)" }}
      className="text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-playfair text-3xl font-bold text-gold">
                Sakshi
              </span>
              <br />
              <span className="font-poppins text-xs font-medium text-white/70 tracking-widest uppercase">
                Salon &amp; Academy
              </span>
            </div>
            <p className="font-poppins text-sm text-white/60 leading-relaxed mb-6">
              Premier beauty salon and academy in Ghaziabad. Elevating beauty,
              one client at a time.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors"
                data-ocid="footer.link"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors"
                data-ocid="footer.link"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/919315685969"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors"
                data-ocid="footer.link"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-poppins text-sm font-semibold uppercase tracking-widest text-gold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-poppins text-sm text-white/60 hover:text-gold transition-colors flex items-center gap-2"
                    data-ocid="footer.link"
                  >
                    <ChevronRight size={12} className="text-gold" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services list */}
          <div>
            <h4 className="font-poppins text-sm font-semibold uppercase tracking-widest text-gold mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="font-poppins text-sm text-white/60 hover:text-gold transition-colors flex items-center gap-2"
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
            <h4 className="font-poppins text-sm font-semibold uppercase tracking-widest text-gold mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-1 flex-shrink-0" />
                <span className="font-poppins text-sm text-white/60 leading-relaxed">
                  Shop No A, 5, near Carte Chowk, Mahindra Enclave, Shastri
                  Nagar, Ghaziabad, UP 201002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+919315685969"
                  className="font-poppins text-sm text-white/60 hover:text-gold transition-colors"
                  data-ocid="footer.link"
                >
                  +91 9315685969
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:info@sakshisalon.com"
                  className="font-poppins text-sm text-white/60 hover:text-gold transition-colors"
                  data-ocid="footer.link"
                >
                  info@sakshisalon.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={14} className="text-gold flex-shrink-0" />
                <span className="font-poppins text-sm text-white/60">
                  Open 24 Hours
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-poppins text-sm text-white/40 text-center">
            © {year} Sakshi Salon &amp; Academy. All Rights Reserved.
          </p>
          <p className="font-poppins text-xs text-white/30">
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919315685969?text=Hello%20Sakshi%20Salon%20%26%20Academy!%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20the%20available%20slots%20and%20services.%20Thank%20you!"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:-translate-y-1 transition-all duration-300"
        style={{ backgroundColor: "#25D366" }}
        aria-label="WhatsApp"
        data-ocid="whatsapp.button"
      >
        <MessageCircle size={24} className="text-white" />
      </a>
      {/* Call Now */}
      <a
        href="tel:+919315685969"
        className="bg-gold hover:bg-gold-dark text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:-translate-y-1 transition-all duration-300"
        aria-label="Call Now"
        data-ocid="callnow.button"
      >
        <Phone size={20} className="text-white" />
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
        <AboutSection />
        <GallerySection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
