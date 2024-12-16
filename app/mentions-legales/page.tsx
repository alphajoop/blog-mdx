import { Card, CardContent } from '@/components/ui/card';

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
        Mentions Légales
      </h1>

      <div className="mx-auto max-w-3xl space-y-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl lg:text-2xl">
              Éditeur du Site
            </h2>
            <p className="mb-4 text-sm text-gray-600 md:text-base">
              Ce blog est édité par Alpha Diop, blogueur tech indépendant.
              <br />
              Email : contact@example.com
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl lg:text-2xl">
              Hébergement
            </h2>
            <p className="mb-4 text-sm text-gray-600 md:text-base">
              Ce site est hébergé par :
              <br />
              Vercel Inc.
              <br />
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723
              <br />
              États-Unis
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl lg:text-2xl">
              Propriété Intellectuelle
            </h2>
            <p className="mb-4 text-sm text-gray-600 md:text-base">
              L&apos;ensemble de ce site relève de la législation française et
              internationale sur le droit d&apos;auteur et la propriété
              intellectuelle. Tous les droits de reproduction sont réservés, y
              compris pour les documents téléchargeables et les représentations
              iconographiques et photographiques.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl lg:text-2xl">
              Protection des Données
            </h2>
            <p className="mb-4 text-sm text-gray-600 md:text-base">
              Conformément à la loi « Informatique et Libertés » du 6 janvier
              1978 modifiée et au Règlement Général sur la Protection des
              Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de
              rectification et de suppression des données vous concernant. Vous
              pouvez exercer ce droit en nous contactant par email.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl lg:text-2xl">
              Cookies
            </h2>
            <p className="mb-4 text-sm text-gray-600 md:text-base">
              Ce site utilise des cookies pour améliorer l&apos;expérience
              utilisateur. En continuant à naviguer sur ce site, vous acceptez
              l&apos;utilisation de cookies conformément à notre politique de
              confidentialité.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl lg:text-2xl">
              Liens Externes
            </h2>
            <p className="mb-4 text-sm text-gray-600 md:text-base">
              Ce site peut contenir des liens vers des sites externes. Nous ne
              sommes pas responsables du contenu de ces sites et déclinons toute
              responsabilité quant à leur contenu.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl lg:text-2xl">
              Modification des Mentions Légales
            </h2>
            <p className="mb-4 text-sm text-gray-600 md:text-base">
              Nous nous réservons le droit de modifier ces mentions légales à
              tout moment. Les utilisateurs du site sont donc invités à les
              consulter régulièrement.
            </p>
            <p className="text-sm text-gray-600 md:text-base">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
