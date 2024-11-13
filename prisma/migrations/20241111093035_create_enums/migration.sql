/*
Warnings:
- You are about to drop the column `employeeNeighborhood` on the `employeeData` table. All the data in the column will be lost.
- The `gender` column on the `employeeData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
- The `maritalStatus` column on the `employeeData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
- The `graduation` column on the `employeeData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
*/
-- CreateEnum
CREATE TYPE "employeeGender" AS ENUM(
    'MASCULINO',
    'FEMININO',
    'OTHER'
);

-- CreateEnum
CREATE TYPE "employeeMaritalStatus" AS ENUM(
    'SOLTEIRO',
    'CASADO',
    'DIVORCIADO',
    'VIUVO',
    'OUTRO'
);

-- CreateEnum
CREATE TYPE "employeeGraduation" AS ENUM(
    'ENSINO_FUNDAMENTAL',
    'ENSINO_MEDIO',
    'ENSINO_SUPERIOR_CURSANDO',
    'ENSINO_SUPERIOR_COMPLETO',
    'POS_GRADUACAO_CURSANDO',
    'POS_GRADUACAO_COMPLETO',
    'MESTRADO_CURSANDO',
    'MESTRADO_COMPLETO',
    'DOUTORADO_CURSANDO',
    'DOUTORADO_COMPLETO',
    'POS_DOUTORADO_CURSANDO',
    'POS_DOUTORADO_COMPLETO',
    'OUTRO'
);

-- CreateEnum
CREATE TYPE "employeeSkinColor" AS ENUM(
    'BRANCO',
    'NEGRO',
    'AMARELO',
    'PARD0',
    'INDIGENAS',
    'OUTRO'
);

-- AlterTable
ALTER TABLE "employeeData"
DROP COLUMN "employeeNeighborhood",
ADD COLUMN "employeeNeighborhood" TEXT,
ALTER COLUMN "employeeAddressNumber"
SET
    DATA TYPE TEXT,
DROP COLUMN "gender",
ADD COLUMN "gender" "employeeGender",
DROP COLUMN "maritalStatus",
ADD COLUMN "maritalStatus" "employeeMaritalStatus" DEFAULT 'SOLTEIRO',
DROP COLUMN "graduation",
ADD COLUMN "graduation" "employeeGraduation";