import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    RelationId 
} from 'typeorm'
import { Students } from './students'

@Entity()
export class Attendances {
    @PrimaryGeneratedColumn('increment')
    id: number
    
    @Column()
    date: Date
    
    @Column()
    type: boolean
    
    @RelationId('student')
    @Column({ name: 'studentId' })
    studentId: number
    
    @ManyToOne(() => Students, (student) => student.attendances)
    student: Students
}
