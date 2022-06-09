import { Game } from 'src/games/entities/game.entity';
import { User } from 'src/user/entities/user.entity';
export declare class Profile {
    id?: string;
    title: string;
    imageUrl: string;
    user?: User;
    games?: Game[];
    favoriteGames?: Game[];
}
