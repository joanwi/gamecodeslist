import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - GameCodesList ",
  description:
    "We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Website.",
  alternates: {
    canonical: "https://gamecodeslist.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 md:px-24 py-8 flex flex-col md:flex-row">
      <main className="article-container">
        <h1>Privacy Policy</h1>
        <p>Effective Date: March 4, 2025</p>
        <section>
          <p>
            Welcome to GameCodesList.com (hereinafter referred to as the
            Website). We are committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you use our Website. Please read this policy
            carefully. If you do not agree with this policy, please do not use
            the Website.
          </p>
        </section>
        <section>
          <h2>1. Information We Collect</h2>
          <h3>1.1 Information You Provide</h3>
          <p>
            Information you voluntarily provide when contacting us (e.g., via
            email or contact forms), such as your name, email address, or other
            contact details.
          </p>
          <p>
            <strong>Comments:</strong> If you submit comments on the Website, we
            collect the content of your comment and any associated information
            (e.g., username or email, if required). Comments are subject to
            moderation and will only be published after approval.
          </p>
          <h3>1.2 Information Collected Automatically</h3>
          <p>
            <strong>Device and Usage Data:</strong> We collect information about
            the device you use to access the Website, such as your IP address,
            browser type, operating system, access times, pages viewed, and
            referring URLs.
          </p>
          <p>
            <strong>Cookies and Similar Technologies:</strong> We use cookies
            and similar tracking technologies (e.g., via Google Analytics) to
            enhance your browsing experience, analyze traffic, and understand
            user behavior. See <a href="#section4">Section 4</a> for more
            details.
          </p>
          <p>
            <strong>Future Advertising:</strong> When we introduce
            advertisements, additional tracking technologies may be used by
            third-party ad networks to serve relevant ads. We will update this
            policy accordingly.
          </p>

          <h3>1.3 Information from Third Parties</h3>
          <p>
            If you interact with the Website through third-party services (e.g.,
            social media accounts), we may receive certain information from
            those services, depending on their privacy settings and policies.
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We may use your information to:</p>
          <ul>
            <li>Provide, maintain, and improve the Website’s services;</li>
            <li>Moderate and publish user-submitted comments (if approved);</li>
            <li>
              Analyze user behavior via Google Analytics to optimize Website
              content and functionality;
            </li>
            <li>
              Serve advertisements in the future and personalize your
              experience;
            </li>
            <li>Respond to your inquiries or requests;</li>
            <li>Prevent fraud or abuse and ensure Website security;</li>
            <li>Comply with applicable laws or legal processes.</li>
          </ul>
        </section>

        <section>
          <h2>3. Information Sharing and Disclosure</h2>
          <p>
            We do not sell or rent your personal information to third parties,
            but we may share it in these cases:
          </p>
          <h3>Service Providers</h3>
          <p>
            We share information with third parties like Google Analytics to
            analyze Website usage. In the future, ad networks may use your data
            to deliver targeted ads.
          </p>

          <h3>Legal Requirements</h3>
          <p>
            We may disclose information if required by law or to protect the
            Website, users, or others.
          </p>

          <h3>Business Transfers</h3>
          <p>
            If the Website is involved in a merger or acquisition, your
            information may be transferred.
          </p>
        </section>

        <section id="section4">
          <h2>4. Cookies and Tracking Technologies</h2>

          <h3>Google Analytics</h3>
          <p>
            We use Google Analytics to collect data about how users interact
            with the Website. This includes anonymized data like page views and
            session duration. Learn more at{" "}
            <a href="https://policies.google.com/privacy" target="_blank">
              Google’s Privacy Policy.
            </a>
          </p>
          <h3>Advertising</h3>
          <p>
            When ads are implemented, third-party ad networks may use cookies or
            similar technologies to serve relevant ads based on your browsing
            behavior.
          </p>

          <h3>Your Choices</h3>
          <p>
            You can disable cookies in your browser settings, but this may
            affect Website functionality. For Google Analytics, you can opt out
            using the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">
              Google Analytics Opt-Out Browser Add-On
            </a>
            .
          </p>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We take reasonable measures to protect your information, but no
            online transmission is fully secure.
          </p>
        </section>

        <section>
          <h2>6. Your Rights and Choices</h2>
          <p>
            Depending on your location, you may have rights to access, correct,
            delete, or restrict processing of your data. Contact us to exercise
            these rights.
          </p>
        </section>

        <section>
          <h2>7. Third-Party Links</h2>
          <p>
            The Website may link to third-party sites. We are not responsible
            for their privacy practices.
          </p>
        </section>
        <section>
          <h2>8. Children’s Privacy</h2>
          <p>
            The Website is not intended for children under 13. We do not
            knowingly collect their data.
          </p>
        </section>
        <section>
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this policy as needed. Changes will be posted here
            with an updated date.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>For questions, contact us at:</p>
          <address>
            Email:{" "}
            <a href="mailto:support@gamecodeslist.com">
              support@gamecodeslist.com
            </a>
            <br />
            Website: <a href="https://gamecodeslist.com">gamecodeslist.com</a>
          </address>
        </section>
      </main>
    </div>
  );
}
