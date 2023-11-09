import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @Get('/signUp')
  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authcredentialsDto: AuthCredentialDto,
  ): Promise<void> {
    return this.authService.signUp(authcredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authcrdentialsDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signin(authcrdentialsDto);
  }
  // @Post('/test')
  // @UseGuards(AuthGuard())
  // test(@Req() req) {
  //   console.log('req', req);
  // }
}
