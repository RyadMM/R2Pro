
const TermesConditionsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-24"> {/* Increased padding for navbar spacing */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Termes & Conditions</h1> {/* Improved heading style */}
      <p className="mb-6 text-gray-700">Ces termes et conditions régissent votre utilisation des services fournis par R2Pro. En accédant à notre site web ou en utilisant nos services, vous acceptez d'être lié par ces termes.</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Services</h2> {/* Improved subheading style */}
      <p className="mb-6 text-gray-700">Nous fournissons des services de construction et de rénovation au Québec. Les détails spécifiques des services seront décrits dans les contrats individuels.</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">2. Obligations de l'utilisateur</h2>
      <p className="mb-6 text-gray-700">Vous acceptez d'utiliser nos services conformément aux lois applicables au Québec et au Canada. Vous ne devez pas utiliser notre site web ou nos services à des fins illégales ou interdites par ces termes.</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">3. Conditions de paiement</h2>
      <p className="mb-6 text-gray-700">Les conditions de paiement seront spécifiées dans chaque contrat de service. Les paiements doivent être effectués conformément aux modalités convenues.</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Garanties</h2>
      <p className="mb-2 text-gray-700"><strong>Calfeutrage :</strong> Garantie de 10 ans contre l’infiltration d’eau causée par une défaillance d’installation ou de produit.</p>
      <p className="mb-2 text-gray-700"><strong>Installation de revêtement extérieur :</strong> Garantie de 5 ans sur l’installation. La garantie du fabricant s’ajoute selon les conditions du produit utilisé.</p>
      <p className="mb-6 text-gray-700"><strong>Peinture extérieure :</strong> Garantie de 8 ans sur surfaces en bon état.</p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li><em>Exclusions :</em> les surfaces déjà peintes, les zones où la peinture est écaillée ou instable, ou tout support inadéquat.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Limites de responsabilité</h2>
      <p className="mb-2 text-gray-700">R2Pro ne pourra être tenu responsable :</p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>De tout bris, dommage ou dégradation causés après nos travaux par des facteurs extérieurs (gel/dégel, impact, entretien insuffisant, travaux d’autres entrepreneurs, etc.).</li>
        <li>Des mouvements de structure, infiltrations d’eau, ou dégradations liées à une condition préexistante du bâtiment non visible au moment des travaux.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Responsabilités du propriétaire</h2>
      <p className="mb-2 text-gray-700">Obtenir tous les permis requis selon les exigences municipales (couleurs, matériaux, etc.).</p>
      <p className="mb-6 text-gray-700">Assurer un entretien régulier du revêtement : nettoyage, vérification des joints, scellement, peinture au besoin, etc.</p>
      <p className="mb-6 text-gray-700">R2Pro recommande fortement un nettoyage périodique des surfaces extérieures afin de maximiser la durée de vie des matériaux installés.</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Validité de la soumission</h2>
      <p className="mb-6 text-gray-700">La soumission est valide pour une période de 30 jours. Passé ce délai, les prix et conditions peuvent être modifiés sans préavis.</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Paiement final</h2>
      <p className="mb-6 text-gray-700">Le solde complet est exigible dans les 30 jours suivant la fin des travaux. Des frais de 2 % par mois peuvent s’appliquer en cas de retard.</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Non inclus à la soumission</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Travaux d’hiver : déneigement, déglaçage, assèchement de surface.</li>
        <li>Réparations structurelles ou travaux non mentionnés explicitement dans la soumission.</li>
        <li>Préparation excessive de surfaces détériorées, sauf indication contraire.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">4. Limitation de responsabilité</h2>
      <p className="mb-6 text-gray-700">Dans toute la mesure permise par la loi, R2Pro ne sera pas responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'incapacité d'utiliser nos services.</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">5. Droit applicable</h2>
      <p className="mb-6 text-gray-700">Ces termes et conditions sont régis par les lois de la province de Québec et les lois du Canada qui y sont applicables.</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">6. Modifications</h2>
      <p className="mb-6 text-gray-700">Nous nous réservons le droit de modifier ces termes et conditions à tout moment. Les modifications entreront en vigueur dès leur publication sur notre site web.</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">7. Contact</h2>
      <p className="text-gray-700">Pour toute question concernant ces termes et conditions, veuillez nous contacter à info@r2pro.ca.</p>
    </div>
  );
};

export default TermesConditionsPage;
