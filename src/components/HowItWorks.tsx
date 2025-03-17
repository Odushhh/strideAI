import { 
  CheckCircle2, 
  LineChart,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: <CheckCircle2 className="h-6 w-6 text-[#2E5E3E]" />,
    title: "Quick Assessment",
    description: "Complete a quick assessment of your running experience and goals. Connect data from your existing running apps.",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    // image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    tag: "Assessment"
  },
  {
    number: "02",
    icon: <LineChart className="h-6 w-6 text-[#2E5E3E]" />,
    title: "Personalized Training Plans",
    description: "Receive an AI-generated training plan tailored to your needs, fitness level, and goals.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    tag: "Planning"
  },
  {
    number: "03",
    icon: <CheckCircle2 className="h-6 w-6 text-[#2E5E3E]" />,
    title: "Start Running",
    description: "Begin your journey with real-time coaching and guidance to improve your fitness and performance.",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    tag: "Training"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full bg-[#F9F8F1] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <div className="chip">Process</div>
          <h2 className="section-heading">Running with StrideAI is Simple</h2>
          <p className="section-subheading">
            Getting started is easy – we've streamlined the process so you can focus on running.
          </p>
        </div>
        
        <div className="space-y-16 py-28">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-start gap-8 md:gap-12`}
            >
              <div className="md:w-1/2">
                <div className="relative rounded-xl overflow-hidden bg-[#FAFAFA] shadow-sm">
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6">
                    {/*
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium text-[#2E5E3E] flex items-center gap-2">
                      {step.icon}
                      <span>{step.tag}</span>
                    </div> */}
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className="text-5xl font-bold text-white">{step.number}</div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 pt-16">
                <h3 className="text-3xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-xl leading-relaxed">{step.description}</p>
                {/*
                {index < steps.length - 1 && (
                  <div className={`hidden md:flex items-center mt-8 text-[#2E5E3E] ${index === 1 ? 'justify-end' : ''}`}>
                    {index === 1 ? (
                      <>
                        <ArrowRight className="w-6 h-6" />
                        <div className="h-px w-24 bg-[#2E5E3E]" />
                      </>
                    ) : (
                      <>
                        <div className="h-px w-24 bg-[#2E5E3E]" />
                        <ArrowRight className="w-6 h-6" />
                      </>
                    )}
                  </div>
                )} */}
              </div>
              <br></br>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
