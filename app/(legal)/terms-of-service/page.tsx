import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - GameCodesList ",
  description:
    "Welcome to GameCodesList.com. By using this Website, you agree to these Terms of Service (Terms).",
  alternates: {
    canonical: "https://gamecodeslist.com/terms-of-service",
  },
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-6 md:px-24 py-8 flex flex-col md:flex-row">
      <main className="article-container">
        <main>
          <h1>Terms of Service</h1>
          <p>Effective Date: March 4, 2025</p>
          <section>
            <p>
              Welcome to GameCodesList.com. By using this Website, you agree to
              these Terms of Service (Terms). If you do not agree, please do not
              use the Website.
            </p>
          </section>

          <section>
            <h2>1. Use of the Website</h2>
            <article>
              <h3>General Rules</h3>
              <ul>
                <li>Use the Website lawfully and responsibly</li>
                <li>Do not disrupt the Website (e.g., spamming, hacking)</li>
              </ul>
            </article>
          </section>

          <section>
            <h2>2. Game Codes</h2>

            <h3>Source</h3>
            <p>
              Game codes are collected from public sources, official social
              media accounts like X, Discord, YouTube or others. We do not own
              these codes and attribute them where possible.
            </p>

            <h3>Availability</h3>
            <p>We do not guarantee code accuracy or validity.</p>
          </section>

          <section>
            <h2>3. User Comments</h2>

            <h3>Submission</h3>
            <p>You may submit comments, subject to moderation.</p>

            <h3>Moderation</h3>
            <p>We may reject, edit, or remove comments at our discretion.</p>

            <h3>Ownership</h3>
            <p>You grant us a license to use your comments.</p>

            <article>
              <h3>Responsibility</h3>
              <p>You are responsible for your comment content.</p>
            </article>
          </section>

          <section>
            <h2>4. Analytics and Advertising</h2>

            <h3>Google Analytics</h3>
            <p>
              We use Google Analytics to track usage. See our{" "}
              <a href="/privacy-policy">Privacy Policy</a> for details.
            </p>

            <h3>Future Ads</h3>
            <p>
              We may introduce ads served by third-party networks, which may use
              tracking technologies.
            </p>
          </section>

          <section>
            <h2>5. Intellectual Property</h2>
            <p>
              Our original content is protected by copyright. Game codes belong
              to their respective owners.
            </p>
          </section>

          <section>
            <h2>6. Limitation of Liability</h2>
            <p>
              We are not liable for damages from using the Website, codes, or
              comments.
            </p>
          </section>

          <section>
            <h2>7. Termination</h2>
            <p>We may restrict your access at our discretion.</p>
          </section>

          <section>
            <h2>8. Contact Us</h2>
            <address>
              Email:{" "}
              <a href="mailto:support@gamecodeslist.com">
                support@gamecodeslist.com
              </a>
            </address>
          </section>
        </main>
      </main>
    </div>
  );
}
