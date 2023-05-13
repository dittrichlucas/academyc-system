import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm'
import { Subjects } from './subjects'

@Entity()
export class Teachers {
    @PrimaryGeneratedColumn('increment')
    id: number
    
    @Column()
    name: string
    
    @Column()
    email: string
    
    @Column()
    password: string
    
    @OneToMany(() => Subjects, (subject) => subject.teacher)
    subjects: Subjects[]
}
