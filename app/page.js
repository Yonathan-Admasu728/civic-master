"use client";
import Head from 'next/head';
import Header from "../components/Header";
import HeroSection from '../components/HeroSection';
import ValuePropsSection from '../components/ValuePropsSection';
import FAQ from '../components/FAQ';
import Testimonials3 from '../components/Testimonials3';
import Footer from '../components/Footer';
import { signIn } from 'next-auth/react';

export default function Home() {
    const handleSignIn = async () => {
        const result = await signIn('credentials', { redirect: false, callbackUrl: '/dashboard' });
        if (result?.url) {
            window.location.href = result.url;
        }
    };

    return (
        <div>
            <Head>
                <title>Civic Master</title>
                <meta name="description" content="Prepare for the U.S. citizenship test with Civic Master." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main>
                <HeroSection />
                <ValuePropsSection />
                <FAQ />
                <Testimonials3 />
                {/* Sign-In Button */}
                <button onClick={handleSignIn} className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
                    Sign In to Dashboard
                </button>
            </main>
            <Footer />
        </div>
    );
}
