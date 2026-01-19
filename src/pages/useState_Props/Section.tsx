export function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="m-0 text-xl font-semibold text-slate-900">{title}</h2>

      {description ? (
        <p className="mt-2 text-sm text-slate-500">{description}</p>
      ) : null}

      <div className="mt-5 grid gap-4">{children}</div>
    </section>
  );
}