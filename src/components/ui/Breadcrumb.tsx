import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-sm text-white/50 ${className}`}>
      <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          <span className="text-white/20">/</span>
          {item.href && index < items.length - 1 ? (
            <Link href={item.href} className="hover:text-white/80 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-white/70">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
