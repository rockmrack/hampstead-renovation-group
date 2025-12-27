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
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-sm font-light tracking-[0.4em]">
              HAMPSTEAD
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-12 text-sm font-light">
              <li><Link href="#vision" className="hover:text-gray-400 transition-colors">Vision</Link></li>
              <li><Link href="#ecosystem" className="hover:text-gray-400 transition-colors">Ecosystem</Link></li>
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
            <ul className="md:hidden pt-8 space-y-6 text-sm border-t border-white/10 mt-8">
              <li><Link href="#vision" onClick={() => setMobileMenuOpen(false)}>Vision</Link></li>
              <li><Link href="#ecosystem" onClick={() => setMobileMenuOpen(false)}>Ecosystem</Link></li>
              <li><Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            </ul>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section - Full Screen */}
        <section className="min-h-screen flex items-center justify-center px-8">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs tracking-[0.5em] text-gray-500 uppercase mb-12">Palace Court, NW3</p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[1.1] mb-16">
              Building the Future of<br />
              North West London Property
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 font-light mb-20 max-w-3xl mx-auto leading-relaxed">
              Vertically integrated property ecosystem.<br />
              AI-powered planning. Luxury renovations.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="#ecosystem" className="px-10 py-4 bg-white text-black hover:bg-gray-100 transition-all text-sm tracking-widest font-light">
                EXPLORE ECOSYSTEM
              </Link>
              <Link href="#vision" className="px-10 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all text-sm tracking-widest font-light">
                OUR VISION
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section - Huge Spacing */}
        <section className="py-40 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-extralight mb-6">8+</div>
                <p className="text-sm text-gray-500 tracking-wider">DIGITAL PROPERTIES</p>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-extralight mb-6">4</div>
                <p className="text-sm text-gray-500 tracking-wider">AI TOOLS</p>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-extralight mb-6">57+</div>
                <p className="text-sm text-gray-500 tracking-wider">SERVICES</p>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-extralight mb-6">100%</div>
                <p className="text-sm text-gray-500 tracking-wider">INTEGRATED</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section - Massive Padding */}
        <section id="vision" className="py-40 px-8 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-extralight mb-8">Our Vision</h2>
              <div className="w-16 h-px bg-white/20 mx-auto"/>
            </div>

            <div className="space-y-16 text-lg md:text-xl leading-relaxed text-gray-300 font-light">
              <p className="text-center">
                For too long, the property industry in North West London<br className="hidden md:block" />
                has been defined by fragmentation.
              </p>

              <p className="text-center">
                The Architect doesn't talk to the Builder.<br />
                The Builder doesn't understand the Planning Officer.<br />
                The Maintenance team is reactive, not proactive.
              </p>

              <div className="py-16 px-12 bg-white/5 border border-white/10 my-20">
                <p className="text-2xl md:text-3xl text-white font-light text-center leading-relaxed">
                  At Hampstead Renovations Group,<br />
                  we rejected this model.
                </p>
              </div>

              <p className="text-center text-xl md:text-2xl">
                We realized you cannot build superior homes<br className="hidden md:block" />
                just by pouring better concrete.
              </p>

              <p className="text-center text-2xl md:text-3xl text-white">
                You must build better <span className="italic">systems</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Ecosystem Section - Consumer Brands */}
        <section id="ecosystem" className="py-40 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-extralight mb-6">Consumer Brands</h2>
              <p className="text-gray-500 text-sm tracking-wider">FRONT-FACING SERVICES</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-32">
              {[
                { title: "HRG Holding", desc: "Corporate HQ & investor relations" },
                { title: "Hampstead Architects", desc: "Heritage-sensitive design portfolio" },
                { title: "Hampstead Security", desc: "24/7 emergency locksmith services" },
                { title: "On-Demand Services", desc: "57 property maintenance services" },
                { title: "Design Journal", desc: "Heritage & design content hub" },
              ].map((item, i) => (
                <div key={i} className="group p-12 border border-white/10 hover:border-white/30 transition-all bg-zinc-950/30">
                  <h3 className="text-2xl font-light mb-6">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intelligence Grid - Huge Gap */}
        <section className="py-40 px-8 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-extralight mb-6">Intelligence Grid</h2>
              <p className="text-gray-500 text-sm tracking-wider">AI & DATA TOOLS</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                { title: "Planning Intelligence", desc: "AI consultant for planning documents" },
                { title: "Heritage Checker", desc: "Listed building compliance verification" },
                { title: "Precedent AI", desc: "Planning precedent search engine" },
                { title: "Trade Compliance", desc: "Contractor verification system" },
              ].map((item, i) => (
                <div key={i} className="p-16 border border-blue-500/20 hover:border-blue-500/40 transition-all bg-blue-950/10">
                  <h3 className="text-2xl font-light mb-6">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition - Massive Spacing */}
        <section className="py-40 px-8">
          <div className="max-w-4xl mx-auto text-center space-y-20">
            <h2 className="text-4xl md:text-5xl font-extralight">The New Standard</h2>

            <div className="space-y-16 text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              <p>
                We don't just offer services.
              </p>

              <p className="text-3xl md:text-4xl text-white">
                We offer <span className="italic">Certainty</span>.
              </p>

              <p className="text-lg md:text-xl pt-8">
                Whether you're a homeowner in Belsize Park<br className="hidden md:block" />
                or a developer in Swiss Cottage,<br />
                you're no longer hiring a tradesman.
              </p>

              <p className="text-3xl md:text-4xl text-white pt-12">
                You're plugging into the most advanced<br />
                property infrastructure in London.
              </p>
            </div>

            <div className="pt-16">
              <p className="text-xs tracking-[0.5em] text-gray-500 uppercase">Welcome to the Group</p>
            </div>
          </div>
        </section>

        {/* Contact Section - Clean Layout */}
        <section id="contact" className="py-40 px-8 bg-zinc-950">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24">
              <div>
                <h2 className="text-3xl md:text-4xl font-extralight mb-12">Get in Touch</h2>

                <div className="space-y-8 text-gray-400">
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wider mb-3">Address</p>
                    <p className="text-white text-lg mb-1">Hampstead Renovations Group</p>
                    <p className="text-lg">Palace Court, NW3, London</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wider mb-3">Email</p>
                    <a href="mailto:hello@hampstead.group" className="text-white text-lg hover:text-gray-400 transition-colors">
                      hello@hampstead.group
                    </a>
                  </div>
                </div>

                <div className="mt-12">
                  <Link href="#ecosystem" className="inline-block px-10 py-4 bg-white text-black hover:bg-gray-100 transition-all text-sm tracking-widest font-light">
                    SCHEDULE CONSULTATION
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-extralight mb-12">Our Ecosystem</h2>

                <div className="grid grid-cols-2 gap-6">
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
                    <div key={i} className="p-6 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all text-sm text-gray-400 text-center">
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
      <footer className="py-12 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600 font-light">
          <p>&copy; 2025 Hampstead Renovations Group. All rights reserved.</p>
          <p className="tracking-wider">Built with precision. Deployed with confidence.</p>
        </div>
      </footer>
    </div>
  );
}
