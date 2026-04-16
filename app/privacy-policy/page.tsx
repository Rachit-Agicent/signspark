"use client";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function PrivacyPolicyPage() {
  const { lang } = useI18n();
  return (
    <main className="bg-white mt-20">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* TITLE */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">
              {lang === "es"
                ? "Política de privacidad de SignSpark AI"
                : "SignSpark AI Privacy Policy"}
            </h1>
            <p className="text-gray-500 text-lg">
              Version 1.0 • Effective Date: June 15, 2026 • Last Updated: Feb
              11, 2026
            </p>
          </div>

          {/* INTRODUCTION */}
          <div className="space-y-6 text-lg text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {lang === "es" ? "1. Introducción" : "1. Introduction"}
              </h2>
              <p className="mb-4">
                {lang === "es"
                  ? "Bienvenido a SignSpark AI (“nosotros”, “nuestro” o “nos”). Proporcionamos una plataforma impulsada por IA para negociación y análisis de contratos, diseñada para ayudar a compradores de autos. Nos comprometemos a proteger tu información personal y tu privacidad financiera."
                  : 'Welcome to SignSpark AI ("we," "our," or "us"). We provide an AI-powered negotiation and contract analysis platform designed to assist car buyers. We are committed to protecting your personal information and your financial privacy.'}
              </p>
              <p>
                {lang === "es"
                  ? 'Al usar nuestro sitio web, aplicación móvil o servicios (en conjunto, el “Servicio”), aceptas la recopilación y el uso de información de acuerdo con esta política.'
                  : 'By using our website, mobile application, or services (collectively, the "Service"), you agree to the collection and use of information in accordance with this policy.'}
              </p>
            </div>

            {/* SECTION 2 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {lang === "es"
                  ? "2. Información que recopilamos"
                  : "2. Information We Collect"}
              </h2>
              <p className="mb-4">
                {lang === "es"
                  ? "Recopilamos diferentes tipos de información para proporcionar nuestro Servicio y mejorar nuestros modelos de IA."
                  : "We collect different types of information to provide our Service and improve our AI models."}
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                {lang === "es"
                  ? "A. Información personal que proporcionas"
                  : "A. Personal Information You Provide"}
              </h3>
              <ul className="list-disc ml-6 space-y-2 mb-6">
                <li>
                  <strong>
                    {lang === "es"
                      ? "Información de la cuenta:"
                      : "Account Information:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Nombre, correo electrónico, teléfono y contraseña."
                    : "Name, email address, phone number, and password."}
                </li>
                <li>
                  <strong>
                    {lang === "es"
                      ? "Información de pago:"
                      : "Payment Information:"}
                  </strong>{" "}
                  {lang === "es" ? (
                    <>
                      Para usuarios del plan gratuito,{" "}
                      <strong>no se recopila información de pago.</strong>{" "}
                      Solo recopilamos la dirección de facturación y detalles del
                      método de pago si y cuando eliges explícitamente actualizar
                      a la versión “Pro”. Estos datos se procesan de forma segura
                      mediante procesadores de pago de terceros; no almacenamos
                      números completos de tarjeta en nuestros servidores.
                    </>
                  ) : (
                    <>
                      For Free Tier users,{" "}
                      <strong>no payment information is collected.</strong> We
                      only collect billing address and payment method details if
                      and when you explicitly choose to upgrade to the "Pro"
                      version. This data is processed securely by our third-party
                      payment processors; we do not store full credit card
                      numbers on our servers.
                    </>
                  )}
                </li>
                <li>
                  <strong>
                    {lang === "es"
                      ? "Soporte al cliente:"
                      : "Customer Support:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Información que proporcionas al contactar a nuestro equipo de soporte."
                    : "Information you provide when contacting our support team."}
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                {lang === "es"
                  ? "B. Datos automotrices y financieros (contenido del usuario)"
                  : "B. Automotive & Financial Data (User Content)"}
              </h3>
              <p className="mb-3">
                {lang === "es"
                  ? "Para ofrecer nuestras funciones principales de análisis de contratos, puedes subir o ingresar:"
                  : "To provide our core contract analysis features, you may upload or input:"}
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-6">
                <li>
                  <strong>
                    {lang === "es" ? "Datos del vehículo:" : "Vehicle Data:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Números de identificación del vehículo (VIN), marca, modelo, año y kilometraje."
                    : "Vehicle Identification Numbers (VIN), make, model, year, and mileage."}
                </li>
                <li>
                  <strong>
                    {lang === "es"
                      ? "Datos de la transacción:"
                      : "Transaction Data:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Precio de compra, valor de intercambio, pagos iniciales y términos del arrendamiento."
                    : "Purchase price, trade-in values, down payments, and lease terms."}
                </li>
                <li>
                  <strong>
                    {lang === "es"
                      ? "Documentos del contrato:"
                      : "Contract Documents:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Imágenes o PDF de órdenes de compra, acuerdos de financiación, acuerdos de arrendamiento y etiquetas de ventana (Monroney)."
                    : "Images or PDFs of Buyer’s Orders, Finance Agreements, Lease Agreements, and Window Stickers (Monroney Labels)."}
                </li>
                <li>
                  <strong>
                    {lang === "es"
                      ? "Datos sensibles dentro de documentos:"
                      : "Sensitive Data within Documents:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Procesamos automáticamente datos encontrados en tus contratos subidos, que pueden incluir tu dirección, número de licencia de conducir y niveles de puntaje crediticio."
                    : "We automatically process data found in your uploaded contracts, which may include your address, driver’s license number, and credit score tiers."}
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                {lang === "es"
                  ? "C. Datos de uso recopilados automáticamente"
                  : "C. Automatically Collected Usage Data"}
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>
                    {lang === "es"
                      ? "Información del dispositivo:"
                      : "Device Information:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Dirección IP, tipo de navegador y sistema operativo."
                    : "IP address, browser type, and operating system."}
                </li>
                <li>
                  <strong>
                    {lang === "es" ? "Registros de uso:" : "Usage Logs:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Cómo interactúas con el Servicio (páginas visitadas, funciones usadas, etc.)."
                    : "How you interact with the Service (pages visited, features used, etc.)."}
                </li>
              </ul>
            </div>

            {/* SECTION 3 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {lang === "es"
                  ? "3. Cómo usamos tu información"
                  : "3. How We Use Your Information"}
              </h2>
              <p className="mb-4">
                {lang === "es"
                  ? "Usamos tus datos para los siguientes fines específicos:"
                  : "We use your data for the following specific purposes:"}
              </p>
              <ul className="list-disc ml-6 space-y-3">
                <li>
                  <strong>
                    {lang === "es"
                      ? "Prestación del servicio:"
                      : "Service Delivery:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Para extraer datos de tus documentos, identificar “tarifas ocultas”, calcular puntajes de equidad y generar guiones de negociación."
                    : 'To extract data from your documents, identify "hidden fees," calculate fairness scores, and generate negotiation scripts.'}
                </li>
                <li>
                  <strong>
                    {lang === "es"
                      ? "Análisis de IA:"
                      : "AI Analysis:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Tus documentos se procesan mediante algoritmos de inteligencia artificial para identificar riesgos y discrepancias financieras."
                    : "Your documents are processed by our Artificial Intelligence algorithms to identify risks and financial discrepancies."}
                </li>
                <li>
                  <strong>
                    {lang === "es"
                      ? "Mejora del producto:"
                      : "Product Improvement:"}
                  </strong>{" "}
                  {lang === "es" ? (
                    <>
                      Podemos usar datos anonimizados y agregados (sin
                      identificadores personales) para entrenar nuestros modelos.{" "}
                      <em>
                        Ejemplo: podemos aprender que las “tarifas administrativas
                        del concesionario en Florida promedian $999”, pero no
                        vincularemos ese contrato específico contigo.
                      </em>
                    </>
                  ) : (
                    <>
                      We may use anonymized and aggregated data (data stripped of
                      your personal identifiers) to train our models.{" "}
                      <em>
                        Example: We may use data to learn that "Dealer Admin Fees
                        in Florida average $999," but we will not link that
                        specific contract back to you.
                      </em>
                    </>
                  )}
                </li>
                <li>
                  <strong>
                    {lang === "es"
                      ? "Comunicación:"
                      : "Communication:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Para enviarte actualizaciones del servicio, alertas de seguridad e información de suscripción."
                    : "To send you service updates, security alerts, and subscription information."}
                </li>
              </ul>
            </div>

            {/* SECTION 4 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {lang === "es"
                  ? "4. Compartición y divulgación de datos"
                  : "4. Data Sharing and Disclosure"}
              </h2>
              <p className="mb-4">
                {lang === "es"
                  ? "No vendemos tus datos personales. A diferencia de muchos sitios automotrices, no vendemos tu información de contacto a concesionarios, fabricantes (OEM) ni compañías de seguros."
                  : "We do not sell your personal data. Unlike many automotive websites, we do not sell your contact information to dealerships, OEMs, or insurance companies."}
              </p>
              <p className="mb-3">
                {lang === "es" ? "Divulgamos datos solo a:" : "We disclose data only to:"}
              </p>
              <ul className="list-disc ml-6 space-y-3">
                <li>
                  <strong>
                    {lang === "es"
                      ? "Proveedores de servicio:"
                      : "Service Providers:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Proveedores externos que ayudan con alojamiento (p. ej., AWS/Google Cloud), procesamiento de pagos (p. ej., Stripe) y procesamiento de IA (p. ej., OpenAI/Anthropic). Están obligados contractualmente a proteger tus datos."
                    : "Third-party vendors who assist with hosting (e.g., AWS/Google Cloud), payment processing (e.g., Stripe), and AI processing (e.g., OpenAI/Anthropic). These vendors are contractually obligated to protect your data."}
                </li>
                <li>
                  <strong>
                    {lang === "es"
                      ? "Cumplimiento legal:"
                      : "Legal Compliance:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Si la ley, una citación o un proceso legal lo requiere."
                    : "If required by law, subpoena, or legal process."}
                </li>
                <li>
                  <strong>
                    {lang === "es"
                      ? "Transferencias comerciales:"
                      : "Business Transfers:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "En caso de fusión, adquisición o venta de activos, los datos de usuarios pueden transferirse como un activo comercial."
                    : "In the event of a merger, acquisition, or sale of assets, user data may be transferred as a business asset."}
                </li>
              </ul>
            </div>

            {/* SECTION 5 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {lang === "es" ? "5. Seguridad de datos" : "5. Data Security"}
              </h2>
              <p className="mb-4">
                {lang === "es"
                  ? "Tomamos tu seguridad muy en serio, especialmente por la sensibilidad de los contratos financieros."
                  : "We take your security seriously, especially given the sensitivity of financial contracts."}
              </p>
              <ul className="list-disc ml-6 space-y-3">
                <li>
                  <strong>{lang === "es" ? "Cifrado:" : "Encryption:"}</strong>{" "}
                  {lang === "es"
                    ? "Usamos cifrado AES de 256 bits para datos en reposo y TLS 1.3 para datos en tránsito."
                    : "We use 256-bit AES encryption for data at rest and TLS 1.3 for data in transit."}
                </li>
                <li>
                  <strong>
                    {lang === "es"
                      ? "Controles de acceso:"
                      : "Access Controls:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "El acceso a tus documentos sin procesar está restringido a personal autorizado y a los sistemas de procesamiento de IA."
                    : "Access to your raw documents is restricted to authorized personnel and the AI processing systems."}
                </li>
                <li>
                  <strong>
                    {lang === "es"
                      ? "Minimización de datos:"
                      : "Data Minimization:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Recomendamos ocultar tu número de seguro social (SSN) antes de subir documentos, aunque nuestro sistema está diseñado para manejar documentos sin ocultar de forma segura."
                    : "We encourage users to redact (black out) their Social Security Numbers (SSN) before uploading documents, though our system is designed to handle unredacted documents securely."}
                </li>
              </ul>
            </div>

            {/* SECTION 6 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {lang === "es" ? "6. Retención de datos" : "6. Data Retention"}
              </h2>
              <ul className="list-disc ml-6 space-y-3">
                <li>
                  <strong>
                    {lang === "es"
                      ? "Cuentas activas:"
                      : "Active Accounts:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Conservamos tus documentos y análisis mientras tu cuenta esté activa para que puedas revisar tratos anteriores."
                    : "We retain your documents and analysis for as long as your account is active to allow you to review past deals."}
                </li>
                <li>
                  <strong>
                    {lang === "es"
                      ? "Cuentas eliminadas:"
                      : "Deleted Accounts:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Si eliminas tu cuenta, tus datos personales y documentos subidos se eliminan de servidores de producción dentro de 30 días. Los datos anonimizados y agregados pueden conservarse con fines analíticos."
                    : "If you delete your account, your personal data and uploaded documents are deleted from our production servers within 30 days. Anonymized aggregation data may be retained for analytical purposes."}
                </li>
              </ul>
            </div>

            {/* SECTION 7 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {lang === "es" ? "7. Tus derechos" : "7. Your Rights"}
              </h2>
              <p className="mb-4">
                {lang === "es"
                  ? "Según tu ubicación (incluidos residentes de California, EEE y Reino Unido), tienes derecho a:"
                  : "Depending on your location (including residents of California, EEA, and UK), you have the right to:"}
              </p>
              <ul className="list-disc ml-6 space-y-3">
                <li>
                  <strong>{lang === "es" ? "Acceso:" : "Access:"}</strong>{" "}
                  {lang === "es"
                    ? "Solicitar una copia de los datos que conservamos sobre ti."
                    : "Request a copy of the data we hold about you."}
                </li>
                <li>
                  <strong>
                    {lang === "es" ? "Corrección:" : "Correction:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Actualizar información inexacta."
                    : "Update inaccurate information."}
                </li>
                <li>
                  <strong>{lang === "es" ? "Eliminación:" : "Deletion:"}</strong>{" "}
                  {lang === "es"
                    ? "Solicitar la eliminación permanente de tu cuenta y datos."
                    : "Request the permanent deletion of your account and data."}
                </li>
                <li>
                  <strong>{lang === "es" ? "Exclusión:" : "Opt-Out:"}</strong>{" "}
                  {lang === "es"
                    ? "Darte de baja de comunicaciones de marketing en cualquier momento."
                    : "You may opt out of marketing communications at any time."}
                </li>
              </ul>
              <p className="mt-4">
                {lang === "es" ? (
                  <>
                    Para ejercer estos derechos, contáctanos en{" "}
                    <strong>privacy@signspark-ai.com</strong>.
                  </>
                ) : (
                  <>
                    To exercise these rights, please contact us at{" "}
                    <strong>privacy@signspark-ai.com</strong>.
                  </>
                )}
              </p>
            </div>

            {/* SECTION 8 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {lang === "es"
                  ? "8. Enlaces de terceros"
                  : "8. Third-Party Links"}
              </h2>
              <p>
                {lang === "es"
                  ? "Nuestro Servicio puede contener enlaces a sitios web de terceros (por ejemplo, sitios de DMV estatales o calculadoras financieras). No somos responsables de las prácticas de privacidad de esos sitios."
                  : "Our Service may contain links to third-party websites (e.g., state DMV sites or financial calculators). We are not responsible for the privacy practices of those sites."}
              </p>
            </div>

            {/* SECTION 9 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {lang === "es"
                  ? "9. Privacidad de menores"
                  : "9. Children’s Privacy"}
              </h2>
              <p>
                {lang === "es"
                  ? "Nuestro Servicio no está destinado a personas menores de 18 años. No recopilamos intencionalmente datos de menores."
                  : "Our Service is not intended for individuals under the age of 18. We do not knowingly collect data from children."}
              </p>
            </div>

            {/* SECTION 10 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {lang === "es"
                  ? "10. Cambios a esta política"
                  : "10. Changes to This Policy"}
              </h2>
              <p>
                {lang === "es"
                  ? 'Podemos actualizar esta Política de privacidad ocasionalmente. Notificaremos cualquier cambio publicando la nueva política en esta página y actualizando la fecha de “Última actualización”.'
                  : 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.'}
              </p>
            </div>

            {/* SECTION 11 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {lang === "es" ? "11. Contáctanos" : "11. Contact Us"}
              </h2>
              <p className="mb-3">
                {lang === "es"
                  ? "Si tienes preguntas sobre esta Política de privacidad, contáctanos:"
                  : "If you have questions about this Privacy Policy, please contact us:"}
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>{lang === "es" ? "Correo:" : "Email:"}</strong>{" "}
                  privacy@signspark.com
                </li>
                <li>
                  <strong>{lang === "es" ? "Dirección:" : "Address:"}</strong>{" "}
                  SignSpark LLC • PO Box 2189 • Parsippany, NJ 07054
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
