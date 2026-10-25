import Image from "next/image";
import type { Credential } from "../data";

function Card({ item }: { item: Credential }) {
  const body = (
    <>
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, 336px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
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

  const className = "group block overflow-hidden border bg-card";
  return item.href ? (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} transition-colors hover:bg-muted`}
    >
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}

export default function CredentialGrid({ items }: { items: Credential[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <Card key={item.image} item={item} />
      ))}
    </div>
  );
}
