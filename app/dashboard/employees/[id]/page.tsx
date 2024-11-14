import React from 'react';

const EmployeePage = ({ param: { id } }: { param: { id: string } }) => {
    return (
        <div className="">
            {id}
        </div>
    );
}

export default EmployeePage;