import { DataTable } from '@/app/_components/ui/data-table';
import { db } from '@/app/_lib/prisma';
import React from 'react';
import { employeeColumns } from './_column';
import AddNewEmployeeButton from '@/app/_components/AddNewEmployeeButton';

// import { Container } from './styles';

const EmployeesPage: React.FC = async () => {
    const employeesData = await db.employeeData.findMany();
    return (
        <div className="p-6 space-y-6">

            {/* TÍTULO E BOTÃO */}
            <div className="flex w-full justify-between p-6">
                <h1 className="text-2xl font-bold">Transações</h1>
                <AddNewEmployeeButton />
            </div>
            <DataTable columns={employeeColumns} data={employeesData} />

        </div>
    );
}

export default EmployeesPage;