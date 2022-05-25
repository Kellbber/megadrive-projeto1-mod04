/*
  Warnings:

  - You are about to drop the column `name` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `Genre` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `coverImageUrl` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameplayYoutubeUrl` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imdbScore` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trailerYoutubeUrl` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Genre` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Genre_genre_key";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "name",
DROP COLUMN "price",
ADD COLUMN     "coverImageUrl" TEXT NOT NULL,
ADD COLUMN     "gameplayYoutubeUrl" TEXT NOT NULL,
ADD COLUMN     "imdbScore" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "trailerYoutubeUrl" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Genre" DROP COLUMN "genre",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");
