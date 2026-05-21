export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff22] text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Discord Server Management
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Clean Up Discord Role Bloat
          <span className="text-[#58a6ff]"> Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Scan your Discord servers for unused roles, inactive members with elevated permissions, and get actionable cleanup recommendations — all in minutes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Get Started — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🔍", title: "Role Scanner", desc: "Detect unused and redundant roles across your entire server instantly." },
          { icon: "👤", title: "Member Audit", desc: "Flag inactive members holding admin or elevated permissions." },
          { icon: "🧹", title: "Auto Cleanup", desc: "Execute cleanup actions automatically or review them manually first." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited server scans",
              "Role & permission audit reports",
              "Inactive member detection",
              "One-click or scheduled cleanup",
              "Discord OAuth — no bot required",
              "Email summary reports"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Cleaning Roles
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Does this require a Discord bot in my server?",
              a: "No. We use Discord OAuth to connect with your account. You authorize access and we read your server data through the official Discord API — no bot installation needed."
            },
            {
              q: "Will it automatically delete roles without my approval?",
              a: "Only if you choose the automated mode. By default, all cleanup actions are shown as recommendations first. You review and approve each action before anything changes."
            },
            {
              q: "What counts as an 'inactive member' with elevated permissions?",
              a: "Members who haven't sent a message or been active in your server for 30+ days (configurable) but still hold roles with admin, manage server, or other sensitive permissions."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>© {new Date().getFullYear()} Discord Role Audit Cleaner. Not affiliated with Discord Inc.</p>
      </footer>
    </main>
  );
}
