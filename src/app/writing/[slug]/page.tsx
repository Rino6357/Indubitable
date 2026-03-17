import { getPostData, getAllPostSlugs, PostData } from '@/lib/posts';
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
  let postData: PostData;

  try {
    postData = await getPostData(slug);
  } catch {
    notFound();
  }

  return (
    <article className="max-w-3xl space-y-8">
      <header className="border border-foreground p-4 bg-foreground text-background">
        <div className="text-xs uppercase font-bold mb-2">
          File: {postData.title}.txt
        </div>
        <div className="flex justify-between text-xs">
          <span>Category: {postData.category}</span>
          <span>Date: {postData.date}</span>
        </div>
      </header>

      <div
        className="prose prose-zinc dark:prose-invert max-w-none
          prose-headings:font-bold prose-headings:uppercase
          prose-p:leading-relaxed font-mono text-sm"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
      />

      <div className="pt-8 border-t border-foreground">
        <Link href="/writing" className="text-sm font-bold hover:bg-foreground hover:text-background px-1">
          [ BACK TO WRITING ]
        </Link>
      </div>
    </article>
  );
}
