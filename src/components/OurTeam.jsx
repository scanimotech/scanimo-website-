import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const team = [
  { name: "Namya Sarin", image: "src/assets/2.jpg",
    role:"Founder and Product Head",
    about:"Namyaa is a final-year B.Tech student specializing in Artificial Intelligence and Machine Learning, and the founder of Scanimo Technologies. With over 1.5 years of hands-on experience in UI/UX design, product strategy, and startup development, she brings a balance of creativity and execution to every project. Passionate about building intuitive digital experiences, she leads Scanimo's vision with clarity, innovation, and drive.",
    features:["AI/ML Integration","Product Strategy","Team Leadership","UI/UX Design"],
    line:"Fueled by coffee, curiosity, and a never-ending to-do list"
  },
  {
  name: "Varinder Sarin",
  image: "src/assets/1.jpg",
  role: "Co-founder & Strategy Head",
  about: "Mr. Varinder Sarin serves as the Co-founder and Strategy Head at Scanimo Technologies, bringing decades of leadership and corporate experience to the team. With a strong background in business development, operations, and organizational management, he plays a crucial role in shaping the company’s long-term vision and growth roadmap. His strategic insights help bridge the gap between innovation and execution, ensuring that every idea is backed by a solid business foundation. Beyond strategy, he mentors the team to maintain clarity, focus, and excellence across all verticals.",
  features: ["Business Strategy", "Corporate Leadership", "Operational Planning", "Mentorship"],
  line: "Guiding innovation with experience, insight, and vision."
},
  { name: "Jagmeet Singh", image: "src/assets/4.png",
    role:"Product Delivery Intern",
    about:"Jagmeet is an organized and forward-thinking Product Delivery Lead who ensures that every project at Scanimo meets its deadlines without compromising quality. With a deep understanding of product lifecycles, agile workflows, and cross-functional collaboration,he bridges the gap between strategy and execution. His leadership keeps the team aligned, efficient, and focused on delivering impactful solutions.",
    features:["Project Management", "Agile Workflow", "Product Roadmapping", "Cross-Team Coordination"],
    line:"Delivering innovation — on time, every time."
  },
  { name: "Sagar Kanth", image: "src/assets/3.jpg",
    role:"Software Development Intern",
    about:"Sagar is a skilled software developer with expertise in full-stack web development and system design. With experience in building responsive, high-performance applications, he focuses on writing clean, efficient code and delivering seamless user experiences. Passionate about emerging technologies, Sagar constantly explores new frameworks and tools to enhance the technical foundation of Scanimo’s products.",
    features:["Full-Stack Development", "API Design", "Database Management", "System Optimization"],
    line:"Building robust code that powers great experiences."
  },
];

