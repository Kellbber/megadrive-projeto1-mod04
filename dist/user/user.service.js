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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
        this.userSelect = {
            id: true,
            name: true,
            email: true,
            password: false,
            cpf: false,
            isAdmin: false,
            createdAt: true,
            updatedAt: true
        };
    }
    findAll(user) {
        if (user.isAdmin) {
            return this.prisma.user.findMany({
                select: this.userSelect
            });
        }
        else {
            throw new common_1.UnauthorizedException('Usuário não tem permissão. Caso isso esteja errado, contate o ADMIN!');
        }
        ;
    }
    async findById(id) {
        const record = await this.prisma.user.findUnique({
            where: { id },
            select: this.userSelect,
        });
        if (!record) {
            throw new common_1.NotFoundException(`Registro com o ID '${id}' não encontrado`);
        }
        return record;
    }
    async findOne(id) {
        return this.findById(id);
    }
    async create(dto) {
        if (!cpf_cnpj_validator_1.cpf.isValid(dto.cpf)) {
            throw new common_1.BadRequestException('O cpf não é válido');
        }
        if (dto.password != dto.confirmPassword) {
            throw new common_1.BadRequestException('As senhas informadas são diferentes');
        }
        delete dto.confirmPassword;
        const user = Object.assign(Object.assign({}, dto), { password: await bcrypt.hash(dto.password, 10), cpf: cpf_cnpj_validator_1.cpf.format(dto.cpf) });
        return this.prisma.user
            .create({
            data: user,
            select: this.userSelect
        })
            .catch(this.handleError);
    }
    async update(id, dto) {
        await this.findById(id);
        if (dto.cpf) {
            if (!cpf_cnpj_validator_1.cpf.isValid(dto.cpf)) {
                throw new common_1.BadRequestException('O cpf não é valido');
            }
        }
        if (dto.password) {
            if (dto.password != dto.confirmPassword) {
                throw new common_1.BadRequestException('As senhas informadas são diferentes');
            }
        }
        delete dto.confirmPassword;
        const data = Object.assign({}, dto);
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }
        if (data.cpf) {
            data.cpf = cpf_cnpj_validator_1.cpf.format(data.cpf);
        }
        return this.prisma.user
            .update({
            where: { id },
            data,
            select: this.userSelect
        })
            .catch(this.handleError);
    }
    async delete(id) {
        await this.findById(id);
        await this.prisma.user.delete({ where: { id: id } });
    }
    handleError(error) {
        var _a, _b;
        const errorLines = (_a = error.message) === null || _a === void 0 ? void 0 : _a.split('\n');
        const lastErrorLine = (_b = errorLines[errorLines.length - 1]) === null || _b === void 0 ? void 0 : _b.trim();
        if (!lastErrorLine) {
            console.error(error);
        }
        throw new common_1.UnprocessableEntityException(lastErrorLine || `Algum erro inesperado ocorreu`);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map