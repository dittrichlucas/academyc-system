import { Teachers } from '../models/teachers'
import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { TeacherInput } from '../dto/teachers'
import { InjectRepository } from 'typeorm-typedi-extensions'

@Service()
export default class TeacherService {
    @InjectRepository(Teachers)
    private readonly repository: Repository<Teachers>
    
    async create(teacher: TeacherInput): Promise<Teachers> {
        return this.repository.save({ ...teacher })
    }
}
