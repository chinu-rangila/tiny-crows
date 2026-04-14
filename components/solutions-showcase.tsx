import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

function CardIconAI() {
  return (
    <div
      className="relative flex h-28 w-36 shrink-0 items-center justify-center sm:h-32 sm:w-44"
      aria-hidden
    >
      <div className="absolute inset-0 rounded-2xl bg-[#0a2744]/90 shadow-[0_0_40px_rgba(56,189,248,0.25)] ring-1 ring-sky-400/30" />
      <svg
        viewBox="0 0 120 100"
        className="relative z-10 h-20 w-24 text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="18"
          y="22"
          width="84"
          height="56"
          rx="6"
          stroke="currentColor"
          strokeWidth="2"
          className="opacity-90"
        />
        <path
          d="M38 38c4-8 12-12 22-12s18 4 22 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="60" cy="48" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M44 72h32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M78 32l12-8v56l-12-8"
          fill="rgba(56,189,248,0.2)"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

function CardIconBreach() {
  return (
    <div
      className="relative flex h-28 w-36 shrink-0 items-center justify-center sm:h-32 sm:w-44"
      aria-hidden
    >
      <div className="absolute inset-0 rounded-2xl bg-[#1a0a0c] shadow-inner ring-1 ring-white/10" />
      <svg
        viewBox="0 0 120 100"
        className="relative z-10 h-20 w-24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 70 L40 50 L55 65 L75 35 L100 55"
          stroke="#64748b"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 70 L40 50 L55 65"
          stroke="#22c55e"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="75" cy="35" r="14" fill="#c42129" opacity="0.95" />
        <path
          d="M69 35l12 12M81 35L69 47"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect
          x="82"
          y="58"
          width="18"
          height="22"
          rx="3"
          stroke="#94a3b8"
          strokeWidth="2"
        />
        <path
          d="M88 68h6M88 74h6"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function CardIconReporting() {
  return (
    <div
      className="relative flex h-28 w-36 shrink-0 items-center justify-center sm:h-32 sm:w-44"
      aria-hidden
    >
      <div className="absolute inset-0 rounded-2xl bg-[#0a2744]/90 ring-1 ring-emerald-400/25" />
      <svg
        viewBox="0 0 120 100"
        className="relative z-10 h-20 w-24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="22" y="48" width="12" height="28" rx="2" fill="#334155" />
        <rect x="40" y="38" width="12" height="38" rx="2" fill="#475569" />
        <rect x="58" y="28" width="12" height="48" rx="2" fill="#64748b" />
        <rect x="76" y="42" width="12" height="34" rx="2" fill="#475569" />
        <path
          d="M24 32 L48 24 L72 18 L96 12"
          stroke="#22c55e"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="drop-shadow-[0_0_8px_rgba(34,197,94,0.9)]"
        />
        <circle cx="24" cy="32" r="3" fill="#22c55e" />
        <circle cx="96" cy="12" r="3" fill="#22c55e" />
      </svg>
    </div>
  );
}

export function SolutionsShowcase() {
  return (
    <div
      className={`${playfair.variable} min-h-screen w-full bg-[#05355e] font-sans text-white`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 md:py-24 lg:gap-16">
        <header className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-medium tracking-wide text-sky-100/80">
              A Legacy of Trust
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
              Solutions That Deliver Outcomes—Not Just Reports
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-sky-100/75 md:text-lg">
              Tinycrows combines deep security expertise with AI automation to
              identify real risks, simulate real threats, and strengthen your
              defenses—continuously and at scale.
            </p>
          </div>
          <div className="shrink-0 lg:pt-2">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-xl border border-sky-400/50 bg-[#042a4d] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:border-sky-300/70 hover:bg-[#06355f]"
            >
              Get Started
            </a>
          </div>
        </header>

        <ul id="get-started" className="flex list-none flex-col gap-5 p-0 scroll-mt-8">
          <li>
            <article className="flex flex-col items-stretch gap-6 rounded-3xl border border-sky-400/20 bg-sky-950/25 px-6 py-8 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-10 sm:py-10">
              <p
                className={`${playfair.className} max-w-xl text-2xl leading-snug text-white md:text-[1.65rem] md:leading-tight lg:text-[1.85rem]`}
              >
                AI Systems Secured, Risks Reduced, and Ready to Scale with
                Confidence
              </p>
              <CardIconAI />
            </article>
          </li>
          <li>
            <article className="flex flex-col items-stretch gap-6 rounded-3xl bg-[#c42129] px-6 py-8 shadow-lg shadow-black/20 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-10 sm:py-10">
              <p
                className={`${playfair.className} max-w-xl text-2xl leading-snug text-white md:text-[1.65rem] md:leading-tight lg:text-[1.85rem]`}
              >
                Breach Paths Eliminated Before They Become Incidents
              </p>
              <CardIconBreach />
            </article>
          </li>
          <li>
            <article className="flex flex-col items-stretch gap-6 rounded-3xl border border-sky-400/20 bg-sky-950/25 px-6 py-8 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-10 sm:py-10">
              <p
                className={`${playfair.className} max-w-xl text-2xl leading-snug text-white md:text-[1.65rem] md:leading-tight lg:text-[1.85rem]`}
              >
                In-Depth Reporting for Enhanced Security Insights
              </p>
              <CardIconReporting />
            </article>
          </li>
        </ul>
      </div>
    </div>
  );
}
