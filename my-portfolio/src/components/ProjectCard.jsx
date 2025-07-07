const ProjectCard = ({ title, image, tech, description, live, code }) => {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{tech}</p>
        <p className="text-gray-300 mt-2 text-sm">{description}</p>
        <div className="flex gap-4 mt-4">
          <a
            href={live}
            target="_blank"
            className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm"
          >
            Live Demo
          </a>
          <a
            href={code}
            target="_blank"
            className="px-4 py-1 border border-gray-400 hover:border-white text-white rounded-xl text-sm"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
