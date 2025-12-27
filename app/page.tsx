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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
          <div className="flex justify-between items-center h-28">
            <div className="text-2xl font-light tracking-[0.3em] hover:tracking-[0.4em] transition-all duration-300">
              HAMPSTEAD
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12 text-base font-light">
              <Link href="#manifesto" className="hover:text-gray-300 transition-colors relative group">
                <span>The Manifesto</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"/>
              </Link>
              <Link href="#ecosystem" className="hover:text-gray-300 transition-colors relative group">
                <span>Ecosystem</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"/>
              </Link>
              <Link href="#intelligence" className="hover:text-gray-300 transition-colors relative group">
                <span>Intelligence</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"/>
              </Link>
              <Link href="#contact" className="px-8 py-3 border border-white/30 hover:bg-white hover:text-black transition-all duration-300">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-8 h-8"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className={`absolute h-0.5 w-full bg-white transition-all duration-300 ${
                mobileMenuOpen ? 'top-1/2 rotate-45' : 'top-0'
              }`}/>
              <span className={`absolute top-1/2 h-0.5 w-full bg-white transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}/>
              <span className={`absolute h-0.5 w-full bg-white transition-all duration-300 ${
                mobileMenuOpen ? 'top-1/2 -rotate-45' : 'bottom-0'
              }`}/>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 border-t border-white/10' : 'max-h-0'
        }`}>
          <div className="px-8 py-10 space-y-6 bg-black/95 backdrop-blur-xl text-lg">
            <Link href="#manifesto" className="block hover:text-gray-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              The Manifesto
            </Link>
            <Link href="#ecosystem" className="block hover:text-gray-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Ecosystem
            </Link>
            <Link href="#intelligence" className="block hover:text-gray-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Intelligence
            </Link>
            <Link href="#contact" className="block hover:text-gray-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - MASSIVE */}
      <section className="relative pt-48 pb-32 px-8 lg:px-12 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-radial from-blue-950/20 via-transparent to-transparent opacity-40"/>
        <div className="max-w-[1800px] mx-auto relative z-10 w-full">
          <div className="space-y-20 animate-fade-in">
            <div className="inline-block">
              <div className="text-sm tracking-[0.5em] text-gray-400 mb-4 animate-slide-down uppercase">
                Palace Court, NW3
              </div>
              <div className="h-px w-24 bg-gradient-to-r from-white/50 to-transparent"/>
            </div>

            <h1 className="text-7xl md:text-[10rem] lg:text-[14rem] font-light leading-[0.85] tracking-tight animate-slide-up">
              The Analog Era<br />
              of Property is<br />
              <span className="italic bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent animate-gradient">
                Over
              </span>.
            </h1>

            <div className="flex flex-col sm:flex-row gap-8 pt-12 animate-slide-up-delayed">
              <Link
                href="#ecosystem"
                className="group px-12 py-6 bg-white text-black font-light tracking-[0.2em] hover:bg-gray-100 transition-all duration-300 relative overflow-hidden text-lg"
              >
                <span className="relative z-10">EXPLORE THE SYSTEM</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"/>
              </Link>
              <Link
                href="#manifesto"
                className="px-12 py-6 border-2 border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-300 font-light tracking-[0.2em] text-lg"
              >
                READ THE MANIFESTO
              </Link>
            </div>

            <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-12 animate-fade-in-delayed">
              <div className="text-center md:text-left">
                <div className="text-7xl md:text-8xl font-light mb-4 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">8+</div>
                <div className="text-lg text-gray-400 tracking-wide">Digital Properties</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-7xl md:text-8xl font-light mb-4 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">4</div>
                <div className="text-lg text-gray-400 tracking-wide">AI Intelligence Tools</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-7xl md:text-8xl font-light mb-4 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">57+</div>
                <div className="text-lg text-gray-400 tracking-wide">Service Verticals</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-7xl md:text-8xl font-light mb-4 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">100%</div>
                <div className="text-lg text-gray-400 tracking-wide">Vertical Integration</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-24 bg-gradient-to-b from-white/50 to-transparent"/>
        </div>
      </section>

      {/* Manifesto Section - EXPANDED */}
      <section id="manifesto" className="py-48 px-8 lg:px-12 bg-gradient-to-b from-black via-zinc-950 to-black relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent"/>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="space-y-24">
            <div className="text-center mb-32">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-light mb-10 tracking-tight">
                The Manifesto
              </h2>
              <div className="h-px w-32 bg-white/30 mx-auto"/>
            </div>

            <div className="space-y-20 text-2xl md:text-4xl lg:text-5xl font-light leading-[1.6] text-gray-300">
              <div className="p-12 md:p-16 border-l-4 border-white/20 hover:border-white/60 transition-all duration-500 hover:translate-x-4">
                <p className="text-white text-3xl md:text-5xl mb-8">To Our Clients and Partners,</p>
                <p>
                  For too long, the property industry in North West London has been defined by <span className="text-white">fragmentation</span>.
                </p>
              </div>

              <div className="p-12 md:p-16 border-l-4 border-white/20 hover:border-white/60 transition-all duration-500 hover:translate-x-4">
                <p>
                  The Architect doesn't talk to the Builder. The Builder doesn't understand the Planning Officer.
                  The Maintenance team is reactive, not proactive. And the Client? The Client is left managing
                  the chaos, paying a premium for <span className="text-white">inefficiency</span>.
                </p>
              </div>

              <div className="p-16 md:p-24 bg-white/5 backdrop-blur-sm border-2 border-white/10 my-20">
                <p className="text-white text-4xl md:text-6xl lg:text-7xl text-center font-normal leading-tight">
                  At Hampstead Renovations Group,<br/>we rejected this model.
                </p>
              </div>

              <div className="p-12 md:p-16 border-l-4 border-white/20 hover:border-white/60 transition-all duration-500 hover:translate-x-4">
                <p>
                  We realized that in the 21st century, you cannot build superior homes just by pouring better
                  concrete. You must build better <span className="text-white italic text-5xl md:text-6xl">systems</span>.
                </p>
              </div>

              <div className="pt-24">
                <h3 className="text-5xl md:text-7xl lg:text-8xl font-light mb-16 text-white text-center">
                  Code and Concrete
                </h3>
                <p className="text-center mb-12 text-3xl md:text-4xl">
                  We have spent the last decade building a vertically integrated ecosystem<br/>
                  that owns every vertical of the property lifecycle:
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Grid - LARGER CARDS */}
      <section id="ecosystem" className="py-48 px-8 lg:px-12 bg-black relative">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8">The Consumer Brands</h2>
            <p className="text-2xl md:text-3xl text-gray-400">Division 1: Front-Facing Services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-48">
            {[
              {
                num: "01",
                title: "HRG Holding",
                subtitle: "The Mothership",
                desc: "Corporate HQ. Investor relations & group strategy. The command center for the entire ecosystem.",
                tech: "Next.js 15"
              },
              {
                num: "02",
                title: "Hampstead Architects",
                subtitle: "Silent Luxury",
                desc: "Premium portfolio showcasing heritage-sensitive design. High-end lead capture for discerning clients.",
                tech: "Astro / Next.js"
              },
              {
                num: "03",
                title: "Hampstead Security",
                subtitle: "Emergency Response",
                desc: "24/7 emergency locksmith services. Aggressive SEO for immediate response situations.",
                tech: "Astro"
              },
              {
                num: "04",
                title: "Hampstead On-Demand",
                subtitle: "The Booking Engine",
                desc: "Uber-style booking for 57 property maintenance services. From plumbing to electrical work.",
                tech: "Next.js 15"
              },
              {
                num: "05",
                title: "Design Journal",
                subtitle: "Editorial Platform",
                desc: "Content hub for heritage & design insights. Establishing thought leadership in NW London property.",
                tech: "Next.js + Contentlayer"
              },
            ].map((brand, i) => (
              <div
                key={i}
                className="group relative p-12 md:p-14 border-2 border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-zinc-900/50 to-black backdrop-blur-sm"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500"/>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-10">
                    <div className="text-8xl md:text-9xl font-light text-white/10 group-hover:text-white/20 transition-colors">
                      {brand.num}
                    </div>
                    <div className="text-sm px-4 py-2 border border-white/20 text-gray-400">
                      {brand.tech}
                    </div>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-light mb-4 text-white group-hover:text-blue-300 transition-colors">
                    {brand.title}
                  </h3>
                  <p className="text-lg text-gray-500 mb-6 italic">{brand.subtitle}</p>
                  <p className="text-gray-400 leading-relaxed text-xl">
                    {brand.desc}
                  </p>

                  <div className="mt-10 flex items-center text-lg text-gray-500 group-hover:text-white transition-colors">
                    <span>Explore</span>
                    <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Intelligence Grid - LARGER */}
          <div id="intelligence" className="text-center mb-32">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8">The Intelligence Grid</h2>
            <p className="text-2xl md:text-3xl text-gray-400">Division 2: AI & Data Tools</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: "🧠",
                title: "Planning Intelligence Agent",
                desc: "RAG-based AI consultant ingesting thousands of Camden/Barnet planning documents. Finds the path of least resistance before you break ground.",
                tech: "Next.js + OpenAI + RAG"
              },
              {
                icon: "🏛️",
                title: "Heritage Checker",
                desc: "PostGIS spatial analysis for Listed Building and Conservation Area status. Instant compliance verification.",
                tech: "Next.js + Supabase + PostGIS"
              },
              {
                icon: "📊",
                title: "Precedent AI",
                desc: "Semantic search engine for approved planning precedents. Learn from what worked for your neighbors.",
                tech: "Python (FastAPI) + Vector DB"
              },
              {
                icon: "✓",
                title: "Trade Compliance Check",
                desc: "Automated insurance and license verification for contractors. Real-time Companies House integration.",
                tech: "Next.js + Companies House API"
              },
            ].map((tool, i) => (
              <div
                key={i}
                className="group relative p-16 md:p-20 border-2 border-blue-500/20 hover:border-blue-400/60 transition-all duration-500 bg-gradient-to-br from-blue-950/20 to-purple-950/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="text-8xl mb-10 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                  {tool.icon}
                </div>

                <h3 className="text-4xl md:text-5xl font-light mb-8 text-white group-hover:text-blue-300 transition-colors">
                  {tool.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-10 text-xl md:text-2xl">
                  {tool.desc}
                </p>

                <div className="text-sm px-4 py-2 border border-blue-500/30 text-blue-400 inline-block">
                  {tool.tech}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The New Standard - MASSIVE */}
      <section className="py-56 px-8 lg:px-12 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"/>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"/>
        </div>

        <div className="max-w-[1600px] mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-9xl lg:text-[12rem] font-light mb-24 leading-tight">
            The New Standard
          </h2>

          <div className="space-y-20 text-3xl md:text-5xl lg:text-6xl font-light text-gray-300">
            <p className="leading-relaxed">
              We do not just offer services.<br/>
              We offer <span className="text-white text-5xl md:text-7xl lg:text-8xl font-normal">Certainty</span>.
            </p>

            <p className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl leading-relaxed">
              Whether you are a homeowner in Belsize Park requiring a seamless renovation,<br/>
              or a developer in Swiss Cottage needing an AI-backed planning argument<br/>
              to unlock site value, you are no longer hiring a "tradesman."
            </p>

            <div className="py-24">
              <p className="text-4xl md:text-6xl lg:text-8xl text-white font-light leading-tight">
                You are plugging into the most<br/>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-5xl md:text-7xl lg:text-9xl">
                  advanced property infrastructure
                </span><br/>
                in London.
              </p>
            </div>
          </div>

          <div className="mt-32 h-px w-64 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"/>
          <p className="mt-16 text-base tracking-[0.5em] text-gray-500 uppercase">
            Welcome to the Group
          </p>
        </div>
      </section>

      {/* Contact Section - LARGER */}
      <section id="contact" className="py-48 px-8 lg:px-12 bg-black border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h3 className="text-5xl md:text-6xl font-light mb-12">Get in Touch</h3>
              <div className="space-y-8 text-gray-400 text-xl">
                <div>
                  <p className="text-base text-gray-500 mb-2 uppercase tracking-wide">Address</p>
                  <p className="text-white text-2xl">Hampstead Renovations Group</p>
                  <p className="text-xl">Palace Court</p>
                  <p className="text-xl">NW3, London</p>
                </div>
                <div>
                  <p className="text-base text-gray-500 mb-2 uppercase tracking-wide">Inquiries</p>
                  <a href="mailto:hello@hampstead.group" className="text-white text-2xl hover:text-blue-400 transition-colors">
                    hello@hampstead.group
                  </a>
                </div>
              </div>

              <div className="mt-16">
                <Link
                  href="#ecosystem"
                  className="inline-block px-12 py-6 bg-white text-black hover:bg-gray-100 transition-all duration-300 font-light tracking-[0.2em] text-lg"
                >
                  SCHEDULE CONSULTATION
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-5xl md:text-6xl font-light mb-12">Our Ecosystem</h3>
              <div className="grid grid-cols-2 gap-8">
                {[
                  "HRG Holding",
                  "Hampstead Architects",
                  "Hampstead Security",
                  "On-Demand Services",
                  "Design Journal",
                  "Planning Intelligence",
                  "Heritage Checker",
                  "Trade Compliance"
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 border-2 border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 cursor-pointer group"
                  >
                    <span className="text-lg text-gray-400 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 lg:px-12 bg-black border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-base text-gray-500 space-y-6 md:space-y-0">
            <p>&copy; 2025 Hampstead Renovations Group. All rights reserved.</p>
            <p className="tracking-wider">Built with precision. Deployed with confidence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
