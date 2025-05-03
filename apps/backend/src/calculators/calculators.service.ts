import { Injectable } from '@nestjs/common';
import { CalculateDto } from './dto/calculate.dto';

@Injectable()
export class CalculatorsService {
  calculate(calculateDto: CalculateDto): number {
    const { operation, operands } = calculateDto;

    switch (operation) {
      case 'add':
        return operands.reduce((a, b) => a + b, 0);
      case 'subtract':
        return operands.reduce((a, b) => a - b);
      case 'multiply':
        return operands.reduce((a, b) => a * b, 1);
      case 'divide':
        return operands.reduce((a, b) => a / b);
      default:
        throw new Error('Invalid operation');
    }
  }
}
