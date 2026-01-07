
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Let's Connect</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-8">Ready to start your digital journey?</h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                Whether you have a specific project in mind or just want to explore possibilities, our team is ready to discuss how we can help your business thrive.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-500">hello@lumina.digital</p>
                    <p className="text-slate-500">support@lumina.digital</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                    <p className="text-slate-500">+1 (555) 000-0000</p>
                    <p className="text-slate-500">Mon - Fri, 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                    <p className="text-slate-500">123 Innovation Way, Suite 500</p>
                    <p className="text-slate-500">San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="text-blue-600" />
                  <h3 className="text-2xl font-bold text-slate-900">Send us a message</h3>
                </div>

                {isSubmitted ? (
                  <div className="bg-green-100 border border-green-200 text-green-700 p-6 rounded-2xl flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mb-4">
                      <Send size={20} />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Message Sent!</h4>
                    <p>Thank you for reaching out. A consultant will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Full Name</label>
                        <input 
                          type="text" 
                          required 
                          className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Email Address</label>
                        <input 
                          type="email" 
                          required 
                          className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Topic of Interest</label>
                      <select 
                        className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white"
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      >
                        <option>Strategic Consulting</option>
                        <option>Digital Transformation</option>
                        <option>Cloud Migration</option>
                        <option>Cyber Security</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">How can we help?</label>
                      <textarea 
                        required 
                        rows={4} 
                        className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="Tell us about your goals..."
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                    >
                      Send Message <Send size={18} />
                    </button>
                    <p className="text-xs text-center text-slate-400">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 w-full bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
           <div className="text-center">
             <MapPin size={48} className="text-slate-300 mx-auto mb-4" />
             <p className="text-slate-400 font-medium">Interactive Map Integration</p>
           </div>
        </div>
        {/* Visual decoration for a "map" feel */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Contact;
