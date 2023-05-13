import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    RelationId
} from 'typeorm'
import { Teachers } from './teachers'

@Entity()
export class Subjects {
    @PrimaryGeneratedColumn('increment')
    id: number
    
    @Column()
    name: string
    
    @RelationId('teacher')
    @Column({ name: 'teacherId' })
    teacherId: number
    
    @ManyToOne(() => Teachers, (teacher) => teacher.subjects)
    teacher: Teachers
}
