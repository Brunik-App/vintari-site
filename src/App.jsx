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
<<<<<<< HEAD
              VINTORI
=======
              Vintori
>>>>>>> 7d9b68c (Rename Vintari branding to Vintori)
            </h1>
          </div>

          <a
  href="mailto:contact@brunik.app?subject=VINTORI%20Inquiry&body=Hello%20Brunik%20Team%2C%0A%0AI'm%20interested%20in%20learning%20more%20about%20Vintori.%0A%0AName%3A%20%0AOrganization%3A%20%0AWhat%20caught%20your%20interest%3F%20%0A%0AMessage%3A%20%0A%0AThank%20you."
  className="rounded-xl bg-emerald-500 px-5 py-2 font-semibold text-slate-950 hover:bg-emerald-400 inline-block"
>
  Contact Us
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
              Vintori™

          </h2>
          <div className="mt-6 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
        Early Access Program
      </div>

          <p className="mt-4 max-w-2xl text-xl text-slate-300">
            Inventory intelligence powered by AI and guided by Brunik™.
          </p>

          <p className="mt-6 max-w-3xl text-lg text-slate-400">
            Transform inventory data into actionable insights that help
            teams forecast demand, reduce risk, and make smarter
            operational decisions.
          </p>

        </div>

      </main>

      {/* WHY Vintori */}
      <section className="bg-slate-900/50 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="mb-6 text-4xl font-bold">
            Why Vintori?
          </h2>

          <p className="text-lg leading-8 text-slate-300">
            Most businesses have inventory data. Few know what to do
            with it. Vintori helps uncover trends, highlight risks,
            and guide smarter decisions through AI-powered analysis
            and operational intelligence.
          </p>

        </div>

      </section>
            {/* FEATURES */}
      <section className="py-20">

        <div className="mx-auto max-w-6xl px-6">

          <h2 className="mb-12 text-center text-4xl font-bold">
            Built For Better Decisions
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

  <FeatureCard
    title="Forecast"
    description="Anticipate future inventory needs before they become urgent."
  />

  <FeatureCard
    title="Monitor"
    description="Maintain visibility into inventory health and operational performance."
  />

  <FeatureCard
    title="Improve"
    description="Turn operational data into recommendations your team can act on."
  />


          </div>

        </div>

      </section>
            {/* MEET BRUNIK */}
      <section className="bg-slate-900/50 py-20">

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">

          <div className="flex justify-center">

            <img
              src={brunik}
              alt="Brunik"
              className="w-72"
            />

          </div>

          <div>

            <h2 className="mb-6 text-4xl font-bold">
              Meet Brunik
            </h2>

            <p className="mb-4 text-lg text-slate-300">
              Brunik is the AI guide behind the Vintori experience.
            </p>

            <p className="mb-4 text-slate-400">
              Designed to transform complex inventory information into
              practical recommendations, Brunik helps teams focus on
              what matters most.
            </p>

            <p className="text-slate-400">
              Friendly, approachable, and intelligent, Brunik brings
              operational insights to life.
            </p>
            

          </div>

        </div>

      </section>
      <CTASection />
      <Footer />
          </div>
  );
}
