import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum CategoryType {
  Income = 'Income',
  Expense = 'Expense',
}

@Schema({ timestamps: true })
export class Category extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ enum: CategoryType, required: true })
  type: CategoryType;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
