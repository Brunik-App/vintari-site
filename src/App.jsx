import brunik from "./assets/Brunik_Master_Transparent.png";
import FeatureCard from "./components/FeatureCard";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}
      <nav className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <img
              src={brunik}
              alt="Brunik"
              className="h-10 w-10"
            />

            <h1 className="text-2xl font-bold text-emerald-400">
              Brunik™
            </h1>
          </div>

          <a
            href="mailto:contact@brunik.app?subject=Brunik%20Inquiry"
            className="rounded-xl bg-emerald-500 px-5 py-2 font-semibold text-slate-950 hover:bg-emerald-400 inline-block"
          >
            Meet Brunik
          </a>

        </div>
      </nav>

      {/* HERO */}
      <main className="px-6 py-20">

        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">

          <img
            src={brunik}
            alt="Brunik"
            className="mb-8 w-72"
          />

          <h2 className="text-5xl font-bold">
            Meet Brunik™
          </h2>

          <div className="mt-6 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
            Intelligent Steward • In Development
          </div>

          <p className="mt-6 text-2xl font-semibold text-emerald-300">
            Looking After What's Next.
          </p>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Brunik is an Intelligent Steward inspired by the
            helpful Brownies of Scottish folklore.
          </p>

          <p className="mt-6 max-w-3xl text-lg text-slate-400">
            Built for the modern world, Brunik helps people
            understand complexity, preserve context, identify
            opportunities, and make better decisions.
          </p>

        </div>

      </main>

      {/* STORY */}
      <section className="bg-slate-900/50 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="mb-6 text-4xl font-bold">
            Inspired by an Old Kind of Helper
          </h2>

          <p className="text-lg leading-8 text-slate-300">
            For centuries, Scottish folklore spoke of Brownies:
            dependable helpers who worked quietly behind the scenes,
            solved problems before they became crises, and took pride
            in keeping things running smoothly.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Brunik carries that same spirit into the digital age.
            Where Brownies once cared for homes and workshops,
            Brunik helps care for information, operations,
            knowledge, and decisions.
          </p>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-20">

        <div className="mx-auto max-w-6xl px-6">

          <h2 className="mb-12 text-center text-4xl font-bold">
            How Brunik Helps
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            <FeatureCard
              title="Notice"
              description="Brunik identifies patterns, trends, opportunities, and signals that others may miss."
            />

            <FeatureCard
              title="Remember"
              description="Brunik preserves context and connects information over time so valuable knowledge isn't lost."
            />

            <FeatureCard
              title="Guide"
              description="Brunik helps people evaluate options, understand tradeoffs, and move forward confidently."
            />

          </div>

        </div>

      </section>

      {/* PHILOSOPHY */}
      <section className="bg-slate-900/50 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="mb-12 text-4xl font-bold">
            The Brunik Philosophy
          </h2>

          <div className="grid gap-10 md:grid-cols-2">

            <div>
              <h3 className="mb-3 text-xl font-semibold text-emerald-400">
                Everything Leaves Clues
              </h3>

              <p className="text-slate-400">
                Problems rarely appear without warning.
                Meaningful change begins with small signals.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-emerald-400">
                Understanding Before Action
              </h3>

              <p className="text-slate-400">
                Brunik seeks understanding before recommendations
                and clarity before conclusions.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-emerald-400">
                Memory Has Value
              </h3>

              <p className="text-slate-400">
                Better decisions come from preserved context.
                Brunik remembers what matters.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-emerald-400">
                Looking Ahead Matters
              </h3>

              <p className="text-slate-400">
                Brunik focuses not only on what happened,
                but on what may happen next.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* MEET BRUNIK */}
      <section className="py-20">

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">

          <div className="flex justify-center">

            <img
              src={brunik}
              alt="Brunik"
              className="w-80"
            />

          </div>

          <div>

            <h2 className="mb-6 text-4xl font-bold">
              Meet Brunik
            </h2>

            <p className="mb-4 text-lg text-slate-300">
              Brunik is an Intelligent Steward.
            </p>

            <p className="mb-4 text-slate-400">
              Inspired by the helpful Brownies of Scottish folklore,
              Brunik watches over operations, remembers context,
              identifies opportunities, and helps people prepare
              for what comes next.
            </p>

            <p className="mb-4 text-slate-400">
              Brunik is curious, observant, practical,
              and dependable.
            </p>

            <p className="text-slate-400">
              Brunik does not seek attention.
              Brunik seeks usefulness.
            </p>

          </div>

        </div>

      </section>

      {/* VISION */}
      <section className="bg-slate-900/50 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="mb-6 text-4xl font-bold">
            A New Kind of Intelligence
          </h2>

          <p className="text-lg leading-8 text-slate-300">
            Technology grows more complex each year.
            Information moves faster. Context becomes easier to lose.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Brunik exists to help people navigate that complexity.
            Our vision is to create an intelligence that helps
            individuals and organizations understand more,
            remember more, and make more confident decisions.
          </p>

        </div>

      </section>
      <section className="py-20">
  <div className="mx-auto max-w-4xl px-6 text-center">

    <h2 className="text-3xl font-bold">
      The Brunik Vision
    </h2>

    <p className="mt-6 text-lg leading-8 text-slate-300">
      Brunik began with a simple purpose:
      to help people better understand what is happening today
      so they can prepare for what comes next.
    </p>

    <p className="mt-6 text-slate-400">
      Inspired by the Brownies of Scottish folklore,
      Brunik exists to notice, remember, guide, and help.
    </p>

  </div>
</section>

      <CTASection />
      <Footer />

    </div>
  );
}