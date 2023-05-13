import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm'
import { Students } from './students'

@Entity()
export class Classes {
    @PrimaryGeneratedColumn('increment')
    id: number
    
    @Column()
    name: string
    
    @OneToMany(() => Students, (student) => student.classes)
    student: Students[]
}
