import Head from "next/head";
import Link from "next/link";
import Brand from "@/components/ui/Brand";

export default function Help() {
  return (
    <>
      <Head>
        <title>Help - MeetingMenu</title>
      </Head>
      <main className="w-full px-4 py-10">
        <div className="max-w-4xl mx-auto text-gray-300">
          <Brand className="w-32 mb-8" />
          <h1 className="text-white text-3xl font-bold mb-6">Help & Support</h1>
          <div className="space-y-6 text-gray-400">
            <p>
              Welcome to the Help page! Below you'll find answers to common questions, as well as links to further resources. If you can't find what you're looking for, please feel free to <Link href="/support" className="text-purple-500 hover:text-purple-600">contact our support team</Link>.
            </p>

            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white">How do I use the MeetingMenu app?</h3>
                <p>
                  MeetingMenu is designed to help you focus during meetings by managing various desktop settings automatically. Once installed, you can customize your settings through the app's preferences and start using it to streamline your meeting experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">What apps does MeetingMenu support?</h3>
                <p>
                  MeetingMenu supports a variety of popular meeting and communication apps, including:
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Zoom</li>
                  <li>Microsoft Teams</li>
                  <li>Google Meet</li>
                  <li>Slack</li>
                  <li>Webex</li>
                  <li>Skype</li>
                  <li>GoToMeeting</li>
                  <li>BlueJeans</li>
                  <li>Jitsi Meet</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Is my data safe?</h3>
                <p>
                  Yes, your data is safe. MeetingMenu does not collect, store, or transmit any personal data. The app operates locally on your device and does not require an internet connection to function.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">How do I get support?</h3>
                <p>
                  If you need help or have any questions, you can reach out to us through our <Link href="/support" className="text-purple-500 hover:text-purple-600">Support page</Link>. We're here to help!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">How do I get my money back?</h3>
                <p>
                  We offer a 30-day money-back guarantee. To request a refund, please <Link href="/support" className="text-purple-500 hover:text-purple-600">contact support</Link>, fill out the form, and include your receipt number for the Apple Store purchase. We will process your refund within 7 days of purchase.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">What are the system requirements?</h3>
                <p>
                  MeetingMenu requires macOS 12.0 or greater, including macOS 12 and Sonoma. The app is compatible with both Intel and Apple Silicon chips.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white">Additional Resources</h2>

            <ul className="list-disc list-inside ml-4">
              <li><Link href="/privacy" className="text-purple-500 hover:text-purple-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-purple-500 hover:text-purple-600">Terms of Service</Link></li>
              <li><Link href="/support" className="text-purple-500 hover:text-purple-600">Contact Support</Link></li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
