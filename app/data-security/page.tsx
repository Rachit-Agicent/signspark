"use client";

export default function SecurityTrustPage() {
  return (
    <main className="bg-white mt-20">
      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* TITLE */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">
              Security & Trust at SignSpark AI
            </h1>

            <p className="text-gray-500 text-lg">
              Version 1.0 Effective Date: May 15, 2026 • Last Updated: Feb 11,
              2026
            </p>
          </div>

          {/* INTRO */}
          <div className="space-y-4 text-lg text-gray-700">
            <h2 className="text-2xl font-semibold">
              Your Deal. Your Data. Your Vault.
            </h2>

            <p>
              We use bank-grade encryption to ensure your negotiation strategy
              remains 100% private from dealerships and data brokers.
            </p>
          </div>

          {/* SECTION 1 */}
          <div className="mt-14 space-y-4 text-lg text-gray-700">
            <h2 className="text-2xl font-semibold">
              1. Our Security Philosophy
            </h2>

            <p>
              At SignSpark AI, we know that a car contract contains your most
              sensitive personal information—from your home address to your
              credit tier. We built our platform with a "Privacy First"
              architecture, ensuring that your data is seen only by you and our
              AI, never by the dealership you are negotiating with.
            </p>
          </div>

          {/* SECTION 2 */}
          <div className="mt-14 text-lg text-gray-700 space-y-6">
            <h2 className="text-2xl font-semibold">
              2. How We Protect Your Data
            </h2>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                🛡️ Bank-Grade Encryption
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>In Transit:</strong> All data sent between your device
                  (mobile or desktop) and our servers is encrypted using TLS 1.3
                  (Transport Layer Security). This is the same standard used by
                  major banks and financial institutions.
                </li>

                <li>
                  <strong>At Rest:</strong> Once your documents reach our secure
                  cloud, they are encrypted using AES-256 (Advanced Encryption
                  Standard). Even if someone physically stole our servers, your
                  data would remain unreadable.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                💳 Payment Security (PCI-DSS)
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>We Do Not Store Your Card:</strong> When you upgrade
                  to SignSpark Pro, your payment is processed directly by our
                  payments partner (Stripe/Paddle), a PCI Service Provider Level
                  1 certified processor.
                </li>

                <li>
                  <strong>Zero-Knowledge Transactions:</strong> SignSpark AI
                  never sees or stores your full credit card number or CVV code.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                ☁️ Secure Infrastructure
              </h3>

              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Cloud Security:</strong> Our platform is hosted on
                  industry-leading cloud providers (e.g., AWS/Google Cloud) that
                  maintain ISO 27001 and SOC 2 Type II compliance.
                </li>

                <li>
                  <strong>Data Isolation:</strong> Your account data is
                  logically isolated. Our AI processes your contract in a
                  "sandboxed" environment that prevents data leakage between
                  users.
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION 3 */}
          <div className="mt-14 text-lg text-gray-700 space-y-4">
            <h2 className="text-2xl font-semibold">3. AI Safety & Ethics</h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>No "Data Training" on PII:</strong>
                We do not use your Personally Identifiable Information (Name,
                Address, VIN) to train our public AI models. Your personal
                contract details remain yours.
              </li>

              <li>
                <strong>The "Dealer Firewall":</strong>A common fear is that
                using an app will alert the dealer. SignSpark AI is completely
                independent. We do not share your "Fairness Score," "Hidden Fee"
                alerts, or negotiation limits with any dealership, lender, or
                manufacturer.
              </li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div className="mt-14 text-lg text-gray-700 space-y-4">
            <h2 className="text-2xl font-semibold">4. Access Controls</h2>

            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Least Privilege Access:</strong>
                Our internal systems are designed so that SignSpark employees
                cannot access your uploaded documents unless you explicitly
                grant permission for a customer support issue.
              </li>

              <li>
                <strong>Audit Logging:</strong>
                We maintain strict logs of all system access to detect and
                prevent unauthorized activity.
              </li>
            </ul>
          </div>

          {/* SECTION 5 */}
          <div className="mt-14 text-lg text-gray-700 space-y-4">
            <h2 className="text-2xl font-semibold">
              5. Responsible Disclosure
            </h2>

            <p>
              If you are a security researcher and believe you have found a
              vulnerability in SignSpark AI, please contact us immediately at
              security@signspark.com. We are committed to working with the
              community to keep our platform safe.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
