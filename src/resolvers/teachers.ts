import { Teacher, TeacherInput } from '../dto/teachers'
import TeacherService from '../services/teachers'
import { Arg, Mutation, Resolver } from 'type-graphql'
import { Inject, Service } from 'typedi'

@Service()
@Resolver()
export default class TeachersResolver {
    @Inject(() => TeacherService)
    private readonly service: TeacherService
    
    @Mutation(_ => Teacher)
    async createTeacher(
        @Arg('teacher') teacher: TeacherInput,
    ): Promise<Teacher>{
        return this.service.create(teacher)
    }
}
