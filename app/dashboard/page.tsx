import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const Dashboard = async () => {
    const { userId } = await auth()

    if (!userId) {
        redirect('/');
    }

    return (
        <div className="flex flex-col space-y-6">
            <h1 className="text-6xl font-bold mb-4">Dashboard</h1>
            <hr className="" />
            <UserButton showName />
        </div>
    )
}

export default Dashboard