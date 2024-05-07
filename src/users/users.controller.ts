import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() newUser: CreateUserDto) { //Body --> datos que vienen del cliente 
    return this.usersService.createUser(newUser);
  }

  @Get()
  getUsers(){
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id : number): Promise <User>{
    return this.usersService.getUser(id);

  }

  @Delete(':id')
  deleteUser(@Param  ('id', ParseIntPipe) id: number){
    return this.usersService.deleteUser(id);
  }

  @Patch(':id')
  updateUser(@Param  ('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto){
    return this.usersService.updateUser(id, user);
  }
}
