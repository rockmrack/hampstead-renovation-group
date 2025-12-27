"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Grid */}
      <div className="fixed inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-base font-light tracking-[0.3em]">
              HAMPSTEAD
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 text-sm">
              <li><Link href="#about" className="hover:text-gray-400 transition-colors">About</Link></li>
              <li><Link href="#services" className="hover:text-gray-400 transition-colors">Services</Link></li>
              <li><Link href="#contact" className="hover:text-gray-400 transition-colors">Contact</Link></li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
                <span className={`w-full h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}/>
                <span className={`w-full h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <ul className="md:hidden pt-6 space-y-4 text-sm border-t border-white/10 mt-6">
              <li><Link href="#about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
              <li><Link href="#services" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
              <li><Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            </ul>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">Palace Court, NW3</p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                Building the Future of<br />
                North West London Property
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                Vertically integrated property ecosystem. AI-powered planning. Luxury renovations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="#services" className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm tracking-wide">
                EXPLORE SERVICES
              </Link>
              <Link href="#about" className="px-8 py-3 border border-white/30 hover:bg-white/10 transition-colors text-sm tracking-wide">
                LEARN MORE
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
              <div>
                <div className="text-3xl font-light mb-2">8+</div>
                <p className="text-xs text-gray-500">Digital Properties</p>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">4</div>
                <p className="text-xs text-gray-500">AI Tools</p>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">57+</div>
                <p className="text-xs text-gray-500">Services</p>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">100%</div>
                <p className="text-xs text-gray-500">Integrated</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 bg-zinc-950">
          <div className="max-w-3xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-4">Our Vision</h2>
              <div className="w-12 h-px bg-white/30 mx-auto"/>
            </div>

            <div className="space-y-8 text-base md:text-lg leading-relaxed text-gray-300">
              <p>
                For too long, the property industry in North West London has been defined by fragmentation.
              </p>

              <p>
                The Architect doesn't talk to the Builder. The Builder doesn't understand the Planning Officer.
                The Maintenance team is reactive, not proactive.
              </p>

              <div className="py-8 px-6 bg-white/5 border border-white/10 text-center">
                <p className="text-xl md:text-2xl text-white">
                  At Hampstead Renovations Group,<br />we rejected this model.
                </p>
              </div>

              <p>
                We realized you cannot build superior homes just by pouring better concrete.<br />
                You must build better <span className="text-white text-xl">systems</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-6">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Consumer Brands */}
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-light mb-3">Consumer Brands</h2>
                <p className="text-gray-500">Front-Facing Services</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "HRG Holding", desc: "Corporate HQ & investor relations" },
                  { title: "Hampstead Architects", desc: "Heritage-sensitive design portfolio" },
                  { title: "Hampstead Security", desc: "24/7 emergency locksmith services" },
                  { title: "On-Demand Services", desc: "57 property maintenance services" },
                  { title: "Design Journal", desc: "Heritage & design content hub" },
                ].map((item, i) => (
                  <div key={i} className="p-8 border border-white/10 hover:border-white/30 transition-colors bg-zinc-950/50">
                    <h3 className="text-xl font-light mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Tools */}
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-light mb-3">Intelligence Grid</h2>
                <p className="text-gray-500">AI & Data Tools</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Planning Intelligence", desc: "AI consultant for planning documents" },
                  { title: "Heritage Checker", desc: "Listed building compliance verification" },
                  { title: "Precedent AI", desc: "Planning precedent search engine" },
                  { title: "Trade Compliance", desc: "Contractor verification system" },
                ].map((item, i) => (
                  <div key={i} className="p-10 border border-blue-500/20 hover:border-blue-500/40 transition-colors bg-blue-950/10">
                    <h3 className="text-xl font-light mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-32 px-6 bg-zinc-950">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-light">The New Standard</h2>

            <div className="space-y-8 text-lg md:text-xl text-gray-300">
              <p>
                We don't just offer services.<br />
                We offer <span className="text-white text-2xl">Certainty</span>.
              </p>

              <p className="text-base md:text-lg">
                Whether you're a homeowner in Belsize Park or a developer in Swiss Cottage,<br />
                you're no longer hiring a tradesman.
              </p>

              <p className="text-xl md:text-2xl text-white pt-8">
                You're plugging into the most advanced<br />
                property infrastructure in London.
              </p>
            </div>

            <div className="pt-8">
              <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">Welcome to the Group</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-light mb-8">Get in Touch</h2>
                <div className="space-y-4 text-gray-400">
                  <div>
                    <p className="text-xs text-gray-600 uppercase mb-1">Address</p>
                    <p className="text-white">Hampstead Renovations Group</p>
                    <p>Palace Court, NW3, London</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase mb-1">Email</p>
                    <a href="mailto:hello@hampstead.group" className="text-white hover:text-gray-400 transition-colors">
                      hello@hampstead.group
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="#services" className="inline-block px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm tracking-wide">
                    SCHEDULE CONSULTATION
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-light mb-8">Our Ecosystem</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "HRG Holding",
                    "Architects",
                    "Security",
                    "On-Demand",
                    "Design Journal",
                    "Planning AI",
                    "Heritage Check",
                    "Compliance"
                  ].map((item, i) => (
                    <div key={i} className="p-4 border border-white/10 hover:bg-white/5 transition-colors text-sm text-gray-400">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; 2025 Hampstead Renovations Group. All rights reserved.</p>
          <p>Built with precision. Deployed with confidence.</p>
        </div>
      </footer>
    </div>
  );
}
