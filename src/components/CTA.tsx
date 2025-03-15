
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 relative">
      <div className="absolute inset-0 bg-cta-gradient opacity-10"></div>
      <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm"></div>
      
      <div className="max-w-4xl mx-auto relative bg-white bg-opacity-90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-stride-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-stride-green/10 rounded-full blur-3xl"></div>
        
        <div className="text-center relative">
          <div className="chip">Limited Access</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-stride-gray-dark">
            Be Among the First to Experience StrideAI Coach
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're launching soon! Join our exclusive beta program and transform your running experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow rounded-full px-6 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stride-blue focus:border-transparent"
            />
            <Button className="bg-stride-blue hover:bg-stride-blue-dark text-white font-medium rounded-full py-3 px-6">
              Request Access
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Limited spots available. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
