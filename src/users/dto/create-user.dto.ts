import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Name cant be empty' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email cant be empty' })
  email: string;
}
