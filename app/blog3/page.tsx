"use client";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function BlogDetailPage() {
  const { t, lang } = useI18n();
  return (
    <main className="bg-white">
      {/* HERO IMAGE */}
      <section className="pt-20">
        <div className="relative h-[30vh] sm:h-[65vh] w-full">
          <Image
            src="/assets/img/blog/blog03.png"
            alt="blog image"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* TITLE */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">The MSRP Myth</h1>

            <div className="flex justify-between flex-wrap gap-4 items-center">
              <span className="text-green-700 bg-green-100 px-5 py-1 rounded-full text-lg">
                {t("blog.category.scams")}
              </span>

              <p className="text-gray-500 text-lg">
                5 {t("blog.minutesRead")}
              </p>
            </div>
          </div>

          {/* INTRO */}
          <div className="space-y-4 text-lg text-gray-700">
            <h2 className="text-3xl font-semibold mb-6">
              {lang === "es"
                ? "El precio de la etiqueta es una mentira"
                : "The Sticker Price is a Lie"}
            </h2>

            <p>
              {lang === "es"
                ? "Si entras a un concesionario creyendo que el precio en la ventana (MSRP) es el precio que pagarás, ya perdiste la negociación."
                : "If you walk into a dealership believing the price on the window sticker (MSRP) is the price you will pay, you have already lost the negotiation."}
            </p>

            <p>
              {lang === "es" ? (
                <>
                  Durante décadas, el{" "}
                  <strong>Precio de venta sugerido por el fabricante</strong> ha
                  funcionado como un ancla psicológica: un número diseñado para
                  hacerte sentir bien cuando pagas un poco menos, o con suerte
                  cuando &quot;solo&quot; pagas un poco más.
                </>
              ) : (
                <>
                  For decades, the{" "}
                  <strong>Manufacturer&apos;s Suggested Retail Price</strong>{" "}
                  has served as a psychological anchor—a number designed to make
                  you feel good when you pay slightly less, or lucky when you
                  &quot;only&quot; pay slightly more.
                </>
              )}
            </p>

            <p>
              {lang === "es" ? (
                <>
                  Pero en <strong>CarBuyInsight</strong> no miramos etiquetas.
                  Miramos firmas.
                </>
              ) : (
                <>
                  But at <strong>CarBuyInsight,</strong> we don&apos;t look at
                  stickers. We look at signatures.
                </>
              )}
            </p>

            <p>
              {lang === "es" ? (
                <>
                  Tras analizar más de{" "}
                  <strong>10,000 acuerdos de compra verificados</strong> subidos
                  por nuestra comunidad, encontramos una verdad sorprendente:{" "}
                  <strong>menos del 12% de los compradores paga exactamente MSRP.</strong>
                </>
              ) : (
                <>
                  After analyzing over{" "}
                  <strong>10,000 verified purchase agreements</strong> uploaded
                  by our community members, we found a startling truth:{" "}
                  <strong>Less than 12% of buyers pay exactly MSRP.</strong>
                </>
              )}
            </p>

            <p>
              {lang === "es" ? (
                <>
                  La realidad es un gráfico caótico de precios: dos vecinos
                  comprando el mismo auto el mismo día pueden pagar una
                  diferencia de <strong>$3,500 o más.</strong> Esto es lo que
                  revelaron nuestros datos y cómo asegurarte de estar del lado
                  ganador de las matemáticas.
                </>
              ) : (
                <>
                  The reality is a chaotic scatterplot of pricing where two
                  neighbors buying the exact same car on the same day can pay a
                  difference of <strong>$3,500 or more.</strong> Here is what our
                  data revealed—and how you can ensure you are on the winning side
                  of the math.
                </>
              )}
            </p>
          </div>

          {/* SECTION 1 */}
          <div className="mt-14">
            <h2 className="text-3xl font-semibold mb-6">
              {lang === "es"
                ? "El efecto “iceberg”: el recargo oculto promedia $2,100"
                : 'The "Iceberg" Effect: Hidden Markup Averages $2,100'}
            </h2>

            <p className="text-lg text-gray-700 mb-4">
              {lang === "es"
                ? "La tendencia más constante en nuestro análisis es lo que llamamos el “efecto iceberg”. El MSRP es solo la punta visible sobre el agua."
                : 'The most consistent trend in our data analysis is what we call the "Iceberg Effect." The MSRP is just the tip visible above the water.'}
            </p>

            <p className="text-lg text-gray-700 mb-4">
              {lang === "es" ? (
                <>
                  Al agrupar el &quot;Total Cash Price&quot; (la cifra final antes
                  de impuestos) en nuestra base de datos, encontramos que el
                  precio promedio de transacción en SUV medianas populares fue{" "}
                  <strong>$2,100 más alto</strong> que el MSRP mostrado en el
                  sitio del fabricante.
                </>
              ) : (
                <>
                  When we aggregated the &quot;Total Cash Price&quot; (the final
                  number before taxes) across our database, we found that the
                  average transaction price for popular mid-size SUVs was
                  actually <strong>$2,100 higher</strong> than the MSRP listed on
                  the manufacturer&apos;s website.
                </>
              )}
            </p>

            <p className="text-lg text-gray-700 mb-6">
              {lang === "es" ? (
                <>
                  <strong>¿A dónde va ese dinero?</strong> No está en el precio
                  base. Se esconde en la &quot;Addendum Sticker&quot; junto a la
                  etiqueta oficial (Monroney):
                </>
              ) : (
                <>
                  <strong>Where does this money go?</strong> It isn&apos;t in the
                  base price. It hides in the &quot;Addendum Sticker&quot; next
                  to the official Monroney label:
                </>
              )}
            </p>

            <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
              <li>
                <strong>
                  {lang === "es"
                    ? "Accesorios instalados por el concesionario:"
                    : "Dealer Installed Accessories:"}
                </strong>{" "}
                {lang === "es"
                  ? "Llantas con nitrógeno, seguros de rueda y guardabarros (promedio $800+)."
                  : "Nitrogen tires, wheel locks, and mudguards ($800+ avg)."}
              </li>
              <li>
                <strong>
                  {lang === "es"
                    ? "Paquetes de protección:"
                    : "Protection Packages:"}
                </strong>{" "}
                {lang === "es"
                  ? "Sellador de pintura y protector de tela (promedio $1,200+)."
                  : "Paint sealant and fabric guard ($1,200+ avg)."}
              </li>
              <li>
                <strong>
                  {lang === "es"
                    ? "Ajustes de mercado:"
                    : "Market Adjustments:"}
                </strong>{" "}
                {lang === "es"
                  ? "Recargos de pura ganancia en modelos de alta demanda."
                  : "Pure profit markups on high-demand models."}
              </li>
            </ul>

            <p className="text-lg text-gray-700 mt-6">
              {lang === "es" ? (
                <>
                  <strong>La clave:</strong> si negocias basándote en el MSRP,
                  estás peleando la batalla equivocada. Debes negociar el precio
                  &quot;Out-the-Door&quot; (OTD), quitando las capas del iceberg.
                </>
              ) : (
                <>
                  <strong>The Insight:</strong> If you are negotiating based on
                  MSRP, you are fighting the wrong battle. You need to negotiate
                  the &quot;Out-the-Door&quot; (OTD) price, stripping away the
                  Iceberg layers.
                </>
              )}
            </p>
          </div>

          {/* SECTION 2 */}
          <div className="mt-14">
            <h2 className="text-3xl font-semibold mb-6">
              {lang === "es"
                ? "La diferencia entre modelos “calientes” y “fríos”"
                : 'The "Hot vs. Cold" Model Variance'}
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              {lang === "es"
                ? "Nuestros datos demuestran que la “equidad” no es universal: depende del auto que compras."
                : 'Our data proves that "Fairness" is not universal—it is specific to the car you are buying.'}
            </p>

            <ul className="list-disc ml-6 space-y-3 text-lg text-gray-700">
              <li>
                <strong>
                  {lang === "es" ? "Grupo “por encima”:" : 'The "Over" Group:'}
                </strong>{" "}
                {lang === "es"
                  ? "En híbridos, minivanes (como Toyota Sienna) y deportivos de alto rendimiento, los contratos se firman de forma consistente 10–15% POR ENCIMA del MSRP. En esos casos, pagar “precio de etiqueta” puede ser una gran victoria."
                  : "For hybrids, minivans (like the Toyota Sienna), and high-performance sports cars, our data shows contracts consistently signed at 10-15% ABOVE MSRP. In these cases, paying \"Sticker Price\" is actually a massive victory."}
              </li>
              <li>
                <strong>
                  {lang === "es" ? "Grupo “por debajo”:" : 'The "Under" Group:'}
                </strong>{" "}
                {lang === "es"
                  ? "En pickups grandes (Ram/Ford) y algunos sedanes de lujo, ocurre lo contrario: los contratos se firman 8–12% POR DEBAJO del MSRP por incentivos ocultos y márgenes del concesionario."
                  : "For full-size pickup trucks (Ram/Ford) and certain luxury sedans, the data flips. Contracts are routinely signed 8-12% BELOW MSRP due to hidden factory incentives and dealer holdbacks."}
              </li>
            </ul>

            <p className="text-lg text-gray-700 mt-6">
              {lang === "es" ? (
                <>
                  <strong>La trampa:</strong> los concesionarios aplican la
                  mentalidad de &quot;por encima&quot; a autos que deberían estar
                  &quot;por debajo&quot;. Harán ver que venderte una camioneta a
                  MSRP es un favor, cuando los datos muestran que otros obtienen
                  $4,000 de descuento.
                </>
              ) : (
                <>
                  <strong>The Trap:</strong> Dealers love to use the &quot;Over&quot;
                  mindset on &quot;Under&quot; cars. They will act like selling you
                  a truck at MSRP is a favor, when community data shows everyone
                  else is getting $4,000 off.
                </>
              )}
            </p>
          </div>

          {/* SECTION 3 */}
          <div className="mt-14">
            <h2 className="text-3xl font-semibold mb-6">
              {lang === "es" ? "El “impuesto del código postal”" : 'The "Zip Code" Tax'}
            </h2>

            <p className="text-lg text-gray-700 mb-4">
              {lang === "es"
                ? "Quizás el hallazgo más frustrante de nuestro estudio de 10,000 contratos es la variación geográfica."
                : "Perhaps the most frustrating finding in our 10,000-contract study is geographical variance."}
            </p>

            <p className="text-lg text-gray-700 mb-6">
              {lang === "es"
                ? "Comparamos contratos del mismo modelo y versión (por ejemplo, Honda CR‑V EX‑L) comprados en distintos estados."
                : "We compared contracts for the exact same vehicle trim (e.g., a Honda CR-V EX-L) bought in different states."}
            </p>

            <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
              <li>
                <strong>{lang === "es" ? "Comprador A (Florida):" : "Buyer A (Florida):"}</strong>{" "}
                {lang === "es"
                  ? "Pagó $999 en “tarifas de documentación del concesionario”."
                  : 'Paid $999 in "Dealer Doc Fees."'}
              </li>
              <li>
                <strong>{lang === "es" ? "Comprador B (California):" : "Buyer B (California):"}</strong>{" "}
                {lang === "es"
                  ? "Pagó $85 en “tarifas de documentación del concesionario”."
                  : 'Paid $85 in "Dealer Doc Fees."'}
              </li>
              <li>
                <strong>{lang === "es" ? "Comprador C (New York):" : "Buyer C (New York):"}</strong>{" "}
                {lang === "es"
                  ? "Pagó $175 en “tarifas de documentación del concesionario”."
                  : 'Paid $175 in "Dealer Doc Fees."'}
              </li>
            </ul>

            <p className="text-lg text-gray-700 mt-6">
              {lang === "es" ? (
                <>
                  <strong>Eso es una diferencia de $900 por el mismo papeleo.</strong>{" "}
                  Aunque algunos estados limitan estas tarifas, muchos compradores
                  creen que son “impuestos del gobierno”. No lo son: son ganancias
                  del concesionario. Nuestros datos muestran qué estados son zonas
                  de alto riesgo por tarifas para que estés alerta.
                </>
              ) : (
                <>
                  <strong>
                    That is a $900 difference for the exact same paperwork.
                  </strong>{" "}
                  While state laws cap some of these fees, many buyers assume these
                  are &quot;government taxes.&quot; They are not. They are dealer
                  profits. Our data highlights exactly which states are &quot;High
                  Fee Danger Zones&quot; so you can be extra vigilant.
                </>
              )}
            </p>
          </div>

          {/* SECTION 4 */}
          <div className="mt-14">
            <h2 className="text-3xl font-semibold mb-6">
              {lang === "es" ? "La desconexión del APR" : "The APR Disconnect"}
            </h2>

            <p className="text-lg text-gray-700 mb-4">
              {lang === "es" ? (
                <>
                  También analizamos la sección de financiamiento. Los datos
                  revelaron que compradores con{" "}
                  <strong>el mismo puntaje de crédito (720+)</strong> recibían
                  tasas que variaban hasta <strong>2.5%.</strong>
                </>
              ) : (
                <>
                  We also analyzed the Finance section of the contracts. The data
                  revealed that buyers with the
                  <strong> exact same credit score (720+)</strong> were receiving
                  interest rates that varied by up to <strong>2.5%.</strong>
                </>
              )}
            </p>

            <p className="text-lg text-gray-700 mb-4">
              {lang === "es" ? (
                <>
                  En un préstamo de $40,000, esa diferencia de 2.5% te cuesta{" "}
                  <strong>$2,800</strong> en intereses extra a 60 meses.
                </>
              ) : (
                <>
                  On a $40,000 loan, that 2.5% difference costs you{" "}
                  <strong>$2,800</strong> in extra interest over 60 months.
                </>
              )}
            </p>

            <p className="text-lg text-gray-700 mb-4">
              {lang === "es"
                ? "¿Por qué? Porque los concesionarios pueden subir la “Buy Rate” (la tasa que les da el banco) y quedarse con la diferencia. Si no conoces la tasa base, financias su ganancia."
                : 'Why? Because dealers are allowed to mark up the "Buy Rate" (the rate the bank gives them) and keep the difference. If you don\'t know the base rate, you fund their profit.'}
            </p>
          </div>

          {/* FINAL */}
          <div className="mt-14">
            <h2 className="text-3xl font-semibold mb-6">
              {lang === "es"
                ? "Conclusión: no adivines. Compara."
                : "Conclusion: Don't Guess. Benchmark."}
            </h2>

            <p className="text-lg text-gray-700 mb-4">
              {lang === "es"
                ? "Se acabaron los días de preguntarte “¿Hice un buen trato?”"
                : 'The days of wondering "Did I get a good deal?" are over.'}
            </p>

            <p className="text-lg text-gray-700 mb-4">
              {lang === "es" ? (
                <>
                  Cuando dependes de la palabra de un solo concesionario, estás
                  adivinando. Cuando accedes a la{" "}
                  <strong>Red de inteligencia de equidad</strong>, estás
                  comparando contra datos reales.
                </>
              ) : (
                <>
                  When you rely on a single dealership&apos;s word, you are
                  guessing. When you tap into the
                  <strong> Fairness Intelligence Network</strong>, you are
                  benchmarking.
                </>
              )}
            </p>

            <p className="text-lg font-semibold mb-6">
              {lang === "es"
                ? "Cómo aprovechar estos datos hoy:"
                : "How to leverage this data today:"}
            </p>

            <ul className="list-disc ml-6 space-y-3 text-lg text-gray-700">
              <li>
                <strong>
                  {lang === "es"
                    ? "Descarga SignSpark AI."
                    : "Download SignSpark AI."}
                </strong>
              </li>
              <li>
                <strong>
                  {lang === "es"
                    ? "Sube tu cotización o contrato."
                    : "Upload your quote or contract."}
                </strong>
              </li>
              <li>
                {lang === "es" ? (
                  <>
                    <strong>Obtén tu puntaje de equidad.</strong> Nuestra IA
                    compara tu trato contra datos agregados de miles de compras
                    similares para decirte al instante:{" "}
                    <em>¿estás pagando de más?</em>
                  </>
                ) : (
                  <>
                    <strong>Get your Fairness Score.</strong> Our AI compares
                    your specific deal against the aggregated data of thousands
                    of similar purchases to tell you instantly:{" "}
                    <em>Are you paying too much?</em>
                  </>
                )}
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#!" className="text-purple-600 font-semibold text-lg">
                {">"} {lang === "es" ? "Ver datos en vivo" : "View the Live Data"}
              </a>
              <a href="#!" className="text-purple-600 font-semibold text-lg">
                {">"}{" "}
                {lang === "es" ? "Obtener mi informe de equidad" : "Get My Fairness Report"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
