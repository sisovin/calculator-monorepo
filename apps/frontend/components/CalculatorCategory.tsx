import React from 'react';
import CalculatorCard from './CalculatorCard';

interface CalculatorCategoryProps {
  category: string;
  calculators: { title: string; description: string; onClick: () => void }[];
}

const CalculatorCategory: React.FC<CalculatorCategoryProps> = ({ category, calculators }) => {
  return (
    <div className="calculator-category">
      <h1>{category}</h1>
      <div className="calculator-list">
        {calculators.map((calculator, index) => (
          <CalculatorCard
            key={index}
            title={calculator.title}
            description={calculator.description}
            onClick={calculator.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CalculatorCategory;
