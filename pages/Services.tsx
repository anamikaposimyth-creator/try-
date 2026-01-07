
import React from 'react';
import { LayoutGrid, Cpu, LineChart, Shield, Cloud, Briefcase, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Strategic Consulting",
    description: "High-level planning and organizational design to align your business goals with market realities.",
    features: ["Market Analysis", "Business Modeling", "M&A Advisory"]
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Digital Transformation",
    description: "Reinventing your processes and customer experiences through cutting-edge digital integration.",
    features: ["Legacy Migration", "UX Strategy", "Agile Training"]
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Data & Analytics",
    description: "Unlocking the power of your data to drive intelligent decision-making and predictive insights.",
    features: ["Big Data Architecture", "Predictive Modeling", "BI Reporting"]
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Scalable, secure, and cost-effective cloud infrastructure designed for maximum uptime.",
    features: ["AWS/Azure/GCP Expert", "Serverless Architecture", "DevOps Automation"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cyber Security",
    description: "Protecting your digital assets with enterprise-grade security frameworks and proactive threat hunting.",
    features: ["Risk Assessment", "Compliance (GDPR/SOC2)", "Managed Detection"]
  },
  {
    icon: <LayoutGrid className="w-8 h-8" />,
    title: "Product Design",
    description: "Creating world-class software products that users love and that solve real business problems.",
    features: ["Prototype Development", "User Research", "MVP Building"]
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Capabilities</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">Expertise tailored for your evolution</h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We provide end-to-end consulting services that bridge the gap between complex technical challenges and core business objectives.
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Explore All Offerings
              </button>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/tech1/400/300" className="rounded-2xl shadow-lg" alt="Technology" />
              <img src="https://picsum.photos/seed/tech2/400/300" className="rounded-2xl shadow-lg mt-8" alt="Technology" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100 transition-all group">
                <div className="text-blue-600 mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <ChevronRight size={14} className="text-blue-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-bold group-hover:translate-x-1 transition-transform">
                  Learn More <ChevronRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to modernize your infrastructure?</h2>
          <p className="text-blue-100 text-lg mb-10">Our consultants are ready to conduct a free assessment of your current tech stack.</p>
          <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl">
            Request an Assessment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
