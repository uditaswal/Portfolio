import Image from "next/image";
import type { Credential } from "../data";

function Card({ item, hidden }: { item: Credential; hidden?: boolean }) {
  const body = (
    <>
      <div className="relative h-[180px] w-full overflow-hidden border-b bg-muted">
        <Image
          src={item.image}
          alt={hidden ? "" : item.title}
          fill
          sizes="280px"
          draggable={false}
          loading="eager"
          className="object-contain grayscale transition-[filter,transform] duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      </div>
      <div className="p-3">
        <p className="text-sm font-medium">{item.title}</p>
        {item.date && (
          <p className="mt-0.5 font-mono text-xs text-muted-foreground">
            {item.date}
          </p>
        )}
      </div>
    </>
  );

  const className = "group block w-[280px] shrink-0 overflow-hidden border bg-card";
  return item.href ? (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={hidden ? -1 : undefined}
      className={`${className} transition-colors hover:bg-muted`}
    >
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}

export default function Marquee({
  items,
  reverse = false,
}: {
  items: Credential[];
  reverse?: boolean;
}) {
  return (
    <div className="marquee relative overflow-hidden py-1">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent" />
      <div
        className={`marquee-track flex w-max gap-4 pr-4 ${reverse ? "reverse" : ""}`}
      >
        {items.map((item) => (
          <Card key={item.image} item={item} />
        ))}
        {items.map((item) => (
          <Card key={`dup-${item.image}`} item={item} hidden />
        ))}
      </div>
    </div>
  );
}
