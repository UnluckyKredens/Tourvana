import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class JwtGuard implements CanActivate {
constructor(private readonly auth: AuthService) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const req = ctx.switchToHttp().getRequest<Request>();

    const authz = req.headers['authorization'];
    if (!authz?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing Bearer token');
    }

    const token = authz.slice(7).trim(); 
    if (!token) {
      throw new UnauthorizedException('Empty token');
    }

    try {
      const user = await this.auth.validateBearer(token);
      (req as any).user = user;
      return true;
    } catch (e: any) {
      throw new UnauthorizedException(e?.message ?? 'Invalid token');
    }
  }
}