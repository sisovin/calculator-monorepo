import React from 'react';

interface CalculatorCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({ title, description, onClick }) => {
  return (
    <div className="calculator-card" onClick={onClick}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CalculatorCard;
