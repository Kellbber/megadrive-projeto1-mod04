import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/user/entities/user.entity';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GameService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createGameDto: CreateGameDto, user: User): Promise<import(".prisma/client").Game & {
        genres: import(".prisma/client").Genre[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Game & {
        genres: import(".prisma/client").Genre[];
    })[]>;
    findById(id: string): Promise<import(".prisma/client").Game & {
        genres: import(".prisma/client").Genre[];
    }>;
    update(id: string, dto: UpdateGameDto, user: User): Promise<import(".prisma/client").Game & {
        genres: import(".prisma/client").Genre[];
    }>;
    delete(id: string, user: User): Promise<void>;
    handleError(error: Error): undefined;
}
