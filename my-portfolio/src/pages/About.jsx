// src/pages/About.jsx

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20" id="about">
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left: Profile Image (Optional) */}
        <motion.div
          className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/Profile.jpg"
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="flex-1 text-gray-300 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed">
            Hey, I’m <span className="text-blue-400 font-semibold">Abhishek Prajapat</span> — a
            self-taught Frontend Developer passionate about creating beautiful and functional user experiences.
          </p>

          <p className="text-lg leading-relaxed">
            I specialize in <span className="text-blue-400">React, Tailwind CSS, and JavaScript</span>, and I love turning
            creative ideas into polished products. I’m also exploring animations, design systems, and building scalable UI.
          </p>

          <p className="text-lg leading-relaxed">
            When I’m not coding, I’m solving DSA problems, learning new tech, or building personal projects to push myself further.
          </p>

          {/* Optional: Mini Skills Section */}
          <div className="flex flex-wrap gap-3 mt-4">
            {["React", "Tailwind", "JavaScript", "Framer Motion", "Git", "Vite"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-blue-700 text-white text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
