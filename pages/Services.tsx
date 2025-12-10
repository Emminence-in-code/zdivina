import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { MonitorSmartphone, Activity, Users, Database, TestTube, Crown, FileText, CreditCard, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const iconMap: any = {
    'MonitorSmartphone': MonitorSmartphone,
    'Activity': Activity,
    'Users': Users,
    'Database': Database,
    'TestTube': TestTube,
    'Crown': Crown
  };

  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
       <div className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h1 className="text-4xl font-black text-slate-900 mb-6">Healthcare Services</h1>
             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Beyond our devices, we provide a comprehensive ecosystem of support, monitoring, and education to manage diabetes effectively.
             </p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
             {SERVICES.map((service, index) => {
                const Icon = iconMap[service.iconName] || Users;
                return (
                  <div key={service.id} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1 flex flex-col">
                      <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                         <Icon className="w-8 h-8 text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
                      <button 
                        onClick={() => navigate(`/services/${service.id}`)}
                        className="text-primary-600 font-bold hover:text-primary-700 flex items-center self-start mt-auto"
                      >
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
    </div>
  );
};

export default Services;
