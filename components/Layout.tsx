import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/#services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/#contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/' && !location.hash) return true;
    if (path.includes('#')) {
      return location.pathname === '/' && location.hash === path.substring(path.indexOf('#'));
    }
    return location.pathname === path;
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-800 tracking-tight">Divina <span className="text-primary-600">Healthcare</span></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                   isActive(link.path) ? 'text-primary-600 bg-primary-50' : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
             <div className="flex items-center space-x-2 mb-4">
                <div className="bg-primary-600 p-1.5 rounded-lg">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tight">Divina <span className="text-primary-400">Healthcare</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering patients worldwide with innovative diabetes care solutions and providing flexible, remote career opportunities for healthcare professionals.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://facebook.com" icon={<Facebook className="h-4 w-4" />} />
              <SocialIcon href="https://twitter.com" icon={<Twitter className="h-4 w-4" />} />
              <SocialIcon href="https://linkedin.com" icon={<Linkedin className="h-4 w-4" />} />
              <SocialIcon href="https://instagram.com" icon={<Instagram className="h-4 w-4" />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary-100 border-b border-slate-800 pb-2 inline-block">Company</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/#about" className="hover:text-primary-400 transition flex items-center"><span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>About Us</Link></li>
              <li><Link to="/careers" className="hover:text-primary-400 transition flex items-center"><span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>Careers</Link></li>
              <li><Link to="/#services" className="hover:text-primary-400 transition flex items-center"><span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>Services</Link></li>
              <li><a href="#" className="hover:text-primary-400 transition flex items-center"><span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>News & Press</a></li>
              <li><a href="#" className="hover:text-primary-400 transition flex items-center"><span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>Investor Relations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary-100 border-b border-slate-800 pb-2 inline-block">Resources</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/products" className="hover:text-primary-400 transition flex items-center"><span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>Shop Devices</Link></li>
              <li><a href="#" className="hover:text-primary-400 transition flex items-center"><span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>Patient Education</a></li>
              <li><Link to="/#contact" className="hover:text-primary-400 transition flex items-center"><span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>Support Center</Link></li>
              <li><a href="#" className="hover:text-primary-400 transition flex items-center"><span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition flex items-center"><span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary-100 border-b border-slate-800 pb-2 inline-block">Get in Touch</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
               <li className="flex items-start">
                 <span className="text-primary-500 mr-3 font-bold">@</span>
                 <a href="mailto:DivinaHealthcare@outlook.com" className="hover:text-white transition">DivinaHealthcare@outlook.com</a>
               </li>
               <li className="flex items-start">
                 <span className="text-primary-500 mr-3 font-bold">#</span>
                 <a href="tel:09023265024" className="hover:text-white transition">09023265024</a>
               </li>
               <li className="flex items-start">
                 <span className="text-primary-500 mr-3 font-bold">A</span>
                 <span>100 Innovation Way, Tech Park<br/>San Francisco, CA 94107</span>
               </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2026 Divina Healthcare. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="flex items-center text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-400">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span> Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{icon: React.ReactNode, href: string}> = ({ icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2.5 rounded-full hover:bg-primary-600 hover:text-white transition duration-300 text-slate-400">
    {icon}
  </a>
);
