
import React from 'react';
import { Target, Users, Globe, Award } from 'lucide-react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  {
    name: "Marcus Thorne",
    role: "CEO & Founder",
    bio: "Former McKinsey partner with 20 years of experience in digital transformation.",
    imageUrl: "https://picsum.photos/seed/marcus/400/400"
  },
  {
    name: "Dr. Elena Vance",
    role: "Head of AI Strategy",
    bio: "PhD in Machine Learning from MIT, focused on ethical AI implementations.",
    imageUrl: "https://picsum.photos/seed/elena/400/400"
  },
  {
    name: "David Chen",
    role: "VP of Engineering",
    bio: "Cloud infrastructure expert who led major projects at Google and AWS.",
    imageUrl: "https://picsum.photos/seed/david/400/400"
  },
  {
    name: "Sophia Rodriguez",
    role: "Director of UX Strategy",
    bio: "Passionate about human-centric design that drives business results.",
    imageUrl: "https://picsum.photos/seed/sophia/400/400"
  }
];

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission is to Ignite Innovation</h1>
          <p className="text-slate-400 text-lg">Founded in 2012, Lumina has grown from a boutique agency to a global consulting powerhouse, driven by our relentless pursuit of excellence.</p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Bridging the Gap Between Vision and Execution</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We believe that every business has the potential to lead if given the right tools and strategy. Our approach is holistic—we look at the culture, the technology, and the market to build sustainable competitive advantages.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="flex flex-col gap-2">
                  <Target className="text-blue-600 mb-2" size={32} />
                  <span className="font-bold text-slate-900">Outcome Driven</span>
                  <span className="text-sm text-slate-500">We measure success by your bottom line.</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Globe className="text-blue-600 mb-2" size={32} />
                  <span className="font-bold text-slate-900">Global Perspective</span>
                  <span className="text-sm text-slate-500">Insights from 40+ countries served.</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/about-img/800/600" 
                alt="Office space" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-2xl hidden lg:block max-w-xs shadow-xl">
                <Award size={40} className="mb-4" />
                <p className="font-medium">Named "Consultancy of the Year" 2023 by Global Business Review.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet the Visionaries</h2>
            <p className="text-slate-600">A diverse team of thinkers, makers, and problem solvers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                <img src={member.imageUrl} alt={member.name} className="w-full aspect-square object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-900">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
