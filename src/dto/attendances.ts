import { Student } from '../dto/students'
import { Field, InputType, ObjectType } from 'type-graphql'

@ObjectType()
export class Attendance {
    @Field() id: number
    @Field() date: Date
    @Field() type: boolean
    @Field() studentId: number
}

@ObjectType()
export class AttendanceStudent {
    @Field() id: number
    @Field() date: Date
    @Field() type: boolean
    @Field(_ => Student, { name: 'student' }) student: Student
}

@ObjectType()
export class AttendanceDto {
    @Field() id: number
    @Field() date: Date
    @Field() type: boolean
}

@InputType()
export class AttendanceInput {
    @Field() date: Date
    @Field() type: boolean
    @Field() studentId: number
}
