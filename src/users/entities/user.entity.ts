import { timestamp } from "rxjs"
import { Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity({name : 'users'})
export class User {
    @PrimaryGeneratedColumn({type : 'int'}) 
    id: number 

    @Column({unique : true, type : 'varchar'})//Lo que soporta una tabla (lo de adentro)
    username: string //Autocompletado
    
    @Column()
    password: string

    @Column({type : "datetime", default: () => 'CURRENT_TIMESTAMP'} )
    calendar: Date
}
