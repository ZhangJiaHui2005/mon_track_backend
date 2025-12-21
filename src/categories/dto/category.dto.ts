import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { CategoryType } from "../catetories.schema";

export class CategoryDTO {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsEnum(CategoryType)
    type: CategoryType
}