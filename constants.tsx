import { Product, Job, Service, FaqItem } from './types';
import hemo from './images/hemo.jpg';
import pen from './images/pen.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'DivinaSafe™ Hemolancets',
    category: 'Diabetes Care',
    description: 'Ergonomic, pain-free lancets with advanced safety mechanisms designed for daily comfort.',
    features: ['Ergonomic Grip', 'Pain-free Activation', 'Auto-retraction Safety', 'Multiple Gauge Sizes'],
    specs: {
      'Gauge Options': '28G, 30G, 32G',
      'Activation': 'Pressure Activated',
      'Sterility': 'Gamma Irradiation',
      'Packaging': '100 count / box'
    },
    imageUrl: hemo
  },
  {
    id: 'p2',
    name: 'GlucoGlide™ Pen Needles',
    category: 'Diabetes Care',
    description: 'Ultra-thin, tri-beveled design ensuring smooth injection and compatibility with all Type-A Diabetes Pens.',
    features: ['Universal Fit (Type-A)', 'Tri-beveled Tip', 'Silicone Lubricated', 'Thin Wall Technology'],
    specs: {
      'Length Options': '4mm, 5mm, 6mm, 8mm',
      'Technology': 'Thin Wall',
      'Compatibility': 'Universal ISO Standard',
      'Material': 'Stainless Steel'
    },
    imageUrl: pen
  },
  // {
  //   id: 'p3',
  //   name: 'ShieldGuard™ Safety Tips',
  //   category: 'Diabetes Care',
  //   description: 'Automated needle shielding to protect healthcare workers and patients from accidental sticks.',
  //   features: ['Auto-Lock Shield', 'Red Indicator', 'Low Injection Force', 'Safe for Kids'],
  //   specs: {
  //     'Safety Mechanism': 'Passive Dual Shield',
  //     'Gauge': '31G, 32G',
  //     'Usage': 'Single Use',
  //     'Certification': 'FDA & CE'
  //   },
  //   imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
  // }
];

export const JOBS: Job[] = [
  {
    id: 'j1',
    title: 'Senior Telehealth Consultant',
    department: 'Healthcare Consulting',
    type: 'Remote',
    description: 'Provide virtual guidance to patients managing chronic diabetes conditions.'
  },
  {
    id: 'j2',
    title: 'Customer Care Specialist',
    department: 'Support',
    type: 'Remote',
    description: 'Handle patient inquiries regarding orders, insurance, and product usage with empathy.'
  },
  {
    id: 'j3',
    title: 'Digital Marketing Manager',
    department: 'Marketing',
    type: 'Remote',
    description: 'Lead our digital presence strategy, focusing on SEO and patient community engagement.'
  },
  {
    id: 'j4',
    title: 'Logistics Coordinator',
    department: 'Operations',
    type: 'Remote',
    description: 'Manage supply chain efficiency ensuring timely delivery of medical supplies globally.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'virtual-consulting',
    title: 'Virtual Consulting',
    description: 'Connect with certified diabetes educators from the comfort of your home.',
    iconName: 'MonitorSmartphone'
  },
  {
    id: 'continuous-monitoring',
    title: 'Continuous Monitoring',
    description: 'Real-time data tracking and health alerts integrated with our devices.',
    iconName: 'Activity'
  },
  {
    id: 'patient-education',
    title: 'Patient Education',
    description: 'Comprehensive library of resources, webinars, and guides for self-care.',
    iconName: 'Users'
  },
  {
    id: 'secure-database',
    title: 'Secure Medical Database',
    description: 'High-profile encrypted health records for seamless global access by authorized specialists.',
    iconName: 'Database'
  },
  {
    id: 'experimental-therapeutics',
    title: 'Experimental Therapeutics',
    description: 'Exclusive access to clinical trials and next-generation biotech solutions for eligible patients.',
    iconName: 'TestTube'
  },
  {
    id: 'executive-health',
    title: 'Executive Health Suite',
    description: 'Concierge medical services designed for high-profile clients requiring privacy and speed.',
    iconName: 'Crown'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What services do you offer?",
    answer: "We specialize in high-quality diabetes care products like safety lancets and pen needles, alongside virtual healthcare consulting and remote monitoring services."
  },
  {
    question: "How do I place an order?",
    answer: "You can place orders directly through our 'Shop Devices' page. For bulk medical facility orders, please contact our sales team via the Contact form."
  },
  {
    question: "Are the remote positions fully remote?",
    answer: "Yes! Divina Healthcare champions a 'work from anywhere' culture. 95% of our roles, including support and consulting, are fully remote."
  },
  {
    question: "Do you accept insurance?",
    answer: "We partner with major insurance providers. Please visit our Healthcare Services page for a list of accepted payers and accessibility options."
  }
];
