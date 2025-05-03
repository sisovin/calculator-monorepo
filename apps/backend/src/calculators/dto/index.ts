export class CalculateDto {
  operation: 'add' | 'subtract' | 'multiply' | 'divide';
  operands: number[];
}
