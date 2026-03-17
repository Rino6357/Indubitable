import Link from 'next/link';

export default function Writing() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold uppercase">Writing</h1>
        <p className="max-w-2xl">
          Archive of text-based files including poems and stories.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="pixel-box p-4 text-white">
          <h2 className="text-xl font-bold mb-4 border-b border-foreground pb-2 uppercase">Poems</h2>
          <p className="text-sm mb-4">View a collection of poetic works.</p>
          <Link href="/writing/poems" className="inline-block hover:bg-foreground hover:text-background px-1 text-sm font-bold">
            [ OPEN DIRECTORY ]
          </Link>
        </section>

        <section className="pixel-box p-4 text-white">
          <h2 className="text-xl font-bold mb-4 border-b border-foreground pb-2 uppercase">Stories</h2>
          <p className="text-sm mb-4">Explore short stories and narratives.</p>
          <Link href="/writing/stories" className="inline-block hover:bg-foreground hover:text-background px-1 text-sm font-bold">
            [ OPEN DIRECTORY ]
          </Link>
        </section>
      </div>
    </div>
  );
}
