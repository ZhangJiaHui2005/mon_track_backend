import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { CategoryType } from 'src/categories/catetories.schema';

export class TransactionDto {
  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  note?: string;

  @IsNotEmpty()
  @IsString()
  categoryId: string;

  @IsEnum(CategoryType)
  type: CategoryType;
}
