/*
  Warnings:

  - You are about to drop the column `employeePhoto` on the `employeeContractData` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "employeeContractData" DROP COLUMN "employeePhoto";

-- AlterTable
ALTER TABLE "employeeData" ADD COLUMN     "employeePhoto" BYTEA;
