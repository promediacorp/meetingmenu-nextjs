import Head from "next/head";
import Link from "next/link";
import Brand from "@/components/ui/Brand";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - MeetingMenu</title>
      </Head>
      <main className="w-full px-4 py-10">
        <div className="max-w-4xl mx-auto text-gray-300">
          <Brand className="w-32 mb-8" />
          <h1 className="text-white text-3xl font-bold mb-6">Terms of Service</h1>
          <div className="space-y-6 text-gray-400">
            <p>
              These Terms of Service ("Terms") govern your use of the MeetingMenu app ("the app") provided by MeetingMenu Inc. ("we", "our", "us"). By using the app, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-bold text-white">1. Use of the App</h2>
            <p>
              You may use the app only in accordance with these Terms and all applicable local, state, national, and international laws, rules, and regulations. You are responsible for ensuring that your use of the app complies with these Terms.
            </p>

            <h2 className="text-2xl font-bold text-white">2. User Accounts</h2>
            <p>
              In order to use certain features of the app, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>

            <h2 className="text-2xl font-bold text-white">3. License</h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to use the app for personal, non-commercial purposes. This license is provided solely to allow you to use and enjoy the app's benefits as provided by us, in the manner permitted by these Terms.
            </p>

            <h2 className="text-2xl font-bold text-white">4. Prohibited Activities</h2>
            <p>
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Using the app for any illegal purpose or in violation of any local, state, national, or international law.</li>
              <li>Attempting to gain unauthorized access to the app or its related systems or networks.</li>
              <li>Engaging in any activity that interferes with or disrupts the app's functionality.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white">5. Termination</h2>
            <p>
              We may terminate or suspend your access to the app at any time, without prior notice or liability, for any reason, including your violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-white">6. Disclaimer of Warranties</h2>
            <p>
              The app is provided on an "as is" and "as available" basis. We disclaim all warranties, whether express or implied, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h2 className="text-2xl font-bold text-white">7. Limitation of Liability</h2>
            <p>
              In no event shall MeetingMenu Inc., its directors, employees, or agents, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the app.
            </p>

            <h2 className="text-2xl font-bold text-white">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the state of New York, without regard to its conflict of law principles.
            </p>

            <h2 className="text-2xl font-bold text-white">9. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the app after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold text-white">10. Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms, please contact us at <Link href="/support" className="text-purple-500 hover:text-purple-600">Support</Link>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
