import ArticleCard from '@/components/articles/ArticleCard';
import { Button } from '@/components/ui/button';
import { getBlogPosts } from '@/lib/posts';
import Link from 'next/link';

export default async function Home() {
  const recentPosts = getBlogPosts(3);

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <h1 className="mb-6 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Blog Tech Innovation
        </h1>

        <section className="mb-12 text-center">
          <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg lg:text-xl">
            Exploration des dernières tendances en développement web,
            technologies émergentes et insights du monde tech.
          </p>
          <div className="mt-6">
            <Link href="/articles">
              <Button variant="default">Découvrir tous les articles</Button>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-xl font-semibold md:text-2xl lg:text-2xl">
            Articles Récents
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {recentPosts.map((post) => (
              <ArticleCard key={post.slug} article={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
