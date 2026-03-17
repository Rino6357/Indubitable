export default function Portfolio() {
  const projects = [
    {
      title: "Project One",
      description: "A comprehensive solution for managing digital assets.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Project Two",
      description: "An interactive data visualization dashboard.",
      tags: ["React", "D3.js", "Node.js"],
    },
    {
      title: "Project Three",
      description: "A minimalist writing platform for authors.",
      tags: ["Next.js", "PostgreSQL", "Prisma"],
    },
  ];

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Portfolio</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A selection of projects I've worked on recently.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <div key={index} className="group relative flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-xs font-medium rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800 mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
