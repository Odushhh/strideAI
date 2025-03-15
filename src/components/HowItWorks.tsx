
import { 
  CheckCircle2, 
  Footprints, 
  LineChart 
} from 'lucide-react';

const steps = [
  {
    icon: <CheckCircle2 className="h-8 w-8 text-stride-blue" />,
    title: "Quick Assessment",
    description: "Complete a quick assessment of your running experience and goals to help us create your personalized plan."
  },
  {
    icon: <LineChart className="h-8 w-8 text-stride-blue" />,
    title: "Personalized Plan",
    description: "Receive your AI-generated training plan and connect your devices for seamless tracking."
  },
  {
    icon: <Footprints className="h-8 w-8 text-stride-blue" />,
    title: "Start Running",
    description: "Begin your journey with real-time coaching guidance and watch your progress improve over time."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-container">
      <div className="text-center">
        <div className="chip">Process</div>
        <h2 className="section-heading">Running with StrideAI is Simple</h2>
        <p className="section-subheading">
          Getting started is easy – we've streamlined the process so you can focus on running.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="flex-1 relative">
            <div className="feature-card p-8 h-full flex flex-col items-center text-center">
              <div className="p-3 bg-stride-blue bg-opacity-10 rounded-xl w-fit mb-5">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-stride-gray-dark">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              <div className="w-16 h-16 rounded-full bg-stride-blue/10 flex items-center justify-center font-bold text-stride-blue text-2xl mt-6">
                {index + 1}
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="h-1 w-8 bg-stride-blue/30 rounded-full"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
