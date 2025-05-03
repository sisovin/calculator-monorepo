import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CalculatorCategory from '../../components/CalculatorCategory';

const calculators = [
  {
    category: 'Math',
    calculators: [
      { title: 'Addition', description: 'Add two numbers', onClick: () => {} },
      { title: 'Subtraction', description: 'Subtract two numbers', onClick: () => {} },
    ],
  },
  {
    category: 'Science',
    calculators: [
      { title: 'Physics', description: 'Physics calculations', onClick: () => {} },
      { title: 'Chemistry', description: 'Chemistry calculations', onClick: () => {} },
    ],
  },
];

const CalculatorsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Calculators</h1>
        {calculators.map((category, index) => (
          <CalculatorCategory
            key={index}
            category={category.category}
            calculators={category.calculators}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default CalculatorsPage;
