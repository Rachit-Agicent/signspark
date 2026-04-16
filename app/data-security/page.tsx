"use client";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function SecurityTrustPage() {
  const { lang } = useI18n();
  return (
    <main className="bg-white mt-20">
      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* TITLE */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">
              {lang === "es"
                ? "Seguridad y confianza en SignSpark AI"
                : "Security & Trust at SignSpark AI"}
            </h1>

            <p className="text-gray-500 text-lg">
              Version 1.0 Effective Date: May 15, 2026 • Last Updated: Feb 11,
              2026
            </p>
          </div>

          {/* INTRO */}
          <div className="space-y-4 text-lg text-gray-700">
            <h2 className="text-2xl font-semibold">
              {lang === "es"
                ? "Tu trato. Tus datos. Tu bóveda."
                : "Your Deal. Your Data. Your Vault."}
            </h2>

            <p>
              {lang === "es"
                ? "Usamos cifrado de nivel bancario para que tu estrategia de negociación se mantenga 100% privada frente a concesionarios y corredores de datos."
                : "We use bank-grade encryption to ensure your negotiation strategy remains 100% private from dealerships and data brokers."}
            </p>
          </div>

          {/* SECTION 1 */}
          <div className="mt-14 space-y-4 text-lg text-gray-700">
            <h2 className="text-2xl font-semibold">
              {lang === "es"
                ? "1. Nuestra filosofía de seguridad"
                : "1. Our Security Philosophy"}
            </h2>

            <p>
              {lang === "es"
                ? "En SignSpark AI sabemos que un contrato de auto contiene tu información personal más sensible—desde tu dirección hasta tu nivel crediticio. Diseñamos nuestra plataforma con una arquitectura de “Privacidad primero”, asegurando que tus datos sean vistos solo por ti y por nuestra IA, nunca por el concesionario con el que estás negociando."
                : "At SignSpark AI, we know that a car contract contains your most sensitive personal information—from your home address to your credit tier. We built our platform with a \"Privacy First\" architecture, ensuring that your data is seen only by you and our AI, never by the dealership you are negotiating with."}
            </p>
          </div>

          {/* SECTION 2 */}
          <div className="mt-14 text-lg text-gray-700 space-y-6">
            <h2 className="text-2xl font-semibold">
              {lang === "es"
                ? "2. Cómo protegemos tus datos"
                : "2. How We Protect Your Data"}
            </h2>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                {lang === "es"
                  ? "🛡️ Cifrado de nivel bancario"
                  : "🛡️ Bank-Grade Encryption"}
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>
                    {lang === "es" ? "En tránsito:" : "In Transit:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Todos los datos enviados entre tu dispositivo (móvil o escritorio) y nuestros servidores se cifran con TLS 1.3 (Transport Layer Security). Es el mismo estándar usado por los principales bancos e instituciones financieras."
                    : "All data sent between your device (mobile or desktop) and our servers is encrypted using TLS 1.3 (Transport Layer Security). This is the same standard used by major banks and financial institutions."}
                </li>

                <li>
                  <strong>{lang === "es" ? "En reposo:" : "At Rest:"}</strong>{" "}
                  {lang === "es"
                    ? "Una vez que tus documentos llegan a nuestra nube segura, se cifran con AES-256 (Advanced Encryption Standard). Incluso si alguien robara físicamente nuestros servidores, tus datos seguirían siendo ilegibles."
                    : "Once your documents reach our secure cloud, they are encrypted using AES-256 (Advanced Encryption Standard). Even if someone physically stole our servers, your data would remain unreadable."}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                {lang === "es"
                  ? "💳 Seguridad de pagos (PCI-DSS)"
                  : "💳 Payment Security (PCI-DSS)"}
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>
                    {lang === "es"
                      ? "No almacenamos tu tarjeta:"
                      : "We Do Not Store Your Card:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Cuando actualizas a SignSpark Pro, tu pago se procesa directamente con nuestro socio de pagos (Stripe/Paddle), un procesador certificado como PCI Service Provider Level 1."
                    : "When you upgrade to SignSpark Pro, your payment is processed directly by our payments partner (Stripe/Paddle), a PCI Service Provider Level 1 certified processor."}
                </li>

                <li>
                  <strong>
                    {lang === "es"
                      ? "Transacciones de conocimiento cero:"
                      : "Zero-Knowledge Transactions:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "SignSpark AI nunca ve ni almacena tu número completo de tarjeta ni tu código CVV."
                    : "SignSpark AI never sees or stores your full credit card number or CVV code."}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                {lang === "es"
                  ? "☁️ Infraestructura segura"
                  : "☁️ Secure Infrastructure"}
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>
                    {lang === "es" ? "Seguridad en la nube:" : "Cloud Security:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Nuestra plataforma se aloja en proveedores de nube líderes (p. ej., AWS/Google Cloud) que mantienen cumplimiento ISO 27001 y SOC 2 Tipo II."
                    : "Our platform is hosted on industry-leading cloud providers (e.g., AWS/Google Cloud) that maintain ISO 27001 and SOC 2 Type II compliance."}
                </li>

                <li>
                  <strong>
                    {lang === "es"
                      ? "Aislamiento de datos:"
                      : "Data Isolation:"}
                  </strong>{" "}
                  {lang === "es"
                    ? "Los datos de tu cuenta están aislados lógicamente. Nuestra IA procesa tu contrato en un entorno “aislado” que evita filtraciones de datos entre usuarios."
                    : "Your account data is logically isolated. Our AI processes your contract in a \"sandboxed\" environment that prevents data leakage between users."}
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION 3 */}
          <div className="mt-14 text-lg text-gray-700 space-y-4">
            <h2 className="text-2xl font-semibold">
              {lang === "es"
                ? "3. Seguridad y ética de IA"
                : "3. AI Safety & Ethics"}
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>
                  {lang === "es"
                    ? "Sin entrenamiento con datos PII:"
                    : 'No "Data Training" on PII:'}
                </strong>{" "}
                {lang === "es"
                  ? "No usamos tu información personal identificable (nombre, dirección, VIN) para entrenar modelos públicos de IA. Los detalles de tu contrato siguen siendo tuyos."
                  : "We do not use your Personally Identifiable Information (Name, Address, VIN) to train our public AI models. Your personal contract details remain yours."}
              </li>

              <li>
                <strong>
                  {lang === "es"
                    ? "El “cortafuegos del concesionario”:"
                    : 'The "Dealer Firewall":'}
                </strong>{" "}
                {lang === "es"
                  ? "Un miedo común es que usar una app alerte al concesionario. SignSpark AI es completamente independiente. No compartimos tu “puntaje de equidad”, alertas de “tarifas ocultas” ni límites de negociación con ningún concesionario, prestamista o fabricante."
                  : "A common fear is that using an app will alert the dealer. SignSpark AI is completely independent. We do not share your \"Fairness Score,\" \"Hidden Fee\" alerts, or negotiation limits with any dealership, lender, or manufacturer."}
              </li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div className="mt-14 text-lg text-gray-700 space-y-4">
            <h2 className="text-2xl font-semibold">
              {lang === "es" ? "4. Controles de acceso" : "4. Access Controls"}
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>
                  {lang === "es"
                    ? "Acceso de privilegio mínimo:"
                    : "Least Privilege Access:"}
                </strong>{" "}
                {lang === "es"
                  ? "Nuestros sistemas internos están diseñados para que los empleados de SignSpark no puedan acceder a tus documentos subidos a menos que otorgues permiso explícito por un caso de soporte."
                  : "Our internal systems are designed so that SignSpark employees cannot access your uploaded documents unless you explicitly grant permission for a customer support issue."}
              </li>

              <li>
                <strong>
                  {lang === "es" ? "Registros de auditoría:" : "Audit Logging:"}
                </strong>{" "}
                {lang === "es"
                  ? "Mantenemos registros estrictos de todo acceso al sistema para detectar y prevenir actividad no autorizada."
                  : "We maintain strict logs of all system access to detect and prevent unauthorized activity."}
              </li>
            </ul>
          </div>

          {/* SECTION 5 */}
          <div className="mt-14 text-lg text-gray-700 space-y-4">
            <h2 className="text-2xl font-semibold">
              {lang === "es"
                ? "5. Divulgación responsable"
                : "5. Responsible Disclosure"}
            </h2>

            <p>
              {lang === "es"
                ? "Si eres investigador de seguridad y crees haber encontrado una vulnerabilidad en SignSpark AI, contáctanos de inmediato en security@signspark.com. Estamos comprometidos a trabajar con la comunidad para mantener nuestra plataforma segura."
                : "If you are a security researcher and believe you have found a vulnerability in SignSpark AI, please contact us immediately at security@signspark.com. We are committed to working with the community to keep our platform safe."}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
