import React, { useState } from 'react';
import { JOBS } from '../constants';
import { Globe, Coffee, Wifi, Briefcase, ArrowRight, Upload } from 'lucide-react';

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    coverLetter: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Job Application: ${formData.firstName} ${formData.lastName}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nCover Letter / Pitch:\n${formData.coverLetter}\n\n(Please remember to attach your resume to this email manually)`;
    
    // Create mailto link
    const mailtoUrl = `mailto:DivinaHealthcare@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Create a temporary link element to avoid Location.assign errors in sandboxed environments
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&w=1600&q=80" 
              alt="Remote Workspace" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-slate-900/60"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-primary-400 font-bold tracking-widest uppercase text-sm mb-4 block">Work From Anywhere</span>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Join the Divina Team</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
               We are building the future of healthcare. Join a diverse team of innovators passionate about patient care.
            </p>
            <div className="flex justify-center space-x-8 text-sm font-medium text-slate-400">
               <span className="flex items-center"><Globe className="w-4 h-4 mr-2" /> 100% Remote Options</span>
               <span className="flex items-center"><Briefcase className="w-4 h-4 mr-2" /> Competitive Salary</span>
            </div>
         </div>
      </div>

      {/* Benefits */}
      <div className="py-16 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
               <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Wifi className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Digital Nomad Friendly</h3>
                  <p className="text-slate-600 text-sm">Work from your home office, a cafe, or a beach in Bali. We focus on output, not hours.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Coffee className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Wellness Stipend</h3>
                  <p className="text-slate-600 text-sm">Monthly allowances for gym memberships, home office setups, and mental health apps.</p>
               </div>
               <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Career Growth</h3>
                  <p className="text-slate-600 text-sm">Annual learning budget and mentorship programs to help you level up your skills.</p>
               </div>
            </div>
         </div>
      </div>

      {/* Job Listings */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-3xl font-bold text-slate-900 mb-10">Open Positions</h2>
         <div className="grid gap-6">
            {JOBS.map((job) => (
               <div key={job.id} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-primary-300 transition duration-300 flex flex-col md:flex-row justify-between items-start md:items-center group">
                  <div>
                     <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition">{job.title}</h3>
                     <div className="flex items-center space-x-4 mt-2 text-sm text-slate-500">
                        <span className="bg-slate-100 px-2 py-1 rounded">{job.department}</span>
                        <span className="bg-green-50 text-green-700 px-2 py-1 rounded flex items-center"><Globe className="w-3 h-3 mr-1" /> {job.type}</span>
                     </div>
                     <p className="mt-3 text-slate-600 max-w-2xl">{job.description}</p>
                  </div>
                  <button className="mt-4 md:mt-0 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition flex items-center whitespace-nowrap">
                     Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
               </div>
            ))}
         </div>
      </div>

      {/* Application Form Section */}
      <div className="bg-primary-50 py-20">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
               <h2 className="text-3xl font-bold text-slate-900">General Application</h2>
               <p className="text-slate-600 mt-2">Don't see your role? Pitch us why you belong here.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
               <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                     <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                     <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500" 
                        placeholder="Jane" 
                     />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                     <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500" 
                        placeholder="Doe" 
                     />
                  </div>
               </div>
               <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                     type="email" 
                     name="email"
                     value={formData.email}
                     onChange={handleInputChange}
                     required
                     className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500" 
                     placeholder="jane@example.com" 
                  />
               </div>
               <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Resume/CV</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition cursor-pointer">
                     <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                     <p className="text-sm text-slate-500">Attach PDF to email after clicking Submit</p>
                  </div>
               </div>
               <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Cover Letter / Pitch</label>
                  <textarea 
                     rows={4} 
                     name="coverLetter"
                     value={formData.coverLetter}
                     onChange={handleInputChange}
                     required
                     className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500" 
                     placeholder="Tell us about yourself..."
                  ></textarea>
               </div>
               <button type="submit" className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition shadow-lg shadow-primary-500/30">
                  Submit Application
               </button>
            </form>
         </div>
      </div>
    </div>
  );
};

export default Careers;