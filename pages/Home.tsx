
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ShieldCheck, Zap, ArrowRight, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 mb-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase">
            Leading the Digital Frontier
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
            Strategic Consulting for a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital-First World</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
            Lumina combines deep business insights with advanced technology to help your organization innovate, grow, and lead in your industry.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-200"
            >
              Start Your Journey
            </Link>
            <Link
              to="/services"
              className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              Our Expertise <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-200 flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-xl font-bold tracking-tighter">FORBES</span>
            <span className="text-xl font-bold tracking-tighter">TECHCRUNCH</span>
            <span className="text-xl font-bold tracking-tighter">WIRED</span>
            <span className="text-xl font-bold tracking-tighter">FAST COMPANY</span>
            <span className="text-xl font-bold tracking-tighter">THE VERGE</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-slate-400 text-sm">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-slate-400 text-sm">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-slate-400 text-sm">Years Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-slate-400 text-sm">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Leaders Choose Lumina</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We don't just provide advice. We build partnerships that result in measurable business outcomes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white transition-all shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Market Intelligence</h3>
              <p className="text-slate-600 leading-relaxed">Leverage data-driven insights to understand market shifts before they happen and capitalize on emerging opportunities.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white transition-all shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Rapid Innovation</h3>
              <p className="text-slate-600 leading-relaxed">Our agile methodologies ensure that your digital products and internal systems evolve at the speed of business.</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white transition-all shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Future Proofing</h3>
              <p className="text-slate-600 leading-relaxed">We architect scalable solutions that grow with you, ensuring your technology investments remain valuable for years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm border border-slate-100">
            <div className="w-full md:w-1/3">
              <img 
                src="https://picsum.photos/seed/executive/600/600" 
                alt="Client" 
                className="rounded-2xl shadow-xl w-full object-cover aspect-square"
              />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <blockquote className="text-2xl font-medium text-slate-900 leading-relaxed mb-8 italic">
                "Lumina didn't just give us a strategy deck; they stayed in the trenches with us through our entire cloud migration. They are the benchmark for digital consulting."
              </blockquote>
              <div>
                <div className="font-bold text-lg text-slate-900">Sarah Jenkins</div>
                <div className="text-blue-600 font-medium">CTO, Global FinTech Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
