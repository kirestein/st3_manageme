import React from 'react';

// import { Container } from './styles';

const EmployeePage = ({ param: { id } }: { param: { id: string } }) => {
    return (
        <div className="">
            {id}
        </div>
    );
}

export default EmployeePage;