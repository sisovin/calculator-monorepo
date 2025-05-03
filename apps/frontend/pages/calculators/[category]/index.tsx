import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CalculatorCard from '../../../components/CalculatorCard';

const calculators = {
  math: [
    { title: 'Addition', description: 'Add two numbers', onClick: () => {} },
    { title: 'Subtraction', description: 'Subtract two numbers', onClick: () => {} },
  ],
  science: [
    { title: 'Physics', description: 'Physics calculations', onClick: () => {} },
    { title: 'Chemistry', description: 'Chemistry calculations', onClick: () => {} },
  ],
};

const CategoryPage: React.FC = () => {
  const router = useRouter();
  const { category } = router.query;

  if (!category || typeof category !== 'string') {
    return <div>Loading...</div>;
  }

  const categoryCalculators = calculators[category.toLowerCase()];

  if (!categoryCalculators) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{category} Calculators</h1>
        <div className="calculator-list">
          {categoryCalculators.map((calculator, index) => (
            <CalculatorCard
              key={index}
              title={calculator.title}
              description={calculator.description}
              onClick={calculator.onClick}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
