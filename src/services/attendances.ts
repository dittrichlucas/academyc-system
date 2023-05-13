import { AttendanceInput } from '../dto/attendances'
import { Attendances } from '../models/attendances'
import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'

@Service()
export default class AttendancesService {
    @InjectRepository(Attendances)
    private readonly repository: Repository<Attendances>
    
    async create(attendance: AttendanceInput) {
        return this.repository.save(attendance)
    }
    
    async findAttendanceByStudentId(studentId: number) {
        return this.repository.find({ where: { student: { id: studentId } }, relations: ['student']  })
    }
}
