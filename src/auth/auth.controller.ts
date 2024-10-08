import { AuthService } from "./auth.service";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { SignUpDto } from "./dto/signup.dto";
import { LoginDto } from "./dto/login.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private authSerivce: AuthService) {}

  @Post("/sign-up")
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authSerivce.signUp(signUpDto);
  }
  @Post("/login")
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authSerivce.login(loginDto);
  }
}
