import { getBlogPostBySlug } from '@/lib/posts';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { formatDate } from '@/utils/formatDate';
import { CustomMDX } from '@/components/mdx/CustomMDX';

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const article = getBlogPostBySlug((await params).slug);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article>
        <h1 className="mb-6 text-2xl font-bold md:text-3xl lg:text-4xl">
          {article.metadata.title}
        </h1>

        <div className="mb-6 flex flex-col text-sm text-gray-600 md:flex-row md:items-center md:text-base">
          <span>Publié le {formatDate(article.metadata.publishedAt)}</span>
          <span className="mx-2 hidden md:inline">•</span>
          <span>{article.metadata.readingTime} min de lecture</span>
        </div>

        <div className="prose lg:prose-xl">
          <CustomMDX source={article.content} />
        </div>

        <div className="mt-8 flex space-x-4">
          <Link href="/articles">
            <Button variant="outline">Retour aux articles</Button>
          </Link>
          {article.previousPost && (
            <Link href={`/articles/${article.previousPost.slug}`}>
              <Button variant="secondary">Article précédent</Button>
            </Link>
          )}
        </div>
      </article>
    </div>
  );
}
