import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from './user.decorator';
import { UserDetailDto } from './dto/user-detail.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  me(@User() user: UserDetailDto): UserDetailDto {
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('active-users')
  getActiveUsers() {
    return this.userService.getActiveUsers();
  }
}
