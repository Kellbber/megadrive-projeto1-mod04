import { HomepageService } from './homepage.service';
export declare class HomepageController {
    private readonly homepageService;
    constructor(homepageService: HomepageService);
    findAll(id: string): Promise<{
        games: any[];
        favoriteGames: {
            games: import(".prisma/client").Game[];
        };
    }>;
}
