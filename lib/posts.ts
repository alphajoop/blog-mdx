import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types';

const postsDirectory = path.join(process.cwd(), 'contents');

// Définissez une interface pour le frontmatter
interface MDXFrontmatter {
  title: string;
  publishedAt: string;
  excerpt: string;
  author?: string;
  tags?: string[];
}

function parseMDXFile(fileContent: string) {
  const { data, content } = matter(fileContent);

  // Typage explicite avec des valeurs par défaut
  const metadata: MDXFrontmatter = {
    title: data.title || 'Sans titre',
    publishedAt: data.publishedAt || new Date().toISOString(),
    excerpt: data.excerpt || '',
    author: data.author || 'Auteur',
    tags: data.tags || [],
  };

  return {
    metadata,
    content,
    readingTime: Math.ceil(content.split(/\s+/).length / 200),
  };
}

export function getAllBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { metadata, content, readingTime } = parseMDXFile(fileContents);

      return {
        slug,
        metadata: {
          ...metadata,
          readingTime,
        },
        content,
      } as BlogPost;
    });

  return allPostsData.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );
}

export function getBlogPosts(limit?: number): BlogPost[] {
  const posts = getAllBlogPosts();
  return limit ? posts.slice(0, limit) : posts;
}

export function getBlogPostBySlug(slug: string): BlogPost {
  const allPosts = getAllBlogPosts();
  const postIndex = allPosts.findIndex((post) => post.slug === slug);

  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    throw new Error('Article non trouvé');
  }

  // Ajouter le post précédent si existant
  if (postIndex > 0) {
    post.previousPost = {
      slug: allPosts[postIndex - 1].slug,
      title: allPosts[postIndex - 1].metadata.title,
    };
  }

  return post;
}
