import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  create(createUserDto: CreateUserDto) {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return null;
    }
    const updatedUser = { ...this.users[userIndex], ...updateUserDto };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  remove(id: number) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return null;
    }
    const removedUser = this.users.splice(userIndex, 1);
    return removedUser[0];
  }
}
