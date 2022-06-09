import { User } from "src/user/entities/user.entity";
import { CreateGameDto } from "./dto/create-game.dto";
import { UpdateGameDto } from "./dto/update-game.dto";
import { Game } from "./entities/game.entity";
import { GameService } from "./game.service";
export declare class GameController {
    private readonly gameService;
    constructor(gameService: GameService);
    findAll(): Promise<Game[]>;
    findOne(id: string): Promise<Game>;
    create(user: User, dto: CreateGameDto): Promise<Game>;
    update(user: User, id: string, dto: UpdateGameDto): Promise<Game>;
    delete(user: User, id: string): Promise<void>;
}
