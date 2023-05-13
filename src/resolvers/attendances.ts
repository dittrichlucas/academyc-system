import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Inject, Service } from 'typedi'
import AttendancesService from '../services/attendances'
import { Attendance, AttendanceInput, AttendanceStudent } from '../dto/attendances'

@Service()
@Resolver()
export default class AttendancesResolver {
    @Inject(() => AttendancesService)
    private readonly service: AttendancesService
    
    @Mutation(_ => Attendance)
    async createAttendance(
        @Arg('attendance') attendance: AttendanceInput
    ): Promise<Attendance> {
        return this.service.create(attendance)
    }
    
    @Mutation(_ => Attendance)
    async createAttendancePerClass(
        @Arg('attendance') attendance: AttendanceInput
    ): Promise<Attendance> {
        return this.service.create(attendance)
    }
    
    @Query(_ => [AttendanceStudent])
    async findAttendancesByStudentId(
        @Arg('studentId') studentId: number
    ): Promise<AttendanceStudent[]> {
        return this.service.findAttendanceByStudentId(studentId)
    }
}
