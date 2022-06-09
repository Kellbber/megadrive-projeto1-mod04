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
exports.CreateGameDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateGameDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'titulo do game', example: 'Yu-gi-Oh' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGameDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'link imagem do jogo',
        example: 'www.imagemdojogo.com.br',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGameDto.prototype, "coverImageUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'descrição do game',
        example: 'Jogo desenvolvido por N e Y',
    }),
    __metadata("design:type", String)
], CreateGameDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ano do jogo', example: 1996 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateGameDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'nota score do jogo (0 até 5)', example: 2 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateGameDto.prototype, "imdbScore", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, swagger_1.ApiProperty)({
        description: 'trailer do jogo',
        example: 'www.youtube.com.br/trailerdojogo',
    }),
    __metadata("design:type", String)
], CreateGameDto.prototype, "trailerYoutubeUrl", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, swagger_1.ApiProperty)({
        description: 'gameplay do jogo',
        example: 'www.youtube.com.br/gameplaydojogo',
    }),
    __metadata("design:type", String)
], CreateGameDto.prototype, "gameplayYoutubeUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'gênero do jogo(obrigatório)',
        example: 'MMO-RPG',
    }),
    __metadata("design:type", String)
], CreateGameDto.prototype, "genreName", void 0);
exports.CreateGameDto = CreateGameDto;
//# sourceMappingURL=create-game.dto.js.map