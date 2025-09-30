import { Header } from "@/components/header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100">
      <Header />
      <div className="max-w-3xl mx-auto text-center pt-32 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          À Propos de Nous
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Web Craft Hub est une agence web passionnée par la création de sites
          modernes, performants et sur-mesure. Notre équipe accompagne les
          entreprises dans leur transformation digitale, de la conception à la
          mise en ligne.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/80 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-sky-600">
              Notre Mission
            </h2>
            <p className="text-gray-600">
              Offrir des solutions web innovantes et accessibles, adaptées à
              chaque client.
            </p>
          </div>
          <div className="bg-white/80 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-sky-600">
              Nos Valeurs
            </h2>
            <ul className="list-disc pl-4 text-gray-600 text-left">
              <li>Créativité</li>
              <li>Transparence</li>
              <li>Excellence</li>
              <li>Proximité client</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 text-base mb-4">
          Contactez-nous pour en savoir plus ou découvrir nos réalisations !
        </p>
      </div>
    </main>
  );
}
