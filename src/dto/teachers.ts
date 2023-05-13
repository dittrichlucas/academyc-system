import { Field, InputType, ObjectType } from 'type-graphql'

@InputType()
export class TeacherInput {
    @Field() name: string
    @Field() email: string
    @Field() password: string
}

@ObjectType()
export class Teacher {
    @Field() id: number
    @Field() name: string
    @Field() email: string
    @Field() password: string
}
