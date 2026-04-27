import { Controller, Get, Query } from '@nestjs/common';
import { FoodsService } from './foods.service';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Get()
  getFoods(
    @Query('category') category?: string,
    @Query('search') search?: string
  ) {
    return this.foodsService.findAll(category, search);
  }
}