import { Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';
declare const JwtStrategty_base: new (...args: any[]) => Strategy;
export declare class JwtStrategty extends JwtStrategty_base {
    private readonly prisma;
    constructor(prisma: PrismaService);
    validate(payload: {
        email: string;
    }): Promise<import(".prisma/client").User>;
}
export {};
