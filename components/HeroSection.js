"use client";
import Image from "next/image";
import config from "../config"; 
import { signIn } from 'next-auth/react';

const HeroSection = () => {
  const handleSignIn = async () => {
    const result = await signIn('credentials', { redirect: false, callbackUrl: '/dashboard' });
    if (result?.url) {
        window.location.href = result.url;
    }
  }
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight">
          Master the U.S. Citizenship Test
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Prepare with confidence using our comprehensive study tools and resources designed to simplify your journey to becoming a U.S. citizen.
        </p>
        <button className="btn btn-primary btn-wide" onClick={handleSignIn}>
          Start Preparing Now
        </button>
      </div>
      <div className="lg:w-full">
        <Image
          src="/assets/images/hero.png"
          alt="Study Materials"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default HeroSection;
