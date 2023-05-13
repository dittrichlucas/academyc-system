import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class ClassesDto {
    @Field() id: number
    @Field() name: string
}

@ObjectType()
export class CreateClass {
    @Field() name: string
}
