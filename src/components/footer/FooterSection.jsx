import FooterLink from "./FooterLink";

export default function FooterSection({ title, items }) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4 tracking-wide">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <FooterLink href={item.href}>{item.name}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

