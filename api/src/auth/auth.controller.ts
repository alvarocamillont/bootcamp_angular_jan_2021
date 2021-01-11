import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthDto } from './dto/auth.dto';
import { JwtDto } from './dto/jwt.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiResponse({ status: 201, type: JwtDto })
  @ApiBody({ type: AuthDto })
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
