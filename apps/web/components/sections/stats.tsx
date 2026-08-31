const stats = [
  { value: "50+", label: "Courses" },
  { value: "25+", label: "Partners" },
  { value: "100+", label: "Projects" },
  { value: "15+", label: "AI Products" },
];

export function Stats() {
  return (
    <section className="border-b border-border bg-card">
      <div className="container-hub py-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Demo platform — sample data
        </p>
      </div>
    </section>
  );
}
