import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Profile & {
        user: import(".prisma/client").User;
        games: import(".prisma/client").Game[];
        favoriteGames: {
            games: {
                title: string;
            }[];
        };
    })[]>;
    findById(id: string): Promise<import(".prisma/client").Profile & {
        games: import(".prisma/client").Game[];
        favoriteGames: {
            games: import(".prisma/client").Game[];
            id: string;
        };
    }>;
    findOne(id: string): Promise<import(".prisma/client").Profile & {
        games: import(".prisma/client").Game[];
        favoriteGames: {
            games: import(".prisma/client").Game[];
            id: string;
        };
    }>;
    create(userId: string, dto: CreateProfileDto): Promise<import(".prisma/client").Profile & {
        games: import(".prisma/client").Game[];
        favoriteGames: import(".prisma/client").FavoriteGames;
    }>;
    addOrRemoveFavoriteGame(profileId: string, gameId: string): Promise<import(".prisma/client").FavoriteGames>;
    update(userId: string, id: string, dto: UpdateProfileDto): Promise<import(".prisma/client").Profile & {
        games: import(".prisma/client").Game[];
    }>;
    delete(userId: string, id: string): Promise<void>;
    handleError(error: Error): undefined;
}
