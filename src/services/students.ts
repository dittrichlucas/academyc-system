import { Students } from '../models/students'
import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { StudentInput } from '../dto/students'

@Service()
export default class StudentsService {
    @InjectRepository(Students)
    private readonly repository: Repository<Students>
    
    async create(student: StudentInput) {
        return this.repository.save(student)
    }
    
    async findAllStudentsPerClass(classesId: number) {
        return this.repository.find({ where: { classes: { id: classesId } }, relations: ['classes', 'attendances'] })
    }
}
