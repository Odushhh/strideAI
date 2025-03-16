
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden bg-hero-pattern">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <div className="flex items-center mb-4">
              <div className="mr-3 flex items-center justify-center">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stride-blue">
                  <circle cx="21" cy="21" r="20" stroke="currentColor" strokeWidth="2"/>
                  <path d="M28.5 14C29.3284 14 30 13.3284 30 12.5C30 11.6716 29.3284 11 28.5 11C27.6716 11 27 11.6716 27 12.5C27 13.3284 27.6716 14 28.5 14Z" fill="currentColor"/>
                  <path d="M25.5 19L22 22.5L19 19.5L13 25.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 16.5L26.5 13C27.1 12.4 28 12.5 28.5 13C29 13.5 30.5 15 30.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 29L19 23L22 26L28.5 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.5 17C17.3284 17 18 16.3284 18 15.5C18 14.6716 17.3284 14 16.5 14C15.6716 14 15 14.6716 15 15.5C15 16.3284 15.6716 17 16.5 17Z" fill="currentColor"/>
                </svg>
                <span className="font-bold text-2xl tracking-tight text-stride-gray-dark ml-2">StrideAI</span>
              </div>
              <div className="chip">AI-Powered Running Coach</div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-gray-900 leading-tight">
              Run Smarter, <br />Train Harder
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Personalized training, real-time feedback, and data-driven insights to help you become a better runner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-stride-blue hover:bg-stride-blue-dark text-white font-medium rounded-full h-12 px-8 text-base">
                Join the Waitlist
              </Button>
              <a href="#features" className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-gray-600 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                Learn More
                <ArrowDown size={16} className="ml-2 animate-bounce-subtle" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-stride-blue/20 to-stride-green/20 rounded-3xl blur-3xl scale-95 -z-10"></div>
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
                      <div className="w-8 h-8 rounded-full bg-stride-blue animate-pulse"></div>
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stride-green">
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
