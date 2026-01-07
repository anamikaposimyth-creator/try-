
import React from 'react';
import { Calendar, User, ArrowUpRight, Search } from 'lucide-react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Supply Chains",
    excerpt: "How generative AI is moving beyond chatbots and into the heart of global logistics operations.",
    date: "Oct 24, 2024",
    category: "AI & Data",
    imageUrl: "https://picsum.photos/seed/blog1/800/600"
  },
  {
    id: 2,
    title: "Migrating Legacy Systems: A Strategic Guide",
    excerpt: "Why the 'lift and shift' model fails and how to approach modernization with a business-first mindset.",
    date: "Oct 18, 2024",
    category: "Transformation",
    imageUrl: "https://picsum.photos/seed/blog2/800/600"
  },
  {
    id: 3,
    title: "Building Resilient Remote Teams in 2025",
    excerpt: "Insights into maintaining culture and high productivity in a distributed working world.",
    date: "Oct 12, 2024",
    category: "Leadership",
    imageUrl: "https://picsum.photos/seed/blog3/800/600"
  },
  {
    id: 4,
    title: "Cybersecurity Trends: Zero Trust is No Longer Optional",
    excerpt: "As threats evolve, perimeter-based security is failing. Here's how to implement a Zero Trust framework.",
    date: "Oct 05, 2024",
    category: "Security",
    imageUrl: "https://picsum.photos/seed/blog4/800/600"
  },
  {
    id: 5,
    title: "The ROI of User-Centric Design",
    excerpt: "Measuring the real business impact of investing in premium UX and accessibility for enterprise apps.",
    date: "Sep 28, 2024",
    category: "Design",
    imageUrl: "https://picsum.photos/seed/blog5/800/600"
  },
  {
    id: 6,
    title: "Quantum Computing: Preparing for the Decryption Era",
    excerpt: "It's closer than you think. What leaders need to do today to secure their data for tomorrow.",
    date: "Sep 21, 2024",
    category: "Tech Trends",
    imageUrl: "https://picsum.photos/seed/blog6/800/600"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-24">
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Lumina Insights</h1>
              <p className="text-lg text-slate-600">Thought leadership and practical guides on technology, strategy, and business innovation.</p>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-full md:w-80"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="group relative overflow-hidden rounded-3xl bg-slate-900 mb-16">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="w-full lg:w-1/2 overflow-hidden">
                <img 
                  src={posts[0].imageUrl} 
                  alt="Featured" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
              </div>
              <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <span className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4">{posts[0].category}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  {posts[0].title}
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-slate-400 text-sm mb-8">
                  <span className="flex items-center gap-2"><Calendar size={16} /> {posts[0].date}</span>
                  <span className="flex items-center gap-2"><User size={16} /> By Marcus Thorne</span>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-white font-bold text-lg hover:underline decoration-blue-500 underline-offset-8">
                  Read Full Article <ArrowUpRight size={20} className="text-blue-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-6 aspect-video">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-blue-600 mb-3 tracking-wide uppercase">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">Read more <ArrowUpRight size={14} /></span>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-3 rounded-full border border-slate-300 font-semibold hover:bg-slate-50 transition-colors text-slate-600">
              Load More Insights
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
