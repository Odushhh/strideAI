import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What devices is StrideAI Coach compatible with?",
    answer: "StrideAI Coach is compatible with iOS and Android smartphones, Apple Watch, and most popular fitness trackers including Garmin, Fitbit, and Polar devices."
  },
  {
    question: "Do I need any special equipment to use StrideAI Coach?",
    answer: "No special equipment is required. The basic version works with just your smartphone. For enhanced tracking, you can connect your existing fitness wearables or running watch."
  },
  {
    question: "How does the AI personalize my training plan?",
    answer: "Our AI analyzes your running history, fitness level, goals, and schedule to create a personalized plan. It continuously adapts based on your performance, recovery, and feedback after each run."
  },
  {
    question: "Can I use StrideAI Coach for race preparation?",
    answer: "Absolutely! StrideAI Coach excels at race preparation with specialized plans for 5K, 10K, half marathon, and marathon distances. Simply set your race date and goal, and the AI will build an optimal training plan."
  },
  {
    question: "Is my running data secure and private?",
    answer: "Your privacy is our priority. All data is encrypted and stored securely. We never share your personal information with third parties without your explicit consent, and you maintain full control over your data."
  },
  {
    question: "How is StrideAI Coach different from other running apps?",
    answer: "Unlike other apps that offer generic plans, StrideAI uses advanced machine learning to provide truly personalized coaching that adapts in real-time. Our AI model has been trained on data from elite runners and coaches to offer professional-level guidance."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#FFF] text-gray-800 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <div className="chip">FAQ</div>
          <h2 className="section-heading text-gray-800">Frequently Asked Questions</h2>
          <p className="section-subheading text-gray-600">
            Have questions about StrideAI? Find answers to the most common questions below.
          </p>
        </div>

        <div className="w-full md:w-[75%] mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-[#FAFAFA]"
            >
              <button
                className="bg-[#FAFAFA] w-full p-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                {openIndex === index ? 
                  <ChevronUp className="text-[#3D7B52] flex-shrink-0" /> : 
                  <ChevronDown className="text-gray-500 flex-shrink-0" />
                }
              </button>
              <div 
                className={`bg-white transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 py-6 px-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
