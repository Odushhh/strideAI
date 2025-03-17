import { 
  Brain, 
  BarChart3, 
  HeartPulse, 
  Footprints, 
  Smartphone, 
  Users
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

const WhyStrideAI = () => {
  const comparisonData = [
    { category: "Personalization", strideAI: 9, traditional: 3, human: 10 },
    { category: "Cost", strideAI: 9, traditional: 10, human: 3 },
    { category: "Availability", strideAI: 10, traditional: 8, human: 5 },
    { category: "Real-time Feedback", strideAI: 9, traditional: 2, human: 7 },
    { category: "Data Analysis", strideAI: 10, traditional: 6, human: 4 }
  ];

  const chartConfig = {
    strideAI: { 
      label: "StrideAI Coach", 
      theme: { light: "#2E5E3E", dark: "#2E5E3E" } 
    },
    traditional: { 
      label: "Traditional Apps", 
      theme: { light: "#94A3B8", dark: "#94A3B8" } 
    },
    human: { 
      label: "Human Coach", 
      theme: { light: "#10B981", dark: "#10B981" } 
    }
  };

  return (
    <section id="why-strideai" className="w-full bg-[#FFFFFF] py-20 md:py-28 my-[30px]">
      <div className="max-w-7xl mx-auto px-6 pt-12 md:px-10">
        <div className="text-center">
          <div className="chip">Why StrideAI?</div>
          <h2 className="section-heading">Why Choose StrideAI?</h2>
          <p className="section-subheading">
            The Future of Running Training is Here
          </p>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-20">
          <div className="feature-card p-8 bg-[#FAFAFA]">
            <div className="p-3 bg-[#2E5E3E] bg-opacity-10 rounded-xl w-fit mb-5">
              <Footprints className="h-8 w-8 text-[#2E5E3E]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stride-gray-dark">Beyond Traditional Apps</h3>
            <p className="text-gray-600">
              Unlike standard running apps that merely track your runs, StrideAI actively coaches you with real-time form analysis and personalized guidance.
            </p>
          </div>

          <div className="feature-card p-8 bg-[#FAFAFA]">
            <div className="p-3 bg-[#2E5E3E] bg-opacity-10 rounded-xl w-fit mb-5">
              <Brain className="h-8 w-8 text-[#2E5E3E]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stride-gray-dark">Powered by Advanced AI</h3>
            <p className="text-gray-600">
              Our proprietary machine learning algorithms analyze thousands of data points from your runs to create a coaching experience as personalized as working with an elite human coach.
            </p>
          </div>

          <div className="feature-card p-8 bg-[#FAFAFA]">
            <div className="p-3 bg-[#2E5E3E] bg-opacity-10 rounded-xl w-fit mb-5">
              <HeartPulse className="h-8 w-8 text-[#2E5E3E]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stride-gray-dark">Holistic Approach</h3>
            <p className="text-gray-600">
              StrideAI doesn't just focus on speed and distance—it considers your recovery, nutrition needs, injury prevention, and mental preparation for a complete training experience.
            </p>
          </div>
        </div>

        <br></br>
        {/* Visual comparison chart */}
        <div className="mb-20 mt-10 flex flex-col items-center">
          <h3 className="text-2xl font-semibold my-20 text-stride-gray-dark text-center">
            How StrideAI Compares
          </h3>

          <br></br>
          
          <div className="hidden md:block w-[85%] mx-auto">
            <ChartContainer className="h-[550px]" config={chartConfig}>
              <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="category" />
                <YAxis domain={[0, 10]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="strideAI" name="StrideAI Coach" fill="var(--color-strideAI)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="traditional" name="Traditional Apps" fill="var(--color-traditional)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="human" name="Human Coach" fill="var(--color-human)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </div>

          <div className="md:hidden overflow-x-auto w-full my-20">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>StrideAI Coach</TableHead>
                  <TableHead>Traditional Apps</TableHead>
                  <TableHead>Human Coach</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((item) => (
                  <TableRow key={item.category}>
                    <TableCell className="font-medium">{item.category}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-[#2E5E3E] h-2.5 rounded-full" style={{ width: `${item.strideAI * 10}%` }}></div>
                        </div>
                        <span className="text-xs">{item.strideAI}/10</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-gray-400 h-2.5 rounded-full" style={{ width: `${item.traditional * 10}%` }}></div>
                        </div>
                        <span className="text-xs">{item.traditional}/10</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-[#3D7B52] h-2.5 rounded-full" style={{ width: `${item.human * 10}%` }}></div>
                        </div>
                        <span className="text-xs">{item.human}/10</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <br></br>
        

        {/*
        // Case study
        <div className="bg-[#F9F8F1] rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="aspect-square bg-gray-200 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1450901961915-2add9aef7fef?q=80&w=300&auto=format&fit=crop" 
                  alt="Runner Sarah" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
            
              <h3 className="text-2xl font-semibold mb-4 text-stride-gray-dark">Sarah's Success Story</h3>
              <blockquote className="text-lg text-gray-600 italic mb-6">
                "StrideAI helped me achieve what I thought was impossible. Not only did I improve my marathon time by 12 minutes, but I actually trained less than before. The personalized guidance made all the difference."
              </blockquote>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#ECEEF4] p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-[#2E5E3E]">12 min</div>
                  <div className="text-sm text-gray-500">Marathon Improvement</div>
                </div>
                <div className="bg-[#ECEEF4] p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-[#2E5E3E]">15%</div>
                  <div className="text-sm text-gray-500">Less Training Time</div>
                </div>
                <div className="bg-[#ECEEF4] p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-[#2E5E3E]">42%</div>
                  <div className="text-sm text-gray-500">Better Recovery</div>
                </div>
                <div className="bg-[#ECEEF4] p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-[#2E5E3E]">0</div>
                  <div className="text-sm text-gray-500">Injuries</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default WhyStrideAI;
