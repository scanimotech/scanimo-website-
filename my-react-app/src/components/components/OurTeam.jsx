import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const team = [
  { name: "Namya Sarin", image: "src/assets/2.jpg",
    role:"Founder and Product Head",
    about:"Namyaa is a final-year B.Tech student specializing in Artificial Intelligence and Machine Learning, and the founder of Scanimo Technologies. With over 1.5 years of hands-on experience in UI/UX design, product strategy, and startup development, she brings a balance of creativity and execution to every project. Passionate about building intuitive digital experiences, she leads Scanimo's vision with clarity, innovation, and drive.",
    features:["AI/ML Integration","Product Strategy","Team Leadership","UI/UX Design"],
    line:"Fueled by coffee, curiosity, and a never-ending to-do list"
  },
  { name: "Varinder Sarin", image: "src/assets/1.jpg",
    role:"Co-founder & Strategy Head",
    about:"Mr. Varinder Sarin provides strategic support and mentorship to Scanimo. With decades of corporate leadership experience, he helps guide business planning and operational direction in an advisory capacity.",
    features:["Business Strategy","Team Leadership","Product Strategy"],
    line:"Fueled by coffee, curiosity, and a never-ending to-do list"
  },
  { name: "Mike Rodriguez", image: "src/assets/3.jpg",
    role:"Tech Lead",
    about:"Namyaa is a final-year B.Tech student specializing in AI/ML, founder of Scanimo Technologies. Expert in building scalable systems and leading engineering teams.",
    features:["System Architecture","Team Leadership","Full Stack Development"],
    line:"Fueled by coffee, curiosity, and a never-ending to-do list"
  },
  { name: "Emily Davis", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=60&w=3000",
    role:"Marketing Director",
    about:"Namyaa is a final-year B.Tech student specializing in AI/ML, founder of Scanimo Technologies. Creative strategist driving brand growth and customer engagement.",
    features:["Digital Marketing","Brand Strategy","Growth Hacking"],
    line:"Fueled by coffee, curiosity, and a never-ending to-do list"
  },
];

export default function OurTeam() {
  const [expanded, setExpanded] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Namya Sarin',
      role: 'Founder and Product Head',
      image: "src/assets/2.jpg",
      color: 'from-pink-500/80 to-rose-600/80'
    },
    {
      id: 2,
      name: 'Varinder Sarin',
      role: 'Co-founder & Strategy Head',
      image: "src/assets/1.jpg",
      color: 'from-purple-500/80 to-indigo-600/80'
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      role: 'Tech Lead',
      image: 'src/assets/3.jpg',
      color: 'from-blue-500/80 to-cyan-600/80'
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop',
      color: 'from-emerald-500/80 to-teal-600/80'
    }
  ];

  return (
    <div className="h-auto min-h-screen px-4 md:px-8 lg:px-16 xl:px-24">
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

                <div className="flex flex-wrap justify-start gap-2 md:gap-4 my-5">
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
        <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
          <div className="max-w-[1400px] w-full mx-auto">
            <div className="w-full flex flex-col items-center mb-14 gap-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-grey-800 leading-none text-center">
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
              </h2>

              <p className="text-gray-600 text-md lg:text-lg text-center leading-relaxed lg:px-44">
                We're a team of passionate tech enthusiasts and problem-solvers,
                turning ideas into real solutions. From brainstorming sessions to
                coffee-fueled coding, we thrive on collaboration, creativity, and
                curiosity.
              </p>
            </div>
            
            <div className="md:hidden overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 px-4 snap-x snap-mandatory">
                {teamMembers.map((member, idx) => (
                  <div
                    key={member.id}
                    onClick={() => setExpanded(idx)}
                    className="flex-shrink-0 w-80 h-96 rounded-2xl shadow-2xl overflow-hidden relative snap-center cursor-pointer"
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

            <div className="hidden md:flex gap-6 lg:gap-8 justify-center items-stretch">
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
                      ? 'w-72 h-90' 
                      : 'w-40 h-90'}
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