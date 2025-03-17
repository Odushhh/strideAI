import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Declare the Tally type
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Load Tally script
    const loadTallyScript = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
          if (window.Tally) {
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    };

    if (showForm) {
      loadTallyScript();
    }
  }, [showForm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden bg-[#F9F8F1]">
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-[900px] mx-auto">
            <button
              onClick={() => setShowForm(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-200"
            >
              Close
            </button>
            <iframe
              src="https://tally.so/embed/mYkvzz?alignLeft=1&hideTitle=1&transparentBackground=1"
              width="100%"
              height="750"
              frameBorder="0"
              title="StrideAI Waiting List"
              style={{ 
                border: "none", 
                borderRadius: "12px", 
                background: "white",
                margin: "0 auto",
                display: "block",
                padding: "20px",
                maxHeight: "90vh",
                minHeight: "500px"
              }}
            ></iframe>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes checkmark {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes draw {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-slide-down {
          animation: slideDown 0.4s ease-out forwards;
        }

        .animate-checkmark {
          animation: checkmark 0.5s ease-out forwards;
        }

        .animate-draw {
          stroke-dasharray: 100;
          animation: draw 0.5s ease-out forwards;
        }
      `}</style>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <div className="chip">AI-Powered Running Coach</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-gray-900 leading-tight">
              Run Smarter, <br />Train Harder
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Personalized training, real-time feedback, and data-driven insights to help you become a better runner.
            </p>
            <div className="mb-2 max-w-xl relative">
              <form onSubmit={handleSubmit} className="relative">
                <Button 
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-[#3D7B52] hover:bg-[#6C3558] text-white font-medium rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
                >
                  <span className="flex items-center">
                    Join Waitlist
                    <Send size={14} className="ml-2" />
                  </span>
                </Button>
              </form>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Be the first to experience our AI running coach. No credit card required.
            </p>
          </div>
          <div className="lg:w-1/2 animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3D7B52]/20 to-[#444B5A]/20 rounded-3xl blur-3xl scale-95 -z-10"></div>
              <div className="relative border-8 border-gray-800 shadow-xl rounded-3xl overflow-hidden bg-gray-800 transform rotate-[0.75deg]">
                <img 
                  src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Runner using StrideAI app" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-[#3D7B52] animate-pulse"></div>
                    </div>
                    <div className="text-white">
                      <div className="text-sm opacity-90">Now Coaching</div>
                      <div className="font-medium">Adjust your pace: +10 sec/mile</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 md:right-8 md:-bottom-6 bg-gray-800 rounded-2xl shadow-lg p-4 w-40 blur-backdrop border border-gray-700/50 transform rotate-2">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-900/60 p-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3D7B52]">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Today's Goal</div>
                    <div className="text-sm font-medium text-white">5K - 80% Complete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
