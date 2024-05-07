import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  public async createUser(user: CreateUserDto) {
    const newUser = this.userRepository.create(user);
    try{
      await this.userRepository.save(newUser)
      return{
        statusCode: 200,
        msg: 'Usuario guardado'
      }
    }
    catch (error) {
      return new BadRequestException(error)
    }
  
  }

  getUsers(){
    return this.userRepository.findAndCount()
  }

  getUser(id: number){
    return this.userRepository.findOneOrFail({
      where: {
        id
      }
    })
  }
  
  deleteUser(id: number) {
    return this.userRepository.delete({id});
  }

  updateUser(id: number, user: UpdateUserDto){
    this.userRepository.update({id}, user)
  }

}
