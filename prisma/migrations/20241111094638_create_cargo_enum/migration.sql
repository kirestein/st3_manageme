/*
  Warnings:

  - The `cargo` column on the `department` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "employeeCargo" AS ENUM ('PROFESSOR', 'COORDENADOR', 'DIRETOR', 'SECRETARIA', 'PEDAGOGO', 'AUXILIAR_SERVICOS_GERAIS', 'MOTORISTA', 'MONITOR', 'ESTAGIARIO', 'AUXILIAR_PEDAGOGICO', 'OUTRO');

-- AlterTable
ALTER TABLE "department" DROP COLUMN "cargo",
ADD COLUMN     "cargo" "employeeCargo";
