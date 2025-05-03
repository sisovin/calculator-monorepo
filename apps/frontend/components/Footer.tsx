import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Calculator App. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
