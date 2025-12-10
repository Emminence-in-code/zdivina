export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  imageUrl: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  type: 'Remote' | 'Hybrid' | 'On-site';
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}