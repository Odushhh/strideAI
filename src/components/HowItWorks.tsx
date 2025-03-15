
import { ClipboardCheck, Smartphone, Running } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck className="h-10 w-10 text-white" />,
    title: "Complete Assessment",
    description: "Take a quick assessment of your running experience and goals."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-white" />,
    title: "Get Your Plan",
    description: "Receive your personalized training plan and connect your devices."
  },
  {
    icon: <Running className="h-10 w-10 text-white" />,
    title: "Start Running",
    description: "Start running with real-time guidance and watch your progress."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-container">
      <div className="text-center">
        <div className="chip">Process</div>
        <h2 className="section-heading">Running with StrideAI is Simple</h2>
        <p className="section-subheading">
          Our streamlined process gets you up and running with personalized AI coaching in minutes.
        </p>
      </div>

      <div className="relative mt-16">
        {/* Connection Line */}
        <div className="absolute top-24 left-0 right-0 h-1 bg-gray-200 hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-20 h-20 flex items-center justify-center bg-stride-blue rounded-full shadow-lg mb-6 z-10 relative">
                  {step.icon}
                </div>
                <div className="absolute top-0 left-0 w-20 h-20 bg-stride-blue/20 rounded-full blur-lg -z-10"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-stride-gray-dark">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-600 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
