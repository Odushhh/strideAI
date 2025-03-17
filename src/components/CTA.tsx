import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import TallyForm from './TallyForm';

const CTA = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 relative bg-[#2E5E3E] shadow-xl">
      <TallyForm isOpen={showForm} onClose={() => setShowForm(false)} />
      <div className="absolute inset-0 bg-cta-gradient opacity-10"></div>
      <div className="absolute inset-0 bg-[#3D7B52] bg-opacity-50 backdrop-blur-sm"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center relative">
          <div className="chip bg-[#FAFAFA] text-gray-500">Limited Access</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
            Be Among the First to Experience StrideAI Coach
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            We're launching soon! Join our exclusive beta program and transform your running experience.
          </p>
          
          <div className="max-w-md mx-auto">
            <Button 
              onClick={() => setShowForm(true)}
              className="w-full bg-[#FAFAFA] hover:bg-[#D9D9D9] text-black font-medium rounded-full py-6 text-lg flex items-center justify-center border-2 border-white/20"
            >
              <span>Join the Waitlist</span>
              <Send size={18} className="ml-2" />
            </Button>
          </div>
          <p className="text-sm text-white mt-10">
            Limited spots available. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
