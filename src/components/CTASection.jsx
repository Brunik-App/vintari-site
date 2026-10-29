export default function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-4xl font-bold">
          Meet Brunik™
        </h2>

        <p className="mt-6 text-2xl font-semibold text-emerald-300">
          Looking After What's Next.
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          Brunik is an Intelligent Steward inspired by the helpful
          Brownies of Scottish folklore.
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-slate-400">
          Built to help people understand complexity, preserve context,
          identify opportunities, and make better decisions, Brunik
          represents a new kind of relationship between people and
          intelligent technology.
        </p>

        <div className="mt-10">
          <a
            href="mailto:contact@brunik.app?subject=Meet%20Brunik"
            className="rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Start a Conversation
          </a>
        </div>

      </div>
    </section>
  );
}