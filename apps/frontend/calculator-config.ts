export const calculatorConfig = {
  math: [
    {
      title: 'Addition',
      description: 'Add two numbers',
      inputs: [
        { name: 'input1', type: 'number', label: 'Input 1' },
        { name: 'input2', type: 'number', label: 'Input 2' },
      ],
      calculate: (inputs: { input1: number; input2: number }) => inputs.input1 + inputs.input2,
    },
    {
      title: 'Subtraction',
      description: 'Subtract two numbers',
      inputs: [
        { name: 'input1', type: 'number', label: 'Input 1' },
        { name: 'input2', type: 'number', label: 'Input 2' },
      ],
      calculate: (inputs: { input1: number; input2: number }) => inputs.input1 - inputs.input2,
    },
  ],
  science: [
    {
      title: 'Physics',
      description: 'Physics calculations',
      inputs: [
        { name: 'input1', type: 'number', label: 'Input 1' },
        { name: 'input2', type: 'number', label: 'Input 2' },
      ],
      calculate: (inputs: { input1: number; input2: number }) => inputs.input1 * inputs.input2,
    },
    {
      title: 'Chemistry',
      description: 'Chemistry calculations',
      inputs: [
        { name: 'input1', type: 'number', label: 'Input 1' },
        { name: 'input2', type: 'number', label: 'Input 2' },
      ],
      calculate: (inputs: { input1: number; input2: number }) => inputs.input1 / inputs.input2,
    },
  ],
};
