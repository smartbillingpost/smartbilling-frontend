export default function Pillars() {
  const pillars = [
    {
      title: "Easy Billing",
      desc: "Make clean, professional bills with GST and discounts, and share them instantly on WhatsApp.",
      icon: "🧾",
    },
    {
      title: "GST Made Simple",
      desc: "Your regular billing data helps prepare GST returns and required reports — no extra work.",
      icon: "📊",
    },
    {
      title: "Clear Tax Credit View",
      desc: "See which GST credits are available and which need attention, in a simple and clear way.",
      icon: "🔍",
    },
    {
      title: "Know Your Business",
      desc: "See sales, expenses, profit, and stock value so you understand how your business is really doing.",
      icon: "📈",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Section heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Everything your business needs, in one place
          </h2>
          <p className="mt-3 text-slate-600">
            From daily billing to GST and business understanding —
            SmartBilling keeps things simple and connected.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition
                         hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4 text-3xl">
                {p.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-600">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
