import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/user/entities/user.entity';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';
export declare class GenreService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Genre[]>;
    findById(name: string): Promise<Genre>;
    findOne(name: string): Promise<Genre>;
    create(dto: CreateGenreDto, user: User): Promise<Genre>;
    update(name: string, dto: UpdateGenreDto, user: User): Promise<Genre>;
    delete(name: string, user: User): Promise<void>;
    handleError(error: Error): undefined;
}
