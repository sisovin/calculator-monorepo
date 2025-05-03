import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Input, Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from 'shadcn-ui';

const calculatorSchema = z.object({
  input1: z.number().min(1, 'Input 1 is required'),
  input2: z.number().min(1, 'Input 2 is required'),
});

interface CalculatorFormProps {
  onSubmit: (data: { input1: number; input2: number }) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(calculatorSchema),
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <FormItem>
          <FormLabel>Input 1</FormLabel>
          <FormControl>
            <Controller
              name="input1"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </FormControl>
          {errors.input1 && <FormMessage>{errors.input1.message}</FormMessage>}
        </FormItem>
      </FormField>
      <FormField>
        <FormItem>
          <FormLabel>Input 2</FormLabel>
          <FormControl>
            <Controller
              name="input2"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </FormControl>
          {errors.input2 && <FormMessage>{errors.input2.message}</FormMessage>}
        </FormItem>
      </FormField>
      <Button type="submit">Calculate</Button>
    </Form>
  );
};

export default CalculatorForm;
