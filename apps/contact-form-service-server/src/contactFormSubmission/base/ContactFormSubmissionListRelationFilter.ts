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
import { ContactFormSubmissionWhereInput } from "./ContactFormSubmissionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ContactFormSubmissionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ContactFormSubmissionWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactFormSubmissionWhereInput)
  @IsOptional()
  @Field(() => ContactFormSubmissionWhereInput, {
    nullable: true,
  })
  every?: ContactFormSubmissionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContactFormSubmissionWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactFormSubmissionWhereInput)
  @IsOptional()
  @Field(() => ContactFormSubmissionWhereInput, {
    nullable: true,
  })
  some?: ContactFormSubmissionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContactFormSubmissionWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactFormSubmissionWhereInput)
  @IsOptional()
  @Field(() => ContactFormSubmissionWhereInput, {
    nullable: true,
  })
  none?: ContactFormSubmissionWhereInput;
}
export { ContactFormSubmissionListRelationFilter as ContactFormSubmissionListRelationFilter };
