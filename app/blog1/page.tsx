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
            src="/assets/img/blog/blog1.png"
            alt="Blog Image"
            fill
            className="object-fill"
            priority
          />
        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* TITLE */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-6">
              The "Dirty Dozen": 12 Hidden Fees Car Dealers Hope You Miss
            </h1>

            <div className="flex justify-between items-center flex-wrap gap-4">
              <span className="text-green-700 bg-green-100 px-5 py-1 rounded-full text-lg">
                By SignSpark Editorial Team
              </span>

              <p className="text-gray-500 text-lg">5 Minutes Read Time</p>
            </div>
          </div>

          {/* INTRO */}
          <div className="space-y-4 text-lg text-gray-700 mt-10">
            <p>
              You’ve spent weeks researching the perfect car. You’ve test-driven
              it. You’ve even agreed on a monthly payment. Now comes the part
              everyone dreads: The Finance Office.
            </p>

            <p>
              This is where the "deal" you shook hands on often falls apart.
            </p>

            <p>
              Buried in the fine print of that long, yellow contract are often
              hundreds—sometimes thousands—of dollars in extra charges. Dealers
              count on two things: your exhaustion and your confusion. They hope
              you'll just sign to get it over with.
            </p>

            <p>
              Don't let them win. Here is the "Dirty Dozen"—the 12 most common
              hidden fees to watch for, and exactly how to handle them.
            </p>
          </div>

          {/* SECTION */}
          <div className="mt-16">
            <h2 className="text-3xl font-semibold mb-6">
              The "Bogus" Fees (Refuse These Immediately)
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              These fees offer you zero value. They are pure profit generators
              for the dealership.
            </p>

            <div className="space-y-10">
              {/* ITEM */}
              <div>
                <h3 className="font-semibold text-xl mb-3">1. Nitrogen Fill</h3>

                <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
                  <li>
                    <strong>The Cost:</strong> $99 – $499
                  </li>
                  <li>
                    <strong>The Pitch:</strong> "It keeps tire pressure stable
                    better than regular air."
                  </li>
                  <li>
                    <strong>The Reality:</strong> The air we breathe is already
                    78% nitrogen. Paying $200 for green valve caps is one of the
                    biggest scams in the industry.
                  </li>
                  <li>
                    <strong>Verdict: REFUSE.</strong> If they say it's "already
                    on the car," tell them you won't pay for it.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">2. VIN Etching</h3>

                <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
                  <li>
                    <strong>The Cost:</strong> $199 – $399
                  </li>
                  <li>
                    <strong>The Pitch:</strong> "We etch the VIN onto the
                    windows so thieves won't steal the car."
                  </li>
                  <li>
                    <strong>The Reality:</strong> You can buy a DIY kit on
                    Amazon for $20. It rarely lowers insurance rates enough to
                    justify the cost.
                  </li>
                  <li>
                    <strong>Verdict: REFUSE.</strong>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">
                  3. Dealer Prep / Reconditioning Fee
                </h3>

                <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
                  <li>
                    <strong>The Cost:</strong> $500 – $1,000+
                  </li>
                  <li>
                    <strong>The Pitch:</strong> "This covers washing, vacuuming,
                    and checking the fluids."
                  </li>
                  <li>
                    <strong>The Reality:</strong> Getting the car ready for sale
                    is the "cost of doing business." You shouldn't pay a salary
                    to the person washing the car.
                  </li>
                  <li>
                    <strong>Verdict: REFUSE.</strong> Ask them why this isn't
                    included in the sticker price.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">
                  4. Advertising Fees
                </h3>

                <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
                  <li>
                    <strong>The Cost:</strong> $300 – $1,000
                  </li>
                  <li>
                    <strong>The Pitch:</strong> "We have to pay the manufacturer
                    for those TV commercials."
                  </li>
                  <li>
                    <strong>The Reality:</strong> True, they do. But that is an
                    operational cost that should be built into the price of the
                    car, not tacked on as a line item at the end.
                  </li>
                  <li>
                    <strong>Verdict: REFUSE.</strong> Tell them you are paying
                    the price of the car, not their marketing budget.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">
                  5. Market Adjustment (or "ADM")
                </h3>

                <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
                  <li>
                    <strong>The Cost:</strong> $1,000 – $10,000+
                  </li>
                  <li>
                    <strong>The Pitch:</strong> "This is a hot car. Supply and
                    demand."
                  </li>
                  <li>
                    <strong>The Reality:</strong> Pure greed. This is a markup
                    simply because they think they can get away with it.
                  </li>
                  <li>
                    <strong>Verdict: WALK AWAY. </strong> Unless it is a rare
                    Ferrari, find another dealer who doesn't charge ADM.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SECOND SECTION */}
          <div className="mt-16">
            <h2 className="text-3xl font-semibold mb-6">
              The "Overpriced" Products (Buy Elsewhere)
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              These are real products, but the dealership marks them up by 200%
              or more.
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="font-semibold text-xl mb-3">6. GAP Insurance</h3>

                <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
                  <li>
                    <strong>The Cost:</strong> $700 – $1,200 at dealer
                  </li>
                  <li>
                    <strong>The Reality:</strong> GAP is essential if you are
                    putting little money down. However, your own auto insurance
                    company or credit union usually sells it for $40–$100 a
                    year.
                  </li>
                  <li>
                    <strong>Verdict: BUY ELSEWHERE. </strong> Get it from your
                    insurer.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">
                  7. Extended Warranties
                </h3>

                <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
                  <li>
                    <strong>The Cost:</strong> $2,000 – $4,000
                  </li>
                  <li>
                    <strong>The Reality:</strong> Dealer warranties are often
                    "third-party" contracts with high deductibles and strict
                    rules.
                  </li>
                  <li>
                    <strong>Verdict: SKIP FOR NOW. </strong> You can buy an
                    extended warranty anytime before the factory warranty
                    expires. Shop around first.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">
                  8. Paint & Fabric Protection
                </h3>

                <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
                  <li>
                    <strong>The Cost:</strong> $400 – $1,000
                  </li>
                  <li>
                    <strong>The Reality:</strong> It’s often just a spray-on wax
                    or Scotchgard applied by a porter in the back.
                  </li>
                  <li>
                    <strong>Verdict: REFUSE. </strong> Buy a $20 bottle of
                    protectant and do it yourself.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* THIRD SECTION */}
          <div className="mt-16">
            <h2 className="text-3xl font-semibold mb-6">
              The "Questionable" Admin Fees (Watch Closely)
            </h2>

            <div className="space-y-10">
              <div>
                <h3 className="font-semibold text-xl mb-3">
                  9. Documentation (Doc) Fee
                </h3>

                <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
                  <li>
                    <strong>The Cost:</strong> $85 – $900 (Depending on the
                    state).
                  </li>
                  <li>
                    <strong>The Reality:</strong> This pays the clerks to file
                    the paperwork. Some states (like NY or CA) cap this fee by
                    law (e.g., $175). Others (like FL or VA) have no limit.
                  </li>
                  <li>
                    <strong>Verdict: VERIFY. </strong> If it seems high, check
                    your state’s average. If it’s uncapped, ask them to lower
                    the price of the car to offset it.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">
                  10. Electronic Filing Fee
                </h3>

                <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
                  <li>
                    <strong>The Cost:</strong> $20 – $50
                  </li>
                  <li>
                    <strong>The Reality:</strong> Often a duplicate of the Doc
                    Fee. If you are paying a Doc Fee, why are you paying another
                    fee to file digitally?
                  </li>
                  <li>
                    <strong>Verdict: CHALLENGE IT. </strong> Ask if this is
                    legally required or just a profit center.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">
                  11. Destination Charge (On Used Cars)
                </h3>

                <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
                  <li>
                    <strong>The Cost:</strong> $900 – $1,600
                  </li>
                  <li>
                    <strong>The Reality:</strong> On a New car, this is legit
                    (it pays to ship the car from the factory). On a Used car,
                    the first owner already paid this. You should never pay
                    destination on a used vehicle.
                  </li>
                  <li>
                    <strong>Verdict: REFUSE. </strong> on Used Cars.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">
                  11. Destination Charge (On Used Cars)
                </h3>

                <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
                  <li>
                    <strong>The Cost:</strong> $900 – $1,600
                  </li>
                  <li>
                    <strong>The Reality:</strong> On a New car, this is legit
                    (it pays to ship the car from the factory). On a Used car,
                    the first owner already paid this. You should never pay
                    destination on a used vehicle.
                  </li>
                  <li>
                    <strong>Verdict: REFUSE. </strong> on Used Cars.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">
                  12. Credit Life / Disability Insurance
                </h3>

                <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700">
                  <li>
                    <strong>The Cost:</strong> Varies.
                  </li>
                  <li>
                    <strong>The Pitch: </strong> "If you die, this pays off the
                    car."
                  </li>
                  <li>
                    <strong>The Reality: </strong> It is expensive coverage with
                    very low payout rates. A standard Term Life insurance policy
                    is much better and cheaper.
                  </li>
                  <li>
                    <strong>Verdict: REFUSE. </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FINAL SECTION */}
          <div className="mt-16">
            <h2 className="text-3xl font-semibold mb-6">
              How to Spot Them Before You Sign
            </h2>

            <p className="text-lg text-gray-700 mb-4">
              Trying to memorize this list while a finance manager stares at you
              is stressful. They often hide these fees using acronyms or bundle
              them into the "Total Cash Price" so you don't notice.
            </p>

            <p className="text-lg font-semibold mb-4">
              You don't need to be a lawyer to fight back. You just need
              SignSpark.
            </p>

            <p className="text-lg font-semibold mb-4">
              Before you pick up the pen, pick up your phone.
            </p>

            <ul className="list-disc ml-6 space-y-2 text-lg text-gray-700 mb-4">
              <li>
                <strong>Scan:</strong> Take a photo of the contract or purchase
                order.
              </li>
              <li>
                <strong>Analyze:</strong> SignSpark’s AI reads the fine print
                instantly.
              </li>
              <li>
                <strong>Detect:</strong> We flag the "Dirty Dozen" automatically
                and tell you exactly what to say to remove them.
              </li>
            </ul>

            <p className="text-lg font-semibold mb-4">
              Don't let a $499 nitrogen fee ruin a great deal.
            </p>

            <Link href="" className="font-bold text-lg text-[#0d6efd]">
              {" > "}
              Download SignSpark and Scan Your Contract for Free
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
