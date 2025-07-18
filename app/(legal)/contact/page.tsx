import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - GameCodesList ",
    description:
    "We’re here to help with any questions about game codes or our website. Your feedback matters to us at GameCodesList.com.",
    alternates: {
      canonical: "https://www.gamecodeslist.com/contact",
    },
  };

export default function Contact() {
  return (
    <div className="container mx-auto px-6 md:px-24 py-8 flex flex-col md:flex-row">
      <main className="article-container">
        <h1>Contact Us – GameCodesList.com</h1>

        <p>
          <strong>Welcome!</strong><br />
          We’re here to help with any questions about game codes or our website.
          Your feedback matters to us at <strong>GameCodesList.com</strong>.
        </p>

        <h2>How to Reach Us</h2>
        <p>
          Email us at: <code>support@gamecodeslist.com</code>
          We’ll respond within 24 hours.
        </p>

        <h2>What to Include</h2>
        <ul>
          <li>Your name and email address</li>
          <li>The game name and code (if applicable)</li>
          <li>A brief description of your question or request</li>
        </ul>

        <h2>Privacy Requests</h2>
        <p>
          For questions about our Privacy Policy or your personal data, use the
          same email: <code>support@gamecodeslist.com</code>. We’ll handle your
          request according to our policies and applicable laws.
        </p>

        <h2>Thanks for Choosing Us!</h2>
        <p>
          We appreciate your support and look forward to assisting you with the
          best game codes and service!
        </p>
      </main>
    </div>
  );
}
