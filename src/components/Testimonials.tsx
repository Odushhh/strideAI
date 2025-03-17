import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marathon Runner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    quote: "StrideAI has transformed my training. The personalized plans and real-time feedback helped me achieve a PR in my last marathon. It's like having an elite coach with you on every run!"
  },
  {
    name: "Michael Chen",
    role: "Recreational Runner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    quote: "After struggling with recurring injuries, StrideAI's guidance on proper form and recovery has kept me injury-free for 6 months. The AI coach seems to know exactly when I need to push harder or ease up."
  },
  {
    name: "Alicia Rodriguez",
    role: "Trail Runner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    quote: "The motivation I get from StrideAI is incredible. On days when I'm not feeling it, the app knows exactly what to say to get me moving. The community features also add a fun competitive element to my training."
  }
];

const Testimonials = () => {
  return (
    
    <section id="testimonials" className="section-container">
      <div className="text-center">
        <div className="chip">Testimonials</div>
        <h2 className="section-heading">What Our Beta Users Say</h2>
        <p className="section-subheading">
          Hear from real runners who have experienced the StrideAI difference.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-[#ECEEF4] p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#2E5E3E] text-[#2E5E3E]" />
              ))}
            </div>
            <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
            <div className="flex items-center gap-4 mt-auto">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full object-cover"
                loading="lazy" 
              />
              <div>
                <h4 className="font-semibold text-stride-gray-dark">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
