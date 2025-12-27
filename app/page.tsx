"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Minimal Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto px-12 py-6 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            HRG
          </Link>
          <div className="flex gap-10 text-sm">
            <Link href="#vision" className="hover:opacity-60 transition">Vision</Link>
            <Link href="#ecosystem" className="hover:opacity-60 transition">Ecosystem</Link>
            <Link href="#contact" className="hover:opacity-60 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero - Split Screen Design */}
      <section className="min-h-screen grid lg:grid-cols-2">
        {/* Left - Dark Side */}
        <div className="bg-black text-white flex items-center justify-center p-20">
          <div className="max-w-xl">
            <div className="text-sm tracking-[0.3em] text-gray-400 mb-8">PALACE COURT, NW3</div>
            <h1 className="text-6xl font-bold mb-8 leading-tight">
              The Operating System
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
              For North West London Property
            </p>
            <Link href="#ecosystem" className="inline-block bg-white text-black px-8 py-4 hover:bg-gray-100 transition">
              Enter →
            </Link>
          </div>
        </div>

        {/* Right - Light Side */}
        <div className="bg-white text-black flex items-center justify-center p-20">
          <div className="max-w-xl">
            <div className="space-y-8 text-lg leading-relaxed">
              <p>
                <strong>8+ Digital Properties.</strong><br />
                <strong>4 AI Intelligence Tools.</strong><br />
                <strong>57+ Property Services.</strong>
              </p>
              <p className="text-gray-600">
                We rejected the fragmented property model and built a vertically integrated ecosystem.
                One codebase. One vision. Total certainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision - Full Width Statement */}
      <section id="vision" className="py-32 bg-gray-50">
        <div className="max-w-[900px] mx-auto px-12 text-center">
          <h2 className="text-5xl font-bold mb-16">The Problem</h2>

          <div className="space-y-12 text-xl text-gray-700">
            <p>
              The Architect doesn't talk to the Builder.
            </p>
            <p>
              The Builder doesn't understand the Planning Officer.
            </p>
            <p>
              The Maintenance team is reactive, not proactive.
            </p>
          </div>

          <div className="my-24 py-16 border-y border-black">
            <p className="text-4xl font-bold">
              At Hampstead Renovations Group,<br />
              we rejected this model.
            </p>
          </div>

          <p className="text-3xl font-bold">
            You cannot build superior homes<br />
            just by pouring better concrete.
          </p>

          <p className="text-5xl font-bold mt-12">
            You must build better systems.
          </p>
        </div>
      </section>

      {/* Ecosystem - Card Grid */}
      <section id="ecosystem" className="py-32">
        <div className="max-w-[1400px] mx-auto px-12">

          {/* Consumer Brands */}
          <div className="mb-32">
            <div className="mb-16">
              <div className="text-sm tracking-[0.3em] text-gray-500 mb-4">DIVISION I</div>
              <h2 className="text-5xl font-bold">Consumer Brands</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "HRG Holding",
                  desc: "Corporate HQ & investor relations",
                  color: "border-l-4 border-black"
                },
                {
                  title: "Hampstead Architects",
                  desc: "Heritage-sensitive design portfolio",
                  color: "border-l-4 border-gray-400"
                },
                {
                  title: "Hampstead Security",
                  desc: "24/7 emergency locksmith services",
                  color: "border-l-4 border-gray-600"
                },
                {
                  title: "On-Demand Services",
                  desc: "57 property maintenance services",
                  color: "border-l-4 border-gray-500"
                },
                {
                  title: "Design Journal",
                  desc: "Heritage & design content hub",
                  color: "border-l-4 border-gray-700"
                },
              ].map((item, i) => (
                <div key={i} className={`bg-white p-8 shadow-lg hover:shadow-xl transition ${item.color}`}>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Intelligence Grid */}
          <div>
            <div className="mb-16">
              <div className="text-sm tracking-[0.3em] text-gray-500 mb-4">DIVISION II</div>
              <h2 className="text-5xl font-bold">Intelligence Grid</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Planning Intelligence",
                  desc: "AI consultant for planning documents",
                  icon: "🤖"
                },
                {
                  title: "Heritage Checker",
                  desc: "Listed building compliance verification",
                  icon: "🏛️"
                },
                {
                  title: "Precedent AI",
                  desc: "Planning precedent search engine",
                  icon: "🔍"
                },
                {
                  title: "Trade Compliance",
                  desc: "Contractor verification system",
                  icon: "✅"
                },
              ].map((item, i) => (
                <div key={i} className="bg-black text-white p-12 hover:bg-gray-900 transition">
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop - Bold Statement */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-[900px] mx-auto px-12 text-center">
          <h2 className="text-6xl font-bold mb-16">
            We Don't Offer Services
          </h2>

          <p className="text-7xl font-bold mb-20">
            We Offer Certainty
          </p>

          <div className="space-y-8 text-xl text-gray-300">
            <p>
              Whether you're a homeowner in Belsize Park or a developer in Swiss Cottage,
            </p>
            <p className="text-2xl text-white">
              You're no longer hiring a tradesman.
            </p>
            <p className="text-3xl font-bold text-white mt-12">
              You're plugging into the most advanced<br />
              property infrastructure in London.
            </p>
          </div>

          <div className="mt-20 pt-12 border-t border-white/20">
            <p className="text-sm tracking-[0.3em] text-gray-500">WELCOME TO THE GROUP</p>
          </div>
        </div>
      </section>

      {/* Contact - Side by Side */}
      <section id="contact" className="py-32">
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="grid md:grid-cols-2 gap-20">

            {/* Contact Info */}
            <div>
              <h2 className="text-5xl font-bold mb-12">Get in Touch</h2>

              <div className="space-y-8 mb-12">
                <div>
                  <div className="text-sm tracking-wider text-gray-500 mb-2">ADDRESS</div>
                  <p className="text-xl font-bold">Hampstead Renovations Group</p>
                  <p className="text-xl">Palace Court, NW3, London</p>
                </div>

                <div>
                  <div className="text-sm tracking-wider text-gray-500 mb-2">EMAIL</div>
                  <a href="mailto:hello@hampstead.group" className="text-xl font-bold hover:opacity-60 transition">
                    hello@hampstead.group
                  </a>
                </div>
              </div>

              <Link href="#ecosystem" className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition">
                Schedule Consultation
              </Link>
            </div>

            {/* Ecosystem List */}
            <div>
              <h2 className="text-5xl font-bold mb-12">The Ecosystem</h2>

              <div className="space-y-4">
                {[
                  "HRG Holding",
                  "Hampstead Architects",
                  "Hampstead Security",
                  "On-Demand Services",
                  "Design Journal",
                  "Planning Intelligence AI",
                  "Heritage Checker",
                  "Precedent AI",
                  "Trade Compliance"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-200">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">
            © 2025 Hampstead Renovations Group. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Built with precision. Deployed with confidence.
          </p>
        </div>
      </footer>
    </div>
  );
}
