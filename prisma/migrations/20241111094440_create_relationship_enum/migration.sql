/*
  Warnings:

  - The `contactRelationship` column on the `employeeContact` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `meal` on the `employeeData` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "employeeRelationship" AS ENUM ('PAI', 'MAE', 'FILHO', 'FILHA', 'ESPOSO', 'ESPOSA', 'IRMAO', 'IRMA', 'OUTRO');

-- AlterTable
ALTER TABLE "employeeContact" DROP COLUMN "contactRelationship",
ADD COLUMN     "contactRelationship" "employeeRelationship";

-- AlterTable
ALTER TABLE "employeeData" DROP COLUMN "meal",
ALTER COLUMN "age" SET DATA TYPE TEXT;
