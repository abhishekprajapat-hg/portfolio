import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      {/* Text & Links */}
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-300 text-lg">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        <div className="flex justify-center gap-6 text-2xl text-white">
          <motion.a
            href="abhi03prajapat@gmail.com"
            className="hover:text-blue-500"
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            href="https://github.com/abhishekprajapat-hg"
            target="_blank"
            className="hover:text-blue-500"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/abhishek-prajapat-953689269/"
            target="_blank"
            className="hover:text-blue-500"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>

        {/* Resume Button */}
        <motion.a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl mt-6 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload />
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;
