
/**
 * LUMINA DIGITAL CONSULTING - FULL VANILLA ENGINE
 * Restoring all original page designs and functionality.
 */

// --- DATA & TEMPLATES ---

const HomeTemplate = () => `
  <div class="page-fade-in">
    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32 overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div class="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div class="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-block py-1 px-3 mb-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase">
          Leading the Digital Frontier
        </span>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
          Strategic Consulting for a <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital-First World</span>
        </h1>
        <p class="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
          Lumina combines deep business insights with advanced technology to help your organization innovate, grow, and lead in your industry.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#/contact" class="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-200">
            Start Your Journey
          </a>
          <a href="#/services" class="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            Our Expertise <i data-lucide="arrow-right"></i>
          </a>
        </div>

        <div class="mt-20 pt-10 border-t border-slate-200 flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <span class="text-xl font-bold tracking-tighter">FORBES</span>
          <span class="text-xl font-bold tracking-tighter">TECHCRUNCH</span>
          <span class="text-xl font-bold tracking-tighter">WIRED</span>
          <span class="text-xl font-bold tracking-tighter">FAST COMPANY</span>
          <span class="text-xl font-bold tracking-tighter">THE VERGE</span>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-slate-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div class="text-4xl font-bold mb-2">500+</div><div class="text-slate-400 text-sm">Projects Delivered</div></div>
          <div><div class="text-4xl font-bold mb-2">98%</div><div class="text-slate-400 text-sm">Client Retention</div></div>
          <div><div class="text-4xl font-bold mb-2">12+</div><div class="text-slate-400 text-sm">Years Excellence</div></div>
          <div><div class="text-4xl font-bold mb-2">24/7</div><div class="text-slate-400 text-sm">Expert Support</div></div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Leaders Choose Lumina</h2>
          <p class="text-slate-600 max-w-2xl mx-auto">We don't just provide advice. We build partnerships that result in measurable business outcomes.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="p-8 rounded-2xl bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white transition-all shadow-sm hover:shadow-xl">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><i data-lucide="trending-up"></i></div>
            <h3 class="text-xl font-bold mb-4">Market Intelligence</h3>
            <p class="text-slate-600 leading-relaxed">Leverage data-driven insights to understand market shifts before they happen and capitalize on emerging opportunities.</p>
          </div>
          <div class="p-8 rounded-2xl bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white transition-all shadow-sm hover:shadow-xl">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><i data-lucide="zap"></i></div>
            <h3 class="text-xl font-bold mb-4">Rapid Innovation</h3>
            <p class="text-slate-600 leading-relaxed">Our agile methodologies ensure that your digital products and internal systems evolve at the speed of business.</p>
          </div>
          <div class="p-8 rounded-2xl bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white transition-all shadow-sm hover:shadow-xl">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><i data-lucide="shield-check"></i></div>
            <h3 class="text-xl font-bold mb-4">Future Proofing</h3>
            <p class="text-slate-600 leading-relaxed">We architect scalable solutions that grow with you, ensuring your technology investments remain valuable for years.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial -->
    <section class="py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="bg-white rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm border border-slate-100">
          <div class="w-full md:w-1/3">
            <img src="https://picsum.photos/seed/executive/600/600" class="rounded-2xl shadow-xl w-full object-cover aspect-square" alt="Client">
          </div>
          <div class="w-full md:w-2/3">
            <div class="flex gap-1 mb-6 text-yellow-400">
              <i data-lucide="star" class="fill-current"></i><i data-lucide="star" class="fill-current"></i><i data-lucide="star" class="fill-current"></i><i data-lucide="star" class="fill-current"></i><i data-lucide="star" class="fill-current"></i>
            </div>
            <blockquote class="text-2xl font-medium text-slate-900 leading-relaxed mb-8 italic">
              "Lumina didn't just give us a strategy deck; they stayed in the trenches with us through our entire cloud migration. They are the benchmark for digital consulting."
            </blockquote>
            <div>
              <div class="font-bold text-lg text-slate-900">Sarah Jenkins</div>
              <div class="text-blue-600 font-medium">CTO, Global FinTech Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
`;

