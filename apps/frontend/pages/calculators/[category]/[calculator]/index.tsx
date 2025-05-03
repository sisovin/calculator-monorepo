import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import CalculatorForm from '../../../../components/CalculatorForm';

const calculators = {
  addition: {
    title: 'Addition',
    description: 'Add two numbers',
    onSubmit: (data: { input1: number; input2: number }) => {
      alert(`Result: ${data.input1 + data.input2}`);
    },
  },
  subtraction: {
    title: 'Subtraction',
    description: 'Subtract two numbers',
    onSubmit: (data: { input1: number; input2: number }) => {
      alert(`Result: ${data.input1 - data.input2}`);
    },
  },
};

const CalculatorPage: React.FC = () => {
  const router = useRouter();
  const { category, calculator } = router.query;

  if (!category || !calculator || typeof category !== 'string' || typeof calculator !== 'string') {
    return <div>Loading...</div>;
  }

  const calculatorConfig = calculators[calculator.toLowerCase()];

  if (!calculatorConfig) {
    return <div>Calculator not found</div>;
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{calculatorConfig.title}</h1>
        <p className="mb-4">{calculatorConfig.description}</p>
        <CalculatorForm onSubmit={calculatorConfig.onSubmit} />
      </main>
      <Footer />
    </div>
  );
};

export default CalculatorPage;
