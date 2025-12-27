import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-xl font-light tracking-wider">
              HAMPSTEAD RENOVATIONS GROUP
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-light">
              <Link href="#manifesto" className="hover:text-gray-300 transition-colors">
                The Manifesto
              </Link>
              <Link href="#services" className="hover:text-gray-300 transition-colors">
                Services
              </Link>
              <Link href="#contact" className="hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="text-sm tracking-widest text-gray-400 mb-4">
                PALACE COURT, NW3
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight">
              The Analog Era of<br />Property is <span className="italic">Over</span>.
            </h1>
            <div className="h-px w-24 bg-white/30"></div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 text-lg font-light leading-relaxed text-gray-300">
            <div>
              <h2 className="text-2xl font-light mb-6 text-white">
                To Our Clients and Partners,
              </h2>
              <p>
                For too long, the property industry in North West London has been defined by fragmentation.
              </p>
            </div>

            <p>
              The Architect doesn't talk to the Builder. The Builder doesn't understand the Planning Officer.
              The Maintenance team is reactive, not proactive. And the Client? The Client is left managing
              the chaos, paying a premium for inefficiency.
            </p>

            <p className="text-white text-xl">
              At Hampstead Renovations Group, we rejected this model.
            </p>

            <p>
              We realized that in the 21st century, you cannot build superior homes just by pouring better
              concrete. You must build better <span className="italic text-white">systems</span>.
            </p>

            <div className="pt-8">
              <h3 className="text-3xl font-light mb-8 text-white">
                Code and Concrete
              </h3>
              <p className="mb-6">
                We have spent the last decade building a vertically integrated ecosystem that owns every
                vertical of the property lifecycle:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-6 lg:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="group border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="text-6xl font-light text-white/20 group-hover:text-white/40 transition-colors">
                  01
                </div>
                <div className="w-12 h-px bg-white/20 mt-8"></div>
              </div>
              <h3 className="text-2xl font-light mb-4 text-white">
                We digitized the rules
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Our <span className="text-white italic">Planning Intelligence Agent</span> and{" "}
                <span className="text-white italic">Heritage Checker</span> ingest thousands of council
                documents to find the path of least resistance for your project before we even break ground.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="text-6xl font-light text-white/20 group-hover:text-white/40 transition-colors">
                  02
                </div>
                <div className="w-12 h-px bg-white/20 mt-8"></div>
              </div>
              <h3 className="text-2xl font-light mb-4 text-white">
                We curated the vision
              </h3>
              <p className="text-gray-400 leading-relaxed">
                <span className="text-white italic">Hampstead Architects & Interiors</span> removes the ego
                from design, matching you with the exact talent required for your specific asset class.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="text-6xl font-light text-white/20 group-hover:text-white/40 transition-colors">
                  03
                </div>
                <div className="w-12 h-px bg-white/20 mt-8"></div>
              </div>
              <h3 className="text-2xl font-light mb-4 text-white">
                We industrialized the execution
              </h3>
              <p className="text-gray-400 leading-relaxed">
                <span className="text-white italic">Hampstead Renovations</span> and{" "}
                <span className="text-white italic">Trade Compliance Check</span> ensure that every contractor
                on site is vetted, insured, and operating under a unified command structure.
              </p>
            </div>

            {/* Service 4 */}
            <div className="group border border-white/10 p-8 hover:border-white/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="text-6xl font-light text-white/20 group-hover:text-white/40 transition-colors">
                  04
                </div>
                <div className="w-12 h-px bg-white/20 mt-8"></div>
              </div>
              <h3 className="text-2xl font-light mb-4 text-white">
                We secured the asset
              </h3>
              <p className="text-gray-400 leading-relaxed">
                From <span className="text-white italic">Hampstead Security</span> to{" "}
                <span className="text-white italic">On-Demand Maintenance</span>, we protect the value of
                the property long after the build is complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The New Standard */}
      <section className="py-32 px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-12 leading-tight">
            The New Standard
          </h2>
          <div className="space-y-8 text-xl font-light text-gray-300">
            <p>
              We do not just offer services. We offer{" "}
              <span className="text-white text-2xl">Certainty</span>.
            </p>
            <p className="max-w-3xl mx-auto">
              Whether you are a homeowner in Belsize Park requiring a seamless renovation, or a developer
              in Swiss Cottage needing an AI-backed planning argument to unlock site value, you are no
              longer hiring a "tradesman."
            </p>
            <p className="text-2xl text-white pt-8">
              You are plugging into the most advanced property infrastructure in London.
            </p>
          </div>
          <div className="mt-16 h-px w-32 bg-white/30 mx-auto"></div>
          <p className="mt-8 text-sm tracking-widest text-gray-500">
            WELCOME TO THE GROUP
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8 bg-zinc-900 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light mb-6">Get in Touch</h3>
              <div className="space-y-4 text-gray-400">
                <p>Hampstead Renovations Group</p>
                <p>Palace Court</p>
                <p>NW3, London</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">Our Ecosystem</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Planning Intelligence Agent
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Hampstead Architects & Interiors
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Hampstead Renovations
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Hampstead Security
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  On-Demand Maintenance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-8 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2025 Hampstead Renovations Group. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Built with precision. Deployed with confidence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
