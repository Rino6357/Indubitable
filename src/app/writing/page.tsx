import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Writing() {
  const allPostsData = getSortedPostsData();

  const poems = allPostsData.filter(post => post.category === 'poem');
  const stories = allPostsData.filter(post => post.category === 'story');

  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Writing</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A collection of poems, short stories, and reflections.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <section className="space-y-8">
          <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-800 pb-2">Poems</h2>
          <ul className="space-y-8">
            {poems.map(({ slug, date, title }) => (
              <li key={slug} className="group">
                <Link href={`/writing/${slug}`} className="block">
                  <span className="block text-sm text-zinc-500 mb-1">{date}</span>
                  <h3 className="text-xl font-semibold group-hover:underline underline-offset-4">{title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-800 pb-2">Stories</h2>
          <ul className="space-y-8">
            {stories.map(({ slug, date, title }) => (
              <li key={slug} className="group">
                <Link href={`/writing/${slug}`} className="block">
                  <span className="block text-sm text-zinc-500 mb-1">{date}</span>
                  <h3 className="text-xl font-semibold group-hover:underline underline-offset-4">{title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
