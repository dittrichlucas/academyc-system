import { 
    Column, 
    Entity, 
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    RelationId 
} from 'typeorm'
import { Attendances } from './attendances'
import { Classes } from './classes'

@Entity()
export class Students {
    @PrimaryGeneratedColumn('increment')
    id: number
    
    @Column()
    name: string
    
    @Column()
    email: string
    
    @Column()
    password: string
    
    @RelationId('classes')
    @Column({ name: 'classesId' })
    classesId: number
    
    @OneToMany(() => Attendances, (attendance) => attendance.student)
    attendances: Attendances[]
    
    @ManyToOne(() => Classes, (classes) => classes.student)
    classes: Classes
}