const AboutTemplate = () => `
  <div class="page-fade-in">
    <section class="py-20 bg-slate-900 text-white text-center">
      <div class="max-w-4xl mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Mission is to Ignite Innovation</h1>
        <p class="text-slate-400 text-lg">Founded in 2012, Lumina has grown from a boutique agency to a global consulting powerhouse, driven by our relentless pursuit of excellence.</p>
      </div>
    </section>

    <section class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-6">Bridging the Gap Between Vision and Execution</h2>
          <p class="text-slate-600 mb-6 leading-relaxed">
            We believe that every business has the potential to lead if given the right tools and strategy. Our approach is holistic—we look at the culture, the technology, and the market to build sustainable competitive advantages.
          </p>
          <div class="grid grid-cols-2 gap-8 mt-12">
            <div class="flex flex-col gap-2">
              <i data-lucide="target" class="text-blue-600" style="width: 32px; height: 32px;"></i>
              <span class="font-bold text-slate-900">Outcome Driven</span>
              <span class="text-sm text-slate-500">We measure success by your bottom line.</span>
            </div>
            <div class="flex flex-col gap-2">
              <i data-lucide="globe" class="text-blue-600" style="width: 32px; height: 32px;"></i>
              <span class="font-bold text-slate-900">Global Perspective</span>
              <span class="text-sm text-slate-500">Insights from 40+ countries served.</span>
            </div>
          </div>
        </div>
        <div class="relative">
          <img src="https://picsum.photos/seed/about-img/800/600" alt="Office" class="rounded-3xl shadow-2xl" />
          <div class="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-2xl hidden lg:block max-w-xs shadow-xl">
            <i data-lucide="award" class="mb-4" style="width: 40px; height: 40px;"></i>
            <p class="font-medium">Named "Consultancy of the Year" 2023 by Global Business Review.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Meet the Visionaries</h2>
        <p class="text-slate-600 mb-16">A diverse team of thinkers, makers, and problem solvers.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          ${[
            { name: "Marcus Thorne", role: "CEO", bio: "20 years of digital experience.", id: "marcus" },
            { name: "Dr. Elena Vance", role: "AI Strategist", bio: "PhD from MIT.", id: "elena" },
            { name: "David Chen", role: "VP Engineering", bio: "Cloud infrastructure expert.", id: "david" },
            { name: "Sophia Rodriguez", role: "UX Director", bio: "Human-centric design lead.", id: "sophia" }
          ].map(m => `
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100">
              <img src="https://picsum.photos/seed/${m.id}/400/400" class="w-full aspect-square object-cover" alt="${m.name}" />
              <div class="p-6">
                <h3 class="font-bold text-lg">${m.name}</h3>
                <p class="text-blue-600 text-sm font-medium mb-3">${m.role}</p>
                <p class="text-slate-500 text-sm">${m.bio}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  </div>
`;

const ServicesTemplate = () => `
  <div class="page-fade-in bg-slate-50">
    <section class="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">
        <div class="w-full lg:w-1/2">
          <span class="text-blue-600 font-bold uppercase tracking-widest text-sm">Capabilities</span>
          <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">Expertise tailored for your evolution</h1>
          <p class="text-lg text-slate-600 leading-relaxed mb-8">
            We provide end-to-end consulting services that bridge the gap between complex technical challenges and core business objectives.
          </p>
          <a href="#/contact" class="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block">Explore All Offerings</a>
        </div>
        <div class="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <img src="https://picsum.photos/seed/tech1/400/300" class="rounded-2xl shadow-lg" alt="Tech" />
          <img src="https://picsum.photos/seed/tech2/400/300" class="rounded-2xl shadow-lg mt-8" alt="Tech" />
        </div>
      </div>
    </section>

    <section class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      ${[
        { title: "Strategic Consulting", icon: "briefcase", desc: "High-level planning and organizational design.", items: ["Market Analysis", "Modeling", "M&A"] },
        { title: "Digital Transformation", icon: "cpu", desc: "Reinventing processes through digital integration.", items: ["Legacy Migration", "UX", "Agile"] },
        { title: "Data & Analytics", icon: "line-chart", desc: "Unlocking data for intelligent decision-making.", items: ["Big Data", "Predictive", "BI"] },
        { title: "Cloud Solutions", icon: "cloud", desc: "Scalable, secure, and cost-effective infrastructure.", items: ["AWS/GCP", "Serverless", "DevOps"] },
        { title: "Cyber Security", icon: "shield", desc: "Protecting digital assets with enterprise-grade frameworks.", items: ["Risk", "Compliance", "Threats"] },
        { title: "Product Design", icon: "layout-grid", desc: "Creating products users love and solve problems.", items: ["Prototype", "Research", "MVP"] }
      ].map(s => `
        <div class="bg-white p-10 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100 transition-all group">
          <div class="text-blue-600 mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <i data-lucide="${s.icon}" style="width: 32px; height: 32px;"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4">${s.title}</h3>
          <p class="text-slate-600 mb-8">${s.desc}</p>
          <ul class="space-y-3 mb-8">
            ${s.items.map(i => `<li class="flex items-center gap-2 text-sm text-slate-500"><i data-lucide="chevron-right" class="text-blue-500" style="width: 14px; height: 14px;"></i>${i}</li>`).join('')}
          </ul>
          <a href="#/contact" class="inline-flex items-center gap-2 text-blue-600 font-bold group-hover:translate-x-1 transition-transform">
            Learn More <i data-lucide="chevron-right"></i>
          </a>
        </div>
      `).join('')}
    </section>
  </div>
