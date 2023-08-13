import { Injectable } from '@nestjs/common';
import { UserSchema } from './schema/user-schema';

@Injectable()
export class UsersService {
  private users: UserSchema[] = [];

  createUSer(user: UserSchema) {
    const { email } = user;
    const validateemail = this.users.find((user) => user.email === email);
    if (validateemail) {
      return {
        sucess: false,
        message: 'This email is already associated with a user.',
      };
    }
    this.users.push(user);
    return {
      sucess: true,
      message: 'Successfully added a User',
    };
  }
  getAllUser(): UserSchema[] {
    return this.users;
  }
  getUserbyId(email: string) {
    const user = this.users.find((user) => user.email === email);
    if (user) {
      return {
        success: true,
        ...user,
      };
    }
    return {
      success: false,
      message: 'User not found',
    };
  }

  deleteUser(email: string) {
    const user = this.users.find((user) => user.email === email);
    if (!user) {
      return {
        success: false,
        message: 'User doesnt exist',
      };
    }
    const remainingusers = this.users.filter((user) => user.email !== email);
    this.users = remainingusers;
    return {
      success: true,
      message: 'User deleted',
    };
  }
}
