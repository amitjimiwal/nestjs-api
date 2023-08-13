import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserSchema } from './schema/user-schema';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getAllUsers(): UserSchema[] {
    return this.userService.getAllUser();
  }
  @Get(':email')
  getUSerById(@Param('email') email: string): any {
    return this.userService.getUserbyId(email);
  }
  @Post('new')
  @UsePipes(ValidationPipe) //Pipes are like middleware that adds a validation to the data being sent from client to server and if it doesnt satisfies the property it automnatically generates an error . Without Pipes , the dto and schema will be of no use.
  createUser(@Body() userdetails: CreateUserDTO) {
    return this.userService.createUSer({
      id: Math.random(),
      ...userdetails,
    });
  }
  @Delete(':email')
  deleteUser(@Param('email') email: string) {
    return this.userService.deleteUser(email);
  }
}
