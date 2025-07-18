import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - GameCodesList ",
  description:
    "We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Website.",
  alternates: {
    canonical: "https://www.gamecodeslist.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 md:px-24 py-8 flex flex-col md:flex-row">
      <main className="article-container">
        <h1>Privacy Policy For GameCodesList</h1>
        <p>
          <strong>Effective Date:</strong> March 12, 2025
        </p>

        <h2 id="introduction">1. Introduction</h2>
        <p>
          Welcome to GameCodesList.com (hereinafter referred to as the
          "Website"). We are committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you use our Website. Please read this policy
          carefully. If you do not agree with this policy, please do not use the
          Website.
        </p>

        <h2 id="collection">2. Information We Collect</h2>
        <h3>2.1 Information You Provide</h3>
        <ul>
          <li>Contact details (e.g., name, email) when submitting inquiries</li>
          <li>User-generated comments (published after moderation)</li>
        </ul>

        <h3>2.2 Automated Collection</h3>
        <ul>
          <li>
            <strong>Device Data:</strong> IP address, browser type, OS
          </li>
          <li>
            <strong>Cookies:</strong> Managed via consent banner (see Section 5)
          </li>
        </ul>

        <h3>2.3 Third-Party Sources</h3>
        <p>Data from social media platforms per their privacy settings.</p>

        <h2 id="use">3. How We Use Information</h2>
        <ul>
          <li>Operate and optimize the Website</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 id="sharing">4. Information Sharing</h2>
        <ul>
          <li>
            <strong>Analytics Providers:</strong> Google Analytics (anonymized
            data)
          </li>
          <li>
            <strong>Legal Compliance:</strong> Disclose if required by law
          </li>
        </ul>

        <h2 id="cookies">5. Cookies & Tracking</h2>
        <p>We use:</p>
        <table>
          <tbody>
            <tr>
              <th>Cookie Type</th>
              <th>Purpose</th>
              <th>Control</th>
            </tr>
            <tr>
              <td>Essential</td>
              <td>Basic functionality</td>
              <td>Cannot disable</td>
            </tr>
            <tr>
              <td>Analytics</td>
              <td>Traffic analysis</td>
              <td>
                <a href="#cookies">Opt-out link</a>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 id="rights">6. Your Rights</h2>
        <ul>
          <li>Access, correct, or delete your data</li>
          <li>
            CCPA: Opt out of data "sales" via{" "}
            <a href="#do-not-sell">this link</a>
          </li>
        </ul>

        <h2 id="security">7. Data Security</h2>
        <p>
          We implement SSL encryption and access controls to protect your data.
        </p>

        <h2 id="children">8. Children’s Privacy</h2>
        <p>
          No services directed to children under 13. Contact us to report
          accidental data collection.
        </p>

        <h2 id="changes">9. Policy Updates</h2>
        <p>Changes posted here with updated effective date.</p>

        <h2 id="contact">10. Contact Us</h2>
        <address>
          Email:{" "}
          <a href="mailto:support@gamecodeslist.com">
            support@gamecodeslist.com
          </a>
        </address>
      </main>
    </div>
  );
}
