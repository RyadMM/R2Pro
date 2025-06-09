const CookiesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-24"> {/* Increased padding for navbar spacing */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Politique en matière de cookies</h1> {/* Improved heading style */}
      <p className="mb-6 text-gray-700">Cette politique explique comment R2Pro utilise des cookies sur son site web.</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Qu'est-ce qu'un cookie ?</h2> {/* Improved subheading style */}
      <p className="mb-6 text-gray-700">Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site web. Ils aident le site web à se souvenir de vos actions et préférences.</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">2. Comment utilisons-nous les cookies ?</h2>
      <p className="mb-6 text-gray-700">Nous utilisons des cookies pour assurer le bon fonctionnement du site, analyser le trafic, personnaliser le contenu et fournir des fonctionnalités de médias sociaux.</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">3. Types de cookies utilisés</h2>
      <p className="mb-6 text-gray-700">Nous pouvons utiliser des cookies essentiels, de performance, de fonctionnalité et de ciblage.</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">4. Gestion des cookies</h2>
      <p className="mb-6 text-gray-700">Vous pouvez contrôler et gérer les cookies via les paramètres de votre navigateur. Veuillez noter que la désactivation de certains cookies peut affecter le fonctionnement du site.</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">5. Contact</h2>
      <p className="text-gray-700">Pour toute question concernant cette politique en matière de cookies, veuillez nous contacter à info@r2pro.ca.</p>
    </div>
  );
};

export default CookiesPage;
