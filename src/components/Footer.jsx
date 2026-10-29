export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col items-center text-center">

          <h3 className="text-2xl font-bold text-emerald-400">
            Brunik™
          </h3>

          <p className="mt-3 text-lg text-slate-300">
            Looking After What's Next.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            Brunik is an Intelligent Steward inspired by the helpful
            Brownies of Scottish folklore. Built to help people
            understand complexity, preserve context, identify
            opportunities, and make more confident decisions.
          </p>

          <div className="mt-8 flex gap-6 text-sm text-slate-500">

            <a
              href="/about"
              className="hover:text-emerald-400"
            >
              About Brunik
            </a>

            <a
              href="mailto:contact@brunik.app"
              className="hover:text-emerald-400"
            >
              Contact
            </a>

          </div>

          <div className="mt-8 max-w-md border-t border-slate-800 pt-6">
            <p className="text-xs uppercase tracking-widest text-emerald-400">
              Intelligent Steward
            </p>

            <p className="mt-2 text-xs text-slate-600">
              Inspired by the Brownies of Scottish folklore.
              Built for the modern world.
            </p>
          </div>

          <p className="mt-8 text-xs text-slate-600">
            © {new Date().getFullYear()} Brunik. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}