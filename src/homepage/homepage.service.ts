import { Injectable } from '@nestjs/common';
import { Genre } from 'src/genre/entities/genre.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HomepageService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(id: string) {
    const profileData = await this.prisma.profile.findUnique({
      where: {
        id: id,
      },
      include: {
        games: true,
        user: true,
      },
    });
    const orderedGames = [];
    const allGenres = await this.prisma.genre.findMany();
    const allGames = await this.prisma.game.findMany({
      include: { genres: true },
    });
    allGenres.map((genre) => {
      const gamesperGenre = [];
      allGames.map((game) => {
        if (game.genres[0].name == genre.name) {
          gamesperGenre.push(game.title);
        }
      });
      const genderObj = {
        name: genre.name,
        games: gamesperGenre,
      };
      if (gamesperGenre.length !== 0) {
        orderedGames.push(genderObj);
      }
    });
    return {
      profile: profileData,
      gamesPerGenre: orderedGames,
    };
  }
}
