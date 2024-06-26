"use client";

import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ButtonSignin = ({ text = "Get started", extraStyle }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleClick = () => {
    if (status === "authenticated") {
      router.push("/dashboard");
    } else {
      signIn("google", { callbackUrl: `${process.env.NEXTAUTH_URL}/dashboard` });
    }
  };

  if (status === "authenticated") {
    return (
      <Link
        href="/dashboard"
        className={`btn ${extraStyle ? extraStyle : ""}`}
      >
        <span className="w-6 h-6 bg-base-300 flex justify-center items-center rounded-full shrink-0">
          {session.user?.name?.charAt(0) || session.user?.email?.charAt(0)}
        </span>
        {session.user?.name || session.user?.email || "Account"}
      </Link>
    );
  }

  return (
    <button
      className={`btn ${extraStyle ? extraStyle : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonSignin;

