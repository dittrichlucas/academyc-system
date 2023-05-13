import { ClassesDto, CreateClass } from '../dto/classes'
import ClassesService from '../services/classes'
import {
    Resolver,
    Arg,
    Mutation,
    Query
} from 'type-graphql'
import { Inject, Service } from 'typedi'

@Service()
@Resolver()
export default class ClassesResolver{
    @Inject(() => ClassesService)
    private readonly classesService: ClassesService
    
    @Mutation(_ => CreateClass)
    async createClass(
        @Arg('name') name: string
    ): Promise<ClassesDto> {
        return this.classesService.create(name)
    }
    
    @Query(_ => [ClassesDto])
    async findAllClasses(): Promise<ClassesDto[]> {
        return this.classesService.findAll()
    }
    
    @Query()
    testQuery(): string {
        return 'My query test...'
    }
}
