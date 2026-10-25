export default function FeatureCard({ title, description }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h3 className="mb-3 text-xl font-semibold text-emerald-400">
        {title}
      </h3>

      <p className="text-slate-300">
        {description}
      </p>
    </div>
  );
}