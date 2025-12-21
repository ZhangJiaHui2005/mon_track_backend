import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryType } from './catetories.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<Category>,
  ) {}

  async findByName(name: string, type: CategoryType) {
    return await this.categoryModel.findOne({
      name: name.trim(),
      type,
    });
  }

  async create(name: string, type: CategoryType) {
    const existed = await this.findByName(name, type);

    if (existed) {
      throw new BadRequestException(
        `Category "${name}" already exists for ${type}`,
      );
    }

    return this.categoryModel.create({ name: name.trim(), type });
  }

  findAll() {
    return this.categoryModel.find();
  }

  findByType(type: CategoryType) {
    return this.categoryModel.find({ type });
  }
}
