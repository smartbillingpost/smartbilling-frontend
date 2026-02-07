const highlights = [
  {
    title: "Works Offline & Stays Private",
    desc: (
      <>
        SmartBilling works even without internet.
        Your data is <strong>not shared with anyone</strong> and
        stays completely under your control.
      </>
    ),
    icon: "🔒",
  },
  {
    title: "Your Data, Your Control",
    desc: (
      <>
        Your business data stays <strong>on your device</strong>.
        No forced cloud storage. No third-party access.
      </>
    ),
    icon: "💾",
  },
  {
    title: "Easy for Business Owners",
    desc: (
      <>
        Made for everyday business use.
        <strong> No accounting knowledge</strong> needed
        to manage billing, GST, and reports.
      </>
    ),
    icon: "🤝",
  },
  {
    title: "Simple to Use Daily",
    desc: (
      <>
        Clean screens and guided steps make
        daily billing and tracking easy from day one.
      </>
    ),
    icon: "⚡",
  },
  {
    title: "Ready When Compliance Is Needed",
    desc: (
      <>
        Prepare GST reports and upload required 
        files using your regular business data,
        without extra work.
      </>
    ),
    icon: "📑",
  },
  {
    title: "Designed Around Real Businesses",
    desc: (
      <>
        Built for billing, compliance, reports,
        and control — the things businesses
        actually care about.
      </>
    ),
    icon: "🏢",
  },
];

export default function TrustHighlights() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Section intro */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Simple. Safe. In Your Control.
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Built for Indian businesses that want clarity,
            confidence, and control — without complexity.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-6
                         transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-4 text-3xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
