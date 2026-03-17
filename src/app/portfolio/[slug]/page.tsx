import { getProjectData, getAllProjectSlugs } from "@/lib/projects";

export async function generateStaticParams() {
  const paths = getAllProjectSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectData = await getProjectData(slug);

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold uppercase">{projectData.title}</h1>
        <div className="flex flex-wrap gap-2">
          {projectData.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 border border-foreground text-xs font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm italic">Released: {projectData.date}</p>
      </header>

      <div className="pixel-box p-6">
        <div
          className="prose max-w-none
          prose-headings:uppercase prose-headings:font-bold
          prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml || '' }}
        />
      </div>
    </article>
  );
}
