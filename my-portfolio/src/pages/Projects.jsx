import ProjectCard from "../components/ProjectCard";
import ShopNest from "../assets/ShopNest.png"; // Example image

const projectData = [
  {
    title: "ShopNest",
    image: ShopNest,
    tech: "React, Tailwind, Context API",
    description: "An e-commerce site with search, cart, login, and order features.",
    live: "https://shopnest-iota.vercel.app/",
    code: "https://github.com/abhishekprajapat-hg/Shopnest",
  },
  {
    title: "Portfolio Website",
    image: "https://via.placeholder.com/400x250",
    tech: "React, Tailwind, Framer Motion",
    description: "My personal portfolio to showcase projects and skills with smooth animations.",
    live: "https://your-portfolio.vercel.app",
    code: "https://github.com/yourusername/portfolio",
  },
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-10 text-center text-white">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