export default function OurTeam() {
  const [expanded, setExpanded] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: 'Namya Sarin',
      role: 'Founder and Product Head',
      image: "src/assets/2.jpg",
    },
    {
      id: 2,
      name: 'Varinder Sarin',
      role: 'Co-founder & Strategy Head',
      image: "src/assets/1.jpg",
    },
    {
      id: 3,
      name: 'Jagmeet Singh',
      role: 'Product Delivery Intern',
      image: 'src/assets/4.png',
    },
    {
      id: 4,
      name: 'Sagar Kanth',
      role: 'Software Development Intern',
      image: 'src/assets/3.jpg',
    }
  ];

  return (
    <div className="h-auto min-h-screen px-4 md:px-8 lg:px-16 xl:px-24 bg-white">
      {expanded !== null ? (
        <div className="flex flex-col justify-start lg:justify-end h-auto lg:h-screen w-full max-w-[1600px] mx-auto">
          <div className="flex justify-center mb-2">
            <h2 className="text-3xl md:text-4xl font-medium mt-6 inline-flex flex-col items-center"
            style={{
                    background: "linear-gradient(180deg, #148CFF 0%, #148CFF 20%, #005EC4 60%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}>
              {team[expanded].name}
              <div className="h-[4px] w-full rounded-full mt-1" style={{
                background: "linear-gradient(to right, #FF8F00 0%, #FF8F00 20%, #148CFF 20%, #148CFF 100%)",
              }}></div>
            </h2>
          </div>
          <h3 className="text-center text-xl md:text-2xl mb-5">{team[expanded].role}</h3>
          <motion.div
            className="flex flex-col lg:flex-row justify-center items-center w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-[95%] bg-orange-50 rounded-2xl overflow-hidden">
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <motion.img
                  src={team[expanded].image}
                  alt={team[expanded].name}
                  className="w-full h-[40vh] md:h-[50vh] lg:h-[80vh] object-cover"
                />
              </div>

              <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-between lg:h-[80vh]">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl md:text-3xl font-semibold" style={{
                    background: "linear-gradient(180deg, #148CFF 0%, #148CFF 20%, #005EC4 60%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}>
                    About
                    </h3>
                  <button onClick={() => setExpanded(null)} className="text-gray-500 hover:text-gray-700 transition-colors text-3xl">
                    ×
                  </button>
                </div>
                <p className="text-gray-700 text-justify my-5 md:my-auto text-sm md:text-lg leading-relaxed">
                  {team[expanded].about}
                </p>

                <div className="flex flex-wrap justify-start gap-2 md:gap-4 my-8">
                  {team[expanded].features.map((feature, i) => (
                    <div key={i} className="border-2 border-orange-500 rounded-xl px-3 py-1 text-sm md:text-base hover:bg-orange-500 hover:text-white transition-colors">
                      {feature}
                    </div>
                  ))}
                </div>
                <p className="text-blue-600 italic mt-4 md:my-auto text-sm md:text-base">{team[expanded].line}</p>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="min-h-screen flex justify-center p-4 md:p-8">
          <div className="max-w-[1400px] w-full mx-auto">
            <div className="w-full flex flex-col mb-14 gap-14">
              <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold mx-auto mt-4">
                Meet{" "}
                <span
                  style={{
                    background: "linear-gradient(180deg, #148CFF 0%, #148CFF 20%, #005EC4 60%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  Scanimo's
                </span>{" "}
                Team
                <div className="h-[4px] w-full rounded-full" style={{
                          background: "linear-gradient(to right,#148CFF 0%, #148CFF 60% ,  #FF8F00 60%, #FF8F00 80% ,#148CFF 80%, #148CFF 100%)",
                                    }}
              ></div>
              </h2>
                 
              <p className="text-gray-600 text-md lg:text-lg text-center leading-8 lg:px-44">
                We’re a team of passionate tech enthusiasts and problem-solvers,
                 turning innovative ideas into meaningful real-world solutions.
                  From brainstorming sessions filled with wild concepts to late-night,
                   coffee-fueled coding marathons, we thrive on collaboration,
                    creativity, and curiosity. Every project we take on is a chance
                     to learn, grow, and push the boundaries of what technology can
                      achieve. Together, we build not just products, but experiences
                     that make a difference.
              </p>
            </div>
            
            <div className="lg:hidden">
              <div 
                className="overflow-x-auto scrollbar-hide bg-transparent"
                onScroll={(e) => {
                  const scrollLeft = e.target.scrollLeft;
                  let cardWidth;
                  if (window.innerWidth < 370) {
                    cardWidth = 224 + 16;
                  } else if (window.innerWidth < 460) {
                    cardWidth = 256 + 16;
                  } else {
                    cardWidth = 320 + 16;
                  }
                  const index = Math.round(scrollLeft / cardWidth);
                  setActiveCardIndex(index);
                }}
              >
                <div className="flex gap-4 px-4 snap-x snap-mandatory bg-transparent">
                  {teamMembers.map((member, idx) => (
                    <div
                      key={member.id}
                      onClick={() => setExpanded(idx)}
                      className="flex-shrink-0 w-56 h-64 min-[370px]:w-64 min-[370px]:h-72 min-[460px]:w-80 min-[460px]:h-96 rounded-2xl overflow-hidden relative snap-center cursor-pointer"
                    >
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${member.image})` }}
                      />
                      
                      <div className="absolute inset-0" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                          {member.name}
                        </h3>
                        <p className="text-white/90 font-medium drop-shadow-lg">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center gap-2 mt-6">
                {teamMembers.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const container = document.querySelector('.overflow-x-auto');
                      let cardWidth;
                      if (window.innerWidth < 370) {
                        cardWidth = 224 + 16;
                      } else if (window.innerWidth < 460) {
                        cardWidth = 256 + 16;
                      } else {
                        cardWidth = 320 + 16;
                      }
                      container.scrollTo({
                        left: idx * cardWidth,
                        behavior: 'smooth'
                      });
                      setActiveCardIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeCardIndex 
                        ? 'w-8 bg-blue-600' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="hidden lg:flex gap-6 lg:gap-8 justify-center items-stretch">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  onClick={() => setExpanded(index)}
                  onMouseEnter={() => setHoveredCard(member.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`
                    rounded-4xl shadow-2xl overflow-hidden
                    transition-all duration-500 ease-in-out cursor-pointer
                    relative group
                    ${(index === 0 && hoveredCard === null) || hoveredCard === member.id 
                      ? 'w-72 h-80' 
                      : 'w-40 h-80'}
                    ${hoveredCard && hoveredCard !== member.id ? 'opacity-70' : 'opacity-100'}
                  `}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-none"
                    style={{ 
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: '288px auto',
                      backgroundPosition: 'center'
                    }}
                  />
                  
                  <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                    (index === 0 && hoveredCard === null) || hoveredCard === member.id 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-8'
                  }`}>
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg whitespace-nowrap">
                      {member.name}
                    </h3>
                    <p className="text-white/90 font-medium drop-shadow-lg whitespace-nowrap">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
