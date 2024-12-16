'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { BlogPost } from '@/types';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ArticleSearchProps {
  articles: BlogPost[];
}

export default function ArticleSearch({ articles }: ArticleSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Filtrer les articles en fonction du terme de recherche
  const filteredArticles = articles.filter((article) => {
    const searchString = searchTerm.toLowerCase();
    return (
      article.metadata.title.toLowerCase().includes(searchString) ||
      article.metadata.excerpt.toLowerCase().includes(searchString) ||
      article.metadata.tags?.some((tag) =>
        tag.toLowerCase().includes(searchString),
      )
    );
  });

  // Limiter les résultats à 2 meilleurs articles
  const topResults = filteredArticles.slice(0, 2);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mb-8">
          Rechercher des articles
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold md:text-2xl lg:text-2xl">
            Recherche d&apos;articles
          </DialogTitle>
        </DialogHeader>

        <Card className="border-none shadow-none">
          <CardContent>
            {/* Champ de recherche */}
            <Input
              type="text"
              placeholder="Rechercher par titre, résumé ou tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4"
            />

            {/* Résultats de recherche */}
            {searchTerm ? (
              topResults.length === 0 ? (
                <div className="text-center text-sm text-gray-600 md:text-base">
                  Aucun article trouvé.
                </div>
              ) : (
                <ul className="space-y-4">
                  {topResults.map((article) => (
                    <li
                      key={article.slug}
                      className="border-b pb-2 last:border-none"
                    >
                      <h3 className="line-clamp-2 text-base font-semibold tracking-tight md:text-lg lg:text-xl">
                        {article.metadata.title}
                      </h3>
                      <p className="text-sm text-gray-600 md:text-base">
                        {article.metadata.excerpt}
                      </p>
                    </li>
                  ))}
                </ul>
              )
            ) : (
              <div className="text-center text-sm text-gray-600 md:text-base">
                Commencez à taper pour rechercher un article.
              </div>
            )}

            {/* Bouton pour fermer */}
            <DialogClose asChild>
              <Button type="button" variant="secondary" className="mt-4">
                Fermer
              </Button>
            </DialogClose>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
