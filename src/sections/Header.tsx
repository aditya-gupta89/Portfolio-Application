export const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-3">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          className="nav-item  bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 "
        >
          Home
        </a>
        <a
          href="#project"
          className="nav-item hover:bg-white/70 hover:text-gray-900"
        >
          Projects
        </a>
        <a
          href="#about"
          className="nav-item hover:bg-white/70 hover:text-gray-900"
        >
          About
        </a>
        <a
          href="#footer"
          className="nav-item  hover:bg-white/70 hover:text-gray-900 "
        >
          Contract
        </a>
      </nav>
    </div>
  );
};