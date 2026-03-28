"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Intersection observer for scroll-reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  const consumerBrands = [
    {
      title: "HRG Holding",
      desc: "Corporate headquarters, investor relations, and group strategy. The nerve centre of the Hampstead Renovations ecosystem.",
      url: "https://hampsteadrenovationsgroup.co.uk",
      accent: "from-white to-gray-400",
    },
    {
      title: "Hampstead Architects",
      desc: "RIBA-chartered architects specialising in heritage-sensitive design, conservation area planning, and listed building projects across NW London.",
      url: "https://hampsteadarchitects.co.uk",
      accent: "from-gray-300 to-gray-500",
    },
    {
      title: "Hampstead Renovations",
      desc: "Premium residential renovations — from single-room refurbishments to full house transformations. One studio, one contract, one team.",
      url: "https://www.hampsteadrenovations.co.uk",
      accent: "from-gray-400 to-gray-600",
    },
    {
      title: "Hampstead Security",
      desc: "24/7 emergency locksmith and security services. Lock changes, access control, CCTV installation, and forced entry repair across Hampstead and NW London.",
      url: "#",
      accent: "from-gray-500 to-gray-700",
    },
    {
      title: "On-Demand Property Services",
      desc: "57+ property maintenance services — plumbing, electrical, carpentry, damp proofing, roofing, and everything in between. One call handles everything.",
      url: "/property_maintenance/local-property-repairs-hampstead",
      accent: "from-gray-600 to-gray-800",
    },
    {
      title: "The Design Journal",
      desc: "Heritage architecture, interior design insight, and renovation case studies. The editorial arm of the Hampstead Renovations Group.",
      url: "#",
      accent: "from-gray-700 to-gray-900",
    },
  ];

  const aiTools = [
    {
      title: "Planning Intelligence",
      desc: "AI-powered planning consultant. Upload documents, ask questions in plain English, and get instant analysis of planning policy, constraints, and precedents.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      title: "Heritage Checker",
      desc: "Instant listed building and conservation area verification. Check constraints before you design, not after planning refuses your application.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Precedent AI",
      desc: "Search engine for planning decisions. Find approved precedents that match your project type, location, and conservation constraints across London boroughs.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Trade Compliance",
      desc: "Contractor verification and compliance engine. Gas Safe, NICEIC, FENSA, and heritage accreditation checks — before anyone sets foot on your site.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      color: "from-amber-500/20 to-orange-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Cursor Glow Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.04), transparent 80%)`,
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-700">
                <span className="text-black font-bold text-lg">H</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-base font-bold tracking-tight block leading-tight">HAMPSTEAD</span>
                <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">Renovations Group</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {[
                { label: "Vision", href: "#vision" },
                { label: "Ecosystem", href: "#ecosystem" },
                { label: "Services", href: "/property_maintenance/local-property-repairs-hampstead" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <a
                href="tel:02080548756"
                className="text-sm font-semibold bg-white text-black px-6 py-2.5 hover:bg-gray-200 transition-colors"
              >
                020 8054 8756
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-8 space-y-6">
            {[
              { label: "Vision", href: "#vision" },
              { label: "Ecosystem", href: "#ecosystem" },
              { label: "Services", href: "/property_maintenance/local-property-repairs-hampstead" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-lg text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:02080548756"
              className="block text-lg font-semibold bg-white text-black px-6 py-3 text-center"
            >
              Call 020 8054 8756
            </a>
            <a
              href="https://wa.me/447459345456"
              className="block text-lg text-green-400 text-center"
            >
              WhatsApp Us
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen relative flex items-center">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
              animation: "gridMove 20s linear infinite",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-10 animate-fade-in">
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/15 text-xs tracking-[0.3em] text-gray-400 uppercase">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Palace Court, NW3 &mdash; Est. 2024
              </div>

              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
                The Operating
                <br />
                <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                  System
                </span>
              </h1>

              <p className="text-2xl lg:text-3xl text-gray-400 font-light leading-relaxed max-w-xl">
                For North West London Property
              </p>

              <p className="text-base text-gray-500 max-w-lg leading-relaxed">
                Architects, engineers, builders, and AI &mdash; vertically integrated under one roof.
                From planning intelligence to property maintenance. We don&apos;t coordinate trades.
                We are the trades.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#ecosystem"
                  className="group relative px-8 py-4 bg-white text-black font-semibold overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.12)]"
                >
                  <span className="relative z-10">Explore Ecosystem</span>
                  <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Link>
                <a
                  href="tel:02080548756"
                  className="px-8 py-4 border border-white/25 hover:bg-white/10 transition-all text-center"
                >
                  Call 020 8054 8756
                </a>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 animate-fade-in-delayed">
              {[
                { num: "8+", label: "Digital Properties" },
                { num: "4", label: "AI Intelligence Tools" },
                { num: "57+", label: "Maintenance Services" },
                { num: "£10M", label: "Insured by Aviva" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group p-6 lg:p-8 border border-white/10 hover:border-white/25 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06]"
                >
                  <div className="text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
                    {stat.num}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="hidden lg:flex justify-center mt-20 animate-bounce">
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        id="vision"
        ref={(el) => { sectionRefs.current["vision"] = el; }}
        className="py-32 lg:py-40 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black"></div>

        <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12">
          <div
            className={`text-center space-y-20 transition-all duration-1000 ${
              isVisible("vision") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="space-y-6">
              <div className="text-xs tracking-[0.4em] text-gray-500 uppercase">The Vision</div>
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold">The Problem</h2>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
            </div>

            <div className="space-y-12 text-xl lg:text-2xl text-gray-400 font-light leading-relaxed">
              <p>The Architect doesn&apos;t talk to the Builder.</p>
              <p>The Builder doesn&apos;t understand the Planning Officer.</p>
              <p>The Maintenance team is reactive, not proactive.</p>
              <p className="text-gray-500">
                And the homeowner? They&apos;re left managing 6 contractors, 4 invoices,
                and a prayer that the loft conversion doesn&apos;t fail Building Control.
              </p>
            </div>

            <div className="relative py-16 my-16">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              <div className="relative border-y border-white/15 py-12 lg:py-16">
                <p className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  At Hampstead Renovations Group,
                  <br />
                  <span className="text-gray-400">we rejected this model entirely.</span>
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <p className="text-2xl lg:text-3xl font-light text-gray-300">
                You cannot build superior homes
                <br />
                just by pouring better concrete.
              </p>
              <p className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
                You must build better systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section
        id="ecosystem"
        ref={(el) => { sectionRefs.current["ecosystem"] = el; }}
        className="py-32 lg:py-40 relative"
      >
        <div className="absolute inset-0 bg-black"></div>

        <div
          className={`relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 transition-all duration-1000 ${
            isVisible("ecosystem") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Consumer Brands */}
          <div className="mb-32 lg:mb-40">
            <div className="mb-16">
              <div className="text-xs tracking-[0.4em] text-gray-500 mb-4 uppercase">Division I</div>
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">Consumer Brands</h2>
              <p className="text-lg text-gray-500 max-w-2xl">
                Front-facing services across architecture, construction, security, and property maintenance.
                Each brand operates independently but shares infrastructure, quality standards, and data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {consumerBrands.map((item, i) => (
                <Link
                  key={i}
                  href={item.url}
                  className="group relative p-8 lg:p-10 border border-white/10 hover:border-white/25 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.accent}`}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0 translate-x-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Intelligence Grid */}
          <div>
            <div className="mb-16">
              <div className="text-xs tracking-[0.4em] text-gray-500 mb-4 uppercase">Division II</div>
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">Intelligence Grid</h2>
              <p className="text-lg text-gray-500 max-w-2xl">
                AI-powered tools that give our clients — and the public — an unfair advantage in
                planning, compliance, and decision-making.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {aiTools.map((item, i) => (
                <div
                  key={i}
                  className="group relative p-10 lg:p-12 border border-white/15 hover:border-white/30 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm transition-all duration-500 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  ></div>

                  <div className="relative z-10">
                    <div className="text-white/50 mb-6 group-hover:text-white/80 transition-colors duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-white/[0.06] to-transparent blur-3xl"></div>

        <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-12 text-center space-y-20">
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            We Don&apos;t Offer
            <br />
            <span className="bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <div className="relative py-12">
            <p className="text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">Certainty</p>
          </div>

          <div className="space-y-10 text-xl lg:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
            <p>
              Whether you&apos;re a homeowner in Belsize Park commissioning a loft conversion, or a developer
              in Swiss Cottage navigating conservation area planning constraints&mdash;
            </p>
            <p className="text-2xl lg:text-3xl text-white font-normal">
              You&apos;re no longer hiring a tradesman.
            </p>
            <p className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white pt-8">
              You&apos;re plugging into the most advanced
              <br />
              property infrastructure in London.
            </p>
          </div>

          <div className="pt-16">
            <div className="inline-block border-t border-white/15 pt-6">
              <p className="text-xs tracking-[0.5em] text-gray-600 uppercase">Welcome to the Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section
        id="services-highlight"
        ref={(el) => { sectionRefs.current["services-highlight"] = el; }}
        className="py-24 lg:py-32 relative"
      >
        <div className="absolute inset-0 bg-black"></div>
        <div
          className={`relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 transition-all duration-1000 ${
            isVisible("services-highlight") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-xs tracking-[0.4em] text-gray-500 uppercase">Featured</div>
              <h2 className="text-4xl lg:text-5xl font-bold">
                57+ Property Services.{" "}
                <span className="text-gray-400">One Phone Call.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Emergency plumbing at 2am. A heritage sash window restoration that needs an architect&apos;s eye.
                An EICR certificate before your tenancy renewal. Whatever the job, our on-demand division
                handles it — backed by the full weight of our RIBA-chartered practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/property_maintenance/local-property-repairs-hampstead"
                  className="px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-colors text-center"
                >
                  View All Services
                </Link>
                <a
                  href="https://wa.me/447459345456"
                  className="px-8 py-4 border border-green-500/30 text-green-400 hover:bg-green-500/10 transition-all text-center"
                >
                  WhatsApp for a Quote
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Emergency Repairs",
                "Plumbing & Heating",
                "Electrical Works",
                "Structural & Building",
                "Damp & Waterproofing",
                "Roofing & Exterior",
                "Carpentry & Joinery",
                "Decoration & Finishing",
              ].map((service, i) => (
                <div key={i} className="p-5 border border-white/10 hover:border-white/20 bg-white/[0.02] transition-all">
                  <p className="text-sm font-medium">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        ref={(el) => { sectionRefs.current["contact"] = el; }}
        className="py-32 lg:py-40 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black"></div>

        <div
          className={`relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 transition-all duration-1000 ${
            isVisible("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Contact Info */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-16">Get in Touch</h2>

              <div className="space-y-10 mb-12">
                <div>
                  <div className="text-xs tracking-wider text-gray-600 uppercase mb-3">Landline</div>
                  <a href="tel:02080548756" className="text-3xl font-bold hover:text-gray-300 transition-colors block">
                    020 8054 8756
                  </a>
                </div>

                <div>
                  <div className="text-xs tracking-wider text-gray-600 uppercase mb-3">WhatsApp</div>
                  <a
                    href="https://wa.me/447459345456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors block"
                  >
                    +44 7459 345456
                  </a>
                </div>

                <div>
                  <div className="text-xs tracking-wider text-gray-600 uppercase mb-3">Email</div>
                  <a
                    href="mailto:contact@hampsteadrenovations.co.uk"
                    className="text-xl font-bold hover:text-gray-300 transition-colors inline-block"
                  >
                    contact@hampsteadrenovations.co.uk
                  </a>
                </div>

                <div>
                  <div className="text-xs tracking-wider text-gray-600 uppercase mb-3">Address</div>
                  <p className="text-xl font-bold mb-1">Hampstead Renovations Group</p>
                  <p className="text-lg text-gray-400">Unit 3, Palace Court</p>
                  <p className="text-lg text-gray-400">250 Finchley Road</p>
                  <p className="text-lg text-gray-400">Hampstead, London NW3 6DN</p>
                </div>

                <div>
                  <div className="text-xs tracking-wider text-gray-600 uppercase mb-3">Hours</div>
                  <p className="text-base text-gray-400">Monday &ndash; Friday: 9am &ndash; 6pm</p>
                  <p className="text-base text-gray-400">Saturday: By appointment</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:02080548756"
                  className="px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-all text-center"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/447459345456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-green-500/30 text-green-400 font-semibold hover:bg-green-500/10 transition-all text-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Ecosystem List */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-16">The Ecosystem</h2>
              <div className="space-y-4">
                {[
                  { name: "HRG Holding", type: "Corporate" },
                  { name: "Hampstead Architects", type: "Architecture" },
                  { name: "Hampstead Renovations", type: "Construction" },
                  { name: "Hampstead Security", type: "Security" },
                  { name: "On-Demand Property Services", type: "Maintenance" },
                  { name: "The Design Journal", type: "Editorial" },
                  { name: "Planning Intelligence AI", type: "AI Tool" },
                  { name: "Heritage Checker", type: "AI Tool" },
                  { name: "Precedent AI", type: "AI Tool" },
                  { name: "Trade Compliance", type: "AI Tool" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-white/25 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-2 h-2 bg-white/30 rounded-full group-hover:bg-white transition-colors"></span>
                      <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-600 uppercase tracking-wider">{item.type}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 border border-white/10 bg-white/[0.02]">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Company Registration</p>
                <p className="text-sm text-gray-400">Hampstead Renovations Ltd &mdash; 16838595</p>
                <p className="text-xs text-gray-500 mt-3">RIBA Chartered Practice &bull; £10M Insured (Aviva)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-black"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-black font-bold text-sm">H</span>
                </div>
                <span className="text-sm font-bold tracking-tight">HAMPSTEAD</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                The operating system for North West London property.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold mb-4 uppercase tracking-wider text-gray-400">Services</h4>
              <div className="space-y-2">
                <Link href="/property_maintenance/local-property-repairs-hampstead" className="block text-sm text-gray-500 hover:text-white transition-colors">Property Repairs</Link>
                <Link href="#ecosystem" className="block text-sm text-gray-500 hover:text-white transition-colors">Architecture</Link>
                <Link href="#ecosystem" className="block text-sm text-gray-500 hover:text-white transition-colors">Renovations</Link>
                <Link href="#ecosystem" className="block text-sm text-gray-500 hover:text-white transition-colors">Security</Link>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold mb-4 uppercase tracking-wider text-gray-400">Contact</h4>
              <div className="space-y-2 text-sm text-gray-500">
                <p><a href="tel:02080548756" className="hover:text-white transition-colors">020 8054 8756</a></p>
                <p><a href="https://wa.me/447459345456" className="hover:text-white transition-colors">WhatsApp</a></p>
                <p><a href="mailto:contact@hampsteadrenovations.co.uk" className="hover:text-white transition-colors">Email Us</a></p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold mb-4 uppercase tracking-wider text-gray-400">Address</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Unit 3, Palace Court<br />
                250 Finchley Road<br />
                Hampstead, London NW3 6DN
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600">
              &copy; 2025 Hampstead Renovations Group. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              RIBA Chartered Practice &bull; Company No. 16838595 &bull; £10M Insured
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(80px); }
        }
      `}</style>
    </div>
  );
}