`;

const BlogTemplate = () => `
  <div class="page-fade-in py-20 bg-white min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Lumina Insights</h1>
          <p class="text-lg text-slate-600">Thought leadership and practical guides on technology, strategy, and business innovation.</p>
        </div>
        <div class="relative">
          <input type="text" placeholder="Search articles..." class="pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none w-full md:w-80" />
          <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" style="width: 20px; height: 20px;"></i>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        ${[1, 2, 3, 4, 5, 6].map(i => `
          <article class="group cursor-pointer">
            <div class="overflow-hidden rounded-2xl mb-6 aspect-video">
              <img src="https://picsum.photos/seed/blog${i}/800/600" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div class="text-blue-600 text-xs font-bold mb-2 uppercase tracking-wide">Industry Update</div>
            <h3 class="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">Digital Resilience in 2025</h3>
            <p class="text-slate-600 text-sm line-clamp-2 mb-6">How organizations are adapting to the rapidly changing technological landscape using agile methods...</p>
            <div class="flex items-center justify-between text-slate-400 text-xs font-medium">
              <span>Oct ${20-i}, 2024</span>
              <span class="flex items-center gap-1">Read more <i data-lucide="arrow-up-right" style="width:14px; height:14px;"></i></span>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </div>
`;

const ContactTemplate = () => `
  <div class="page-fade-in py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
      <div class="w-full lg:w-1/2">
        <span class="text-blue-600 font-bold uppercase tracking-widest text-sm">Let's Connect</span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-8">Ready to start your digital journey?</h1>
        <p class="text-lg text-slate-600 leading-relaxed mb-12">Whether you have a specific project in mind or just want to explore possibilities, our team is ready.</p>
        <div class="space-y-8">
          <div class="flex items-center gap-6">
            <div class="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600"><i data-lucide="mail"></i></div>
            <div><div class="font-bold">Email Us</div><div class="text-slate-500">hello@lumina.digital</div></div>
          </div>
          <div class="flex items-center gap-6">
            <div class="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600"><i data-lucide="phone"></i></div>
            <div><div class="font-bold">Call Us</div><div class="text-slate-500">+1 (555) 000-0000</div></div>
          </div>
          <div class="flex items-center gap-6">
            <div class="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600"><i data-lucide="map-pin"></i></div>
            <div><div class="font-bold">Visit Us</div><div class="text-slate-500">123 Innovation Way, SF, CA</div></div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200">
        <form id="contact-form" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" required class="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" />
            <input type="email" placeholder="Email Address" required class="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <textarea rows="4" placeholder="How can we help?" required class="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
          <button type="submit" class="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
            Send Message <i data-lucide="send"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
