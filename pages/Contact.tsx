import React, { useState, useRef, FormEvent } from 'react';
import { FAQS } from '../constants';
import { Mail, Phone, MapPin, Clock, Plus, Minus, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
// Format the timestamp in a more readable format
const now = new Date();
const formattedDate = now.toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
});

// Add timestamp to form data
const timestampInput = document.createElement('input');
timestampInput.type = 'hidden';
timestampInput.name = 'timestamp';
timestampInput.value = formattedDate;
formRef.current.appendChild(timestampInput);
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus({
        success: true,
        message: 'Message sent successfully! We\'ll get back to you soon.'
      });
      formRef.current.reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Whether you have a question about our products, need technical support, or just want to say hello, we're here to help.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg h-fit">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
            {submitStatus && (
              <div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {submitStatus.message}
              </div>
            )}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="user_name"
                  name="user_name" 
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" 
                  placeholder="John Smith" 
                  required
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="user_email"
                  name="user_email" 
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" 
                  placeholder="john@company.com" 
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select 
                  id="subject"
                  name="subject" 
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition bg-white"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Product Support">Product Support</option>
                  <option value="Sales / Bulk Order">Sales / Bulk Order</option>
                  <option value="Careers">Careers</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows={5} 
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" 
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-primary-400' : 'bg-primary-600 hover:bg-primary-700'} text-white font-bold py-4 rounded-xl transition flex items-center justify-center shadow-lg shadow-primary-500/20`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" /> Send Message
                  </>
                )}
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
    </div>
  );
};

export default Contact;