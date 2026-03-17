import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Writing() {
  const allPostsData = getSortedPostsData();

  const poems = allPostsData.filter(post => post.category === 'poem');
  const stories = allPostsData.filter(post => post.category === 'story');

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold uppercase">Writing</h1>
        <p className="max-w-2xl">
          Archive of text-based files including poems and stories.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="pixel-box p-4">
          <h2 className="text-xl font-bold mb-4 border-b border-foreground pb-2 uppercase">Poems</h2>
          <ul className="space-y-2">
            {poems.map(({ slug, date, title }) => (
              <li key={slug}>
                <Link href={`/writing/${slug}`} className="block hover:bg-foreground hover:text-background px-1 text-sm">
                  {date} - {title}.txt
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="pixel-box p-4">
          <h2 className="text-xl font-bold mb-4 border-b border-foreground pb-2 uppercase">Stories</h2>
          <ul className="space-y-2">
            {stories.map(({ slug, date, title }) => (
              <li key={slug}>
                <Link href={`/writing/${slug}`} className="block hover:bg-foreground hover:text-background px-1 text-sm">
                  {date} - {title}.txt
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
