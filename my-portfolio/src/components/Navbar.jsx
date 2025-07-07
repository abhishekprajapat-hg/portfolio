import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Abhishek.dev</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
          <Link to="/skills" className="hover:text-blue-400">Skills</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
