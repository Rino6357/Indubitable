import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  category: string;
  contentHtml?: string;
}

export function getAllPostSlugs() {
  const folders = ['poems', 'stories'];
  const paths: { params: { category: string; slug: string } }[] = [];

  folders.forEach((folder) => {
    const fullPath = path.join(contentDirectory, folder);
    if (fs.existsSync(fullPath)) {
        const fileNames = fs.readdirSync(fullPath);
        fileNames.forEach((fileName) => {
            paths.push({
                params: {
                    category: folder,
                    slug: fileName.replace(/\.md$/, ''),
                },
            });
        });
    }
  });

  return paths;
}

export function getSortedPostsData() {
  const folders = ['poems', 'stories'];
  let allPostsData: PostData[] = [];

  folders.forEach((folder) => {
    const fullPath = path.join(contentDirectory, folder);
    if (fs.existsSync(fullPath)) {
        const fileNames = fs.readdirSync(fullPath);
        const folderPostsData = fileNames.map((fileName) => {
          const slug = fileName.replace(/\.md$/, '');
          const filePath = path.join(fullPath, fileName);
          const fileContents = fs.readFileSync(filePath, 'utf8');
          const matterResult = matter(fileContents);

          return {
            slug,
            ...(matterResult.data as { title: string; date: string; category: string }),
          };
        });
        allPostsData = allPostsData.concat(folderPostsData);
    }
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string, category?: string) {
  const folders = category ? [category] : ['poems', 'stories'];
  let fullPath = '';

  for (const folder of folders) {
    const tempPath = path.join(contentDirectory, folder, `${slug}.md`);
    if (fs.existsSync(tempPath)) {
      fullPath = tempPath;
      break;
    }
  }

  if (!fullPath) {
    throw new Error(`Post with slug "${slug}" not found`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as { title: string; date: string; category: string }),
  };
}
