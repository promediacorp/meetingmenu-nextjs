import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Brand from "@/components/ui/Brand";

export default function Privacy() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // or a loading indicator
  }

  return (
    <>
      <Head>
        <title>Privacy Policy - Meeting Menu</title>
      </Head>
      <main className="w-full px-4 py-10">
        <div className="max-w-4xl mx-auto text-gray-300">
          <Brand className="w-32 mb-8" />
          <h1 className="text-white text-3xl font-bold mb-6">Privacy Policy</h1>
          <div className="space-y-6 text-gray-400">
            <p>
              This Privacy Policy describes how Meeting Menu ("we", "our", "us") 
              collects, uses, and shares information in connection with our Mac 
              application ("the app"). By using the app, you agree to the terms 
              outlined in this Privacy Policy.
            </p>
            <h2 className="text-2xl font-bold text-white">1. Data Collection</h2>
            <p>
              <strong>Personal Data:</strong> Meeting Menu does not collect, store, 
              or transmit any personal data from users. We do not track usage or 
              gather any information about you through the app.
            </p>
            <p>
              <strong>Non-Personal Data:</strong> The app may collect non-personal 
              data such as device type, operating system version, and app usage 
              statistics for the purpose of improving the app's performance and 
              user experience. This data does not identify you as an individual.
            </p>
            <h2 className="text-2xl font-bold text-white">2. Data Usage</h2>
            <p>
              Any data collected is used solely to enhance the functionality of 
              the app. We do not sell, trade, or otherwise transfer your 
              information to outside parties.
            </p>
            <h2 className="text-2xl font-bold text-white">3. Third-Party Services</h2>
            <p>
              Meeting Menu does not integrate with third-party services that 
              collect or share personal data.
            </p>
            <h2 className="text-2xl font-bold text-white">4. User Rights</h2>
            <p>
              As a user of the app, you have the right to:
              <ul className="list-disc list-inside ml-4">
                <li>Access and update your personal information (if applicable).</li>
                <li>Request the deletion of your data.</li>
                <li>Opt out of any data collection (where applicable).</li>
              </ul>
              Since we do not collect personal data, these rights may not be applicable, 
              but we remain committed to transparency and user privacy.
            </p>
            <h2 className="text-2xl font-bold text-white">5. Security</h2>
            <p>
              We take reasonable measures to protect the data we collect. However, 
              please note that no method of electronic storage or transmission 
              over the internet is 100% secure.
            </p>
            <h2 className="text-2xl font-bold text-white">6. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes 
              in our practices or for other operational, legal, or regulatory reasons. 
              We encourage you to review this page periodically for any updates.
            </p>
            <h2 className="text-2xl font-bold text-white">7. Contact Us</h2>
            <p>
              If you have any questions or concerns about our Privacy Policy or your data, 
              please contact us at <Link href="/support" className="text-purple-500 hover:text-purple-600">Support</Link>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
