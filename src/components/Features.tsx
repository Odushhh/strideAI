
import { Activity, Calendar, Award, UserCheck, BarChart, Users } from 'lucide-react';

const featureData = [
  {
    icon: <Calendar className="h-8 w-8 text-stride-blue" />,
    title: "Personalized Training Plans",
    description: "AI-generated plans based on your goals, schedule, and fitness level."
  },
  {
    icon: <Activity className="h-8 w-8 text-stride-blue" />,
    title: "Real-time Coaching",
    description: "Audio guidance on pace, form, and effort during your runs."
  },
  {
    icon: <BarChart className="h-8 w-8 text-stride-blue" />,
    title: "Performance Analytics",
    description: "Detailed insights into your running metrics and progress."
  },
  {
    icon: <UserCheck className="h-8 w-8 text-stride-blue" />,
    title: "Recovery Guidance",
    description: "Smart recommendations for optimal recovery between runs."
  },
  {
    icon: <Award className="h-8 w-8 text-stride-blue" />,
    title: "Goal Setting & Tracking",
    description: "Set, track, and achieve your running milestones."
  },
  {
    icon: <Users className="h-8 w-8 text-stride-blue" />,
    title: "Runner Community",
    description: "Connect, compete, and share achievements with fellow runners."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-container bg-gray-50">
      <div className="text-center">
        <div className="chip">Features</div>
        <h2 className="section-heading">Smart Features for Smarter Running</h2>
        <p className="section-subheading">
          Experience the future of running with StrideAI's cutting-edge features designed to elevate your training.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {featureData.map((feature, index) => (
          <div 
            key={index} 
            className="feature-card p-8"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="p-3 bg-stride-blue bg-opacity-10 rounded-xl w-fit mb-5">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stride-gray-dark">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
