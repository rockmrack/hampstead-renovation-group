"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Cursor Glow Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 80%)`
        }}
      />

      {/* Premium Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500">
                  <span className="text-black font-bold text-lg">H</span>
                </div>
                <span className="text-lg font-bold tracking-tight">HAMPSTEAD</span>
              </div>
            </Link>

            <div className="hidden md:flex gap-12 text-sm font-light">
              <Link href="#vision" className="relative group">
                <span className="relative z-10">Vision</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#ecosystem" className="relative group">
                <span className="relative z-10">Ecosystem</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#contact" className="relative group">
                <span className="relative z-10">Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - Cinematic Split */}
      <section className="min-h-screen relative flex items-center">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-16 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-10 animate-fade-in">
              <div className="inline-block">
                <div className="text-xs tracking-[0.4em] text-gray-500 mb-8 uppercase">
                  Palace Court, NW3
                </div>
              </div>

              <h1 className="text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                The Operating<br />
                <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                  System
                </span>
              </h1>

              <p className="text-2xl lg:text-3xl text-gray-400 font-light leading-relaxed max-w-xl">
                For North West London Property
              </p>

              <div className="flex gap-6 pt-8">
                <Link
                  href="#ecosystem"
                  className="group relative px-8 py-4 bg-white text-black font-medium overflow-hidden transition-all hover:px-12"
                >
                  <span className="relative z-10">Explore Ecosystem</span>
                  <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Link>
                <Link
                  href="#vision"
                  className="px-8 py-4 border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Our Vision
                </Link>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-8 animate-fade-in-delayed">
              {[
                { num: "8+", label: "Digital Properties", delay: "0s" },
                { num: "4", label: "AI Tools", delay: "0.1s" },
                { num: "57+", label: "Services", delay: "0.2s" },
                { num: "100%", label: "Integrated", delay: "0.3s" }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group p-8 border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-sm transition-all hover:scale-105"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="text-6xl font-bold mb-4 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
                    {stat.num}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Premium Typography */}
      <section id="vision" className="py-40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="text-center space-y-20">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-6xl lg:text-7xl font-bold">The Problem</h2>
              <div className="w-24 h-1 bg-white mx-auto"></div>
            </div>

            <div className="space-y-16 text-2xl lg:text-3xl text-gray-400 font-light leading-relaxed">
              <p className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                The Architect doesn't talk to the Builder.
              </p>
              <p className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                The Builder doesn't understand the Planning Officer.
              </p>
              <p className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                The Maintenance team is reactive, not proactive.
              </p>
            </div>

            <div className="relative py-20 my-32">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <div className="relative border-y border-white/20 py-16">
                <p className="text-4xl lg:text-5xl font-bold leading-tight">
                  At Hampstead Renovations Group,<br />
                  <span className="text-gray-400">we rejected this model.</span>
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <p className="text-3xl lg:text-4xl font-light">
                You cannot build superior homes<br />
                just by pouring better concrete.
              </p>

              <p className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
                You must build better systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem - Premium Cards */}
      <section id="ecosystem" className="py-40 relative">
        <div className="absolute inset-0 bg-black"></div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">

          {/* Consumer Brands */}
          <div className="mb-40">
            <div className="mb-20">
              <div className="text-xs tracking-[0.4em] text-gray-500 mb-6 uppercase">Division I</div>
              <h2 className="text-6xl lg:text-7xl font-bold mb-6">Consumer Brands</h2>
              <p className="text-xl text-gray-500">Front-Facing Services</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "HRG Holding", desc: "Corporate HQ & investor relations", accent: "from-white to-gray-400" },
                { title: "Hampstead Architects", desc: "Heritage-sensitive design portfolio", accent: "from-gray-300 to-gray-500" },
                { title: "Hampstead Renovations", desc: "Premium property renovations & construction", accent: "from-gray-400 to-gray-600" },
                { title: "Hampstead Security", desc: "24/7 emergency locksmith services", accent: "from-gray-500 to-gray-700" },
                { title: "On-Demand Services", desc: "57 property maintenance services", accent: "from-gray-600 to-gray-800" },
                { title: "Design Journal", desc: "Heritage & design content hub", accent: "from-gray-700 to-gray-900" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative p-10 border border-white/10 hover:border-white/30 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm transition-all duration-500 hover:scale-105 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.accent}`}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Intelligence Grid */}
          <div>
            <div className="mb-20">
              <div className="text-xs tracking-[0.4em] text-gray-500 mb-6 uppercase">Division II</div>
              <h2 className="text-6xl lg:text-7xl font-bold mb-6">Intelligence Grid</h2>
              <p className="text-xl text-gray-500">AI & Data Tools</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Planning Intelligence", desc: "AI consultant for planning documents", icon: "🤖", color: "from-blue-500/20 to-purple-500/20" },
                { title: "Heritage Checker", desc: "Listed building compliance verification", icon: "🏛️", color: "from-purple-500/20 to-pink-500/20" },
                { title: "Precedent AI", desc: "Planning precedent search engine", icon: "🔍", color: "from-pink-500/20 to-red-500/20" },
                { title: "Trade Compliance", desc: "Contractor verification system", icon: "✅", color: "from-red-500/20 to-orange-500/20" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative p-12 border border-white/20 hover:border-white/40 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm transition-all duration-500 hover:scale-105 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                  <div className="relative z-10">
                    <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Cinematic */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>

        {/* Radial Gradient Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-white/10 to-transparent blur-3xl"></div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-16 text-center space-y-24">
          <h2 className="text-7xl lg:text-8xl font-bold leading-tight">
            We Don't Offer<br />
            <span className="bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <div className="relative py-16">
            <p className="text-8xl lg:text-9xl font-bold">
              Certainty
            </p>
          </div>

          <div className="space-y-12 text-2xl lg:text-3xl text-gray-400 font-light max-w-4xl mx-auto">
            <p>
              Whether you're a homeowner in Belsize Park or a developer in Swiss Cottage,
            </p>
            <p className="text-3xl text-white">
              You're no longer hiring a tradesman.
            </p>
            <p className="text-4xl lg:text-5xl font-bold text-white pt-12">
              You're plugging into the most advanced<br />
              property infrastructure in London.
            </p>
          </div>

          <div className="pt-20">
            <div className="inline-block border-t border-white/20 pt-8">
              <p className="text-xs tracking-[0.5em] text-gray-600 uppercase">Welcome to the Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Premium Layout */}
      <section id="contact" className="py-40 relative">
        <div className="absolute inset-0 bg-black"></div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-32">

            {/* Contact Info */}
            <div>
              <h2 className="text-6xl font-bold mb-16">Get in Touch</h2>

              <div className="space-y-12 mb-16">
                <div className="group">
                  <div className="text-xs tracking-wider text-gray-600 uppercase mb-4">Address</div>
                  <p className="text-2xl font-bold mb-2 group-hover:text-gray-300 transition-colors">Hampstead Renovations Group</p>
                  <p className="text-xl text-gray-400">Palace Court, NW3, London</p>
                </div>

                <div className="group">
                  <div className="text-xs tracking-wider text-gray-600 uppercase mb-4">Email</div>
                  <a
                    href="mailto:hello@hampstead.group"
                    className="text-2xl font-bold hover:text-gray-300 transition-colors inline-block relative"
                  >
                    hello@hampstead.group
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </div>

              <Link
                href="#ecosystem"
                className="group inline-block px-10 py-5 bg-white text-black font-bold hover:bg-gray-200 transition-all relative overflow-hidden"
              >
                <span className="relative z-10">Schedule Consultation</span>
                <div className="absolute inset-0 bg-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>
            </div>

            {/* Ecosystem List */}
            <div>
              <h2 className="text-6xl font-bold mb-16">The Ecosystem</h2>

              <div className="space-y-6">
                {[
                  "HRG Holding",
                  "Hampstead Architects",
                  "Hampstead Renovations",
                  "Hampstead Security",
                  "On-Demand Services",
                  "Design Journal",
                  "Planning Intelligence AI",
                  "Heritage Checker",
                  "Precedent AI",
                  "Trade Compliance"
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-6 py-4 border-b border-white/10 hover:border-white/30 transition-all"
                  >
                    <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-xl text-gray-400 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-black"></div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm text-gray-600">
              © 2025 Hampstead Renovations Group. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 tracking-wider">
              Built with precision. Deployed with confidence.
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
