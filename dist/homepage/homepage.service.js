"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomepageService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let HomepageService = class HomepageService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(id) {
        const profileData = await this.prisma.profile.findUnique({
            where: {
                id: id,
            },
            select: {
                title: true,
                imageUrl: true,
                games: {
                    include: {
                        genres: true,
                    },
                },
                favoriteGames: {
                    select: {
                        games: true
                    }
                }
            }
        });
        const listGames = profileData.games;
        const favoriteGames = profileData.favoriteGames;
        const orderedGames = [];
        const allGenres = await this.prisma.genre.findMany();
        allGenres.map((genre) => {
            const gamesperGenre = [];
            listGames.map((game) => {
                if (game.genres[0].name == genre.name) {
                    gamesperGenre.push(game.title);
                }
            });
            const genderObj = {
                genre: genre.name,
                title: gamesperGenre,
            };
            if (gamesperGenre.length !== 0) {
                orderedGames.push(genderObj);
            }
        });
        return {
            games: orderedGames,
            favoriteGames: favoriteGames,
        };
    }
};
HomepageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HomepageService);
exports.HomepageService = HomepageService;
//# sourceMappingURL=homepage.service.js.map