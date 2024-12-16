import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BlogPost } from '@/types';
import { formatDate } from '@/utils/formatDate';
import { Badge } from '@/components/ui/badge';

interface ArticleCardProps {
  article: BlogPost;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="flex h-full flex-col transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="line-clamp-2 text-lg md:text-xl lg:text-xl">
          {article.metadata.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-3 text-xs text-gray-600 md:text-sm">
          <div className="flex items-center justify-between">
            <span>{formatDate(article.metadata.publishedAt, false)}</span>
            <span className="text-xs md:text-sm">
              {article.metadata.readingTime} min de lecture
            </span>
          </div>
        </div>
        <p className="line-clamp-3 text-sm text-gray-700 md:text-base">
          {article.metadata.excerpt}
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center justify-between">
          <div className="flex space-x-2">
            {article.metadata.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <Link href={`/articles/${article.slug}`}>
            <Button variant="outline" size="sm" className="text-xs md:text-sm">
              Lire l&apos;article
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
