import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'list_users' })
  async listUsers() {
    return 'Recibí la solicitud para obtener la lista de usuarios';
  }
}
