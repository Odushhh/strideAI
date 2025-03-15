
const benefits = [
  {
    stat: "93%",
    description: "of users reported improved running form within 4 weeks"
  },
  {
    stat: "18%",
    description: "average increase in running efficiency through personalized pacing"
  },
  {
    stat: "78%",
    description: "reduction in training-related injuries compared to self-coached runners"
  },
  {
    stat: "2x",
    description: "faster goal achievement than with traditional training plans"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-container bg-gray-50">
      <div className="text-center">
        <div className="chip">Benefits</div>
        <h2 className="section-heading">Why Runners Choose StrideAI Coach</h2>
        <p className="section-subheading">
          Our users experience remarkable improvements in their running performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center transform transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]"
          >
            <div className="text-4xl md:text-5xl font-bold text-stride-blue mb-3">{benefit.stat}</div>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
