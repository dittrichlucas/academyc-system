import { Subjects } from '../models/subjects'
import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'

@Service()
export default class SubjectsService {
    @InjectRepository(Subjects)
    private readonly repository: Repository<Subjects>
    
    async create(name: string, teacherId: number) {
        return this.repository.save({ teacherId, name })
    }
    
    async findByTeacherId(teacherId: number) {
        return this.repository.find({ where: { teacher: { id: teacherId } }, relations: ['teacher'] })
    }
}
