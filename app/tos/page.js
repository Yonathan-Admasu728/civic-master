import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
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
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: ${new Date().toISOString().split('T')[0]}

Welcome to ${config.appName}!

These Terms of Service ("Terms") govern your use of the ${config.appName} website located at https://civicmaster.org ("Website") and all related services. By accessing or using the Website, you agree to be bound by these Terms.

1. Services Offered

${config.appName} provides comprehensive resources and tools to assist users in preparing for the U.S. Citizenship Test. This includes interactive quizzes, flashcards, and personalized progress tracking.

2. Intellectual Property

The content provided on ${config.appName}, including text, graphics, images, and software, is the property of ${config.appName} or its content suppliers and is protected by both United States and international copyright laws. While you may use the content for your personal, non-commercial use, you are not permitted to redistribute, sell, or repurpose any content without express written permission from ${config.appName}.

3. User Accounts

When creating your account, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password, and for restricting access to your computer.

4. Privacy

Your privacy is important to us. Our Privacy Policy, available at https://civicmaster.org/privacy-policy, explains how we collect, use, and protect your personal information. Please read it carefully.

5. Modifications to the Terms

We reserve the right to modify these Terms at any time. All changes will be effective immediately upon posting to the Website. Your continued use of the Website after any changes signifies your agreement to the new Terms.

6. Governing Law

These Terms shall be governed by and construed in accordance with the laws of the United States.

7. Contact Us

If you have any questions or concerns about these Terms, please contact us at support@civicmaster.org.

Thank you for choosing ${config.appName}. We are dedicated to helping you succeed in your journey to becoming a U.S. citizen!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
