import { Classes } from '../models/classes'
import { Service } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'

@Service()
export default class ClassesService {
    @InjectRepository(Classes)
    private readonly repository: Repository<Classes>
    
    async create(name: string) {
        return this.repository.save({ name })
    }
    
    async findAll() {
        return this.repository.find()
    }
}

