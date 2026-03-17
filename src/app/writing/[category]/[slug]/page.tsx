import { getPostData, getAllPostSlugs, PostData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((s) => ({
    category: s.params.category,
    slug: s.params.slug,
  }));
}

export default async function Post({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  let postData: PostData;

  try {
    postData = await getPostData(slug, category);
  } catch {
    notFound();
  }

  return (
    <article className="max-w-3xl space-y-8">
      <header className="pixel-box p-4 border-none!">
        <div className="text-xs uppercase font-bold mb-2">
          File: {postData.title}.txt
        </div>
        <div className="flex justify-between text-xs">
          <span>Category: {postData.category}</span>
          <span>Date: {postData.date}</span>
        </div>
      </header>

      <div className="pixel-box p-6">
        <div
          className="prose prose-zinc prose-invert max-w-none
            prose-headings:font-bold prose-headings:uppercase
            prose-p:leading-relaxed font-mono text-sm"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
        />
      </div>

      <div className="pt-8 border-t border-foreground">
        <Link href={`/writing/${category}`} className="text-sm font-bold hover:bg-foreground hover:text-background px-1">
          [ BACK TO {category.toUpperCase()} ]
        </Link>
      </div>
    </article>
  );
}
