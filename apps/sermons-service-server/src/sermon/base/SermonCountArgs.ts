/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SermonWhereInput } from "./SermonWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SermonCountArgs {
  @ApiProperty({
    required: false,
    type: () => SermonWhereInput,
  })
  @Field(() => SermonWhereInput, { nullable: true })
  @Type(() => SermonWhereInput)
  where?: SermonWhereInput;
}

export { SermonCountArgs as SermonCountArgs };
