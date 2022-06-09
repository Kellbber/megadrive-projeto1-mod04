import { User } from 'src/user/entities/user.entity';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';
import { GenreService } from './genre.service';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    findAll(): Promise<Genre[]>;
    findOne(id: string): Promise<Genre>;
    create(user: User, dto: CreateGenreDto): Promise<Genre>;
    update(user: User, id: string, dto: UpdateGenreDto): Promise<Genre>;
    delete(user: User, id: string): void;
}
