import { ObjectType, Field, InputType } from 'type-graphql'
import { CreateClass } from '../dto/classes'
import { AttendanceDto } from '../dto/attendances'

@ObjectType()
export class Student {
    @Field() id: number
    @Field() name: string
    @Field() email: string
    @Field() password: string
    @Field() classesId: number
    @Field(_ => CreateClass, { name: 'classes' }) classes?: CreateClass
    @Field(_ => [AttendanceDto], { name: 'attendances' }) attendances?: AttendanceDto[]
}

@InputType()
export class StudentInput {
    @Field() name: string
    @Field() email: string
    @Field() password: string
    @Field() classesId: number
}
