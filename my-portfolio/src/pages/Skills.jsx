import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
  FaNpm,
  FaCode, // ✅ Replacing VS Code icon
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "NPM", icon: <FaNpm className="text-red-600" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "VS Code", icon: <FaCode className="text-blue-400" /> }, // ✅ updated
];

const Skills = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-blue-500 rounded-xl p-6 w-full h-32 transition-all duration-300 shadow-md hover:shadow-blue-500/20"
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            <p className="text-sm text-gray-200">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
