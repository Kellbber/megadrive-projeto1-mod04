import { User } from '@prisma/client';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileService } from './profile.service';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    create(user: User, createProfileDto: CreateProfileDto): Promise<import(".prisma/client").Profile & {
        games: import(".prisma/client").Game[];
        favoriteGames: import(".prisma/client").FavoriteGames;
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Profile & {
        user: User;
        games: import(".prisma/client").Game[];
        favoriteGames: {
            games: {
                title: string;
            }[];
        };
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").Profile & {
        games: import(".prisma/client").Game[];
        favoriteGames: {
            games: import(".prisma/client").Game[];
            id: string;
        };
    }>;
    update(user: User, id: string, updateProfileDto: UpdateProfileDto): Promise<import(".prisma/client").Profile & {
        games: import(".prisma/client").Game[];
    }>;
    updateFavorite(id: string, UpdateProfileDto: UpdateProfileDto): Promise<import(".prisma/client").FavoriteGames>;
    delete(user: User, id: string): void;
}
