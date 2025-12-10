import { useParams, useNavigate } from 'react-router-dom';
import { SERVICES } from '../../constants';
import { MonitorSmartphone, Activity, Users, Database, TestTube, Crown } from 'lucide-react';
import { useEffect } from 'react';

const iconMap: any = {
  'MonitorSmartphone': MonitorSmartphone,
  'Activity': Activity,
  'Users': Users,
  'Database': Database,
  'TestTube': TestTube,
  'Crown': Crown
};

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Set document title
  useEffect(() => {
    const service = SERVICES.find(s => s.id === id);
    if (service) {
      document.title = `${service.title} | Divina Healthcare`;
    } else {
      document.title = 'Service Not Found | Divina Healthcare';
    }
  }, [id]);
  
  // Find the service with the matching ID
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-800">Service not found</h1>
        <button 
          onClick={() => navigate('/services')}
          className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Back to Services
        </button>
      </div>
    </div>;
  }

  const Icon = iconMap[service.iconName] || Users;
  
  // Default content for each service
  const serviceDetails: Record<string, { overview: string; features: string[]; benefits: string[] }> = {
    'continuous-monitoring': {
      overview: "Our continuous monitoring service provides real-time glucose tracking, giving you and your healthcare provider with valuable insights into your glucose patterns throughout the day and night.",
      features: [
        "24/7 glucose monitoring with automatic alerts",
        "Trend analysis and pattern recognition",
        "Cloud-based data storage and sharing with healthcare providers",
        "Customizable alert thresholds for high and low glucose levels"
      ],
      benefits: [
        "Better glucose control with fewer fingersticks",
        "Reduced risk of hypoglycemia and hyperglycemia",
        "Personalized insights for improved diabetes management",
        "Seamless integration with your healthcare team"
      ]
    },
    'personalized-coaching': {
      overview: "Our certified diabetes educators provide personalized coaching to help you understand and manage your diabetes effectively.",
      features: [
        "One-on-one virtual coaching sessions",
        "Customized meal planning and nutrition guidance",
        "Exercise and lifestyle recommendations",
        "Medication management support"
      ],
      benefits: [
        "Improved diabetes self-management skills",
        "Personalized support for your unique needs",
        "Better understanding of diabetes and its management",
        "Ongoing motivation and accountability"
      ]
    },
    'data-analytics': {
      overview: "Our advanced analytics platform transforms your health data into actionable insights for better diabetes management.",
      features: [
        "Comprehensive data visualization tools",
        "Automated reports for healthcare providers",
        "Predictive analytics for glucose trends",
        "Integration with fitness and nutrition apps"
      ],
      benefits: [
        "Data-driven decision making for better outcomes",
        "Easier communication with your healthcare team",
        "Early identification of patterns and trends",
        "Personalized recommendations based on your data"
      ]
    }
  };

  // Get the details for this service or use default if not found
  const details = serviceDetails[service.id] || {
    overview: "Detailed information about our service is coming soon. Please check back later for more details.",
    features: [],
    benefits: []
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Document title is set in the useEffect hook above */}

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <button 
                onClick={() => navigate('/services')}
                className="flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Services
              </button>
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary-600" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 mb-4">{service.title}</h1>
              <p className="text-xl text-slate-600 mb-8">{service.description}</p>
              <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-slate-100 rounded-2xl p-6 h-96 flex items-center justify-center">
                <span className="text-slate-400">Service visualization or image</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Service Overview</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  {details.overview}
                </p>

                {details.features.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-slate-800 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {details.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {details.benefits.length > 0 && (
                  <div className="bg-primary-50 p-6 rounded-xl">
                    <h3 className="text-2xl font-semibold text-slate-800 mb-4">Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {details.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-primary-100 p-1.5 rounded-full mr-3 mt-0.5">
                            <svg className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <span className="text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Service Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-500">Category</p>
                    <p className="font-medium text-slate-800">Diabetes Management</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Availability</p>
                    <p className="font-medium text-slate-800">Available Now</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Support</p>
                    <p className="font-medium text-slate-800">24/7 Customer Support</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Ready to get started?</h3>
                <p className="text-slate-300 mb-6">Contact us today to learn more about how our {service.title} service can help you manage your diabetes more effectively.</p>
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
