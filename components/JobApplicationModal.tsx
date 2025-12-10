import React, { useState, useRef, FormEvent } from 'react';
import { X, Send, FileText, User, Mail, Briefcase, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { uploadFile } from 'cocobase';
import { db } from '../lib/cocobase';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ isOpen, onClose, jobTitle = '' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  if (!isOpen) return null;

  const uploadToFileIo = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);


  const response = await uploadFile(db,file );
    if (!response.url) {
      throw new Error("Failed to upload file to Cocobase");
    }



    return (response.url) as string;
  };

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!formRef.current) return;

  // 1) Add timestamp and job title as hidden inputs
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  const formEl = formRef.current;

  const timestampInput = document.createElement("input");
  timestampInput.type = "hidden";
  timestampInput.name = "timestamp";
  timestampInput.value = formattedDate;
  formEl.appendChild(timestampInput);

  if (jobTitle) {
    const jobTitleInput = document.createElement("input");
    jobTitleInput.type = "hidden";
    jobTitleInput.name = "job_title";
    jobTitleInput.value = jobTitle;
    formEl.appendChild(jobTitleInput);
  }

  setIsSubmitting(true);
  setSubmitStatus(null);

  // 2) Upload CV to file.io and include the link in the cover letter
  let cvLink: string | null = null;
  if (resumeFile) {
    try {
      cvLink = await uploadToFileIo(resumeFile);
    } catch (error) {
      console.error("Error uploading file to file.io:", error);
      setSubmitStatus({
        success: false,
        message:
          "Failed to upload your CV. Please try again or email us directly with your attachment.",
      });
      setIsSubmitting(false);
      return;
    }
  }

  // Get the existing cover_letter field value
  const coverLetterField = (formEl.elements.namedItem(
    "cover_letter",
  ) as HTMLTextAreaElement | null);

  const baseCoverLetter = coverLetterField?.value || "";

  const fullMessage = cvLink
    ? `${baseCoverLetter}\n\n---\nCV link: ${cvLink}`
    : baseCoverLetter;

  if (coverLetterField) {
    coverLetterField.value = fullMessage;
  } else {
    // Fallback: inject hidden field if cover_letter is not a visible textarea
    const coverLetterInput = document.createElement("input");
    coverLetterInput.type = "hidden";
    coverLetterInput.name = "cover_letter";
    coverLetterInput.value = fullMessage;
    formEl.appendChild(coverLetterInput);
  }

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      "template_qwaepkc",
      formEl,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );

    setSubmitStatus({
      success: true,
      message:
        "Application submitted successfully! We'll review your application and get back to you soon.",
    });
    formEl.reset();
    setResumeFile(null);
  } catch (error) {
    console.error("Failed to submit application:", error);
    setSubmitStatus({
      success: false,
      message:
        "Failed to submit application. Please try again or email us directly at careers@divina.com",
    });
  } finally {
    setIsSubmitting(false);
  }
};

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
    setResumeFile(e.target.files[0]);
  }
};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 transition"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              {jobTitle ? `Apply for ${jobTitle}` : 'Apply for a Position'}
            </h2>
            <p className="text-slate-600">
              Join our team and help us revolutionize healthcare technology
            </p>
          </div>
          
          {submitStatus && (
            <div 
              className={`p-4 mb-6 rounded-lg ${
                submitStatus.success 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="first_name" className="block text-sm font-medium text-slate-700 mb-2">
                  First Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="John"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="last_name" className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name *
                </label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            
            <div className="relative">
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder="(123) 456-7890"
              />
            </div>
            
            <div className="relative">
              <label htmlFor="resume" className="block text-sm font-medium text-slate-700 mb-2">
                Resume / CV *
              </label>
              <div className="mt-1 flex items-center">
                <label className="cursor-pointer">
                  <span className="px-4 py-3 bg-slate-100 text-slate-700 rounded-l-lg border border-r-0 border-slate-200 hover:bg-slate-200 transition">
                    Choose File
                  </span>
                  <span className="ml-2 text-sm text-slate-500">
                    {resumeFile ? resumeFile.name : 'No file chosen'}
                  </span>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="hidden"
                  />
                </label>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                PDF, DOC, or DOCX (Max. 5MB)
              </p>
            </div>
            
            <div className="relative">
              <label htmlFor="cover_letter" className="block text-sm font-medium text-slate-700 mb-2">
                Cover Letter
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3">
                  <FileText className="h-5 w-5 text-slate-400" />
                </div>
                <textarea
                  id="cover_letter"
                  name="cover_letter"
                  rows={6}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Tell us why you'd be a great fit for this position..."
                ></textarea>
              </div>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 px-6 rounded-xl transition flex items-center justify-center ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-sm text-slate-500">
                We'll get back to you within 3-5 business days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationModal;
