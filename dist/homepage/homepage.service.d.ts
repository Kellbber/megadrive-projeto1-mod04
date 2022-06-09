import { PrismaService } from 'src/prisma/prisma.service';
export declare class HomepageService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(id: string): Promise<{
        games: any[];
        favoriteGames: {
            games: import(".prisma/client").Game[];
        };
    }>;
}
