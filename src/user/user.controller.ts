import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'list_users' })
  listUsers() {
    console.log('Recibí la solicitud para obtener la lista de usuarios');
    return [
      { id: '1', name: 'Juan Pérez', email: 'juan@example.com' },
      { id: '2', name: 'Ana Gómez', email: 'ana@example.com' },
    ];
  }
}
