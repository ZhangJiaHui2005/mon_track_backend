import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryType } from './catetories.schema';
import { CategoryDTO } from './dto/category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Post()
  create(@Body() dto: CategoryDTO) {
    return this.service.create(dto.name, dto.type);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('by-type')
  findByType(@Query('type') type: CategoryType) {
    return this.service.findByType(type);
  }
}
