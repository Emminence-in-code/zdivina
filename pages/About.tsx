import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       {/* Hero */}
       <div className="bg-primary-50 py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
             <h1 className="text-4xl font-black text-slate-900 mb-6">Our Mission is Your Health</h1>
             <p className="text-xl text-slate-600 leading-relaxed">
                Divina Healthcare was founded on a simple premise: medical technology should be accessible, intuitive, and compassionate.
             </p>
          </div>
       </div>

       {/* Content */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
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
                <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl">
                   <img 
                      src="/images/Ceo of divina.jpg" 
                      alt="Amy Hubbard" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80';
                      }}
                   />
                </div>
                <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8 opacity-90">
                   "Healthcare is not a privilege, but a fundamental right. At Divina, we strive every day to make that right a reality through technology and empathy."
                </p>
                <div>
                   <p className="font-bold text-xl">Amy Hubbard</p>
                   <p className="text-primary-300 font-medium mt-1">Founder & CEO</p>
                </div>
             </div>
          </div>

          {/* Timeline */}
          <div>
             <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Journey</h2>
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
    </div>
  );
};

export default About;