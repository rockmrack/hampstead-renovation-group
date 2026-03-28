import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local Property Repairs Hampstead | 57+ Services | Hampstead Renovations Group",
  description:
    "Expert local property repairs in Hampstead, NW3. From emergency plumbing and electrical faults to structural repairs, damp proofing, and full refurbishments. RIBA-backed quality. 020 8054 8756.",
  keywords: [
    "property repairs Hampstead",
    "local property maintenance NW3",
    "emergency repairs Hampstead",
    "plumbing Hampstead",
    "electrician Hampstead",
    "building repairs North West London",
    "property maintenance Hampstead",
    "handyman Hampstead",
    "damp proofing NW3",
    "roof repairs Hampstead",
  ],
  openGraph: {
    title: "Local Property Repairs Hampstead | Hampstead Renovations Group",
    description:
      "Expert local property repairs across Hampstead and NW London. 57+ maintenance services backed by RIBA architects and structural engineers.",
    type: "website",
  },
  alternates: {
    canonical: "https://hampsteadrenovationsgroup.co.uk/property_maintenance/local-property-repairs-hampstead",
  },
};

const services = [
  {
    category: "Emergency Repairs",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    items: [
      "Burst pipe repair & isolation",
      "Electrical fault finding",
      "Emergency boarding up",
      "Boiler breakdowns",
      "Lock changes & forced entry repair",
      "Flood damage response",
    ],
  },
  {
    category: "Plumbing & Heating",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    items: [
      "Central heating installation",
      "Radiator replacement & balancing",
      "Boiler servicing & upgrades",
      "Underfloor heating systems",
      "Bathroom plumbing & waste",
      "Mains water pressure boosting",
    ],
  },
  {
    category: "Electrical Works",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    items: [
      "Full & partial rewiring",
      "Consumer unit upgrades",
      "Lighting design & installation",
      "Smart home wiring",
      "EICR testing & certification",
      "EV charger installation",
    ],
  },
  {
    category: "Structural & Building",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    items: [
      "Crack & subsidence repair",
      "Underpinning works",
      "Load-bearing wall removal",
      "Chimney stack repair",
      "Lintel & beam replacement",
      "Party wall compliance",
    ],
  },
  {
    category: "Damp & Waterproofing",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    items: [
      "Rising damp treatment",
      "Penetrating damp repair",
      "Basement tanking & waterproofing",
      "Condensation solutions",
      "Mould remediation",
      "Cavity wall inspection",
    ],
  },
  {
    category: "Roofing & Exterior",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    items: [
      "Slate & tile roof repair",
      "Flat roof replacement",
      "Gutter & downpipe work",
      "Fascia & soffit replacement",
      "Chimney repointing & capping",
      "Lead flashing repair",
    ],
  },
  {
    category: "Carpentry & Joinery",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    items: [
      "Sash window restoration",
      "Bespoke shelving & storage",
      "Door hanging & fitting",
      "Staircase repair & restoration",
      "Timber floor restoration",
      "Period feature restoration",
    ],
  },
  {
    category: "Decoration & Finishing",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    items: [
      "Interior & exterior painting",
      "Wallpapering & feature walls",
      "Plastering & skimming",
      "Coving & cornice restoration",
      "Tiling — floor & wall",
      "Heritage colour matching",
    ],
  },
];

const areas = [
  "Hampstead", "Belsize Park", "Swiss Cottage", "West Hampstead",
  "Primrose Hill", "St John's Wood", "Kentish Town", "Highgate",
  "Golders Green", "Finchley Road", "Camden Town", "Kilburn",
  "Maida Vale", "South Hampstead", "Fortune Green", "Gospel Oak",
];

const trustSignals = [
  { stat: "57+", label: "Maintenance Services" },
  { stat: "RIBA", label: "Architect-Backed" },
  { stat: "£10M", label: "Insured (Aviva)" },
  { stat: "NW3", label: "Locally Based" },
];

