"use client";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetailPage() {
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
                SCAMS
              </span>

              <p className="text-gray-500 text-lg">5 Minutes Read Time</p>
            </div>
          </div>

          {/* INTRO */}
          <div className="space-y-4 text-lg text-gray-700">
            <h2 className="text-3xl font-semibold mb-6">
              The Sticker Price is a Lie
            </h2>

            <p>
              If you walk into a dealership believing the price on the window
              sticker (MSRP) is the price you will pay, you have already lost
              the negotiation.
            </p>

            <p>
              For decades, the{" "}
              <strong>Manufacturer's Suggested Retail Price</strong> has served
              as a psychological anchor—a number designed to make you feel good
              when you pay slightly less, or lucky when you "only" pay slightly
              more.
            </p>

            <p>
              But at <strong>CarBuyInsight,</strong> we don't look at stickers.
              We look at signatures.
            </p>

            <p>
              After analyzing over{" "}
              <strong>10,000 verified purchase agreements</strong> uploaded by
              our community members, we found a startling truth:{" "}
              <strong>Less than 12% of buyers pay exactly MSRP.</strong>
            </p>

            <p>
              The reality is a chaotic scatterplot of pricing where two
              neighbors buying the exact same car on the same day can pay a
              difference of <strong>$3,500 or more.</strong> Here is what our
              data revealed—and how you can ensure you are on the winning side
              of the math.
            </p>
          </div>

          {/* SECTION 1 */}
          <div className="mt-14">
            <h2 className="text-3xl font-semibold mb-6">
              The "Iceberg" Effect: Hidden Markup Averages $2,100
            </h2>

            <p className="text-lg text-gray-700 mb-4">
              The most consistent trend in our data analysis is what we call the
              "Iceberg Effect." The MSRP is just the tip visible above the
              water.
            </p>

            <p className="text-lg text-gray-700 mb-4">
              When we aggregated the "Total Cash Price" (the final number before
              taxes) across our database, we found that the average transaction
              price for popular mid-size SUVs was actually{" "}
              <strong>$2,100 higher</strong> than the MSRP listed on the
              manufacturer's website.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              <strong>Where does this money go?</strong> It isn't in the base
              price. It hides in the "Addendum Sticker" next to the official
              Monroney label:
            </p>

            <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
              <li>
                <strong>Dealer Installed Accessories:</strong> Nitrogen tires,
                wheel locks, and mudguards ($800+ avg).
              </li>
              <li>
                <strong>Protection Packages:</strong> Paint sealant and fabric
                guard ($1,200+ avg).
              </li>
              <li>
                <strong>Market Adjustments:</strong> Pure profit markups on
                high-demand models.
              </li>
            </ul>

            <p className="text-lg text-gray-700 mt-6">
              <strong>The Insight:</strong> If you are negotiating based on
              MSRP, you are fighting the wrong battle. You need to negotiate the
              "Out-the-Door" (OTD) price, stripping away the Iceberg layers.
            </p>
          </div>

          {/* SECTION 2 */}
          <div className="mt-14">
            <h2 className="text-3xl font-semibold mb-6">
              The "Hot vs. Cold" Model Variance
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Our data proves that "Fairness" is not universal—it is specific to
              the car you are buying.
            </p>

            <ul className="list-disc ml-6 space-y-3 text-lg text-gray-700">
              <li>
                <strong>The "Over" Group:</strong> For hybrids, minivans (like
                the Toyota Sienna), and high-performance sports cars, our data
                shows contracts consistently signed at 10-15% ABOVE MSRP. In
                these cases, paying "Sticker Price" is actually a massive
                victory.
              </li>
              <li>
                <strong>The "Under" Group:</strong> For full-size pickup trucks
                (Ram/Ford) and certain luxury sedans, the data flips. Contracts
                are routinely signed 8-12% BELOW MSRP due to hidden factory
                incentives and dealer holdbacks.
              </li>
            </ul>

            <p className="text-lg text-gray-700 mt-6">
              <strong>The Trap:</strong> Dealers love to use the "Over" mindset
              on "Under" cars. They will act like selling you a truck at MSRP is
              a favor, when community data shows everyone else is getting $4,000
              off.
            </p>
          </div>

          {/* SECTION 3 */}
          <div className="mt-14">
            <h2 className="text-3xl font-semibold mb-6">The "Zip Code" Tax</h2>

            <p className="text-lg text-gray-700 mb-4">
              Perhaps the most frustrating finding in our 10,000-contract study
              is geographical variance.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              We compared contracts for the exact same vehicle trim (e.g., a
              Honda CR-V EX-L) bought in different states.
            </p>

            <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
              <li>
                <strong>Buyer A (Florida):</strong> Paid $999 in "Dealer Doc
                Fees."
              </li>
              <li>
                <strong>Buyer B (California):</strong> Paid $85 in "Dealer Doc
                Fees."
              </li>
              <li>
                <strong>Buyer C (New York):</strong> Paid $175 in "Dealer Doc
                Fees."
              </li>
            </ul>

            <p className="text-lg text-gray-700 mt-6">
              <strong>
                That is a $900 difference for the exact same paperwork.
              </strong>{" "}
              While state laws cap some of these fees, many buyers assume these
              are "government taxes." They are not. They are dealer profits. Our
              data highlights exactly which states are "High Fee Danger Zones"
              so you can be extra vigilant.
            </p>
          </div>

          {/* SECTION 4 */}
          <div className="mt-14">
            <h2 className="text-3xl font-semibold mb-6">The APR Disconnect</h2>

            <p className="text-lg text-gray-700 mb-4">
              We also analyzed the Finance section of the contracts. The data
              revealed that buyers with the
              <strong> exact same credit score (720+)</strong> were receiving
              interest rates that varied by up to <strong>2.5%.</strong>
            </p>

            <p className="text-lg text-gray-700 mb-4">
              On a $40,000 loan, that 2.5% difference costs you{" "}
              <strong>$2,800</strong> in extra interest over 60 months.
            </p>

            <p className="text-lg text-gray-700 mb-4">
              Why? Because dealers are allowed to mark up the "Buy Rate" (the
              rate the bank gives them) and keep the difference. If you don't
              know the base rate, you fund their profit.
            </p>
          </div>

          {/* FINAL */}
          <div className="mt-14">
            <h2 className="text-3xl font-semibold mb-6">
              Conclusion: Don't Guess. Benchmark.
            </h2>

            <p className="text-lg text-gray-700 mb-4">
              The days of wondering "Did I get a good deal?" are over.
            </p>

            <p className="text-lg text-gray-700 mb-4">
              When you rely on a single dealership's word, you are guessing.
              When you tap into the
              <strong> Fairness Intelligence Network</strong>, you are
              benchmarking.
            </p>

            <p className="text-lg font-semibold mb-6">
              How to leverage this data today:
            </p>

            <ul className="list-disc ml-6 space-y-3 text-lg text-gray-700">
              <li>
                <strong>Download SignSpark AI.</strong>
              </li>
              <li>
                <strong>Upload your quote or contract.</strong>
              </li>
              <li>
                <strong>Get your Fairness Score.</strong> Our AI compares your
                specific deal against the aggregated data of thousands of
                similar purchases to tell you instantly:{" "}
                <em>Are you paying too much?</em>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#!" className="text-purple-600 font-semibold text-lg">
                {">"} View the Live Data
              </a>
              <a href="#!" className="text-purple-600 font-semibold text-lg">
                {">"} Get My Fairness Report
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
