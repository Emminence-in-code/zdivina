import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Microscope, ShieldCheck, Globe, MonitorSmartphone, Activity, Users, Database, TestTube, Crown, Shield, FileText, CreditCard, Phone, Mail, MapPin, Plus, Minus, Send } from 'lucide-react';
import { SERVICES, FAQS } from '../constants';

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const iconMap: any = {
    'MonitorSmartphone': MonitorSmartphone,
    'Activity': Activity,
    'Users': Users,
    'Database': Database,
    'TestTube': TestTube,
    'Crown': Crown
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary-50 pt-12 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <span className="inline-block bg-white text-primary-700 font-semibold px-4 py-1.5 rounded-full shadow-sm text-sm mb-6 border border-primary-100">
                New 2026 Safety Standards Compliant
              </span>
              <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
                Empowering Your <br />
                <span className="text-primary-600 relative inline-block">
                   Health Journey
                   <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none"/></svg>
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                Innovative diabetes solutions designed with compassion. Quality care devices and remote health support accessible to everyone, everywhere.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-700 transition shadow-xl shadow-primary-500/30 flex items-center">
                  Shop Devices <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/careers" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold hover:border-primary-500 hover:text-primary-600 transition shadow-sm flex items-center">
                  Remote Careers
                </Link>
              </div>
            </div>
            <div className="relative lg:h-[600px] fade-in" style={{ animationDelay: '0.2s' }}>
               <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-accent-purple/10 rounded-full filter blur-3xl -z-10"></div>
               <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80" 
                  alt="Healthcare Professional with Patient" 
                  className="rounded-3xl shadow-2xl object-cover h-full w-full transform rotate-2 hover:rotate-0 transition duration-500"
               />
               <div className="absolute bottom-12 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center space-x-2 mb-2">
                     <div className="flex text-yellow-400"><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /></div>
                     <span className="text-sm font-bold text-slate-800">4.9/5</span>
                  </div>
                  <p className="text-slate-600 text-sm">"The safety lancets are a game changer for my daily routine."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Divina?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">We combine medical-grade precision with human-centric design.</p>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
              {[
                 { 
                   title: 'Advanced Technology', 
                   desc: 'State-of-the-art tri-beveled needles for maximum comfort.', 
                   color: 'bg-blue-50 text-blue-600',
                   Icon: Microscope
                 },
                 { 
                   title: 'Patient Safety First', 
                   desc: 'Automated shielding mechanisms to prevent accidental injury.', 
                   color: 'bg-teal-50 text-teal-600',
                   Icon: ShieldCheck
                 },
                 { 
                   title: 'Global Accessibility', 
                   desc: 'Worldwide shipping and 24/7 virtual support consultation.', 
                   color: 'bg-purple-50 text-purple-600',
                   Icon: Globe
                 }
              ].map((item, idx) => (
                 <div key={idx} className="p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition duration-300 group bg-white relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-slate-50 rounded-bl-full -z-0 opacity-50 group-hover:opacity-100 transition`}></div>
                    <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${item.color} shadow-sm group-hover:scale-110 transition-transform`}>
                       <item.Icon className="h-8 w-8" />
                    </div>
                    <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="relative z-10 text-slate-600 leading-relaxed">{item.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Our Mission</span>
             <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-6">Healthcare for Everyone</h2>
             <p className="text-xl text-slate-600 leading-relaxed">
                Divina Healthcare was founded on a simple premise: medical technology should be accessible, intuitive, and compassionate.
             </p>
          </div>
          
          {/* Values */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
             <div className="order-2 md:order-1">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80" alt="Healthcare Team Meeting" className="rounded-3xl shadow-xl" />
             </div>
             <div className="order-1 md:order-2 space-y-8">
                <div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-2">Innovation with Purpose</h3>
                   <p className="text-slate-600">We don't just build devices; we build solutions that fit seamlessly into the lives of patients.</p>
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-2">Compassionate Care</h3>
                   <p className="text-slate-600">Every product is designed with the end-user's comfort and safety as the top priority.</p>
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-2">Global Accessibility</h3>
                   <p className="text-slate-600">Breaking down barriers to ensure high-quality diabetes care reaches every corner of the globe.</p>
                </div>
             </div>
          </div>

          {/* Founder's Quote */}
          <div className="bg-slate-900 text-white rounded-3xl p-12 text-center relative overflow-hidden mb-24">
             <div className="relative z-10 max-w-3xl mx-auto">
                <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8 opacity-90">
                   "Healthcare is not a privilege, but a fundamental right. At Divina, we strive every day to make that right a reality through technology and empathy."
                </p>
                <div>
                   <p className="font-bold text-lg">Dr. Elena Rossi</p>
                   <p className="text-primary-400">Founder & CEO</p>
                </div>
             </div>
          </div>

          {/* Timeline */}
          <div>
             <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">Our Journey</h3>
             <div className="relative border-l-4 border-primary-100 ml-4 md:ml-auto md:mx-auto max-w-3xl space-y-12 pl-8 md:pl-0">
                {[
                   { year: '2021', title: 'Founded', desc: 'Divina Healthcare established in San Francisco with a focus on lancet safety.' },
                   { year: '2023', title: 'Global Expansion', desc: 'Opened distribution centers in Europe and Asia.' },
                   { year: '2024', title: 'Remote First', desc: 'Transitioned to a 90% remote workforce to attract top global talent.' },
                   { year: '2026', title: 'Next Gen', desc: 'Launching the new Smart Safety Pen Needles with integrated tracking app.' }
                ].map((item, idx) => (
                   <div key={idx} className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
                      <div className="absolute -left-[41px] md:left-1/2 md:-ml-[9px] w-6 h-6 rounded-full bg-primary-500 border-4 border-white shadow-md"></div>
                      <div className={`md:text-right ${idx % 2 === 0 ? 'md:col-start-1 md:pr-8' : 'md:col-start-2 md:pl-8 md:row-start-1'}`}>
                         <span className="text-primary-600 font-bold text-xl block mb-1">{item.year}</span>
                         <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                         <p className="text-slate-600">{item.desc}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">What We Do</span>
             <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-6">Comprehensive Services</h2>
             <p className="text-xl text-slate-600">
                Beyond our devices, we provide a comprehensive ecosystem of support, monitoring, and education to manage diabetes effectively.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
             {SERVICES.map((service, index) => {
                const Icon = iconMap[service.iconName] || Users;
                return (
                  <div key={index} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1">
                      <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                         <Icon className="w-8 h-8 text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                      <button className="text-primary-600 font-bold hover:text-primary-700 flex items-center">
                         Learn More &rarr;
                      </button>
                  </div>
                );
             })}
          </div>

          {/* Insurance Section */}
          <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 overflow-hidden">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                   <h2 className="text-3xl font-bold mb-6">Insurance & Accessibility</h2>
                   <p className="text-slate-300 mb-8 leading-relaxed">
                      We believe quality healthcare should be affordable. We accept most major insurance plans and offer flexible payment programs for uninsured patients.
                   </p>
                   <div className="space-y-4">
                      <div className="flex items-center">
                         <Shield className="w-6 h-6 text-primary-400 mr-4" />
                         <span>Medicare & Medicaid Approved Supplier</span>
                      </div>
                      <div className="flex items-center">
                         <FileText className="w-6 h-6 text-primary-400 mr-4" />
                         <span>Simplified Digital Claims Processing</span>
                      </div>
                      <div className="flex items-center">
                         <CreditCard className="w-6 h-6 text-primary-400 mr-4" />
                         <span>HSA / FSA Eligible Products</span>
                      </div>
                   </div>
                </div>
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                   <h3 className="text-xl font-bold mb-6 text-primary-100 text-center">Proudly Partnered With</h3>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
                      {[
                        { name: 'BlueCross', domain: 'bcbs.com' },
                        { name: 'Aetna', domain: 'aetna.com' },
                        { name: 'UnitedHealth', domain: 'uhc.com' },
                        { name: 'Cigna', domain: 'cigna.com' },
                        { name: 'Humana', domain: 'humana.com' },
                        { name: 'Kaiser', domain: 'kaiserpermanente.org' }
                      ].map(p => (
                         <div key={p.name} className="bg-white p-4 rounded-lg flex items-center justify-center h-16 hover:opacity-90 transition">
                            <img 
                              src={`https://logo.clearbit.com/${p.domain}`} 
                              alt={p.name} 
                              className="max-h-10 max-w-full object-contain grayscale hover:grayscale-0 transition duration-300"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                              }}
                            />
                            <span className="hidden text-slate-900 font-bold text-xs">{p.name}</span>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Get In Touch</span>
             <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-6">Contact Support</h2>
             <p className="text-xl text-slate-600">
                Whether you have a question about our products, need technical support, or just want to say hello, we're here to help.
             </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-lg h-fit">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <select className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition bg-white">
                    <option>General Inquiry</option>
                    <option>Product Support</option>
                    <option>Sales / Bulk Order</option>
                    <option>Careers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows={5} className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition flex items-center justify-center shadow-lg shadow-primary-500/20">
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </button>
              </form>
            </div>

            {/* Info & FAQs */}
            <div className="space-y-12">
              {/* Contact Details */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4 group hover:border-primary-200 transition">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Phone</h3>
                    <a href="tel:09023265024" className="text-slate-600 mt-1 hover:text-primary-600 transition block">09023265024</a>
                    <p className="text-xs text-slate-400 mt-1">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4 group hover:border-primary-200 transition">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>
                    <a href="mailto:DivinaHealthcare@outlook.com" className="text-slate-600 mt-1 hover:text-primary-600 transition block break-all">DivinaHealthcare@outlook.com</a>
                    <p className="text-xs text-slate-400 mt-1">24/7 Response</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4 sm:col-span-2">
                  <div className="bg-primary-100 p-3 rounded-full text-primary-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Headquarters</h3>
                    <p className="text-slate-600 mt-1">100 Innovation Way, Tech Park</p>
                    <p className="text-slate-600">San Francisco, CA 94107, USA</p>
                  </div>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
                 <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                       <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                          <button 
                             onClick={() => toggleFaq(index)}
                             className="w-full px-6 py-4 text-left flex justify-between items-center font-medium text-slate-800 hover:bg-slate-50 transition focus:outline-none"
                          >
                             {faq.question}
                             {openFaq === index ? <Minus className="w-5 h-5 text-primary-600" /> : <Plus className="w-5 h-5 text-slate-400" />}
                          </button>
                          {openFaq === index && (
                             <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed animate-fade-in">
                                {faq.answer}
                             </div>
                          )}
                       </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;