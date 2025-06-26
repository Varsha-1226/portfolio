import { useState } from "react";
import { Link } from "react-router-dom";

import './index.css'

const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="">
      <div className="navbar">
        {/* Logo */}
        <div className="name-box">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be1e89e1b7cd3a3b9e15c952f098e07e69c4d530"
            alt="Logo"
            className="logo-small"
          />
          <h1 className="text-lg lg:text-2xl font-bold font-segoe text-black">
            ANISH KUMAR SINHA
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-content">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="head"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center"
          aria-label="Toggle dark mode"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/10dbadc76f73250292ee1398d796b5d83457290d"
            alt="Dark mode toggle"
            className="w-full h-full"
          />
        </button>

        </div>
    </nav>
  );
};

export default Navigation;
