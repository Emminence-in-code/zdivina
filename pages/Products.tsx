import React, { useState, useRef, FormEvent } from 'react';
import { PRODUCTS } from '../constants';
import { ChevronDown, ChevronUp, ShoppingCart, Info, Search, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const term = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.features.some(f => f.toLowerCase().includes(term))
    );
  });

  const clearSearch = () => setSearchTerm('');

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 fade-in">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Our Solutions</h1>
          <p className="text-xl text-slate-600 mb-8">
            Precision-engineered devices designed to make diabetes management safer, easier, and more comfortable.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-10 py-4 border border-slate-200 rounded-full leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm shadow-sm transition duration-150 ease-in-out"
              placeholder="Search by product name, feature, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        <div className="grid gap-12 min-h-[400px]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))
          ) : (
            <div className="text-center py-20">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Search className="h-8 w-8 text-slate-300" />
              </div>
              <h3 className="text-lg font-medium text-slate-900">No products found</h3>
              <p className="text-slate-500 mt-2">We couldn't find any products matching "{searchTerm}".</p>
              <button 
                onClick={clearSearch}
                className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ product: typeof PRODUCTS[0], index: number }> = ({ product, index }) => {
  const [showSpecs, setShowSpecs] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const orderFormRef = useRef<HTMLFormElement>(null);

  const toggleOrderForm = () => {
    setShowOrderForm((prev) => !prev);
    setSubmitStatus(null);
  };

  const handleSubmitOrder = async (e: FormEvent) => {
    e.preventDefault();
    if (!orderFormRef.current) return;

    const formEl = orderFormRef.current;

    // Add readable timestamp like on Contact page
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    });

    const timestampInput = document.createElement('input');
    timestampInput.type = 'hidden';
    timestampInput.name = 'timestamp';
    timestampInput.value = formattedDate;
    formEl.appendChild(timestampInput);

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formEl,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus({
        success: true,
        message:
          "Thank you! Your request has been received. Our team will review your order and get back to you as soon as possible.",
      });
      formEl.reset();
    } catch (error) {
      console.error('Failed to send Buy Now email:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to process your request. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100 flex flex-col lg:flex-row fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="lg:w-1/2 bg-slate-100 relative group overflow-hidden h-64 lg:h-auto">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      
      <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
        <div className="mb-2">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">{product.category}</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{product.name}</h2>
        <p className="text-slate-600 text-lg mb-6 leading-relaxed">{product.description}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {product.features.map((feat, i) => (
            <div key={i} className="flex items-center text-slate-700">
              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
              {feat}
            </div>
          ))}
        </div>

        <div className="border-t border-slate-100 pt-6">
          <button 
            onClick={() => setShowSpecs(!showSpecs)}
            className="flex items-center text-slate-500 hover:text-primary-600 font-medium transition mb-4 focus:outline-none"
          >
            {showSpecs ? 'Hide Technical Specifications' : 'View Technical Specifications'}
            {showSpecs ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
          </button>
          
          {showSpecs && (
            <div className="bg-slate-50 rounded-xl p-6 mb-6 grid grid-cols-2 gap-4 animate-fade-in">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <dt className="text-xs text-slate-400 uppercase font-bold">{key}</dt>
                  <dd className="text-slate-800 font-medium">{value}</dd>
                </div>
              ))}
            </div>
          )}
          {showOrderForm && (
            <form
              ref={orderFormRef}
              onSubmit={handleSubmitOrder}
              className="bg-slate-50 rounded-xl p-6 mb-6 space-y-4"
            >
              {submitStatus && (
                <div
                  className={`p-3 rounded-lg text-sm ${
                    submitStatus.success
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <input type="hidden" name="subject" value={`New product order request: ${product.name}`} />
              <input type="hidden" name="product_name" value={product.name} />
              <input type="hidden" name="product_category" value={product.category} />

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="customer_name"
                    required
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-sm"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="customer_email"
                    required
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-sm"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Additional details (optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-sm"
                  placeholder="Tell us anything important about your order (quantity, delivery needs, etc.)"
                />
                <p className="mt-1 text-xs text-slate-500">
                  We will review your request and contact you to finalize the transaction.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary-600 text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center text-sm shadow-lg shadow-primary-500/20 transition ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-700'
                }`}
              >
                {isSubmitting ? 'Sending your request...' : 'Submit Request'}
              </button>
            </form>
          )}

          <div className="flex space-x-4">
             <button
               onClick={toggleOrderForm}
               className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-xl font-bold transition shadow-lg shadow-primary-500/20 flex items-center justify-center hover:bg-primary-700"
             >
                <ShoppingCart className="mr-2 h-5 w-5" /> {showOrderForm ? 'Close' : 'Buy Now'}
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;