`;

// --- CORE ENGINE ---

const routes: Record<string, () => string> = {
  '/': HomeTemplate,
  '/about': AboutTemplate,
  '/services': ServicesTemplate,
  '/blog': BlogTemplate,
  '/contact': ContactTemplate
};

function renderLayout() {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `
      <nav class="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <a href="#/" class="flex items-center gap-2 group">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <div class="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Lumina</span>
          </a>
          <div class="hidden md:flex items-center space-x-8" id="nav-links">
            <a href="#/" class="text-sm font-medium text-slate-600 hover:text-blue-600 relative py-1 transition-colors" data-path="/">Home</a>
            <a href="#/about" class="text-sm font-medium text-slate-600 hover:text-blue-600 relative py-1 transition-colors" data-path="/about">About</a>
            <a href="#/services" class="text-sm font-medium text-slate-600 hover:text-blue-600 relative py-1 transition-colors" data-path="/services">Services</a>
            <a href="#/blog" class="text-sm font-medium text-slate-600 hover:text-blue-600 relative py-1 transition-colors" data-path="/blog">Blog</a>
            <a href="#/contact" class="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all transform hover:scale-105">Get Started</a>
          </div>
          <button id="mobile-menu-btn" class="md:hidden text-slate-600 p-2"><i data-lucide="menu"></i></button>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-slate-200 p-4 space-y-4">
          <a href="#/" class="block py-2 text-slate-600">Home</a>
          <a href="#/about" class="block py-2 text-slate-600">About</a>
          <a href="#/services" class="block py-2 text-slate-600">Services</a>
          <a href="#/blog" class="block py-2 text-slate-600">Blog</a>
          <a href="#/contact" class="block py-2 text-blue-600 font-bold">Contact</a>
        </div>
      </nav>
      <main id="content" class="pt-16 min-h-screen"></main>
      <footer class="bg-slate-900 text-slate-400 py-16">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          <div class="col-span-1 md:col-span-1">
            <div class="flex items-center gap-2 mb-6 text-white font-bold text-xl"><div class="w-6 h-6 bg-blue-600 rounded"></div>Lumina</div>
            <p class="leading-relaxed">Empowering global businesses with innovative digital strategies since 2012.</p>
          </div>
          <div><h4 class="text-white font-bold mb-4 uppercase text-xs tracking-widest">Company</h4><ul class="space-y-2"><li><a href="#/about" class="hover:text-white transition-colors">About</a></li><li><a href="#/contact" class="hover:text-white transition-colors">Contact</a></li></ul></div>
          <div><h4 class="text-white font-bold mb-4 uppercase text-xs tracking-widest">Solutions</h4><ul class="space-y-2"><li><a href="#/services" class="hover:text-white transition-colors">Digital Strategy</a></li><li><a href="#/services" class="hover:text-white transition-colors">Cloud Tech</a></li></ul></div>
          <div class="flex space-x-4 text-white"><i data-lucide="linkedin"></i><i data-lucide="twitter"></i><i data-lucide="github"></i></div>
        </div>
        <div class="mt-16 text-center text-xs border-t border-slate-800 pt-8">© ${new Date().getFullYear()} Lumina Digital. All rights reserved.</div>
      </footer>
    `;
  }
}

function router() {
  const hash = window.location.hash.replace('#', '') || '/';
  const content = document.getElementById('content');
  const template = routes[hash] || HomeTemplate;
  
  if (content) {
    content.innerHTML = template();
  }
  window.scrollTo(0, 0);
  
  // Highlight active links
  document.querySelectorAll('#nav-links a').forEach(link => {
    if (link.getAttribute('data-path') === hash) {
      link.classList.add('nav-link-active');
    } else {
      link.classList.remove('nav-link-active');
    }
  });

  // Re-initialize Lucide icons
  if ((window as any).lucide) {
    (window as any).lucide.createIcons();
  }

  // Handle Form Submission
  if (hash === '/contact') {
    const form = document.getElementById('contact-form') as HTMLFormElement | null;
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Success! Your message has been sent to the Lumina team.');
      form?.reset();
    });
  }
}

// Mobile Menu
function setupEventListeners() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  btn?.addEventListener('click', () => {
    menu?.classList.toggle('hidden');
  });
  
  menu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu?.classList.add('hidden'));
  });
}

// Boot
document.addEventListener('DOMContentLoaded', () => {
  renderLayout();
  router();
  setupEventListeners();
  window.addEventListener('hashchange', router);
});
