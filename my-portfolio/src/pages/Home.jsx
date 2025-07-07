import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[90vh] px-4">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white"
      >
        Hi, I'm <span className="text-blue-400">Abhishek Prajapat</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl text-gray-400 max-w-xl"
      >
        A Frontend Developer passionate about creating beautiful, performant, and user-friendly web experiences.
      </motion.p>

      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link to="/projects">
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl transition duration-300">
            View Projects
          </button>
        </Link>
        <Link to="/contact">
          <button className="px-6 py-2 border border-gray-400 hover:border-white rounded-xl transition duration-300">
            Contact Me
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
