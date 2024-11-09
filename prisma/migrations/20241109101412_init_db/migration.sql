-- CreateEnum
CREATE TYPE "employeeContractStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "name" TEXT,
    "password" TEXT,
    "image" BYTEA,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "department" (
    "cargoId" TEXT NOT NULL,
    "employeeContractId" TEXT NOT NULL,
    "cargo" TEXT,
    "salario" DECIMAL(10,2),
    "bonusSalario" DECIMAL(10,2),
    "cargaHoraria" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("cargoId")
);

-- CreateTable
CREATE TABLE "employeeContact" (
    "contactId" TEXT NOT NULL,
    "employeeDataId" TEXT NOT NULL,
    "contactName" TEXT,
    "contactPhone" TEXT,
    "contactEmail" TEXT,
    "contactRelationship" TEXT,

    CONSTRAINT "employeeContact_pkey" PRIMARY KEY ("contactId")
);

-- CreateTable
CREATE TABLE "employeeContractData" (
    "contractDataId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "jobPosition" TEXT,
    "jobFunctions" TEXT,
    "admissionDate" DATE,
    "period" TEXT,
    "employeePhoto" BYTEA,
    "contractExpirationDate" DATE,
    "dailyHours" TEXT,
    "weeklyHours" TEXT,
    "monthlyHours" TEXT,
    "weeklyClasses" TEXT,
    "hasAccumulate" BOOLEAN,
    "hasAccumulateCompany" TEXT,
    "salary" DECIMAL(10,2),
    "salaryBank" TEXT,
    "salaryAgency" TEXT,
    "salaryAccount" TEXT,
    "salaryAccountType" TEXT,
    "familySalary" DECIMAL(10,2),
    "parenting" TEXT,
    "IRPF" TEXT,
    "status" "employeeContractStatus" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "employeeContractData_pkey" PRIMARY KEY ("contractDataId")
);

-- CreateTable
CREATE TABLE "employeeData" (
    "employeeDataId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "companyNumber" INTEGER DEFAULT 1077,
    "companyName" TEXT DEFAULT 'Associação Educacional Canadense de São Paulo',
    "fullName" TEXT,
    "email" TEXT,
    "tagName" TEXT,
    "tagLastName" TEXT,
    "birthday" DATE,
    "age" INTEGER,
    "cep" TEXT,
    "employeeAddress" TEXT,
    "employeeAddressNumber" SMALLINT,
    "employeeAeighborhood" TEXT,
    "employeeAddressComplement" TEXT,
    "employeeAddressState" TEXT,
    "employeeAddressCity" TEXT,
    "phone" TEXT,
    "mobile" TEXT,
    "naturalness" TEXT,
    "nationality" TEXT,
    "gender" TEXT,
    "fatherName" TEXT,
    "motherName" TEXT,
    "maritalStatus" SMALLINT,
    "graduation" TEXT,
    "skinColor" TEXT,
    "meal" BOOLEAN,
    "mealValue" DECIMAL(10,2),
    "deficiency" BOOLEAN,
    "deficiencyDescription" TEXT,
    "transport" BOOLEAN,
    "transportValue" DECIMAL(10,2),
    "partnerName" TEXT,
    "partnerCpf" TEXT,
    "partnerBirthday" DATE,
    "partnerRg" TEXT,

    CONSTRAINT "employeeData_pkey" PRIMARY KEY ("employeeDataId")
);

-- CreateTable
CREATE TABLE "employeeDependent" (
    "dependentId" TEXT NOT NULL,
    "employeeDataId" TEXT NOT NULL,
    "dependentName" TEXT,
    "dependentCpf" TEXT,
    "dependentBirthday" DATE,
    "dependentRelationship" TEXT,

    CONSTRAINT "employeeDependent_pkey" PRIMARY KEY ("dependentId")
);

-- CreateTable
CREATE TABLE "employeeDocumentation" (
    "documentationId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "rg" TEXT,
    "rgEmitter" TEXT,
    "rgEmissionDate" DATE,
    "cpf" TEXT,
    "pisPasep" TEXT,
    "voterTitle" TEXT,
    "voterZone" TEXT,
    "voterSection" TEXT,
    "voterEmission" DATE,
    "militaryCertificate" TEXT,
    "ctps" TEXT,
    "ctps_serie" TEXT,
    "driversLicense" BOOLEAN,
    "driversLicenseNumber" TEXT,
    "driversLicenseCategory" TEXT,
    "driversLicenseEmissionDate" DATE,
    "driversLicenseExpirationDate" DATE,
    "healthPlan" TEXT,
    "healthCard_number" TEXT,

    CONSTRAINT "employeeDocumentation_pkey" PRIMARY KEY ("documentationId")
);

-- CreateTable
CREATE TABLE "employeeTraineeData" (
    "traineeId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "collegeCep" TEXT,
    "traineeAddress" TEXT,
    "traineeAddressNumber" SMALLINT,
    "traineeAddressNeighborhood" TEXT,
    "traineeAddressComplement" TEXT,
    "traineeAddressState" TEXT,
    "traineeAddressCity" TEXT,
    "college" TEXT,
    "course" TEXT,
    "trainingPeriod" TEXT,
    "lifInsurancePolicy" TEXT,
    "ra" TEXT,

    CONSTRAINT "employeeTraineeData_pkey" PRIMARY KEY ("traineeId")
);

-- CreateTable
CREATE TABLE "employees" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forms" (
    "parametro_id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" SMALLINT NOT NULL,

    CONSTRAINT "forms_pkey" PRIMARY KEY ("parametro_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "department_employeeContractId_key" ON "department"("employeeContractId");

-- CreateIndex
CREATE INDEX "employeeContact_employeeDataId_fkey" ON "employeeContact"("employeeDataId");

-- CreateIndex
CREATE INDEX "employeeContractData_employeeId_fkey" ON "employeeContractData"("employeeId");

-- CreateIndex
CREATE INDEX "employeeData_employeeId_fkey_2" ON "employeeData"("employeeId");

-- CreateIndex
CREATE INDEX "employeeDependent_employeeDataId_fkey" ON "employeeDependent"("employeeDataId");

-- CreateIndex
CREATE INDEX "employeeDocumentation_employeeId_fkey" ON "employeeDocumentation"("employeeId");

-- CreateIndex
CREATE INDEX "employeeTraineeData_employeeId_fkey" ON "employeeTraineeData"("employeeId");

-- AddForeignKey
ALTER TABLE "department" ADD CONSTRAINT "department_employeeContractId_fkey" FOREIGN KEY ("employeeContractId") REFERENCES "employeeContractData"("contractDataId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employeeContact" ADD CONSTRAINT "employeeContact_employeeDataId_fkey_1" FOREIGN KEY ("employeeDataId") REFERENCES "employeeData"("employeeDataId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employeeContractData" ADD CONSTRAINT "employeeContractData_employeeId_fkey_2" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employeeData" ADD CONSTRAINT "employeeData_employeeId_fkey_1" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employeeDependent" ADD CONSTRAINT "employeeDependent_employeeDataId_fkey_2" FOREIGN KEY ("employeeDataId") REFERENCES "employeeData"("employeeDataId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employeeDocumentation" ADD CONSTRAINT "employeeDocumentation_employeeId_fkey_2" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employeeTraineeData" ADD CONSTRAINT "employeeTraineeData_employeeId_fkey_2" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;
