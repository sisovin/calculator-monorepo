import { Controller, Post, Body } from '@nestjs/common';
import { CalculatorsService } from './calculators.service';
import { CalculateDto } from './dto/calculate.dto';

@Controller('calculators')
export class CalculatorsController {
  constructor(private readonly calculatorsService: CalculatorsService) {}

  @Post()
  calculate(@Body() calculateDto: CalculateDto) {
    return this.calculatorsService.calculate(calculateDto);
  }
}