export default function LocalPropertyRepairsHampstead() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5">
          <div className="flex justify-between items-center">
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-lg">H</span>
              </div>
              <div>
                <span className="text-base font-bold tracking-tight block leading-tight">HAMPSTEAD</span>
                <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">Renovations Group</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link href="/#ecosystem" className="text-sm text-gray-400 hover:text-white transition-colors">Services</Link>
              <a href="tel:02080548756" className="text-sm font-semibold bg-white text-black px-5 py-2.5 hover:bg-gray-200 transition-colors">
                020 8054 8756
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <nav className="mb-10 text-sm text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Property Maintenance</span>
            <span className="mx-2">/</span>
            <span className="text-white">Local Property Repairs Hampstead</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-xs tracking-widest uppercase text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Available 7 Days a Week
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
                Local Property<br />
                Repairs in<br />
                <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                  Hampstead
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-400 font-light leading-relaxed max-w-lg">
                From emergency call-outs to planned maintenance programmes. 57+ services delivered by qualified tradespeople, backed by RIBA-chartered architects and structural engineers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:02080548756"
                  className="group relative px-8 py-4 bg-white text-black font-semibold text-center overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Call 020 8054 8756
                  </span>
                </a>
                <a
                  href="https://wa.me/447459345456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 border border-green-500/40 text-green-400 font-semibold text-center hover:bg-green-500/10 transition-all"
                >
                  <span className="flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </span>
                </a>
              </div>
            </div>

            {/* Trust Signals Grid */}
            <div className="grid grid-cols-2 gap-4">
              {trustSignals.map((item, i) => (
                <div
                  key={i}
                  className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                    {item.stat}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Not Just Repairs.{" "}
              <span className="text-gray-400">Architect-Grade Solutions.</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Most repair companies send a tradesperson and hope for the best. We diagnose root causes
              using structural engineering expertise, then fix them permanently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Diagnose First",
                desc: "Every job starts with proper assessment. Our structural engineers and surveyors identify root causes, not just symptoms. No guesswork, no callbacks.",
                num: "01",
              },
              {
                title: "Qualified Trades",
                desc: "Gas Safe, NICEIC, FENSA, and heritage-accredited tradespeople. Every operative is vetted, insured, and working to RIBA-standard specifications.",
                num: "02",
              },
              {
                title: "Guaranteed Work",
                desc: "All repairs carry written guarantees. Backed by £10M Aviva insurance. Full project documentation including before/after photography and compliance certificates.",
                num: "03",
              },
            ].map((item, i) => (
              <div key={i} className="group p-10 border border-white/10 hover:border-white/25 bg-white/[0.02] transition-all duration-500">
                <div className="text-6xl font-bold text-white/10 mb-6 group-hover:text-white/20 transition-colors">
                  {item.num}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <div className="text-xs tracking-[0.4em] text-gray-500 mb-4 uppercase">57+ Services</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Complete Property Repair Services
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl">
              From minor fixes to major structural work. One call handles everything.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group p-8 border border-white/10 hover:border-white/25 bg-gradient-to-b from-white/[0.03] to-transparent transition-all duration-500"
              >
                <div className="text-white/60 mb-6 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-5">{service.category}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="w-1 h-1 bg-gray-600 rounded-full mt-2 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-500">Four steps to a permanent fix.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Call or WhatsApp", desc: "Describe the issue. Send photos if you can. We respond within 30 minutes during business hours." },
              { step: "2", title: "Free Assessment", desc: "We visit, diagnose the root cause, and provide a fixed-price quote. No hidden charges, no pressure." },
              { step: "3", title: "Expert Repair", desc: "Qualified tradespeople carry out the work to specification, with full dust sheets and site protection." },
              { step: "4", title: "Guaranteed Result", desc: "Written guarantee on all work. Compliance certificates issued. Follow-up check if needed." },
            ].map((item, i) => (
              <div key={i} className="relative text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 border border-white/20 flex items-center justify-center">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 text-gray-600">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Areas We Cover
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Based at Palace Court on Finchley Road, we serve Hampstead and surrounding areas
                within a focused radius — so response times stay fast and local knowledge runs deep.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {areas.map((area, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-3 border-b border-white/5 text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-white/30 rounded-full"></span>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-10">
                Common Questions
              </h2>
              <div className="space-y-8">
                {[
                  {
                    q: "Do you handle emergency repairs?",
                    a: "Yes. Call our landline on 020 8054 8756 or WhatsApp us on +44 7459 345456 for urgent issues including burst pipes, electrical faults, and security boarding. We aim to respond within the hour for emergencies.",
                  },
                  {
                    q: "Are your tradespeople qualified?",
                    a: "Every operative holds relevant accreditations — Gas Safe, NICEIC, FENSA, or heritage conservation certification depending on the trade. All are vetted, DBS-checked, and covered by our £10M Aviva policy.",
                  },
                  {
                    q: "Do you work on listed buildings?",
                    a: "Absolutely. Our parent company, Hampstead Renovations Ltd, has RIBA-chartered architects specialising in heritage properties. We understand listed building consent requirements and conservation area restrictions.",
                  },
                  {
                    q: "How quickly can you start?",
                    a: "Emergency work: same day. Planned repairs: typically within 3-5 working days. Larger projects requiring structural assessment: within 1-2 weeks of initial survey.",
                  },
                  {
                    q: "Do you provide written quotes?",
                    a: "Always. Every job receives a detailed, fixed-price quote before work begins. No hidden charges. The price you agree is the price you pay.",
                  },
                ].map((faq, i) => (
                  <div key={i} className="border-b border-white/10 pb-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/40 to-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent blur-3xl"></div>

        <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-12 text-center space-y-10">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            Need a Repair in<br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Hampstead?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-lg mx-auto">
            Call us, WhatsApp us, or email. Free assessment. Fixed-price quote. Guaranteed workmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="tel:02080548756"
              className="px-10 py-5 bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all"
            >
              020 8054 8756
            </a>
            <a
              href="https://wa.me/447459345456"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border border-green-500/40 text-green-400 font-bold text-lg hover:bg-green-500/10 transition-all"
            >
              WhatsApp +44 7459 345456
            </a>
          </div>

          <div className="pt-8 space-y-2 text-sm text-gray-500">
            <p>
              <a href="mailto:contact@hampsteadrenovations.co.uk" className="hover:text-white transition-colors">
                contact@hampsteadrenovations.co.uk
              </a>
            </p>
            <p>Unit 3, Palace Court, 250 Finchley Road, Hampstead, London NW3 6DN</p>
            <p>Monday-Friday 9am-6pm | Saturday by appointment</p>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Hampstead Renovations Group - Property Repairs",
            description:
              "Expert local property repairs in Hampstead, NW3. 57+ maintenance services backed by RIBA architects and structural engineers.",
            telephone: "020 8054 8756",
            email: "contact@hampsteadrenovations.co.uk",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Unit 3, Palace Court, 250 Finchley Road",
              addressLocality: "Hampstead",
              addressRegion: "London",
              postalCode: "NW3 6DN",
              addressCountry: "GB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 51.5468,
              longitude: -0.1801,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "13:00",
              },
            ],
            areaServed: areas.map((area) => ({
              "@type": "City",
              name: area,
            })),
            priceRange: "££",
            image: "https://hampsteadrenovationsgroup.co.uk/og-image.jpg",
            url: "https://hampsteadrenovationsgroup.co.uk/property_maintenance/local-property-repairs-hampstead",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Property Repair Services",
              itemListElement: services.map((s) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: s.category,
                },
              })),
            },
          }),
        }}
      />

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-black font-bold text-sm">H</span>
                </div>
                <span className="text-sm font-bold tracking-tight">HAMPSTEAD RENOVATIONS GROUP</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                RIBA Chartered Architects, Engineers & Builders. Company Registration: 16838595.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p><a href="tel:02080548756" className="hover:text-white transition-colors">020 8054 8756</a> (Landline)</p>
                <p><a href="https://wa.me/447459345456" className="hover:text-white transition-colors">+44 7459 345456</a> (WhatsApp)</p>
                <p><a href="mailto:contact@hampsteadrenovations.co.uk" className="hover:text-white transition-colors">contact@hampsteadrenovations.co.uk</a></p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Address</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
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
              Insured by Aviva &mdash; &pound;10M Professional Indemnity & Public Liability
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
