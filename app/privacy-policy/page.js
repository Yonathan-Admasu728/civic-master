import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg> Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: ${new Date().toISOString().split('T')[0]}

Thank you for choosing CivicMaster ("we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices regarding your personal information, please contact us at support@civicmaster.org.

By visiting our website https://civicmaster.org and using our service, you agree to the terms of this privacy policy.

1. Information We Collect

We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.

The personal information we collect may include the following:
- Name
- Email address
- Contact details
- Payment information
- Any other materials you willingly submit to us such as articles and comments.

2. How We Use Your Information

We use personal information collected via our Website for a variety of business purposes described below:
- To provide, operate, and maintain our Website
- To manage your account, including to communicate with you regarding your account, if you have an account on our Website
- To respond to user inquiries/offer support to users
- For compliance purposes, including enforcing our Terms of Service, or other legal rights

3. Will Your Information Be Shared With Anyone?

We only share information with your consent, to comply with laws, to protect your rights, or to fulfill business obligations.

4. How Long Do We Keep Your Information?

We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.

5. Do We Collect Information From Minors?

We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Website.

6. What Are Your Privacy Rights?

You have the right to review, change, or terminate your account at any time.

7. Controls for Do-Not-Track Features

Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected.

8. Updates to This Policy

We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.

9. How Can You Contact Us About This Policy?

If you have questions or comments about this policy, you may email us at yonathan@clientssky.com or by post to:
CivicMaster
328 Harbor gulf court
North Las Vegas, Nevada, 89084
United States

For more information, please visit the FAQ or contact support pages on our website.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
