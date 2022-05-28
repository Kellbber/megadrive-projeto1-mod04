import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HomepageService {
constructor(private readonly prisma: PrismaService){}
  async findAll(id:string) {
    const profileData = await this.prisma.profile.findUnique({
      where:{
        id: id
        },
        include:{
          games: true,
          user:true
        }

      })
   const gamesData = this.prisma.game.findMany({
     where:{
      
     },
        include:{
          genres: true,
        }
    })
    return {
      profile: profileData,
      gamesPerGenre: gamesData
    }
  }

  }

