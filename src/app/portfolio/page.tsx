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
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold uppercase">Portfolio</h1>
        <p className="max-w-2xl">
          Catalog of completed projects and technical experiments.
        </p>
      </section>

      <div className="pixel-box overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-foreground bg-foreground text-background">
              <th className="p-2 font-bold uppercase text-xs">Title</th>
              <th className="p-2 font-bold uppercase text-xs">Description</th>
              <th className="p-2 font-bold uppercase text-xs">Tags</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-b border-foreground last:border-0 hover:bg-foreground hover:text-background group">
                <td className="p-2 align-top font-bold text-sm">{project.title}</td>
                <td className="p-2 align-top text-sm">{project.description}</td>
                <td className="p-2 align-top">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1 border border-foreground text-[10px] font-medium group-hover:border-background"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
