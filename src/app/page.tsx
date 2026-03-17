import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to my creative space.
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          I'm a writer and creator. This website is a repository for my professional portfolio
          and a home for my personal creative works, including poems and short stories.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
          <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Explore my professional projects, skills, and experience in software development and design.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center font-medium text-black dark:text-white hover:underline"
          >
            View Projects →
          </Link>
        </div>

        <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
          <h2 className="text-2xl font-semibold mb-4">Writing</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Dive into my collection of poems and stories. A place for reflection and imagination.
          </p>
          <Link
            href="/writing"
            className="inline-flex items-center font-medium text-black dark:text-white hover:underline"
          >
            Read my work →
          </Link>
        </div>
      </div>
    </div>
  );
}
