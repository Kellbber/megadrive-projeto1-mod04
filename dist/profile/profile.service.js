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
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProfileService = class ProfileService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.profile.findMany({
            include: {
                user: true,
                games: true,
                favoriteGames: {
                    select: {
                        games: {
                            select: {
                                title: true
                            }
                        }
                    }
                }
            },
        });
    }
    async findById(id) {
        const record = await this.prisma.profile.findUnique({
            where: {
                id: id,
            },
            include: {
                games: true,
                favoriteGames: {
                    select: {
                        games: true,
                        id: true
                    }
                }
            },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Registro com o ID '${id}' não encontrado`);
        }
        return record;
    }
    async findOne(id) {
        return this.findById(id);
    }
    async create(userId, dto) {
        if (dto.gameId) {
            return await this.prisma.profile
                .create({
                data: {
                    title: dto.title,
                    imageUrl: dto.imageUrl,
                    userId: userId,
                    games: {
                        connect: {
                            id: dto.gameId,
                        },
                    },
                },
                include: {
                    games: true,
                    favoriteGames: true,
                }
            })
                .catch(this.handleError);
        }
        else {
            return await this.prisma.profile
                .create({
                data: {
                    title: dto.title,
                    imageUrl: dto.imageUrl,
                    userId: userId,
                },
                include: { games: true, favoriteGames: true },
            })
                .catch(this.handleError);
        }
    }
    async addOrRemoveFavoriteGame(profileId, gameId) {
        const user = await this.findById(profileId);
        let favoritedGame = false;
        if (user.favoriteGames != null) {
            user.favoriteGames.games.map((game) => {
                if (gameId === game.id) {
                    favoritedGame = true;
                }
            });
        }
        else {
            return this.prisma.favoriteGames.create({
                data: {
                    profile: {
                        connect: {
                            id: profileId
                        },
                    },
                    games: {
                        connect: {
                            id: gameId
                        }
                    }
                }
            });
        }
        if (favoritedGame) {
            return await this.prisma.favoriteGames.update({
                where: {
                    id: user.favoriteGames.id,
                },
                data: {
                    games: {
                        disconnect: {
                            id: gameId,
                        }
                    }
                }
            });
        }
        else {
            return await this.prisma.favoriteGames.update({
                where: {
                    id: user.favoriteGames.id,
                },
                data: {
                    games: {
                        connect: {
                            id: gameId,
                        }
                    }
                }
            });
        }
    }
    async update(userId, id, dto) {
        const user = await this.findById(id);
        if (dto.gameId) {
            let GameExist = false;
            user.games.map((game) => {
                if (game.id == dto.gameId) {
                    GameExist = true;
                }
            });
            if (GameExist) {
                return this.prisma.profile
                    .update({
                    where: { id: id },
                    data: {
                        title: dto.title,
                        imageUrl: dto.imageUrl,
                        userId: userId,
                        games: {
                            disconnect: {
                                id: dto.gameId,
                            },
                        },
                    },
                    include: { games: true },
                })
                    .catch(this.handleError);
            }
            else {
                return this.prisma.profile
                    .update({
                    where: { id: id },
                    data: {
                        title: dto.title,
                        imageUrl: dto.imageUrl,
                        userId: userId,
                        games: {
                            connect: {
                                id: dto.gameId,
                            },
                        },
                    },
                    include: { games: true },
                })
                    .catch(this.handleError);
            }
        }
        else {
            return this.prisma.profile
                .update({
                where: { id: id },
                data: {
                    title: dto.title,
                    imageUrl: dto.imageUrl,
                    userId: userId,
                },
                include: { games: true },
            })
                .catch(this.handleError);
        }
    }
    async delete(userId, id) {
        const profile = await this.findById(id);
        await this.prisma.favoriteGames.delete({
            where: {
                id: profile.favoriteGames.id
            }
        });
        await this.prisma.profile.delete({ where: { id } });
    }
    handleError(error) {
        var _a, _b;
        console.error(error);
        const errorLines = (_a = error.message) === null || _a === void 0 ? void 0 : _a.split('\n');
        const lastErrorLine = (_b = errorLines[errorLines.length - 1]) === null || _b === void 0 ? void 0 : _b.trim();
        throw new common_1.UnprocessableEntityException(lastErrorLine || `Algum erro inesperado ocorreu`);
    }
};
ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map