import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Subject {
    @Field() id: number
    @Field() name: string
    @Field() teacherId: number
}

@ObjectType()
export class SubjectTeacher {
    @Field() name: string
}
