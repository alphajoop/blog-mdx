import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
        À Propos de Moi
      </h1>

      <div className="mx-auto max-w-2xl">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <Avatar className="mb-6 h-32 w-32">
                <AvatarImage
                  src="/images/about.jpg"
                  className="object-cover"
                  alt="Votre photo"
                />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>

              <h2 className="mb-4 text-xl font-semibold md:text-2xl lg:text-2xl">
                Alpha Diop
              </h2>

              <p className="mb-6 text-center text-sm text-gray-600 md:text-base">
                Développeur web passionné, spécialisé en technologies front-end
                modernes. Passionné par l&lsquo;innovation,
                l&lsquo;apprentissage continu et le partage de connaissances.
              </p>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <Card>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-sm font-bold md:text-base">
                      Compétences
                    </h3>
                    <ul className="mt-2 space-y-1 text-xs md:text-sm">
                      <li>React</li>
                      <li>Next.js</li>
                      <li>TypeScript</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-bold">Technologies</h3>
                    <ul className="mt-2 space-y-1 text-xs md:text-sm">
                      <li>Shadcn UI</li>
                      <li>Tailwind CSS</li>
                      <li>Framer Motion</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-bold">Centres d&apos;Intérêt</h3>
                    <ul className="mt-2 space-y-1 text-xs md:text-sm">
                      <li>Innovation Tech</li>
                      <li>Design UX</li>
                      <li>Open Source</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
