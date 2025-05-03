import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import CalculatorCategory from '../components/CalculatorCategory';

const HomePage: React.FC = () => {
  const categories = [
    {
      category: 'Math Calculators',
      calculators: [
        { title: 'Addition', description: 'Simple addition calculator', onClick: () => {} },
        { title: 'Subtraction', description: 'Simple subtraction calculator', onClick: () => {} },
      ],
    },
    {
      category: 'Science Calculators',
      calculators: [
        { title: 'Physics', description: 'Physics calculator', onClick: () => {} },
        { title: 'Chemistry', description: 'Chemistry calculator', onClick: () => {} },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Calculator App</h1>
        <Search />
        {categories.map((category, index) => (
          <CalculatorCategory key={index} category={category.category} calculators={category.calculators} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
