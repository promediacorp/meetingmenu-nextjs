import Head from "next/head";
import { useState } from "react";
import Brand from "@/components/ui/Brand";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("There was an issue with your submission. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Support - MeetingMenu</title>
      </Head>
      <main className="w-full px-4 py-10">
        <div className="max-w-4xl mx-auto text-gray-300">
          <Brand className="w-32 mb-8" />
          <h1 className="text-white text-3xl font-bold mb-6">Support</h1>
          <p className="mb-6">If you have any questions or issues, please fill out the form below, and we'll get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-medium">Name</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-2 text-gray-300 bg-gray-800 focus:bg-gray-900 focus:border-gray-800"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 text-gray-300 bg-gray-800 focus:bg-gray-900 focus:border-gray-800"
              />
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-2 text-gray-300 bg-gray-800 focus:bg-gray-900 focus:border-gray-800 h-32 p-2 rounded-md"
              />
            </div>
            <Button type="submit" className="w-full text-gray-800 bg-gray-100 hover:bg-gray-200 ring-offset-2 focus:ring rounded-lg">
              Submit
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
