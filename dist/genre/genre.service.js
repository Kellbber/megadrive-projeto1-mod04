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
exports.GenreService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GenreService = class GenreService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.genre.findMany();
    }
    async findById(name) {
        const record = await this.prisma.genre.findUnique({
            where: {
                name,
            },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Registro com o nome '${name}' não encontrado`);
        }
        return record;
    }
    async findOne(name) {
        return this.findById(name);
    }
    async create(dto, user) {
        if (user.isAdmin) {
            const genre = Object.assign({}, dto);
            return await this.prisma.genre
                .create({
                data: genre,
            })
                .catch(this.handleError);
        }
        else {
            throw new common_1.UnauthorizedException('Usuário não tem permissão. Caso isso esteja errado, contate o ADMIN!');
        }
    }
    async update(name, dto, user) {
        if (user.isAdmin) {
            await this.findById(name);
            const data = Object.assign({}, dto);
            return this.prisma.genre
                .update({
                where: { name },
                data,
            })
                .catch(this.handleError);
        }
        else {
            throw new common_1.UnauthorizedException('Usuário não tem permissão. Caso isso esteja errado, contate o ADMIN!');
        }
        ;
    }
    async delete(name, user) {
        if (user.isAdmin) {
            await this.findById(name);
            await this.prisma.genre.delete({ where: { name } });
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
GenreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GenreService);
exports.GenreService = GenreService;
//# sourceMappingURL=genre.service.js.map