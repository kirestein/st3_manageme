/*
  Warnings:

  - The `jobPosition` column on the `employeeContractData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dependentRelationship` column on the `employeeDependent` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `driversLicenseCategory` column on the `employeeDocumentation` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "driversLicenseCategory" AS ENUM ('A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE');

-- AlterTable
ALTER TABLE "employeeContractData" DROP COLUMN "jobPosition",
ADD COLUMN     "jobPosition" "employeeCargo",
ALTER COLUMN "hasAccumulate" SET DEFAULT false;

-- AlterTable
ALTER TABLE "employeeDependent" DROP COLUMN "dependentRelationship",
ADD COLUMN     "dependentRelationship" "employeeRelationship";

-- AlterTable
ALTER TABLE "employeeDocumentation" DROP COLUMN "driversLicenseCategory",
ADD COLUMN     "driversLicenseCategory" "driversLicenseCategory";
