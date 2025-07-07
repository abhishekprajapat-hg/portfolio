import blogPosts from "../data/blogPosts";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Blog</h2>

      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-gray-900 border border-gray-700 p-6 rounded-xl hover:border-blue-500 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-2xl text-blue-400 font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{post.date}</p>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <button className="text-blue-500 hover:underline">Read More →</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
