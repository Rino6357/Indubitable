import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Poems() {
  const allPostsData = getSortedPostsData();
  const poems = allPostsData.filter(post => post.category === 'poem');

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold uppercase">Poems</h1>
        <p className="max-w-2xl">
          A collection of poems.
        </p>
      </section>

      <section className="pixel-box p-4 text-white">
        <ul className="space-y-2">
          {poems.map(({ slug, date, title }) => (
            <li key={slug}>
              <Link href={`/writing/poems/${slug}`} className="block hover:bg-foreground hover:text-background px-1 text-sm">
                {date} - {title}.txt
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="pt-8 border-t border-foreground">
        <Link href="/writing" className="text-sm font-bold hover:bg-foreground hover:text-background px-1">
          [ BACK TO WRITING ]
        </Link>
      </div>
    </div>
  );
}
