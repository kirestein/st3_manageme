/*
  Warnings:

  - The `skinColor` column on the `employeeData` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterEnum
ALTER TYPE "employeeGender" ADD VALUE 'NO_ONE';

-- AlterTable
ALTER TABLE "employeeData" DROP COLUMN "skinColor",
ADD COLUMN     "skinColor" "employeeSkinColor";
