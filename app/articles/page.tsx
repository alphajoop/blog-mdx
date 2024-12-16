import { getAllBlogPosts } from '@/lib/posts';
import ArticleCard from '@/components/articles/ArticleCard';
import ArticleSearch from '@/components/articles/ArticleSearch';

export default function ArticlesPage() {
  const articles = getAllBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold md:text-3xl lg:text-3xl">
        Tous les Articles
      </h1>

      <ArticleSearch articles={articles} />

      <div className="grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
