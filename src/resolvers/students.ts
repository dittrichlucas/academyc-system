import { Student, StudentInput } from '../dto/students'
import StudentsService from '../services/students'
import { Resolver, Query, Arg, Mutation } from 'type-graphql'
import { Inject, Service } from 'typedi'

@Service()
@Resolver()
export default class StudentsResolver {
    @Inject(() => StudentsService)
    private readonly service: StudentsService
    
    @Mutation(() => Student)
    async createStudent(
        @Arg('student') student: StudentInput
    ): Promise<Student> {
        return this.service.create(student)
    }
    
    @Query(() => [Student])
    async findStudentsPerClass(
        @Arg('classesId') classesId: number
    ): Promise<Student[]> {
        return this.service.findAllStudentsPerClass(classesId)
    }
    
    @Query()
    status(): string {
        return 'Serviço rodando corretamente'
    }

}
