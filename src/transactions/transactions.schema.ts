import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { CategoryType } from "src/categories/catetories.schema";

@Schema({timestamps: true})
export class Transaction extends Document {
    @Prop({required: true})
    amount: number

    @Prop()
    note: string

    @Prop({type: Types.ObjectId, ref: "Category", required: true})
    categoryId: string

    @Prop({enum: CategoryType, required: true})
    type: CategoryType
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction)