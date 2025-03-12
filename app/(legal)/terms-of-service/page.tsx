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
        <h1>Terms of Service For GameCodesList</h1>
        <p>
          <strong>Effective Date:</strong> March 12, 2025
        </p>

        <h2 id="acceptance">1. Acceptance of Terms</h2>
        <p>
          By accessing or using GameCodesList.com ("the Website"), you agree to
          be bound by these Terms of Service and our{" "}
          <a href="#">Privacy Policy</a>. If you are under 13 years old (or the
          minimum legal age in your jurisdiction), you must immediately cease
          using the Website.
        </p>

        <h2 id="service">2. Service Description</h2>
        <p>
          The Website aggregates publicly available video game redemption codes
          from:
        </p>
        <ul>
          <li>
            Official channels of game developers/publishers (e.g., X, Discord,
            YouTube)
          </li>
          <li>Verified community giveaways</li>
        </ul>
        <h3>Prohibited Content:</h3>
        <ul className="prohibited">
          <li>❌ Paid codes not publicly released</li>
          <li>
            ❌ Codes obtained through piracy, hacking, or unauthorized means
          </li>
        </ul>

        <h2 id="ip">3. Intellectual Property</h2>
        <h3>3.1 Game Codes</h3>
        <p>
          All game codes remain the intellectual property of their respective
          developers or licensors.
        </p>
        <p>
          To submit a <strong>DMCA Takedown Request</strong>, contact:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:legal@gamecodeslist.com">support@gamecodeslist.com</a>{" "}
            (response within 24 hours)
          </li>
          <li>
            Required information:
            <ul>
              <li>Copyright proof</li>
              <li>Infringing URL</li>
              <li>Contact details</li>
              <li>Statement under penalty of perjury</li>
            </ul>
          </li>
        </ul>

        <h3>3.2 Website Content</h3>
        <p>
          Original content (e.g., guides, layouts) is &copy; 2025
          GameCodesList.com. Unauthorized replication is prohibited.
        </p>
        <p>
          Third-party assets (e.g., game icons) are credited to rights holders.
          Report uncredited content for removal.
        </p>

        <h2 id="responsibilities">4. User Responsibilities</h2>
        <h3>4.1 User-Generated Content (Comments)</h3>
        <p>You agree NOT to post content containing:</p>
        <ul>
          <li>Hate speech, discrimination, or violent threats</li>
          <li>Spam, phishing links, or malware</li>
          <li>Privacy violations or infringing material</li>
        </ul>
        <p>
          <strong>Consequences:</strong> We reserve the right to remove content,
          suspend accounts, and report violations to authorities.
        </p>

        <h3>4.2 Code Usage Disclaimer</h3>
        <p>By using codes from this Website, you acknowledge:</p>
        <ul>
          <li>
            Codes may expire or be region-locked; we do not guarantee validity.
          </li>
          <li>
            Developers may revoke improperly used codes; we assume no liability
            for account penalties.
          </li>
        </ul>

        <h2 id="privacy">5. Privacy & Data Practices</h2>
        <h3>Data Collection</h3>
        <p>We use anonymized tracking via:</p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> Measures traffic sources and page
            interactions (see <a href="#">Privacy Policy</a>).
          </li>
          <li>
            <strong>Microsoft Clarity:</strong> Records user behavior (e.g.,
            clicks, scrolling) for UX optimization.
          </li>
        </ul>

        <h2 id="liability">6. Limitation of Liability</h2>
        <p>We are not responsible for:</p>
        <ul>
          <li>
            Temporary service disruptions due to server outages or cyberattacks.
          </li>
          <li>
            Losses incurred from third-party links (e.g., game official sites).
          </li>
          <li>Developer-enforced penalties for code misuse.</li>
        </ul>

        <h2 id="provisions">7. General Provisions</h2>
        <h3>Governing Law</h3>
        <p>
          These Terms are governed by the laws of the State of California, USA.
        </p>

        <h3>Updates</h3>
        <p>
          Material changes will be notified via website banners or registered
          user emails.
        </p>

        <h3>Contact</h3>
        <address>
          General inquiries:{" "}
          <a href="mailto:support@gamecodeslist.com">
            support@gamecodeslist.com
          </a>
        </address>
      </main>
    </div>
  );
}
