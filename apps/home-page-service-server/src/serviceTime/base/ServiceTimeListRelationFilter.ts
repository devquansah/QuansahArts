/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ServiceTimeWhereInput } from "./ServiceTimeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ServiceTimeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ServiceTimeWhereInput,
  })
  @ValidateNested()
  @Type(() => ServiceTimeWhereInput)
  @IsOptional()
  @Field(() => ServiceTimeWhereInput, {
    nullable: true,
  })
  every?: ServiceTimeWhereInput;

  @ApiProperty({
    required: false,
    type: () => ServiceTimeWhereInput,
  })
  @ValidateNested()
  @Type(() => ServiceTimeWhereInput)
  @IsOptional()
  @Field(() => ServiceTimeWhereInput, {
    nullable: true,
  })
  some?: ServiceTimeWhereInput;

  @ApiProperty({
    required: false,
    type: () => ServiceTimeWhereInput,
  })
  @ValidateNested()
  @Type(() => ServiceTimeWhereInput)
  @IsOptional()
  @Field(() => ServiceTimeWhereInput, {
    nullable: true,
  })
  none?: ServiceTimeWhereInput;
}
export { ServiceTimeListRelationFilter as ServiceTimeListRelationFilter };
