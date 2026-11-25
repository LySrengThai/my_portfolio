export const Timeline = ({ items }) => (
  <ol className="divide-y divide-border border-y border-border">
    {items.map((item) => (
      <li
        key={item.title + item.date}
        className="grid gap-2 py-8 md:grid-cols-[14rem_1fr] md:gap-8"
      >
        <p className="font-mono text-sm text-muted-foreground">{item.date}</p>
        <div>
          <h3 className="text-xl">{item.title}</h3>
          <p className="mt-1 text-foreground/90">{item.subtitle}</p>
          <p className="mt-1 text-sm text-muted-foreground">{item.location}</p>
        </div>
      </li>
    ))}
  </ol>
);
