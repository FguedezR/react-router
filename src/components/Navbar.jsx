import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white p-4 shadow-lg">
      <ul className="flex gap-6 justify-center">
        <li>
          <Link
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold"
                : "hover:text-blue-300 transition"
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold"
                : "hover:text-blue-300 transition"
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold"
                : "hover:text-blue-300 transition"
            }
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold"
                : "hover:text-blue-300 transition"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
