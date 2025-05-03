import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(savedMode === 'true');
      document.documentElement.classList.toggle('dark', savedMode === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="p-2 bg-gray-800 text-white rounded">
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
