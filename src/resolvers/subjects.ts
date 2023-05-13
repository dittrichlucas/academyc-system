import { Subject, SubjectTeacher } from '../dto/subjects'
import SubjectsService from '../services/subjects'
import {
    Arg,
    Mutation,
    Query,
    Resolver
} from 'type-graphql'
import { Inject, Service } from 'typedi'

@Service()
@Resolver()
export default class SubjectsResolver {
    @Inject(() => SubjectsService)
    private readonly service: SubjectsService
    
    @Mutation(_ => Subject)
    async createSubject(
        @Arg('name') name: string,
        @Arg('teacherId') teacherId: number
    ): Promise<Subject> {
        return this.service.create(name, teacherId)
    }
    
    @Query(_ => [SubjectTeacher])
    async findByTeacher(
        @Arg('teacherId') teacherId: number
    ): Promise<SubjectTeacher[]> {
        return this.service.findByTeacherId(teacherId)
    }
}
