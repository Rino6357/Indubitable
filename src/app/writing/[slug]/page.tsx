import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((s) => ({
    slug: s.params.slug,
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const postData = await getPostData(slug);

    return (
      <article className="max-w-2xl mx-auto space-y-8">
        <header className="space-y-4">
          <span className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            {postData.category}
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {postData.title}
          </h1>
          <div className="text-zinc-500">
            {postData.date}
          </div>
        </header>

        <div
          className="prose prose-zinc dark:prose-invert max-w-none prose-lg
            prose-headings:font-bold prose-headings:tracking-tight
            prose-a:text-black dark:prose-a:text-white prose-a:font-semibold
            prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
        />

        <div className="pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <Link href="/writing" className="text-sm font-medium hover:underline">
            ← Back to writing
          </Link>
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
