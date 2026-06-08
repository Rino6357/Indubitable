import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  contentHtml?: string;
}

export function getAllProjectSlugs() {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getSortedProjectsData(): ProjectData[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const filePath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);
    const data = matterResult.data as { title: string; description: string; tags: string[]; date: string | Date };

    let date = '';
    if (data.date instanceof Date) {
      date = data.date.toISOString().split('T')[0];
    } else {
      date = data.date;
    }

    return {
      slug,
      ...data,
      date,
    };
  });

  return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getProjectData(slug: string) {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Project with slug "${slug}" not found`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const data = matterResult.data as { title: string; description: string; tags: string[]; date: string | Date };

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  let date = '';
  if (data.date instanceof Date) {
    date = data.date.toISOString().split('T')[0];
  } else {
    date = data.date;
  }

  return {
    slug,
    contentHtml,
    ...data,
    date,
  };
}
