import { Field, ObjectType, ID, Int } from "@nestjs/graphql";

@ObjectType()
export class StudentType {
    @Field(()=> ID)
    id:string

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date

    @Field()
    name: Date

    @Field(() => Int, {nullable: true})
    age?: Date
}

