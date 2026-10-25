export function Divider() {
  return <div className="stripes h-6 border-y" aria-hidden />;
}

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id}>
      <h2 className="px-6 pt-6 pb-4 text-lg font-semibold tracking-tight">
        {title}
      </h2>
      <div className="px-6 pb-8">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border px-2 py-0.5 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  );
}
