import { getSortedProjectsData } from "@/lib/projects";
import Link from "next/link";

export default function Portfolio() {
  const projects = getSortedProjectsData();

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold uppercase">Portfolio</h1>
        <p className="max-w-2xl">
          Catalog of completed projects and technical experiments.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="pixel-box p-4 block hover:bg-background hover:text-foreground group no-underline text-white"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-bold uppercase group-hover:bg-foreground group-hover:text-background inline-block px-1">
                {project.title}
              </h2>
              <p className="text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-1 border border-background text-[10px] font-medium group-hover:border-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
