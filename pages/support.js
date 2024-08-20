import Head from "next/head";
import { useForm, ValidationError } from "@formspree/react";

export default function Support() {
  const [state, handleSubmit] = useForm("movangej"); // Replace with your actual Formspree form ID

  if (state.succeeded) {
    return (
      <div className="w-full px-4 py-10 text-center">
        <div className="max-w-4xl mx-auto text-gray-300">
          <h1 className="text-white text-3xl font-bold mb-6">Thank You!</h1>
          <p>Your message has been sent successfully. We will get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Support - MeetingMenu</title>
      </Head>
      <main className="w-full px-4 py-10">
        <div className="max-w-4xl mx-auto text-gray-300">
          <h1 className="text-white text-3xl font-bold mb-6">Support</h1>
          <p className="mb-6">If you have any questions or issues, please fill out the form below, and we'll get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="font-medium">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full mt-2 text-gray-300 bg-gray-800 focus:bg-gray-900 focus:border-gray-800 p-2 rounded-md"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="message" className="font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full mt-2 text-gray-300 bg-gray-800 focus:bg-gray-900 focus:border-gray-800 h-32 p-2 rounded-md"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full text-gray-800 bg-gray-100 hover:bg-gray-200 ring-offset-2 focus:ring rounded-lg p-2"
            >
              Submit
            </button>
            <ValidationError errors={state.errors} />
          </form>
        </div>
      </main>
    </>
  );
}
