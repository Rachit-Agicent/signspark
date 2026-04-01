"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white mt-20">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* TITLE */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">
              SignSpark AI Privacy Policy
            </h1>
            <p className="text-gray-500 text-lg">
              Version 1.0 • Effective Date: June 15, 2026 • Last Updated: Feb
              11, 2026
            </p>
          </div>

          {/* INTRODUCTION */}
          <div className="space-y-6 text-lg text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to SignSpark AI ("we," "our," or "us"). We provide an
                AI-powered negotiation and contract analysis platform designed
                to assist car buyers. We are committed to protecting your
                personal information and your financial privacy.
              </p>
              <p>
                By using our website, mobile application, or services
                (collectively, the "Service"), you agree to the collection and
                use of information in accordance with this policy.
              </p>
            </div>

            {/* SECTION 2 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                2. Information We Collect
              </h2>
              <p className="mb-4">
                We collect different types of information to provide our Service
                and improve our AI models.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                A. Personal Information You Provide
              </h3>
              <ul className="list-disc ml-6 space-y-2 mb-6">
                <li>
                  <strong>Account Information:</strong> Name, email address,
                  phone number, and password.
                </li>
                <li>
                  <strong>Payment Information:</strong> For Free Tier users,{" "}
                  <strong>no payment information is collected.</strong>
                  We only collect billing address and payment method details if
                  and when you explicitly choose to upgrade to the "Pro"
                  version. This data is processed securely by our third-party
                  payment processors; we do not store full credit card numbers
                  on our servers.
                </li>
                <li>
                  <strong>Customer Support:</strong> Information you provide
                  when contacting our support team.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                B. Automotive & Financial Data (User Content)
              </h3>
              <p className="mb-3">
                To provide our core contract analysis features, you may upload
                or input:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-6">
                <li>
                  <strong>Vehicle Data:</strong> Vehicle Identification Numbers
                  (VIN), make, model, year, and mileage.
                </li>
                <li>
                  <strong>Transaction Data:</strong> Purchase price, trade-in
                  values, down payments, and lease terms.
                </li>
                <li>
                  <strong>Contract Documents:</strong> Images or PDFs of Buyer’s
                  Orders, Finance Agreements, Lease Agreements, and Window
                  Stickers (Monroney Labels).
                </li>
                <li>
                  <strong>Sensitive Data within Documents:</strong> We
                  automatically process data found in your uploaded contracts,
                  which may include your address, driver’s license number, and
                  credit score tiers.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                C. Automatically Collected Usage Data
              </h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Device Information:</strong> IP address, browser type,
                  and operating system.
                </li>
                <li>
                  <strong>Usage Logs:</strong> How you interact with the Service
                  (pages visited, features used, etc.).
                </li>
              </ul>
            </div>

            {/* SECTION 3 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use your data for the following specific purposes:
              </p>
              <ul className="list-disc ml-6 space-y-3">
                <li>
                  <strong>Service Delivery:</strong> To extract data from your
                  documents, identify "hidden fees," calculate fairness scores,
                  and generate negotiation scripts.
                </li>
                <li>
                  <strong>AI Analysis:</strong> Your documents are processed by
                  our Artificial Intelligence algorithms to identify risks and
                  financial discrepancies.
                </li>
                <li>
                  <strong>Product Improvement:</strong> We may use anonymized
                  and aggregated data (data stripped of your personal
                  identifiers) to train our models.{" "}
                  <em>
                    Example: We may use data to learn that "Dealer Admin Fees in
                    Florida average $999," but we will not link that specific
                    contract back to you.
                  </em>
                </li>
                <li>
                  <strong>Communication:</strong> To send you service updates,
                  security alerts, and subscription information.
                </li>
              </ul>
            </div>

            {/* SECTION 4 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                4. Data Sharing and Disclosure
              </h2>
              <p className="mb-4">
                We do not sell your personal data. Unlike many automotive
                websites, we do not sell your contact information to
                dealerships, OEMs, or insurance companies.
              </p>
              <p className="mb-3">We disclose data only to:</p>
              <ul className="list-disc ml-6 space-y-3">
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who
                  assist with hosting (e.g., AWS/Google Cloud), payment
                  processing (e.g., Stripe), and AI processing (e.g.,
                  OpenAI/Anthropic). These vendors are contractually obligated
                  to protect your data.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> If required by law,
                  subpoena, or legal process.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of assets, user data may be transferred
                  as a business asset.
                </li>
              </ul>
            </div>

            {/* SECTION 5 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="mb-4">
                We take your security seriously, especially given the
                sensitivity of financial contracts.
              </p>
              <ul className="list-disc ml-6 space-y-3">
                <li>
                  <strong>Encryption:</strong> We use 256-bit AES encryption for
                  data at rest and TLS 1.3 for data in transit.
                </li>
                <li>
                  <strong>Access Controls:</strong> Access to your raw documents
                  is restricted to authorized personnel and the AI processing
                  systems.
                </li>
                <li>
                  <strong>Data Minimization:</strong> We encourage users to
                  redact (black out) their Social Security Numbers (SSN) before
                  uploading documents, though our system is designed to handle
                  unredacted documents securely.
                </li>
              </ul>
            </div>

            {/* SECTION 6 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
              <ul className="list-disc ml-6 space-y-3">
                <li>
                  <strong>Active Accounts:</strong> We retain your documents and
                  analysis for as long as your account is active to allow you to
                  review past deals.
                </li>
                <li>
                  <strong>Deleted Accounts:</strong> If you delete your account,
                  your personal data and uploaded documents are deleted from our
                  production servers within 30 days. Anonymized aggregation data
                  may be retained for analytical purposes.
                </li>
              </ul>
            </div>

            {/* SECTION 7 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="mb-4">
                Depending on your location (including residents of California,
                EEA, and UK), you have the right to:
              </p>
              <ul className="list-disc ml-6 space-y-3">
                <li>
                  <strong>Access:</strong> Request a copy of the data we hold
                  about you.
                </li>
                <li>
                  <strong>Correction:</strong> Update inaccurate information.
                </li>
                <li>
                  <strong>Deletion:</strong> Request the permanent deletion of
                  your account and data.
                </li>
                <li>
                  <strong>Opt-Out:</strong> You may opt out of marketing
                  communications at any time.
                </li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at{" "}
                <strong>privacy@signspark-ai.com</strong>.
              </p>
            </div>

            {/* SECTION 8 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                8. Third-Party Links
              </h2>
              <p>
                Our Service may contain links to third-party websites (e.g.,
                state DMV sites or financial calculators). We are not
                responsible for the privacy practices of those sites.
              </p>
            </div>

            {/* SECTION 9 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                9. Children’s Privacy
              </h2>
              <p>
                Our Service is not intended for individuals under the age of 18.
                We do not knowingly collect data from children.
              </p>
            </div>

            {/* SECTION 10 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last Updated" date.
              </p>
            </div>

            {/* SECTION 11 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p className="mb-3">
                If you have questions about this Privacy Policy, please contact
                us:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Email:</strong> privacy@signspark.com
                </li>
                <li>
                  <strong>Address:</strong> SignSpark LLC • PO Box 2189 •
                  Parsippany, NJ 07054
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
