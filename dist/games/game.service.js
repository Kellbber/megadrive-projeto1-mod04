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
exports.GameService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GameService = class GameService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createGameDto, user) {
        if (user.isAdmin) {
            const data = {
                title: createGameDto.title,
                description: createGameDto.description,
                coverImageUrl: createGameDto.coverImageUrl,
                year: createGameDto.year,
                imdbScore: createGameDto.imdbScore,
                trailerYoutubeUrl: createGameDto.trailerYoutubeUrl,
                gameplayYoutubeUrl: createGameDto.gameplayYoutubeUrl,
                genres: {
                    connect: {
                        name: createGameDto.genreName,
                    },
                },
            };
            return await this.prisma.game
                .create({
                data,
                include: {
                    genres: true,
                },
            })
                .catch(this.handleError);
        }
        else {
            throw new common_1.UnauthorizedException('Usuário não tem permissão. Caso isso esteja errado, contate o ADMIN!');
        }
    }
    findAll() {
        return this.prisma.game.findMany({
            include: {
                genres: true,
            },
        });
    }
    async findById(id) {
        const record = await this.prisma.game.findUnique({
            where: {
                id: id,
            },
            include: {
                genres: true,
            },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Registro com o ID '${id}' não encontrado`);
        }
        return record;
    }
    async update(id, dto, user) {
        if (user.isAdmin) {
            const gameAtual = await this.findById(id);
            const data = {
                title: dto.title,
                description: dto.description,
                coverImageUrl: dto.coverImageUrl,
                year: dto.year,
                imdbScore: dto.imdbScore,
                trailerYoutubeUrl: dto.trailerYoutubeUrl,
                gameplayYoutubeUrl: dto.gameplayYoutubeUrl,
                genres: {
                    disconnect: {
                        name: gameAtual.genres[0].name,
                    },
                    connect: {
                        name: dto.genreName,
                    },
                },
            };
            return await this.prisma.game
                .update({
                where: { id },
                data,
                include: {
                    genres: true,
                },
            })
                .catch(this.handleError);
        }
        else {
            throw new common_1.UnauthorizedException('Usuário não tem permissão. Caso isso esteja errado, contate o ADMIN!');
        }
    }
    async delete(id, user) {
        if (user.isAdmin) {
            await this.findById(id);
            await this.prisma.game.delete({ where: { id } });
        }
        else {
            throw new common_1.UnauthorizedException('Usuário não tem permissão. Caso isso esteja errado, contate o ADMIN!');
        }
    }
    handleError(error) {
        var _a, _b;
        const errorLines = (_a = error.message) === null || _a === void 0 ? void 0 : _a.split('\n');
        const lastErrorLine = (_b = errorLines[errorLines.length - 1]) === null || _b === void 0 ? void 0 : _b.trim();
        throw new common_1.UnprocessableEntityException(lastErrorLine || `Algum erro inesperado ocorreu`);
    }
};
GameService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map