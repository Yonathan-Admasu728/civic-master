import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
    return (
        <div className="container mx-auto px-4 md:px-0 mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Featured Blog Post */}
                <div className="md:col-span-2">
                    <div className="rounded overflow-hidden shadow-lg">
                        <Image src="/assets/blog/featured.jpg" alt="Feature image" width={700} height={400} className="w-full object-cover" />
                        <div className="px-6 py-4">
                            <h2 className="font-bold text-xl mb-2">5 Proven Techniques to Ace the U.S. Citizenship Test</h2>
                            <p className="text-gray-700 text-base">
                                Discover effective strategies to prepare for your citizenship test with ease...
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <Link href="/blog/5-proven-techniques">
                                <a className="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Other posts */}
                <div className="space-y-4">
                    <BlogPostCard />
                    <BlogPostCard />
                    <BlogPostCard />
                </div>
            </div>
        </div>
    );
}

function BlogPostCard() {
    return (
        <div className="rounded overflow-hidden shadow-lg">
            <Image src="/assets/blog/post-thumb.jpg" alt="Blog post thumbnail" width={350} height={200} className="w-full object-cover" />
            <div className="px-6 py-4">
                <h3 className="font-bold text-lg mb-2">Study Tips for Busy Learners</h3>
                <p className="text-gray-700 text-base">
                    Tips to efficiently use your study time when preparing for the citizenship test.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link href="/blog/study-tips">
                    <a className="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Read More</a>
                </Link>
            </div>
        </div>
    );
}
