'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  return (
    <div className="text-sm font-mono mb-8">
      <Link href="/" className="hover:bg-foreground hover:text-background px-1">~</Link>
      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
        return (
          <span key={href}>
            <span className="mx-1">/</span>
            <Link href={href} className="hover:bg-foreground hover:text-background px-1">
              {segment}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
